# Claude usage sync — required script update (Handoff for Alicia's Mac)

**Written 2026-07-31 by Kyle's Claude session. Intended reader: Claude Code on Alicia's machine.**

**TL;DR —** `sync-claude-usage.py` will fail on its next run with a PostgREST `42P10` error until it is
updated. The same break already hit Kyle's machine and is fixed there.

**This directory is self-contained.** The **fully fixed script is sitting right here** as
`sync-claude-usage.py` — pull IHH `main` and copy it over the local copy. No other repo is needed. The
edit-by-hand instructions further down are only a fallback, and a record of what actually changed.

> ⚠️ `internal/` is excluded from the Netlify deploy (`netlify.toml` 404s `/internal/*`, and
> `.netlifyignore` lists it). The IHH site publishes the whole repo root, so **do not move these files
> up to the root** — they would be served on the live marketing site.

---

## What broke, and why it isn't obvious

On **2026-07-29** the OnWave Lab app split "who paid" from "who incurred" AI spend
(commit `f1f5193`). A new column `tenant_org_id` was added to `platform_token_usage` **and to the
table's natural-key unique index**, which is now:

```
uq_platform_usage_natural_key (source_type, source_device, owner, provider, model,
                               project, date, session_id, workflow_id, tenant_org_id)
                               NULLS NOT DISTINCT
```

The sync script upserts through PostgREST with an explicit `on_conflict=` list naming the **old nine**
columns. Postgres requires an `ON CONFLICT` target to match a real unique index **exactly**, so every
batch now dies with:

```
42P10: there is no unique or exclusion constraint matching the ON CONFLICT specification
```

⚠️ **It fails quietly.** The script prints the per-batch error, then `Uploaded 0 records to Supabase.`,
then **exits 0**. On Kyle's box that meant two days of usage silently never reaching Supabase while
every run looked like a success. Do not trust the exit code on the old version.

---

## Step 1 — Replace the local copy (the whole fix, in one command)

The corrected script is in this directory. Find wherever the Mac's copy lives — canonically
`OnWave-Lab/tools/sync-claude-usage.py`, but it may have been hand-placed:

```bash
# from the IHH repo root, after `git pull origin main`
find ~ -name "sync-claude-usage.py" -not -path "*/Intention-Holistic-Health-website/*" 2>/dev/null
```

Back up whatever is there, then copy this one over it:

```bash
cp path/to/sync-claude-usage.py path/to/sync-claude-usage.py.bak-$(date +%F)
cp internal/claude-usage-sync/sync-claude-usage.py path/to/sync-claude-usage.py
```

Already fixed? This tells you without diffing — any output means the fix is present, so **skip to
Step 3**:

```bash
grep -n "TENANT_ORG_ID" path/to/sync-claude-usage.py
```

Nothing about the Mac's setup needs to change: `SOURCE_DEVICE` still reads `CLAUDE_DEVICE_NAME` (so
`alicia-macbook` keeps working, or pass `--device alicia-macbook`), and the new `TENANT_ORG_ID` has a
correct built-in default, so **no new environment variable is required**.

**Step 2 is only needed if copying the file isn't possible** — it documents the same change as three
hand edits.

---

## Step 2 — The three edits (fallback only — skip if Step 1 worked)

### 2a. Add the constant, just below `OWNER`

Find:

```python
SOURCE_DEVICE = os.environ.get("CLAUDE_DEVICE_NAME", "kyle-wsl")
OWNER = os.environ.get("CLAUDE_USAGE_OWNER", "onwave-lab")
```

Add immediately after it:

```python
TENANT_ORG_ID = os.environ.get("CLAUDE_USAGE_TENANT_ORG_ID", "fb6b6045-f489-433f-96e1-9ab319d1647d")
```

🔴 **That UUID is OnWave Lab's org id and must not be changed.** All 1,121 pre-existing `local` rows
(both `kyle-wsl` and `alicia-macbook`) were backfilled to it. If the script sends `NULL` instead, the
upsert **succeeds** and silently re-inserts the entire history as duplicate rows — `NULLS NOT
DISTINCT` makes two NULLs equal to each other, it does **not** make NULL equal to a UUID.

