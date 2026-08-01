#!/usr/bin/env python3
"""
Sync Claude Code local usage data to Supabase platform_token_usage table.

Parses all session .jsonl files from ~/.claude/projects/, aggregates token
usage by date + project + model + session, and upserts to Supabase.

Cost estimation uses time-sensitive pricing from the model_pricing table —
each usage record is costed at the rate effective on its date.

By default, runs in incremental mode: queries Supabase for existing records
and only uploads new ones. Use --force to re-upload everything.

Usage:
  python3 tools/sync-claude-usage.py                    # incremental sync
  python3 tools/sync-claude-usage.py --force             # re-sync everything
  python3 tools/sync-claude-usage.py --project OnWave-Lab  # single project

Designed to be run:
  - Manually from CLI
  - Automatically via global git pre-push hook (~/.git-hooks/pre-push)
"""

import os
import sys
import json
import glob
import argparse
import requests
from datetime import datetime, timedelta, timezone
from collections import defaultdict

# --- Configuration ---
SUPABASE_URL = "https://vojiwcjyrmiyzzogszvd.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvaml3Y2p5cm1peXp6b2dzenZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMzUyOTQsImV4cCI6MjA3NzkxMTI5NH0.EOrywrXz29Pphm2srnvJ3anW8yQ4z45x4AuSY98woUY"
SOURCE_DEVICE = os.environ.get("CLAUDE_DEVICE_NAME", "kyle-wsl")
OWNER = os.environ.get("CLAUDE_USAGE_OWNER", "onwave-lab")

# The org that INCURRED this usage. Added 2026-07-31.
#
# On 2026-07-29 the app split payer from incurrer (commit f1f5193): `owner` stayed the payer and a
# new `tenant_org_id` column recorded who actually spent it. That column JOINED the natural-key
# unique index (`uq_platform_usage_natural_key`, now 10 columns, NULLS NOT DISTINCT) — and this
# script's on_conflict list still named the old 9, so every upsert died with
#   42P10: there is no unique or exclusion constraint matching the ON CONFLICT specification
# and the sync stopped dead. It failed LOUDLY per batch but the script still exited 0 and printed
# "Uploaded 0 records", so nothing alerted: last successful sync was 2026-07-29 16:21 UTC, ~5 hours
# after the migration landed.
#
# All 1,121 pre-existing local rows (kyle-wsl + alicia-macbook) were backfilled to OnWave Lab's id,
# so this MUST match or every historical row would be re-inserted as a duplicate rather than
# updated — NULL and a uuid are still distinct under NULLS NOT DISTINCT.
TENANT_ORG_ID = os.environ.get("CLAUDE_USAGE_TENANT_ORG_ID", "fb6b6045-f489-433f-96e1-9ab319d1647d")
CLAUDE_DIR = os.path.expanduser("~/.claude/projects")

# Fallback pricing — used only if the Supabase model_pricing table is unreachable.
# Cache create rate is the 5-minute rate (1h rate ~2x). Verified against
# https://platform.claude.com/docs/en/docs/about-claude/pricing on 2026-05-13.
FALLBACK_PRICING = {
    "claude-opus-4-8": {"input": 5.0, "output": 25.0, "cache_read": 0.5, "cache_create": 6.25},
    "claude-opus-4-7": {"input": 5.0, "output": 25.0, "cache_read": 0.5, "cache_create": 6.25},
    "claude-opus-4-6": {"input": 5.0, "output": 25.0, "cache_read": 0.5, "cache_create": 6.25},
    "claude-opus-4-5-20251101": {"input": 5.0, "output": 25.0, "cache_read": 0.5, "cache_create": 6.25},
    "claude-sonnet-4-6": {"input": 3.0, "output": 15.0, "cache_read": 0.3, "cache_create": 3.75},
    "claude-haiku-4-5-20251001": {"input": 1.0, "output": 5.0, "cache_read": 0.1, "cache_create": 1.25},
}


