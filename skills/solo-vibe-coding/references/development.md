# Development and quality

Use for implementing changes, reviewing code, troubleshooting faults, selecting tests, and verifying results in an existing project. First define and establish the project baseline using [quality criteria and automated checks](quality-and-ci.md), prioritizing existing infrastructure. Choose guidance according to the actual technology stack, implementation, logs, and tests.

| Current problem | Optional skills |
| --- | --- |
| Establish quality standards, check tools, CI, or local automated checks | [Quality criteria and automated checks](quality-and-ci.md) |
| Implement a defined feature or change, behavior-preserving refactoring | UB Mode leads engineering discipline; Ponytail supports simplification and reuse |
| Review concrete bugs and project-rule violations in changes | code-review from claude-plugins-official; the original targets GitHub PRs |
| Errors, unexpected behavior, performance issues, intermittent faults | debugging-strategies |
| Default-stack implementation, performance, security, data access, operations | [Technology-specific guidance](technology-stack.md) |
| JS/TS async, mock, component, and API tests | javascript-testing-patterns |
| Playwright test authoring, critical user journeys, flaky tests | playwright-best-practices |
| End-to-end tests in an existing Cypress project | The Cypress portion of e2e-testing-patterns |
| Operate a browser through a CLI, inspect pages, reproduce user journeys | playwright-cli |
| Maintain usage instructions, API documentation, constraints, cautions, ADRs | documentation-and-adrs |
| Production deployment, release verification, and rollback | [Production deployment and release](deployment.md) |