`SOURCE_DEVICE` should still resolve to `alicia-macbook` on her machine (via the `CLAUDE_DEVICE_NAME`
env var, or `--device alicia-macbook` on the command line). `OWNER` stays `onwave-lab` — that field is
the payer, not the person.

### 2b. Add `tenant_org_id` to each row being built

In the `rows.append({...})` block, find:

```python
            "source_type": "local",
            "source_device": SOURCE_DEVICE,
            "owner": OWNER,
            "provider": "anthropic",
```

and insert one line:

```python
            "source_type": "local",
            "source_device": SOURCE_DEVICE,
            "owner": OWNER,
            "tenant_org_id": TENANT_ORG_ID,
            "provider": "anthropic",
```

### 2c. Add `tenant_org_id` to the `on_conflict` list

In `upsert_to_supabase()`, find:

```python
    params = {
        "on_conflict": "source_type,source_device,owner,provider,model,project,date,session_id,workflow_id",
    }
```

and append `,tenant_org_id`:

```python
    params = {
        "on_conflict": "source_type,source_device,owner,provider,model,project,date,session_id,workflow_id,tenant_org_id",
    }
```

### 2d. (Recommended) Make failure loud

The version on Kyle's machine also now exits non-zero when it had rows and uploaded fewer, so this
class of breakage can never look healthy again. If pulling the fixed file, this comes for free. By
hand, in `main()`:

```python
    if all_rows:
        uploaded = upsert_to_supabase(all_rows)
        print(f"Uploaded {uploaded} records to Supabase.")
        if uploaded < len(all_rows):
            print(f"FAILED: {len(all_rows) - uploaded} of {len(all_rows)} records did not upload.")
            return 1
    else:
        print("No new records to upload.")
    return 0
```

…with `import sys` at the top and `sys.exit(main() or 0)` in the `__main__` block.

---

## Step 3 — Verify

```bash
# 1. Reads only — proves pricing + the incremental check still work. Does NOT test the write path.
python3 sync-claude-usage.py --dry-run --days 3

# 2. The real thing. This is the only test that proves the fix.
python3 sync-claude-usage.py --days 3
echo "exit=$?"
```

Expect `Uploaded N records to Supabase.` with **no** `42P10` line and `exit=0`.

Run it a second time — it is idempotent, so re-running must not create duplicates. Confirm in Supabase:

```sql
select source_device, count(*) as rows,
       count(distinct (source_type,source_device,owner,provider,model,project,
                       date,session_id,workflow_id,tenant_org_id)) as distinct_keys,
       max(date) as last_date, max(synced_at) as last_sync
from platform_token_usage
where source_type = 'local'
group by 1;
```

`rows` must equal `distinct_keys` for `alicia-macbook`. Before this handoff it was **142 / 142**, last
sync **2026-06-18**. If `rows > distinct_keys`, stop — duplicates were created, which means
`tenant_org_id` was sent as NULL or with the wrong value.

---

## Separate question worth answering

Alicia's last successful sync was **2026-06-18** — roughly six weeks *before* the `42P10` break on
07-29. So this bug is **not** why her sync has been silent; it is only why the *next* run would fail.
Something stopped it back in June, or it simply hasn't been run since. Worth checking whether it's
scheduled on that machine at all (cron / launchd / manual), because fixing the script does not restart
a job that isn't running.

---

## Do not

- **Do not change the `TENANT_ORG_ID` value** — see the warning in 2a.
- **Do not "fix" this server-side** by adding a second unique index on the old nine columns. It would
  paper over a client that is simply out of date, and would let two different natural keys coexist.
- **Do not treat a `--dry-run` pass as proof.** Dry run does not write, so it cannot detect this class
  of failure. Only a real run does.
- **Do not commit the script's Supabase key anywhere new.** It is the public anon key and is already
  embedded in the script; it does not belong in this repo or any other.
