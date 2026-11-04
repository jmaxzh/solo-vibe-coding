# Distribution verification

Verification date: 2026-11-01. Implementation commit `41f0c4e` was reviewed, fast-forwarded into `main`, and pushed to GitHub. Local and remote checks are distinguished below.

| Check | Status and evidence |
| --- | --- |
| Codex local marketplace and plugin installation | Passed in a temporary `CODEX_HOME`; `codex-cli 0.166.0-alpha.5.1` |
| Codex runtime discovery | App-server `skills/list` returned five enabled skills belonging to `vibe-dev-skills@vibe-dev-skills`; installed resources were readable |
| Claude Code native validation/install | Passed in temporary `CLAUDE_CONFIG_DIR`; `2.1.267`; strict manifest checks passed and component inventory contained five skills |
| Source, translations, and local links | Passed `scripts/validate.py`: five English entries, source-linked maintenance translations, local paths/anchors, consistent notices/manifests |
| Supported installation combinations | 6 distribution tests passed after cleanup; suite/pair/specialists, missing dependency, escaping links, and manifest/asset failures |
| skills CLI discovery/install | Pinned `skills@1.7.4` passed default/full-depth discovery, suite, workflow pair, four specialists, and expected missing-dependency detection in temporary projects; telemetry disabled |
| CC Connect isolated regression suite | 28 tests passed; all 12 Python source/test files byte-identical to pre-migration originals |
| Model execution and dependency compliance | Not run: inventory/file checks do not prove a model loads the dependency or pauses correctly when absent |
| CC Connect real messaging and desktop behavior | Not run on a deployment target |
| Remote GitHub installation | GitHub API and HTTPS `ls-remote` confirmed `main` at `41f0c4efc9c63b71406cbbe18d505660942b83be`. The exact skills CLI remote-source smoke check timed out at discovery on two attempts; remote installation is not accepted as passed |
| CI on GitHub | [Run 41294750749](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/41294750749) completed successfully for implementation commit `41f0c4e` |
| skills.sh / SkillsMP listing | Not submitted or verified for this revision |

Reproduce the automated checks using [distribution instructions](distribution.md). The smoke report distinguishes local CLI installation, namespaced discovery, and missing-dependency file checks from model behavior. Perform the fresh-session positive/negative model checks before claiming behavioral acceptance.

The complete smoke script passed 12 recorded checks, including actual native installs and the Codex namespaced runtime inventory. `dist/install-report.json` contains the machine-readable smoke result.

## Solo Vibe Coding 0.2.0 — local verification, 2026-11-02

The renamed package uses `solo-vibe-coding@solo-vibe-coding`. This change updates the project positioning, manifests, installation sources, and migration guidance; the five core skill names and behaviors are retained. The optional public-update skill and workflow are not included in this release.

Source validation, six distribution tests, and the existing twenty-eight CC Connect tests passed. The manifest-drift test now changes parsed version data so it continues to exercise a mismatch after the version bump.

The isolated smoke report `dist/solo-rebrand-native.json` passed twelve checks: skills CLI discovery and supported installation combinations, actual Codex native plugin installation and app-server discovery of five enabled readable skills, and Claude Code strict manifest validation, native installation, and five-skill inventory. Versions: `codex-cli 0.166.0-alpha.5.1`, Claude Code `2.1.267`. Tests used temporary configurations and did not change normal installations or call a model.

These local results do not establish model dependency compliance, CC Connect target-machine behavior, remote installation, or hosted CI. Historical results above retain their actual earlier identity and revision. Recheck remote sources and CI after publishing the rename.

## Build in Public 0.3.0 local verification

The optional sixth skill passed source validation and isolated installation checks. Codex app-server and Claude Code both listed six skills. The five-core combination and the publishing skill alone passed skills CLI installation checks.

An editorial walkthrough used three fixture facts: an observed retry failure, a changed setup screen and feedback about an unclear setup step. For direct drafting, the retry reproduction supplied the article. For topic discovery, the setup demo supported a visual progress update while the feedback supported a separate tester discussion. For a series, a prior report of the failure called for a follow-up with a verified rerun before claiming a fix. This walkthrough evaluated the instructions without a separate model run.

The expanded writing guides were reviewed using the shared-publisher removal material across articles, discussion posts and short updates. A course exercise revision with a proposed trial checked the distinction between a documented change and an outcome still awaiting observation. These were textual walkthroughs. Independent model execution of the writing guides was not tested.

The installable Build in Public skill contains its entry document, eight channel guides and the MIT license. Six distribution tests and twenty-eight CC Connect tests passed. Actual delivery depends on the method and account access available for each channel. Account authorization, public delivery and remote installation remain unverified for this revision.

## Worktree-first development — local verification, 2026-11-04

The optional seventh skill, `worktree-first-development`, passed source and skill-format validation. Seven distribution tests and the existing twenty-eight CC Connect tests passed. The five-core combination remains unchanged; the workflow and worktree strategy each pair with `sdlc-instr-doc-design`. File checks cover both supported pairs, both missing-dependency installations, and reporting all missing requirements when both dependent skills are installed without the documentation skill.

The isolated report `dist/worktree-first-development-install.json` passed sixteen checks: default/full-depth seven-skill discovery, the complete suite, the five-core combination, both documentation pairs, five independent specialists, both missing-dependency cases, Codex native installation and app-server discovery, and Claude Code strict manifest validation, native installation, and component inventory. Both native inventories contained seven skills. Versions were `codex-cli 0.166.0-alpha.6` and Claude Code `2.1.267`. Checks used temporary configurations without model calls or changes to normal installations.

Textual scenario review covered project/home placement, existing-file selection and references, unresolved parameters, repeat updates, cross-level conflicts, project identity and task-copy provenance, relative paths from the main workspace, the untracked `.cc-connect/` exception, and backup and cleanup conditions. This was an instruction review, not observed model execution. Home-file automatic loading, actual strategy writes to target projects or home directories, Git synchronization, backup/recovery, and cleanup were not exercised. Target-machine deployment, remote installation, and hosted CI were not verified for this change. Earlier records retain their original inventories and results.