When requirements or technical proposals still contain material uncertainty, reference [requirements and communication](requirements.md) or [architecture and technical design](architecture.md) as needed. Follow the [root skill's knowledge conventions](../SKILL.md#project-knowledge-conventions) when reading and writing documents.

## Implementation and refactoring

<!-- skill: unclebob/ub-mode@ub-mode -->
- **UB Mode**: [Source](https://github.com/unclebob/ub-mode/blob/master/SKILL.md). Primary engineering discipline: make behavior correct before improving structure; use failing tests to drive minimal implementation, test public behavior, establish behavior before refactoring, and verify after changes. Organize code using domain data structures, boundary validation, type constraints, idempotence, and shared-state management. When tests are impractical, explain why and use effective alternative verification rather than tests that merely confirm their own implementation.

<!-- skill: DietrichGebert/ponytail@ponytail -->
- **Ponytail**: [Source](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail/SKILL.md). Supports selecting the smallest complete implementation: consider existing project capabilities, then standard library or platform features, then installed dependencies, before writing the minimum necessary code. Check callers, tests, configuration, and exports while preserving error handling, security, and project conventions.

UB Mode leads verification and engineering discipline; Ponytail focuses on reuse and simplification, without lowering project quality standards for a short diff or small self-test. For an explicit architectural refactor, adjust structure according to the selected proposal, with scope and behavior defined by requirements and acceptance criteria. Upstream modes apply within the current task and user choices.

First check whether UB Mode's `crapper`, `dryer`, and `mutator` tools are actually available. If absent, use [quality criteria and automated checks](quality-and-ci.md) to select project-appropriate tools for complexity and coverage, duplication, and mutation testing, without claiming equivalent implementation of upstream metrics. Define the scope and exceptions for upstream numeric criteria under project standards. Operation logs belong in task feedback or research archives; only stable constraints enter project knowledge. Commits, pushes, and worktree cleanup follow user authorization and workspace rules; default skill steps do not provide additional authorization.

## Code review and debugging

<!-- plugin: anthropics/claude-plugins-official@code-review -->
- **code-review plugin**: [Source](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-review/commands/code-review.md). The shared code-review entry point. The original uses GitHub PR context, independent multi-agent review, and issue verification, focusing on concrete bugs and applicable `CLAUDE.md` rule violations while filtering general style, maintainability, and coverage suggestions; engineering discipline and automated checks handle these routine quality concerns. Report in the terminal by default; posting GitHub comments follows user authorization.

The original plugin depends on Claude Code agents, model selection, and GitHub tools. Use it when installed and its capabilities are available; remotely reading its command does not install the plugin. Without a PR, on another host, or without the required tools, read actual files and diffs and complete the feasible review using the same high-confidence issue standard. State scope and verification not performed, without claiming the full plugin workflow ran. Applicable project rules come from the actual host instructions and existing documents.

<!-- skill: wshobson/agents@debugging-strategies -->
- **debugging-strategies**: [Source](https://github.com/wshobson/agents/blob/main/plugins/developer-essentials/skills/debugging-strategies/SKILL.md). Methods for reproduction, evidence collection, hypothesis testing, difference comparison, Git bisect, tracing, performance, and memory investigation. The original has a four-stage framework; choose relevant methods from fault evidence. Read `references/tools-and-techniques.md` for tool selection and advanced techniques. Use actual errors, logs, environment, and change information, distinguishing verified root causes from unverified hypotheses.

## Testing and verification

<!-- skill: wshobson/agents@javascript-testing-patterns -->
- **javascript-testing-patterns**: [Source](https://github.com/wshobson/agents/blob/main/plugins/javascript-typescript/skills/javascript-testing-patterns/SKILL.md). JS/TS patterns for Jest, Vitest, Testing Library, async work, mocks, fixtures, component tests, and API tests. Use only for the relevant stack, adapting framework configuration and data cleanup in examples to the project's actual infrastructure.

<!-- skill: currents-dev/playwright-best-practices-skill@playwright-best-practices -->
- **playwright-best-practices**: [Source](https://github.com/currents-dev/playwright-best-practices-skill/blob/main/playwright-best-practices/SKILL.md), [Skill page](https://skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices). Primary guidance for Playwright tests; read corresponding references for authoring, debugging, flaky tests, or infrastructure concerns, covering locators and waiting, fixtures, authentication, mocking, visual regression, and framework adaptation. Use its component/API portions only when the project has selected Playwright; existing Jest/Vitest tests remain under javascript-testing-patterns. For Go tests, see [technology-specific guidance](technology-stack.md#go-and-gin). Retain project quality standards for test goals and coverage baselines.

<!-- skill: wshobson/agents@e2e-testing-patterns -->
- **e2e-testing-patterns**: [Source](https://github.com/wshobson/agents/blob/main/plugins/developer-essentials/skills/e2e-testing-patterns/SKILL.md). Guidance for existing Cypress projects; read its Cypress patterns and related debugging references. Work with the project's existing framework; Playwright projects use the dedicated entry above.

<!-- skill: microsoft/playwright-cli@playwright-cli -->
- **playwright-cli**: [Source](https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md), [Skill page](https://skills.sh/microsoft/playwright-cli/playwright-cli). Use browser snapshots, element references, form operations, screenshots, and network inspection to reproduce or verify page behavior. Requires an actually available CLI and browser; when the host already has suitable browser tools, use their interfaces. playwright-best-practices owns persistent test design and implementation; interaction alone does not establish regression tests. Web browser verification cannot replace Tauri Rust/IPC or React Native native-side verification.

## Documentation maintenance

<!-- skill: addyosmani/agent-skills@documentation-and-adrs -->
- **documentation-and-adrs**: [Source](https://github.com/addyosmani/agent-skills/blob/main/skills/documentation-and-adrs/SKILL.md). Maintain README, API documentation, known limitations, cautions, and decision rationale, emphasizing reasons, tradeoffs, and applicability. Supports existing ADR conventions; organize all persistent documents according to [project knowledge conventions](../SKILL.md#project-knowledge-conventions), updating existing documents together with other engineering skills.

Report results according to checks actually run. Implement test patterns as test code in the project; update related documents when behavior, interfaces, or operating methods change. Write reusable limitations and cautions into the corresponding topic; report or archive temporary review, investigation, and failed attempts according to task needs.
