# Architecture references

Find existing database schemas, application implementations, and architectural case studies. Compare relevant structures and tradeoffs against the project's scale and constraints; use [architecture and technical design](../architecture.md) for decisions and [technology-specific guidance](../technology-stack.md) for implementation details.

## DrawSQL Templates

<!-- resource: https://drawsql.app/templates -->
- [Template catalog](https://drawsql.app/templates): database diagrams and clonable schemas from existing applications and open-source projects, such as [WordPress](https://drawsql.app/templates/wordpress).
- Use a concrete schema to study entities and relationships, then check the corresponding version's source migrations or schema files before reuse. Public/private diagrams, table limits, cloning, and SQL export depend on the selected feature and [plan](https://drawsql.app/pricing).

## CodebaseShow and RealWorld

<!-- resource: https://codebase.show/projects/realworld -->
- [Implementation catalog](https://codebase.show/projects/realworld), linked by the [RealWorld repository](https://github.com/realworld-apps/realworld): different frontend and backend implementations of the same application and shared API specification.
- Choose a relevant stack and read the actual implementation to compare module organization, API boundaries, authentication, and data handling. The catalog requires JavaScript; source repositories provide another entry point. Each implementation's maintenance, license, dependency versions, and test results must be assessed separately.

## The Architecture of Open Source Applications

<!-- resource: https://aosabook.org/en/ -->
- [Case-study collection](https://aosabook.org/en/): application authors explain real systems' components, interactions, design choices, and lessons.
- Read the chapter relevant to the current architectural question. Online chapters are available; some describe older systems, so use their reasoning and tradeoffs while checking applicability to the current stack and project scale.
