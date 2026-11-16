# Development and quality

Use for local environment setup and debugging preparation, implementing changes, reviewing code, troubleshooting faults, selecting tests, and verifying results in an existing project. First define and establish the project baseline using [quality criteria and automated checks](quality-and-ci.md), prioritizing existing infrastructure. Choose guidance according to the actual technology stack, implementation, logs, and tests.

For existing open-source products, Gin examples, and local Compose setups, see [development references](resources/development.md).

| Current problem | Optional skills |
| --- | --- |
| Establish quality standards, check tools, CI, or local automated checks | [Quality criteria and automated checks](quality-and-ci.md) |
| Set up a local environment, start dependency services, initialize data, and prepare debugging | [Local environment and debugging preparation](#local-environment-and-debugging-preparation); docker-patterns for containerized services |
| Implement a defined feature or change, behavior-preserving refactoring | UB Mode leads engineering discipline; Ponytail supports simplification and reuse |
| Accept the running implementation by simulating users completing their tasks | [Real-user acceptance](#real-user-acceptance) |
| Explore Web user journeys and reproduce issues | dogfood (Vercel) |
| Explore native iOS/Android user journeys and reproduce issues | dogfood (Callstack) |
| Review excessive implementation, overengineering, or opportunities to reduce code | ponytail-review |
| Review compliance with project rules and code style | Project instructions, existing conventions, and formatting/lint configuration |
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

## Real-user acceptance

After implementing the technical plan, perform initial real-user acceptance against the confirmed requirement and planned scenarios. In the running application, simulate the target user completing a task from its entry point to its outcome. Choose browser, desktop, mobile, or CLI tools suited to the product and verify actual system responses and results.

Retain the project's acceptance standards; when defining them, use constraint-driven-development under [quality criteria and automated checks](quality-and-ci.md#upstream-guidance).

1. **Prepare the acceptance environment.** Reuse the project's startup process, prepare necessary services and representative data, and confirm the application is operable.
2. **Exercise complete user journeys.** Cover the critical paths and important branches and failure cases within the requirement's scope. Check user-visible feedback and outcomes, including state changes, persistence, and cross-module handoffs where relevant. Retain necessary steps, actual results, and evidence against the expected outcomes.
3. **Determine acceptance status.** Acceptance passes when the applicable scenarios and required project checks pass. Fix failures and repeat affected scenarios, expanding the scope as their impact requires. Report missing environments, unavailable tools, and unexecuted scenarios as verification gaps; material gaps leave acceptance incomplete.

Use the following guidance for user-perspective exploration and issue reproduction, within the requirement's scope:

<!-- skill: vercel-labs/agent-browser@dogfood -->
- **dogfood (Vercel, Web)**: [Source](https://github.com/vercel-labs/agent-browser/blob/main/skill-data/dogfood/SKILL.md). Explore Web workflows, edge cases, and error states; verify reproducibility and retain appropriate screenshots, videos, and steps. Read its issue taxonomy and report template from the same version. Running the upstream CLI workflow requires agent-browser and a browser; when adapting to suitable existing host browser tools, report the actual execution method.

<!-- skill: callstack/agent-device@dogfood -->
- **dogfood (Callstack, iOS/Android)**: [Source](https://github.com/callstack/agent-device/blob/main/skills/dogfood/SKILL.md). Explore native mobile workflows and collect runtime evidence. Requires agent-device 0.14.0+ and the target device or simulator/emulator; follow the original instructions to read `agent-device help dogfood` for the matching workflow. Report missing dependencies as verification gaps.

Browser operations continue using playwright-cli or suitable host tools; persistent Playwright regression tests use playwright-best-practices under [testing and verification](#testing-and-verification).

Implementation-time unit tests, integration tests, and quality checks remain in use. Once initial acceptance passes, enter the following review/refactoring loop.

### Post-acceptance review and refactoring loop

Repeat **non-bug code review → behavior-preserving refactoring → targeted re-acceptance → another review**, scoped to the current change and necessary connected code.

Each completed review counts as one round. Apply the loop as follows:

- **Review:** Use [ponytail-review and project-rule/code-style checks](#code-review-and-debugging) to examine implementation necessity, duplication, excessive abstraction, readability, and compliance with project conventions. Base findings on actual code; a review with no verified issues passes. After each review, stop if it passes or the cumulative review count exceeds 3; do not start another refactor once either condition is met.
- **Refactor:** Address verified findings with clear benefits, preserving accepted user behavior, interface contracts, error handling, and data side effects. Apply the implementation/refactoring discipline below.
- **Re-accept:** After every refactor, rerun affected user scenarios and automated checks. Reuse valid initial results for unaffected areas; a full repeat of initial acceptance is unnecessary unless the impact warrants it. If re-acceptance fails, correct or revert the relevant refactor and verify again before another review.

Bugs discovered during review are handled as defect fixes with re-acceptance of affected scenarios. Report the review count, stopping reason, remaining findings, and final acceptance status. Reaching the round limit does not establish review or acceptance success.

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

For implementation delivery, perform non-bug code review after [initial real-user acceptance](#real-user-acceptance) passes, following its review/refactoring loop. Review the current diff and connected code against the requirements, agreed proposal, acceptance criteria, and applicable project rules and code style. Use ponytail-review for simplification, covering unrequested changes, lines added/removed, and implementation necessity. Scale depth to the task. Reuse conclusions only for unchanged requirements, code, and context; review new or affected changes. Standalone review and debugging requests use the relevant guidance directly.

<!-- skill: DietrichGebert/ponytail@ponytail-review -->
- **ponytail-review**: [Source](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-review/SKILL.md). Read the diff and connected code; apply its Lean checks and verify findings. For verified simplification opportunities, cite locations, give concrete smaller complete alternatives, and justify estimated removable lines; otherwise, briefly report no findings. Preserve required behavior, correctness, safety, and necessary verification. Read-only review; fixes follow task authorization. Feature acceptance stays separate.

- **Project rules and code style**: Read applicable `AGENTS.md`, project documentation, formatting/lint configuration, and surrounding code; check compliance with explicit requirements and established conventions. Reuse applicable project checks. Cite locations and the rule or convention for verified deviations, distinguishing them from personal preferences; report the review scope and checks not run. Default to terminal reports; GitHub comments require user authorization.

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
