---
name: worktree-first-development
description: Configure a project's worktree-first development strategy in project instructions or project-scoped home instructions. Use for strategy setup or revision, not routine development.
license: MIT
---

# Worktree-first Development Strategy

Maintain the strategy instructions; do not execute their Git, backup, or cleanup operations during setup.

## Dependency

Load the installed `sdlc-instruction-optimization` by its actual registered name and namespace, or read its entry and relevant resources at the discovered installation path. If unavailable, report the missing dependency and pause dependent writing; continue independent inspection without auto-installing dependencies.

Standalone installation requires both skills; the full plugin includes them.

## Choose the location

Ask the user to choose unless already specified:

1. **Project-level:** repository-root `AGENTS.md` or `CLAUDE.md`.
2. **User-level:** `~/AGENTS.md` or `~/CLAUDE.md`, scoped to this project and its task directories. Use the user's home directory, not a tool configuration directory.

Reuse the existing file and same-level rule source, preserving filename case. Ask if two independent files leave the source unclear; if neither exists, create `AGENTS.md`.

Check user-level automatic loading against runtime evidence or current official documentation. If unsupported or unverified, explain that explicit loading or reference is needed; keep the chosen location without editing other files to enable loading.

## Resolve parameters

Read applicable instructions, Git configuration, and worktree information. Resolve values from the user's choices, then project conventions, then unambiguous Git evidence; ask for unresolved values. Do not assume the current directory or branch is the main workspace or baseline.

| Parameter | Meaning |
| --- | --- |
| `MAIN_WORKSPACE` | Normalized absolute path of the main workspace |
| `REMOTE` | Remote used to fetch the baseline |
| `BASE_BRANCH` | Baseline branch to keep checked out in the main workspace |
| `WORKTREE_ROOT` | Default `../<project-directory-name>-worktrees` |
| `BACKUP_ROOT` | Default `../<project-directory-name>-backups` |

Resolve storage paths from `MAIN_WORKSPACE`, including for home instructions and task worktrees. Use explicit storage choices instead of the defaults when provided.

## Write the strategy

- Render [the template](references/workspace-rules.md) in the file's language or the user's requested language. Keep the section self-contained and retain its scope and constraints.
- Update the existing section, preserving unrelated rules and other projects. Resolve direct conflicts within the selected level; report cross-level or write-blocking conflicts for the user's decision.
- Check parameter substitution, scope, paths, and references. Report the changed file and section, chosen level, unresolved conflicts, and loading evidence.
