# Quality criteria and automated checks

Use when starting or taking over any engineering project to define quality standards, configure check tools, and establish CI; prioritize existing infrastructure. Match checks to the technology stack, risk, and project size. Temporary scripts and documentation-only repositories also need an applicable minimal baseline, without forcing application testing, coverage, or compilation requirements onto them.

## Establishment sequence and delivery

1. **Identify the current state**: read project instructions, language and dependency manifests, lockfiles, formatting and static-analysis configuration, tests and coverage reports, build commands, and pipelines. Measure the existing baseline before identifying gaps.
2. **Define standards**: list applicable dimensions, thresholds or baselines, actual commands, timing, and whether failures block or warn. Prefer project tools; ask the user only when goals, costs, or tradeoffs that affect choices are unclear. Retain existing quality documentation; otherwise write root `CONSTRAINTS.md` and reference it from existing project instructions or documentation entry points.
3. **Implement checks**: turn standards into versioned configuration and a repeatable local entry point, such as an existing package-manager script, Make target, or check script. Reuse mature tools, stating installation, versions, and necessary environment; critical check failures or tool errors return a nonzero exit code.
4. **Establish automatic execution**: when supported, connect to hosted CI or an existing runner, invoking the same local entry point for applicable checks on PRs and main-branch updates. Verify required checks or equivalent merge rules; a workflow file alone does not mean merging is blocked.
5. **Verify effectiveness**: run real commands and verify in an isolated or reversible scope that known violations are rejected, valid examples pass, and check-tool failures cannot be treated as success. Clean temporary examples and record actual results and unexecuted checks.

When the hosting platform, repository permissions, or runtime environment do not support CI, deliver a local check entry point and applicable pre-commit or pre-push hooks, explaining activation and timing. Hooks are bypassable and manual commands require active execution; do not claim equivalence to protected-branch gates. Without an available hook, at least retain a shared command and run it before task delivery. Once CI becomes available, connect the same entry point without redefining standards.

## Selecting criteria

| Dimension | What to define |
| --- | --- |
| Formatting and static analysis | Project formatting, lint, type or language static checks, severity |
| Behavior and coverage | Test levels for critical behavior, commands, applicable changed-code or total coverage baseline |
| Compilation and build | Applicable compilation, packaging, artifact-integrity checks |
| Complexity and duplication | Tool-supported complexity and duplication metrics and measurement scope; mutation testing when needed |
| Architectural dependencies | Confirmed module boundaries, forbidden dependencies, cycle checks; sound design still requires architectural analysis |
| Other risks | Product-relevant security, performance, size, accessibility, and other executable checks with required runtime environment |

Each standard must point to real commands and decision configuration; explain inapplicable dimensions. Use measured baselines and gradual tightening for existing debt, without mechanically imposing coverage or complexity numbers. Layer fast checks, task-completion checks, and full checks by duration. Local and CI checks share configuration and decision sources; documents reference configuration rather than maintaining a second set of thresholds.

Fix the causes of check failures. Changes that reduce assertions, skip tests, expand ignore scopes, or lower thresholds need evidence and explicit reporting. Record justified exceptions with scope, reason, and review conditions. Reports distinguish standards defined, commands run, pipelines executed, and merge gates enforced.

## Upstream guidance

<!-- skill: addyosmani/agent-skills@constraint-driven-development -->
- **constraint-driven-development**: [Source](https://github.com/addyosmani/agent-skills/blob/main/skills/constraint-driven-development/SKILL.md). Identify project tools, establish executable quality standards, measure baselines, and tighten criteria incrementally, preventing weakened standards merely to pass checks. Adapt the original interview approach and `CONSTRAINTS.md` template to actual information gaps and project conventions; locate its referenced `interview-me` in the same repository only when that interviewing method is needed. When copying decision scripts is necessary, read source and dependencies from the same version and verify them rather than only copying command examples from the entry point.

<!-- skill: addyosmani/agent-skills@ci-cd-and-automation -->
- **ci-cd-and-automation**: [Source](https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md). Connect project checks to pipelines, configuring triggers, caching, parallelism, reports, and failure feedback. Original examples lean toward Node/TypeScript and GitHub Actions; adapt to actual language, platform, and version. Use [production deployment and release](deployment.md) for production deployment, release verification, and rollback, only within corresponding task scopes.

<!-- skill: samber/cc-skills-golang@golang-continuous-integration -->
- **golang-continuous-integration**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-continuous-integration/SKILL.md), [Skill page](https://skills.sh/samber/cc-skills-golang/golang-continuous-integration). When configuring GitHub Actions for Go projects, prefer this entry for tests, race checks, lint, vulnerability scanning, and builds. Use general ci-cd-and-automation for other stacks/platforms or gaps it does not cover. Pipelines share the same local check entry point and standards; choose tool versions according to `go.mod`, existing configuration, and current compatibility. Read upstream `assets/` templates as needed. Add GoReleaser, Codecov, dependency bots, and automated review only when the project needs them; code review still uses the [existing entry point](development.md#code-review-and-debugging).

Criteria guidance defines project standards; CI guidance handles execution and blocking. Follow [development and quality](development.md) during implementation and the [project knowledge conventions](project-knowledge.md) for document placement.
