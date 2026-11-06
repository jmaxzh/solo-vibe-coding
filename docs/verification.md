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

## UI and UX split — local verification, 2026-11-04

The principle-level split replaces `sdlc-ui-interaction` with independently installable `sdlc-ui-design` and `sdlc-ux-design`. The source contains six English skills. The existing eleven shared and eight platform principles were compared clause by clause with the new entries and platform references. Their applicability conditions were retained. The selected external principles have fixed-revision source links, with visual-system scope for page overrides and purpose-based motion guidance. Corresponding Chinese maintenance translations were reviewed against the English sources.

Source validation, six distribution tests, and the existing twenty-eight CC Connect tests passed. The final isolated smoke report `dist/ui-ux-split-native.json` passed thirteen checks, including default/full-depth discovery, the complete suite, workflow pair, five individual specialists, and the expected missing-dependency file check. UI and UX were each installed alone with their required files and license. The old entry was absent from the validated inventory.

Native checks registered and installed the local plugin in disposable configurations. Codex app-server listed six enabled namespaced skills with readable entries. Claude Code strict validation, native installation, and six-skill inventory passed. Versions were `codex-cli 0.166.0-alpha.6` and Claude Code `2.1.267`.

A textual walkthrough checked visual-only, interaction-only, mixed, general-principle, backend-only, and mobile-web requests against the descriptions and reading conditions. Visual and interaction requests select their respective skill, mixed work can combine them, general advice stays with shared principles, backend-only work is outside both scopes, and mobile web reads both mobile and web references within the relevant skill. These are textual findings. Model execution, target-machine behavior, remote installation, and hosted CI were not tested for this split.

## Platform principle additions — local verification, 2026-11-04

Seven UI and five UX additions were integrated at their approved locations and synchronized with the Chinese maintenance translations. The review compared all eight English documents and their translations with the pre-addition snapshot. Existing clauses were retained. The new conditions explicitly distinguish native iOS/Android guidance, product-supported appearances and platform high-contrast preferences, user-enabled reduced motion, desktop-width working interfaces, network-dependent tasks, local status announcements, and WPF actions in the same context. All eight document pairs have matching fixed-revision external source links.

Source validation, six distribution tests, and twenty-eight CC Connect tests passed. The isolated report `dist/ui-ux-platform-native.json` passed thirteen checks against the current six-skill inventory, including default/full-depth discovery, supported installation combinations, UI and UX installed individually, the expected missing-dependency file check, Codex native installation and app-server discovery, and Claude Code strict validation and native inventory. Versions were `codex-cli 0.166.0-alpha.6` and Claude Code `2.1.267`.

The semantic review checked that native-mobile conditions are explicit even when the mobile reference is read for mobile web, reduced-motion alternatives retain readable content and state meaning, local announcements preserve focus within their stated scope, and WPF action consistency is limited to the same action in the same context. These are textual review findings. The installation checks used temporary configurations and did not execute a model or test device behavior, remote installation, or hosted CI.

## Content and component principles — local verification, 2026-11-04

Ten selected principles were integrated into the two skill entries and their Chinese maintenance translations. UI additions cover actual content fit, available media, semantic reuse, data encoding, and supported writing systems. UX additions cover contextual icon semantics, state/behavior consistency, factual and illustrative content, data consistency within a reporting scope, and modality. Semantic reuse and state consistency extend the existing design-system and feedback clauses. Fixed-revision source links match between each English entry and its translation.

The additions apply to design, implementation, modification, and review through the existing applicability rules. The text review retained the conditions for supported languages, available assets, applicable units and scales, same-scope data comparisons, and task interruption or protected focus. Existing clauses were compared with the pre-addition snapshot. Delivery-policy proposals remain pending.

Source validation, six distribution tests, and twenty-eight CC Connect tests passed. The isolated report `dist/ui-ux-content-native.json` passed thirteen checks against this task worktree's six-skill inventory, including separate UI/UX installations, Codex native installation and app-server discovery, and Claude Code strict validation and native inventory. Versions were `codex-cli 0.166.0-alpha.6` and Claude Code `2.1.267`. These results cover static checks and actual local loading. Model execution, device behavior, remote installation, and hosted CI were not tested.

## Design delivery — local verification, 2026-11-04

Both skill entries now contain a Design delivery section with synchronized Chinese maintenance translations and fixed-revision source links. Its opening explicitly limits the rules to design exploration, proposals, concept comparison, interaction design, and prototype validation. Implementation follows its own delivery requirements. Mixed design-and-implementation requests apply the section only to the explicitly needed design phase. All pre-existing entry content was compared with the snapshot and retained unchanged.

The textual walkthrough covered UI design with image generation, unavailable tools and failed calls, interactive UX design, combined UI/UX with an image plus HTML, the shared-HTML fallback, principle-only advice, implementation-only requests, and mixed design/implementation. The clauses require image-first UI design, operable UX prototypes, directly openable HTML with inline CSS/JavaScript by default, local simulated state with identified illustrative data, visible content checks, and brief accompanying text. These findings assess the written instructions rather than observed model/tool behavior or a generated prototype.

Source validation, six distribution tests, and twenty-eight CC Connect tests passed. The isolated report `dist/design-delivery-native.json` passed thirteen checks against this worktree's six-skill inventory, including separate UI/UX installs, Codex native installation and app-server discovery, and Claude Code strict validation and native inventory. Versions were `codex-cli 0.166.0-alpha.6` and Claude Code `2.1.267`. Model execution, device behavior, remote installation, and hosted CI were not tested.

## UI/UX integration with current main — local verification, 2026-11-05

The UI/UX changes were reconciled with remote baseline `e88fa74885aba896709b2be6f1a4b9306e5812a5`. The integrated source has six core skills and eight skills in total, retaining Build in Public, Worktree-first Development Strategy, their documentation dependencies, and the main branch's version `0.3.0`. The UI/UX skill directories and translations are byte-identical to feature commit `ccc4166`; conflict resolution concerns distribution metadata and documentation. Historical results above retain the inventories they actually tested.

Source validation, seven distribution tests, and twenty-eight CC Connect tests passed. The isolated report `dist/ui-ux-merged-main-native.json` passed seventeen checks covering eight-skill discovery, the suite and core combinations, both documentation pairs, six independent specialists, both expected missing-dependency cases, Codex native installation and eight enabled namespaced skills, and Claude Code strict validation, installation, and eight-skill inventory. Versions were `codex-cli 0.166.0-alpha.6` and Claude Code `2.1.267`. Checks used temporary configurations without model calls. Model behavior, device behavior, remote installation, and hosted CI remain outside this local verification.

## Instruction Document Architect (2026-11-06)

Added the optional, independently installable `instruction-doc-architect` from the user-provided specification. The English source and Chinese maintenance translation retain P1–P5, R1.1–R5.3, and D1–D8. The larger rule diagram is split to keep each graph within 15 nodes. Direct checks found the same 33 clauses and 44 dependency edges in both editions, exact agreement between clause dependencies and graph edges, and no cycles. The six-core suite and existing documentation dependencies remain unchanged; the complete inventory now contains nine skills.

Source validation, seven distribution tests, and twenty-eight CC Connect tests passed. The isolated report `dist/instruction-doc-architect-native.json` passed eighteen checks, including default/full-depth discovery, supported installation combinations, independent installation of the new skill, Codex native installation and nine enabled namespaced skills, and Claude Code strict manifest validation, installation, and nine-skill inventory. Versions were `codex-cli 0.166.0-alpha.6` and Claude Code `2.1.267`. Checks used temporary configurations without model calls. Model behavior, remote installation, publication, and target-machine deployment were not tested.