def load_pricing_from_supabase():
    """Load all pricing rows from model_pricing, sorted by effective_from.

    Returns a list of dicts sorted by (model, effective_from) so we can
    binary-search for the right price at any given date.
    """
    url = f"{SUPABASE_URL}/rest/v1/model_pricing"
    headers = {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
    }
    params = {"select": "model,input_cost_per_million,output_cost_per_million,cache_read_cost_per_million,cache_creation_cost_per_million,effective_from",
              "order": "model,effective_from"}
    try:
        resp = requests.get(url, headers=headers, params=params, timeout=10)
        if resp.status_code == 200:
            rows = resp.json()
            pricing = defaultdict(list)
            for r in rows:
                pricing[r["model"]].append({
                    "effective_from": r["effective_from"],
                    "input": float(r["input_cost_per_million"]),
                    "output": float(r["output_cost_per_million"]),
                    "cache_read": float(r.get("cache_read_cost_per_million") or 0),
                    "cache_create": float(r.get("cache_creation_cost_per_million") or 0),
                })
            print(f"Loaded pricing from Supabase: {len(rows)} rows, {len(pricing)} models")
            return dict(pricing)
    except Exception as e:
        print(f"Warning: Could not load pricing from Supabase: {e}")
    return None


def load_existing_keys():
    """Load natural keys of existing records from Supabase.

    Returns a set of tuples (source_type, source_device, owner, provider,
    model, project, date, session_id, workflow_id) for all records matching
    the current OWNER and SOURCE_DEVICE. Returns None on failure.
    """
    url = f"{SUPABASE_URL}/rest/v1/platform_token_usage"
    headers = {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
    }
    # Exclude today's records so active sessions always get re-synced
    today = datetime.now(tz=timezone.utc).strftime("%Y-%m-%d")
    params = {
        "select": "source_type,source_device,owner,provider,model,project,date,session_id,workflow_id",
        "owner": f"eq.{OWNER}",
        "source_device": f"eq.{SOURCE_DEVICE}",
        "date": f"neq.{today}",
        "limit": 10000,
    }
    try:
        resp = requests.get(url, headers=headers, params=params, timeout=10)
        if resp.status_code == 200:
            rows = resp.json()
            keys = set()
            for r in rows:
                keys.add((
                    r["source_type"], r["source_device"], r["owner"],
                    r["provider"], r["model"], r["project"],
                    r["date"], r["session_id"], r["workflow_id"],
                ))
            print(f"Loaded {len(keys)} existing records from Supabase (excluding today for re-sync)")
            return keys
    except Exception as e:
        print(f"Warning: Could not load existing keys: {e}")
    return None


def get_pricing_for_date(pricing_table, model, usage_date):
    """Find the pricing effective on a given date for a model.

    Walks the pricing entries for the model and returns the one with
    the latest effective_from that is <= usage_date.
    Falls back to FALLBACK_PRICING if no match.
    """
    if pricing_table and model in pricing_table:
        entries = pricing_table[model]
        best = None
        for entry in entries:
            if entry["effective_from"] <= usage_date:
                best = entry
            else:
                break  # entries are sorted, so we can stop
        if best:
            return best

    # Fallback to hardcoded
    fb = FALLBACK_PRICING.get(model)
    if fb:
        return fb
    return None


def extract_project_name(dir_name: str) -> str:
    """Convert '-home-trymebroh-OnWave-Lab' -> 'OnWave-Lab'"""
    parts = dir_name.split("-")
    try:
        home_idx = parts.index("home")
        project_parts = parts[home_idx + 2:]
        if not project_parts:
            return dir_name
        return "-".join(project_parts)
    except (ValueError, IndexError):
        return dir_name


def estimate_cost(pricing_table, model, usage_date, input_t, output_t, cache_read, cache_create):
    """Returns (cost, pricing_dict) so rates can be stored alongside the record."""
    pricing = get_pricing_for_date(pricing_table, model, usage_date)
    if not pricing:
        return 0.0, None
    cost = (
        (input_t / 1_000_000) * pricing["input"]
        + (output_t / 1_000_000) * pricing["output"]
        + (cache_read / 1_000_000) * pricing["cache_read"]
        + (cache_create / 1_000_000) * pricing["cache_create"]
    )
    return round(cost, 4), pricing


def row_key(row):
    """Extract the natural key tuple from a row dict."""
    return (
        row["source_type"], row["source_device"], row["owner"],
        row["provider"], row["model"], row["project"],
        row["date"], row["session_id"], row["workflow_id"],
    )


