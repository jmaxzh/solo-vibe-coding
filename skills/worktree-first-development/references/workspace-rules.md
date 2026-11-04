# Workspace strategy template

Replace `{{PARAMETER}}` values, omit the fence and this guidance, and adapt the scope wording to the selected level. Retain `<unique-id>`, requiring a new, non-colliding directory per task or backup.

```markdown
## Worktree-first development strategy

Applies only to `{{MAIN_WORKSPACE}}`, its registered Git worktrees, and verified task copies under `{{WORKTREE_ROOT}}`. Establish project membership from worktree relationships or copy provenance, not matching names, remote URLs, or parent paths; clarify uncertain membership before applying these rules.

- Main workspace: `{{MAIN_WORKSPACE}}`; remote: `{{REMOTE}}`; baseline: `{{BASE_BRANCH}}`. All relative storage paths resolve from the main workspace.
- Before each task, check main-workspace Git status and worktrees, fetch the remote baseline, and synchronize to a clean `{{BASE_BRANCH}}` with HEAD equal to the exact `{{REMOTE}}/{{BASE_BRANCH}}` commit fetched for this task. Fast-forward a behind-only branch. Verify the backup below before overwriting local changes or local-only commits. Stop project modifications if fetching, synchronization, or backup verification fails.
- Cleanliness ignores only untracked runtime data in root `.cc-connect/`; if nothing else is changed or untracked, the main workspace is clean. Preserve this directory and its contents: do not automatically delete, move, or commit them. Tracked changes, other paths, and HEAD synchronization requirements still count.
- Use the main workspace only for reading, synchronization, and necessary recovery. Develop, test, and commit in a separate worktree or copy per task, created at that task's verified remote commit under `{{WORKTREE_ROOT}}/<unique-id>/`.
- Occupancy requires evidence of another task modifying the main workspace, or another worktree holding `{{BASE_BRANCH}}` and blocking synchronization. If confirmed, stop operations and report evidence. Session working directories, idle processes, and read-only access do not establish occupancy.
- Before overwriting original state, back up all working files (including ignored files), index, HEAD/refs, and complete Git metadata to `{{BACKUP_ROOT}}/<unique-id>/`. Follow Git-directory pointers to include required shared metadata and external objects. Record source path, commit, time, and task. Verify file inventory, content hashes, and commit recoverability without live-source dependencies. Diffs, stashes, or `.git` pointers are insufficient; do not automatically delete backups.
- Before removing a temporary task directory, check uncommitted changes, commits unmerged into the latest fetched `{{REMOTE}}/{{BASE_BRANCH}}`, and task dependencies. Delete only if nothing needs preservation and no other task is affected; retain when the current baseline or these checks cannot be established. Never delete the main workspace or a nested repository of unknown ownership.
```
