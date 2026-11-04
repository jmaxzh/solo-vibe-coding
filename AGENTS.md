# Skill maintenance rules

- When designing, writing, modifying, or reviewing this project's skills and related documentation, read and follow the [Instruction and Documentation Design Principles](skills/sdlc-instr-doc-design/SKILL.md).

## Runtime integrations

- For this project's Feishu resource operations or app identity and authorization troubleshooting, use `lark-cli --profile my-dev-skills`. A request arriving through Feishu alone does not require CLI use.

## Language and sources

- `skills/` contains the only installable skill edition: English. English files define behavior and constraints. Do not add runtime language selection or translated `SKILL.md` discovery entries.
- Maintain `README.zh-CN.md` and `translations/zh-CN/` as Chinese developer translations only. Each translation must identify its English source. Use `SKILL.zh-CN.md` and `AGENTS.zh-CN.md` for translated entry documents.
- Update corresponding translations in the same change as English rules, conditions, examples, or references. Settle Chinese proposals in the English source first, then synchronize the translation; resolve discrepancies against English. Preserve identifiers, commands, configuration keys, and protocol names.
- Keep runtime scripts and their tests only in the owning English skill directory. Translate documentation, not executable code. This policy does not prescribe the language of user conversations or script output.

## Skill composition and distribution

- Maintain document and instruction design rules only in `sdlc-instr-doc-design`. Workflow document tasks resolve that installed skill through the runtime's actual skill name and namespace. Preserve section-only reuse for operational and troubleshooting guidance.
- If required dependency resources are unavailable, report the missing dependency and pause only dependent work. Do not silently bypass rules or automatically install skills.
- Recommend the five-skill suite. The supported minimum workflow combination includes `sdlc-workflow` and `sdlc-instr-doc-design`. Do not promise that installing only the workflow provides all document rules.
- Do not create shared-rule directories, generated rule copies, or a custom dependency installer. Plugin manifests are maintained directly and checked for identity/version/license consistency.
- Keep MIT notices in each skill for individual installation. Update fixed license copies together with the root license when necessary.
- Run `python3 -B scripts/validate.py`, distribution tests, and the existing CC Connect tests before delivery. Validate native manifests and installed inventories when the CLIs are available. Distinguish static checks, real local loading, model behavior, and target-machine deployment.
- Never infer permission to push, upload, submit for review, or publish from permission to prepare local changes or release packages.

## Worktree-first development strategy

Applies only to `/Users/zhangjin/rich-workspace/my-dev-skills`, its registered Git worktrees, and verified task copies under `../my-dev-skills-worktrees`. Establish project membership from worktree relationships or copy provenance, not matching names, remote URLs, or parent paths; clarify uncertain membership before applying these rules.

- Main workspace: `/Users/zhangjin/rich-workspace/my-dev-skills`; remote: `origin`; baseline: `main`. All relative storage paths resolve from the main workspace. Use a new, non-colliding `<unique-id>` for each task or backup.
- Before each task, check main-workspace Git status and worktrees, fetch the remote baseline, and synchronize to a clean `main` with HEAD equal to the exact `origin/main` commit fetched for this task. Fast-forward a behind-only branch. Verify the backup below before overwriting local changes or local-only commits. Stop project modifications if fetching, synchronization, or backup verification fails.
- Cleanliness ignores only untracked runtime data in root `.cc-connect/`; if nothing else is changed or untracked, the main workspace is clean. Preserve this directory and its contents: do not automatically delete, move, or commit them. Tracked changes, other paths, and HEAD synchronization requirements still count.
- Use the main workspace only for reading, synchronization, and necessary recovery. Develop, test, and commit in a separate worktree or copy per task, created at that task's verified remote commit under `../my-dev-skills-worktrees/<unique-id>/`.
- Occupancy requires evidence of another task modifying the main workspace, or another worktree holding `main` and blocking synchronization. If confirmed, stop operations and report evidence. Session working directories, idle processes, and read-only access do not establish occupancy.
- Before overwriting original state, back up all working files (including ignored files), index, HEAD/refs, and complete Git metadata to `../my-dev-skills-backups/<unique-id>/`. Follow Git-directory pointers to include required shared metadata and external objects. Record source path, commit, time, and task. Verify file inventory, content hashes, and commit recoverability without live-source dependencies. Diffs, stashes, or `.git` pointers are insufficient; do not automatically delete backups.
- Before removing a temporary task directory, check uncommitted changes, commits unmerged into the latest fetched `origin/main`, and task dependencies. Delete only if nothing needs preservation and no other task is affected; retain when the current baseline or these checks cannot be established. Never delete the main workspace or a nested repository of unknown ownership.
