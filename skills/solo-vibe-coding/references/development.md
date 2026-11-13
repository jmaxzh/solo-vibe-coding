# Development and quality

Use for local environment setup and debugging preparation, implementing changes, reviewing code, troubleshooting faults, selecting tests, and verifying results in an existing project. First define and establish the project baseline using [quality criteria and automated checks](quality-and-ci.md), prioritizing existing infrastructure. Choose guidance according to the actual technology stack, implementation, logs, and tests.

For existing open-source products, Gin examples, and local Compose setups, see [development references](resources/development.md).

| Current problem | Optional skills |
| --- | --- |
| Establish quality standards, check tools, CI, or local automated checks | [Quality criteria and automated checks](quality-and-ci.md) |
| Set up a local environment, start dependency services, initialize data, and prepare debugging | [Local environment and debugging preparation](#local-environment-and-debugging-preparation); docker-patterns for containerized services |
| Implement a defined feature or change, behavior-preserving refactoring | UB Mode leads engineering discipline; Ponytail supports simplification and reuse |
| Review concrete bugs and project-rule violations in changes | code-review from claude-plugins-official; the original targets GitHub PRs |
| Review excessive implementation, overengineering, or opportunities to reduce code | ponytail-review |
| Errors, unexpected behavior, performance issues, intermittent faults | debugging-strategies |
| Default-stack implementation, performance, security, data access, operations | [Technology-specific guidance](technology-stack.md) |
| High-impact properties that tests struggle to cover, or maintaining existing formal checks | [Formal verification](formal-verification.md) |
| Properties over generated inputs for serialization, normalization, algorithms, or data structures | property-based-testing |
| JS/TS async, mock, component, and API tests | javascript-testing-patterns |
| Playwright test authoring, critical user journeys, flaky tests | playwright-best-practices |
| End-to-end tests in an existing Cypress project | The Cypress portion of e2e-testing-patterns |
| Operate a browser through a CLI, inspect pages, reproduce user journeys | playwright-cli |
| Maintain usage instructions, API documentation, constraints, cautions, ADRs | documentation-and-adrs |
| Production deployment, release verification, and rollback | [Production deployment and release](deployment.md) |

When requirements or technical proposals still contain material uncertainty, reference [requirements and communication](requirements.md) or [architecture and technical design](architecture.md) as needed. Follow the [project knowledge conventions](project-knowledge.md) when reading and writing documents.

## Local environment and debugging preparation

Read the project's setup instructions, runtime constraints, lockfiles, configuration examples, and startup scripts first. Reuse the existing native or containerized workflow. Prepare the required runtimes and dependencies, configure local environment variables, start the services actually needed, run applicable database migrations and development-data initialization, then start the application and verify service connectivity and a critical application path. Preserve existing local data; distinguish first-time initialization from repeatable startup.

<!-- skill: affaan-m/ecc@docker-patterns -->
- **docker-patterns**: [Source](https://github.com/affaan-m/ecc/blob/main/skills/docker-patterns/SKILL.md), [Skill page](https://skills.sh/affaan-m/ecc/docker-patterns). Docker and Compose guidance for local applications, databases, caches, and other dependency services, covering environment variables, initialization scripts, readiness checks, networking, persistent volumes, hot reload, and debug ports. Read the original instructions when containerized development is needed; adapt example stacks, versions, ports, and commands to the actual project. Use [container build guidance](technology-stack.md#container-builds) for image-build details and [production deployment and release](deployment.md) for production operations.

Maintain repeatable setup, startup, shutdown, and verification commands in the project's existing usage documentation, following [project knowledge conventions](project-knowledge.md). Report the actual startup and verification results and any missing prerequisites. Once the application runs, use the debugging and testing guidance below to investigate faults and verify changes.

## Implementation and refactoring

<!-- skill: unclebob/ub-mode@ub-mode -->
- **UB Mode**: [Source](https://github.com/unclebob/ub-mode/blob/master/SKILL.md). Primary engineering discipline: make behavior correct before improving structure; use failing tests to drive minimal implementation, test public behavior, establish behavior before refactoring, and verify after changes. Organize code using domain data structures, boundary validation, type constraints, idempotence, and shared-state management. When tests are impractical, explain why and use effective alternative verification rather than tests that merely confirm their own implementation.

<!-- skill: DietrichGebert/ponytail@ponytail -->
- **Ponytail**: [Source](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail/SKILL.md). Choose the smallest complete implementation and shortest working diff that meet requirements and project quality standards. Prefer existing project capabilities, then standard library or platform features, then installed dependencies, before new code. Check affected callers, tests, configuration, and exports; preserve error handling, security, and conventions.

UB Mode leads verification and engineering discipline; Ponytail focuses on reuse and simplification, without lowering project quality standards for a short diff or small self-test. For an explicit architectural refactor, adjust structure according to the selected proposal, with scope and behavior defined by requirements and acceptance criteria. Upstream modes apply within the current task and user choices.

First check whether UB Mode's `crapper`, `dryer`, and `mutator` tools are actually available. If absent, use [quality criteria and automated checks](quality-and-ci.md) to select project-appropriate tools for complexity and coverage, duplication, and mutation testing, without claiming equivalent implementation of upstream metrics. Define the scope and exceptions for upstream numeric criteria under project standards. Operation logs belong in task feedback or research archives; only stable constraints enter project knowledge. Commits, pushes, and worktree cleanup follow user authorization and workspace rules; default skill steps do not provide additional authorization.

## Code review and debugging

Before delivering implementation changes, use ponytail-review to compare the final diff with the requirements, agreed proposal, and acceptance criteria: unrequested changes, lines added/removed, and implementation necessity. Review earlier if growth appears. Scale depth to the task. Reuse conclusions only for unchanged requirements, code, and context; review new or affected changes.

<!-- skill: DietrichGebert/ponytail@ponytail-review -->
- **ponytail-review**: [Source](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-review/SKILL.md). Read the diff and connected code; apply its Lean checks and verify findings. For verified simplification opportunities, cite locations, give concrete smaller complete alternatives, and justify estimated removable lines; otherwise, briefly report no findings. Preserve required behavior, correctness, safety, and necessary verification. Read-only review; fixes follow task authorization. Feature acceptance stays separate.

<!-- plugin: anthropics/claude-plugins-official@code-review -->
- **code-review plugin**: [Source](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-review/commands/code-review.md). Concrete bugs and applicable project-rule violations, using independent agents and issue validation. Follow upstream filters for general style, maintainability, and coverage; these apply only to its findings. Engineering discipline and automated checks retain those standards. Default to terminal reports; GitHub comments require user authorization.

Use the installed plugin with its GitHub PR context, Claude Code agents and model selection, and GitHub tools. Without these, review files and diffs under actual host/project rules using the same high-confidence standard; report scope and checks not run. Remote reading does not install the plugin or constitute a full plugin run.

<!-- skill: wshobson/agents@debugging-strategies -->
- **debugging-strategies**: [Source](https://github.com/wshobson/agents/blob/main/plugins/developer-essentials/skills/debugging-strategies/SKILL.md). Methods for reproduction, evidence collection, hypothesis testing, difference comparison, Git bisect, tracing, performance, and memory investigation. The original has a four-stage framework; choose relevant methods from fault evidence. Read `references/tools-and-techniques.md` for tool selection and advanced techniques. Use actual errors, logs, environment, and change information, distinguishing verified root causes from unverified hypotheses.

## Testing and verification

<!-- skill: trailofbits/skills@property-based-testing -->
- **property-based-testing**: [Source](https://github.com/trailofbits/skills/blob/main/plugins/property-based-testing/skills/property-based-testing/SKILL.md), [Skill page](https://skills.sh/trailofbits/skills/property-based-testing). Write, review, and triage tests of properties over generated inputs, including roundtrips, idempotence, and domain invariants. Read the relevant generation, review, failure-analysis, or library reference from the same version. Reuse the project's library; choose new dependencies within project requirements and existing authorization. Assert behavior independently of the implementation and check that generated cases exercise it. These tests provide sampled evidence; [formal verification](formal-verification.md) has its own methods and scope guarantees.

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
- **documentation-and-adrs**: [Source](https://github.com/addyosmani/agent-skills/blob/main/skills/documentation-and-adrs/SKILL.md). Maintain README, API documentation, known limitations, cautions, and decision rationale, emphasizing reasons, tradeoffs, and applicability. Supports existing ADR conventions; organize all persistent documents according to [project knowledge conventions](project-knowledge.md), updating existing documents together with other engineering skills.

Report results according to checks actually run. Implement test patterns as test code in the project; update related documents when behavior, interfaces, or operating methods change. Write reusable limitations and cautions into the corresponding topic; report or archive temporary review, investigation, and failed attempts according to task needs.
