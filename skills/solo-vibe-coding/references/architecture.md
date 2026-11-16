# Architecture and technical design

Use for technical plans, selection, review, and code-structure diagnosis. Use known requirements and nonfunctional constraints; first establish the [quality baseline](quality-and-ci.md). Find schemas, implementations, and cases in [architecture references](resources/architecture.md).

Generate plans with the required [workflow and structure](technical-planning.md); use the entries below independently for research, selection, or review.

## Select guidance

- **search-first**: [Source](https://github.com/affaan-m/ecc/blob/main/skills/search-first/SKILL.md). Survey project implementations and mature external solutions. Apply [shared reuse criteria](../SKILL.md#apply-guidance-to-project-conditions); explain coverage and remaining work, recommending adoption, extension, composition, or custom implementation. Plans deliver evidence and recommendations; installation and implementation follow task authorization.

- **architecture**: [Source](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/architecture/SKILL.md). Select technologies and review proposals. Compare complexity, cost, scalability, experience, delivery time, and maintenance; explain alternatives, recommendations, reasons, and consequences. Follow project conventions for ADRs and use available connectors.

- **system-design**: [Source](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/system-design/SKILL.md). Develop the selected direction into a technical plan. Explain changes to existing implementation; cover components, flows, APIs/data models, caching, queues, errors/retries, capacity, reliability, and monitoring as needed. Use helpful diagrams; state assumptions, tradeoffs, and growth conditions to revisit. Scale detail to the project.

For hard-to-change code, coupling, or refactoring priorities, use improve-codebase-architecture below. During implementation/refactoring, use [UB Mode](development.md#implementation-and-refactoring) for discipline and verification.

Retain confirmed requirements and acceptance criteria; address material requirement or scope gaps through [requirements and communication](requirements.md#required-guidance). Documents follow [project knowledge conventions](project-knowledge.md).

For high-impact concurrency, retry, or recovery properties that are hard to test, consider [formal verification](formal-verification.md). State atomic steps, failure assumptions, and consistency guarantees; distinguish model results from evidence of implementation conformance.

## Default technology stack

Retain user/project choices. Otherwise match business needs to the table: adopt suitable defaults directly; compare alternatives only when business constraints clearly require them, explaining the basis and costs.

| Scenario | Default choice |
| --- | --- |
| Desktop | Tauri + Rust, with React frontend |
| Backend | Go + Gin |
| Database | MySQL |
| Public website, SEO, static site | Next.js + React |
| Functional web application | React |
| Mobile | React Native; use native development when the interface is confirmed to have very few, simple screens |

Explain the scenario, choice, and reasons; add authentication, deployment, background tasks, or other components as needed. For implementation, framework usage, data access, performance, and operations, use [technology-specific guidance](technology-stack.md). Specialists retain these choices; system boundaries and selection tradeoffs remain here.

## Code-structure diagnosis

- **improve-codebase-architecture**: [Source](https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md). Inspect specified scope or recent hotspots for shallow modules, coupling, and testing difficulties. Propose smaller interfaces hiding more complexity; show problems, benefits, and before/after structure before choosing a direction. Diagnosis does not authorize implementation.

Read related guidance by stage, from the same repository/version:

- Before diagnosis, read [codebase-design](https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/SKILL.md) for deep modules, interfaces, and replaceable seams; retain project business terms.
- For reports, read the diagnosis directory's `HTML-REPORT.md` as needed. Originals use the system temporary directory; CDN/browser support depends on the environment.
- After the user selects a candidate, refine from confirmed requirements with [grill-with-docs](requirements.md#required-guidance). For interface comparisons, read relevant codebase-design references.

Run upstream subagent exploration/parallel design according to host capabilities and authorization. If delegation is unavailable, analyze locally and report scope; reading guidance is not running subagents.

## Document collaboration

Describe current structure and constraints; label proposed work. Preserve important decisions' context, alternatives, tradeoffs, and consequences in ADRs. Follow project conventions, using [documentation-and-adrs](development.md#documentation-maintenance) as needed to maintain shared existing documents.
