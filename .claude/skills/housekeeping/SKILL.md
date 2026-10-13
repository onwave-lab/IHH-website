---
name: housekeeping
description: Run before EVERY commit or push in this repo, at the end of a working session, and whenever Alicia says "housekeeping", "tidy up", "wrap up" or "save my work". Triages iPad/cloud inbox notes, updates memory and the pending-task log, logs the session to Notion, merges finished branches into `drafts-website-edits` (never the live `main`), commits, pushes, and syncs Claude's context to Hayes. Cloud/iPad sessions run a reduced version (bottom section).
---

# Housekeeping: IHH-website (intentionholistichealth.com)

*Merged 2026-10-12 from the original project housekeeping skill and Kyle's
`hayes-agent/context-sync/housekeeping-SKILL.md`. Each of Alicia's 3 repos has its own copy of this skill;
only the "This repo" table and repo-specific checks differ.*

Goal: everything worth keeping is written down, reference material lives in the repo, branches don't
pile up, and what Hayes reads is current and organized.

## This repo

| | |
|---|---|
| Repo | `onwave-lab/IHH-website`: the Intention Holistic Health website (HTML/CSS/JS on Netlify) |
| Home branch | **`drafts-website-edits`**. All work and all housekeeping merges land here. |
| 🔴 `main` | **The live site. Never push or merge to `main` from housekeeping.** Each production deploy costs Netlify credits (15 per deploy); Alicia publishes drafts → `main` herself, in bulk, 1-2x/week. Branch deploys are free. |
| Hayes memory label | `ihh-website` |
| Session notes | Notion Session Notes database (see `CLAUDE.md`). No local session-note files |
| Pending-task log | `docs/pending.md` on `drafts-website-edits` |
| Repo-specific checks | `CLAUDE-REFERENCE.md` (detailed rules) if a process changed; compliance language (`CLAUDE.md` → Compliance) on any new copy; sitemap/SEO notes if pages were added or renamed; `.mcp.json` kept in sync with the other 2 folders if MCP config changed |

## First: Mac or cloud?

