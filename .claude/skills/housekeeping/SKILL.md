---
name: housekeeping
description: Pre-push documentation sweep — updates session notes, memory, workflow registry, and other project docs before committing and pushing
---

# Housekeeping

Run this before pushing to ensure all project documentation is current. Work through each section, updating what's stale and skipping what's already current.

## Checklist

1. **Session notes** (`session-notes/YYYY-MM-DD.md`)
   - Create or update today's entry with timestamped completed items
   - Update pending items (remove done, add new)
   - Add any relevant notes for future sessions

2. **Memory** (`~/.claude/projects/<project>/memory/`)
   - Save any new feedback, project decisions, or reference info learned this session
   - Update stale memories (outdated facts, completed projects)
   - Update `MEMORY.md` index if new files were added

3. **Workflow registry** (`docs/n8n-workflow-registry.md`) — if any n8n workflows were created, updated, archived, or renamed this session

4. **Design specs** — if any spec status changed (approved → implemented, new specs written)

5. **CLAUDE.md** — if any project-level instructions need updating (new standards, new clients, changed processes)

6. **Next session tasks** (memory: `project-next-session-tasks.md`) — update with new pending work, remove completed items

7. **Commit and push** — automatic, no confirmation needed
   - Determine the target branch:
     - If a staging branch exists (e.g., `drafts`, `staging`, `dev`), push there
     - If only `main`/`master` exists, push to that
     - If unsure which branch is intended, verify with the user **before** pushing
   - Stage documentation files changed this session (session notes, docs/, registry, memory, n8n-workflows/, CLAUDE.md)
   - Also stage any code or config changes made during the session — housekeeping commits everything, not just docs
   - Commit with message: `docs: session housekeeping YYYY-MM-DD`
   - Push to remote automatically

## Behavior

- Skip sections that have no updates needed — don't create busywork
- Ask the user if anything notable happened this session that should be captured (decisions, gotchas, new patterns)
- If unsure whether something is worth saving to memory, ask
- Keep session notes concise — timestamps + one-line descriptions
- Don't duplicate information across memory and session notes (memory = durable cross-session knowledge, session notes = chronological log)
- Commit and push is automatic — do not ask the user for confirmation. The act of invoking /housekeeping is the confirmation.