def parse_session_file(filepath, project, pricing_table, cutoff_date=None):
    """Parse a single .jsonl session file and return aggregated usage records."""
    session_id = os.path.basename(filepath).replace(".jsonl", "")
    records = defaultdict(lambda: {
        "input_tokens": 0,
        "output_tokens": 0,
        "cache_read_tokens": 0,
        "cache_creation_tokens": 0,
        "message_count": 0,
        "tool_call_count": 0,
    })

    try:
        with open(filepath, "r") as f:
            for line in f:
                try:
                    data = json.loads(line)
                except json.JSONDecodeError:
                    continue

                msg = data.get("message", {})
                timestamp = data.get("timestamp")
                usage = msg.get("usage", {})

                if not usage or "input_tokens" not in usage:
                    if msg.get("role") == "assistant":
                        content = msg.get("content", [])
                        if isinstance(content, list):
                            for block in content:
                                if isinstance(block, dict) and block.get("type") == "tool_use":
                                    if timestamp:
                                        dt = datetime.fromtimestamp(timestamp / 1000) if isinstance(timestamp, (int, float)) else datetime.fromisoformat(timestamp.replace("Z", "+00:00"))
                                        date_str = dt.strftime("%Y-%m-%d")
                                        model = msg.get("model", "unknown")
                                        key = (date_str, model)
                                        records[key]["tool_call_count"] += 1
                    continue

                if timestamp:
                    if isinstance(timestamp, (int, float)):
                        dt = datetime.fromtimestamp(timestamp / 1000)
                    else:
                        dt = datetime.fromisoformat(str(timestamp).replace("Z", "+00:00"))
                    date_str = dt.strftime("%Y-%m-%d")
                else:
                    continue

                if cutoff_date and date_str < cutoff_date:
                    continue

                model = msg.get("model", "unknown")
                key = (date_str, model)

                records[key]["input_tokens"] += usage.get("input_tokens", 0)
                records[key]["output_tokens"] += usage.get("output_tokens", 0)
                records[key]["cache_read_tokens"] += usage.get("cache_read_input_tokens", 0)
                records[key]["cache_creation_tokens"] += usage.get("cache_creation_input_tokens", 0)
                records[key]["message_count"] += 1

    except Exception as e:
        print(f"  Error parsing {filepath}: {e}")
        return []

    rows = []
    for (date_str, model), counts in records.items():
        if counts["message_count"] == 0 and counts["tool_call_count"] == 0:
            continue
        rows.append({
            "source_type": "local",
            "source_device": SOURCE_DEVICE,
            "owner": OWNER,
            "tenant_org_id": TENANT_ORG_ID,
            "provider": "anthropic",
            "model": model,
            "project": project,
            "session_id": session_id,
            "date": date_str,
            "input_tokens": counts["input_tokens"],
            "output_tokens": counts["output_tokens"],
            "cache_read_tokens": counts["cache_read_tokens"],
            "cache_creation_tokens": counts["cache_creation_tokens"],
            "message_count": counts["message_count"],
            "tool_call_count": counts["tool_call_count"],
            "workflow_id": "",
        })
        cost, rates = estimate_cost(
            pricing_table,
            model,
            date_str,
            counts["input_tokens"],
            counts["output_tokens"],
            counts["cache_read_tokens"],
            counts["cache_creation_tokens"],
        )
        rows[-1]["estimated_cost_usd"] = cost
        rows[-1]["input_cost_per_million"] = rates["input"] if rates else None
        rows[-1]["output_cost_per_million"] = rates["output"] if rates else None
        rows[-1]["cache_read_cost_per_million"] = rates["cache_read"] if rates else None
        rows[-1]["cache_creation_cost_per_million"] = rates["cache_create"] if rates else None
        rows[-1]["synced_at"] = datetime.now(tz=timezone.utc).isoformat()
    return rows