Run `echo $CLAUDE_CODE_REMOTE`. If it prints `true` you're in a cloud/iPad session: **skip to "Cloud / iPad
sessions" at the bottom.** Otherwise you're on Alicia's Mac: do every step below, skipping any that has
nothing to do (don't create busywork).

## Steps (Mac)

### 1. Get current
```bash
git fetch --all --prune && git status -sb
```
Note the branch you're on and anything uncommitted. Files Alicia has in progress that aren't part of this
session's work stay out of the commit unless she says otherwise. Ask if unsure.

### 2. Inbox triage (iPad findings)
```bash
bash ~/.ihh-claude-context/mac/inbox-list.sh "$(git rev-parse --show-toplevel)" drafts-website-edits
```
Read each note with `git show <branch>:<path>`. For each, do ONE of: **remember it** (update memory, merge
don't duplicate), **propose a rule change** (show the exact `CLAUDE.md` edit, wait for her yes), **flag a
conflict** ("an iPad session thought X; your rules say Y"), or **drop it**. Record every note in
`claude-inbox/PROCESSED.md` on `drafts-website-edits`: one line, `YYYY-MM-DD | <note filename> | <outcome>`.

### 3. Memory
Save anything durable from this session (decisions, preferences, corrections, new facts about the business)
to this project's memory folder and its `MEMORY.md` index. Update stale entries, merge rather than duplicate.
**Never put a password, key or token in memory**; note *where* a secret lives, never its value. Memory is
synced to Hayes, and the sync refuses to push anything that looks like a secret.

### 3b. Reference material: get it into the repo so Hayes has it
Hayes only sees what's **committed**; it reads the repos, not this Mac. Look for reference material that
matters to the site or brand but exists only locally:
- untracked files in the repo (`git status --short | grep '^??'`)
- things she mentions or uses from outside the repo (Downloads, Desktop, Drive exports): brand guides,
  voice/tone docs, offer sheets, templates, FAQs, approved copy

For each, **ask her**, then add it to the right folder (e.g. `docs/`, `assets/`, `marketing/`) on `drafts-website-edits`. Text and PDF
are best. Ask before adding anything over ~10 MB. **Never add client-specific health information or
anything with a password, key or token.**

### 4. Pending tasks: `docs/pending.md` (`tasks/` is gitignored here)
The persistent to-do list for this repo, read by Hayes and by future sessions on any device. Create it if
missing. Remove what got done, add what's newly pending, keep it short:
```markdown
# Pending: IHH-website
_Last updated: YYYY-MM-DD HH:MM CT by <device>_

## Waiting on Alicia
- [ ] <decision or approval needed> (added YYYY-MM-DD)
## Next up
- [ ] <task> (added YYYY-MM-DD, context: <file or branch>)
## Waiting on someone else
- [ ] <task> (owner: Kyle, added YYYY-MM-DD)
```
No client names or health details in this file.

### 5. Session notes (Notion)
Update today's entry in the Notion Session Notes database exactly as `CLAUDE.md` → "Session Notes" says
(one entry per day, timestamped Completed items, device tracking). If Notion pages changed, update the
"Last Updated" callout. If Notion is unreachable, say so and put the note in the report instead.

### 6. Docs drift
Check whether this session made any of these stale, and fix what's stale:
- `CLAUDE.md`: standing rules. **Propose** changes and wait for her yes before editing.
- `README.md` files and the repo-specific checks in the table above.
- Plans and specs whose status changed (approved → done).
- If you're about to commit while not on `drafts-website-edits`, stop and check with Alicia.

### 7. Safety check before committing
- **No secrets** in staged files: `git diff --cached | grep -niE 'sk-|ghp_|github_pat_|api[_-]?key|password|secret|token'`
  and look at any hit.
- 🔴 **No client-specific clinical content on any branch**: a real person's care plan, labs, or anything
  identifying a client. This repo builds a public website and is read by Hayes, whose machine is not
  cleared for health data. Generic, educational content is fine.
- Flag large new binaries (over ~10 MB) before committing them.

### 8. Branches: merge finished work into `drafts-website-edits`
```bash
git for-each-ref --sort=-committerdate --format='%(refname:short)  %(committerdate:relative)  %(authorname)' refs/remotes/origin
```
For each branch other than `main` and `drafts-website-edits`:
- **Stale** = no commits for 7+ days, or the work is done. Show her one line per branch
  (`git log --oneline origin/drafts-website-edits..<branch>` plus files changed) and **merge only with her yes.** If
  she says it's abandoned, delete it instead, also with her yes.
- Merge into `drafts-website-edits` with `git merge --no-ff origin/<branch>`, and note the pre-merge hash in the report
  so it can be rolled back. Then delete the branch: `git push origin --delete <branch>` and the local copy.
- 🔴 **Never merge into, push to, or delete `main`.** If a finished branch was cut from `main`, it still
  merges into `drafts-website-edits`. Publishing is not housekeeping.
- Resolve conflicts with her, never by silently picking a side.

### 9. Commit and push
1. Mark housekeeping done (the commit/push guard hook checks this, valid 30 minutes):
   `mkdir -p ~/.claude/housekeeping-stamps && touch ~/.claude/housekeeping-stamps/ihh-website`
2. Stage this session's work plus the housekeeping files (pending log, `PROCESSED.md`, docs).
3. Commit with a message that says what changed (`docs: session housekeeping YYYY-MM-DD` if it's only
   housekeeping). Push. Confirm `git status -sb` shows no "ahead".

### 10. Sync context to Hayes
```bash
bash ~/.ihh-claude-context/mac/push.sh
```
Expect `pushed: <hash>` or `no changes`. On `possible secret, nothing pushed: <file>`, remove the secret from
that memory file and rerun. Never weaken the scan. On `git pull/push failed`, report it to Alicia (Kyle owns
the repo). The hourly LaunchAgent does this too; running it here makes Hayes current immediately.

### 11. One-line report
Tell Alicia: what was remembered, what reference material was added, what's newly pending, what was merged or deleted (with rollback hash),
the push and sync results, and what's waiting on her.

## Cloud / iPad sessions (`CLAUDE_CODE_REMOTE=true`)

You have no access to Alicia's memory, global rules, Notion session log or other branches, and your own
memory is lost when the session ends. Your housekeeping is:

1. **Write ONE inbox note** if anything durable happened (a preference, a decision, a correction, a new fact,
   something that went wrong): `claude-inbox/YYYY-MM-DD-HHMM-<short-topic>.md`, format in `CLAUDE.md` →
   "If you are running on the iPad / Claude Code on the web". Put pending tasks under "Open questions".
   Skip the note if nothing durable happened.
2. **Don't edit `CLAUDE.md`, this skill, or `docs/pending.md`.** Propose changes in the note; the Mac
   reconciles them.
3. Never put client health details or any password, key or token in a note.
4. Commit the note together with your work **on this session's branch** and push. **Don't merge into
   `drafts-website-edits` or `main`** from the cloud; the Mac does that with Alicia.
