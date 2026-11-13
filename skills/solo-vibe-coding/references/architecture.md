# Architecture and technical design

Use for new feature design, technology selection, proposal comparisons, and diagnosis of existing code structure. Select guidance around functional requirements and nonfunctional constraints, first establishing the applicable baseline from [quality criteria and automated checks](quality-and-ci.md).

For existing schemas, application implementations, and architectural cases, see [architecture references](resources/architecture.md).

| Current problem | Entry point |
| --- | --- |
| New feature design, technology selection, proposal comparison, creating or evaluating ADRs | architecture |
| Existing code is hard to change, module coupling, identifying refactoring priorities | improve-codebase-architecture |
| Discipline and verification during implementation and refactoring | [UB Mode in development and quality](development.md#implementation-and-refactoring) |

When business concepts or requirements scope are unclear, reference [requirements and communication](requirements.md) as needed. Architecture documentation, feature-level technical constraints, and ADRs follow the [project knowledge conventions](project-knowledge.md).

## Default technology stack

Retain technology choices already established by the user or project. When no convention exists, match business needs to the table below. Adopt the default stack directly when it meets requirements; compare alternatives only when business constraints clearly make it unsuitable, explaining the basis and costs.

| Scenario | Default choice |
| --- | --- |
| Desktop | Tauri + Rust, with React frontend |
| Backend | Go + Gin |
| Database | MySQL |
| Public website, SEO, static site | Next.js + React |
| Functional web application | React |
| Mobile | React Native; use native development when the interface is confirmed to have very few, simple screens |

Technology selection output includes the applicable scenario, chosen technology, and necessary reasons. Add authentication, deployment, background tasks, and other components according to actual business needs.

For implementation, framework usage, data access, performance, and operations after technology selection, see [technology-specific guidance](technology-stack.md). Those specialists retain the choices made here; system boundaries and selection tradeoffs remain this topic's responsibility.

## Available skills

<!-- skill: anthropics/knowledge-work-plugins@architecture -->
- **architecture**: [Source](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/architecture/SKILL.md). Compare options around complexity, cost, scalability, team experience, and constraints, design new components, evaluate proposals, and form ADRs. The entry point mainly provides a decision framework; when deeper system design is needed, follow the original instructions to read `engineering/skills/system-design/SKILL.md` in the same repository. Follow project document conventions for output and use connectors according to actual availability.

<!-- skill: mattpocock/skills@improve-codebase-architecture -->
- **improve-codebase-architecture**: [Source](https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md). Explore the user-specified scope or recent change hotspots for shallow modules, coupling, and testing difficulties, proposing refactoring candidates that hide more implementation complexity behind smaller interfaces. Show problems, benefits, and before/after structure before selecting a direction for deeper design. Diagnosis itself does not authorize implementing a refactor.

Read Matt's associated architecture diagnosis guidance by stage, all from the same repository and version:

- Before diagnosis, read [codebase-design](https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/SKILL.md) to align the analysis of deep modules, interfaces, and replaceable seams. This analytical vocabulary explains design without replacing existing business terminology.
- Read `HTML-REPORT.md` in the diagnosis directory when a report is needed. The original writes reports to the system temporary directory; report-display CDN and browser capabilities depend on the actual environment.
- After the user selects a candidate, read [grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md). Reference [the existing domain-modeling entry](requirements.md#available-skills) only when domain concepts actually need to change. Read relevant codebase-design references when comparing interface options.

The original includes subagent exploration and parallel design; execute according to host capabilities and existing authorization. When delegation is unavailable, perform the same analysis in the current context and state the execution scope, without describing guidance retrieval as running subagents.

## Document collaboration

Architecture documentation describes current structure and constraints; label proposed work with its status. Preserve the context, alternatives, tradeoffs, and consequences of important choices in ADRs. Continue project conventions when updating, referring to [documentation-and-adrs](development.md#documentation-maintenance) as needed and jointly maintaining existing documents.