def upsert_to_supabase(rows: list):
    """Upsert rows to Supabase platform_token_usage table."""
    if not rows:
        return 0

    url = f"{SUPABASE_URL}/rest/v1/platform_token_usage"
    headers = {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates",
    }
    # Must list EVERY column of uq_platform_usage_natural_key, in any order but with none missing —
    # PostgREST passes this straight to ON CONFLICT, which requires an exact column match against a
    # real unique index. tenant_org_id joined that index on 2026-07-29; see TENANT_ORG_ID above.
    params = {
        "on_conflict": "source_type,source_device,owner,provider,model,project,date,session_id,workflow_id,tenant_org_id",
    }

    total = 0
    for i in range(0, len(rows), 100):
        batch = rows[i : i + 100]
        resp = requests.post(url, headers=headers, params=params, json=batch)
        if resp.status_code in (200, 201):
            total += len(batch)
        else:
            print(f"  Error upserting batch {i//100 + 1}: {resp.status_code} {resp.text[:200]}")

    return total


def main():
    parser = argparse.ArgumentParser(description="Sync Claude Code usage to Supabase")
    parser.add_argument("--days", type=int, help="Only parse last N days of local data")
    parser.add_argument("--project", type=str, help="Only sync a specific project")
    parser.add_argument("--dry-run", action="store_true", help="Parse and print without uploading")
    parser.add_argument("--force", action="store_true", help="Re-upload all records (skip incremental check)")
    parser.add_argument("--device", type=str, help="Override device name")
    parser.add_argument("--owner", type=str, help="Override owner name")
    args = parser.parse_args()

    global SOURCE_DEVICE, OWNER
    if args.device:
        SOURCE_DEVICE = args.device
    if args.owner:
        OWNER = args.owner

    cutoff_date = None
    if args.days:
        cutoff_date = (datetime.now(tz=timezone.utc) - timedelta(days=args.days)).strftime("%Y-%m-%d")
        print(f"Syncing usage since {cutoff_date}")

    # Load time-sensitive pricing from Supabase
    pricing_table = load_pricing_from_supabase()

    # Load existing keys for incremental mode
    existing_keys = None
    if not args.force:
        existing_keys = load_existing_keys()

    all_rows = []

    for proj_dir in sorted(os.listdir(CLAUDE_DIR)):
        project = extract_project_name(proj_dir)

        if args.project and project != args.project:
            continue

        jsonl_files = glob.glob(os.path.join(CLAUDE_DIR, proj_dir, "*.jsonl"))
        if not jsonl_files:
            continue

        print(f"\n{project}: {len(jsonl_files)} sessions")

        for filepath in jsonl_files:
            rows = parse_session_file(filepath, project, pricing_table, cutoff_date)
            if rows:
                all_rows.extend(rows)
                session_id = os.path.basename(filepath).replace(".jsonl", "")[:8]
                total_out = sum(r["output_tokens"] for r in rows)
                print(f"  {session_id}... {len(rows)} records, {total_out:,} output tokens")

    print(f"\n--- Total parsed: {len(all_rows)} records ---")

    # Filter to only new records in incremental mode
    if existing_keys is not None:
        before = len(all_rows)
        all_rows = [r for r in all_rows if row_key(r) not in existing_keys]
        skipped = before - len(all_rows)
        print(f"Incremental: {skipped} already synced, {len(all_rows)} new")

    if args.dry_run:
        total_input = sum(r["input_tokens"] for r in all_rows)
        total_output = sum(r["output_tokens"] for r in all_rows)
        total_cost = sum(r["estimated_cost_usd"] for r in all_rows)
        print(f"Input tokens:  {total_input:,}")
        print(f"Output tokens: {total_output:,}")
        print(f"Est. cost:     ${total_cost:,.2f}")
        print("\nDry run — nothing uploaded.")
        return

    if all_rows:
        uploaded = upsert_to_supabase(all_rows)
        print(f"Uploaded {uploaded} records to Supabase.")
        # Exit non-zero when we had rows to send and sent none. Without this the 42P10 breakage of
        # 2026-07-29 printed a per-batch error, then "Uploaded 0 records", then exited 0 — so a
        # scheduled run looked healthy for two days while nothing reached Supabase. A partial
        # upload is also a failure: batches are independent, so 0 < uploaded < len is real loss.
        if uploaded < len(all_rows):
            print(f"FAILED: {len(all_rows) - uploaded} of {len(all_rows)} records did not upload.")
            return 1
    else:
        print("No new records to upload.")
    return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
