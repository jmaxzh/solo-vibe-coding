# Project knowledge conventions

Documentation should contain only what is necessary to understand, use, and maintain the deliverable.

Use these conventions to locate, supplement, and maintain project knowledge during engineering tasks, unifying document ownership, storage, and updates across skills. Paths below are relative to the product project being developed; create files according to actual content needs.

## Determine document locations

First inspect existing project instructions, README, documentation entry points, and relevant documents, retaining established directories, names, and formats. Use one storage convention per document category; use the defaults below for categories without an existing convention. When duplicates or contradictions appear, determine the primary maintained location from content, references, and current implementation, and correct or explain differences within the task's scope.

| Content | Default location | What to retain |
| --- | --- | --- |
| Project usage entry point | `README.md` | Purpose, setup, common commands, links to detailed documentation |
| Knowledge navigation | `docs/README.md` | Topic links to existing documents with short descriptions, avoiding duplicated content |
| Current system structure | `docs/architecture.md` | Modules and boundaries, dependencies, key data flows, runtime forms, current constraints |
| Feature specification | `docs/specs/<feature>.md` | Goals, scope, behavior, necessary technical constraints, acceptance basis |
| Important architectural decisions | `docs/adr/<nnnn>-<decision>.md` | Context, choice, alternatives, tradeoffs, consequences; continue existing numbering |
| Business terminology | `GLOSSARY.md` | Domain concepts, precise definitions, relationships; retain existing mappings for multiple domain contexts |
| Cross-task testing knowledge | `docs/testing.md` | Lasting test strategy, commands, test-data constraints, known coverage gaps |
| Project quality standards and check entry point | `CONSTRAINTS.md` | Applicable criteria, thresholds or baselines, actual check commands, timing, blocking rules, exceptions; reference tool configuration and pipelines |

When OpenAPI, JSON Schema, Protobuf, or generated interface documentation already exists, reference the primary source files. Specs supplement behavior, error, and compatibility constraints, reducing duplicate field definitions. Ordinary implementation details and executable tests belong in code and tests; project knowledge explains reusable intent, boundaries, and operating methods.

## Documents shared by multiple skills

- Update the existing primary document for a topic first; other documents reference it through links. Name documents by feature, domain, or system topic, avoiding a separate set of equivalent documents for each skill.
- Product requirements and necessary technical constraints for the same feature may share a spec. When content needs splitting, divide it by topic, cross-link the documents, and clarify their respective responsibilities.
- Upstream default directories, filenames, and templates follow the project's storage conventions. Retain existing structures for similar documents and merge useful content into the appropriate location. Use templates to fill information gaps, without creating a second document for the same topic or rearranging unrelated content.
- When a task uses several skills, subsequent guidance continues updating the same relevant document. Read existing content before adding to it, preserve valid constraints, tradeoffs, and qualifications, and check the actual differences introduced by this task.
- Navigation links to the primary maintained location; maintain relevant links when indexed documents are added, moved, or deleted. A small knowledge base may use the project README as its entry point before growing into a separate index.

## What content should express

**Feature specs** follow the actual complexity and include the information needed to understand and implement the feature: goals and scope, key behavior and scenarios, necessary interface or data constraints, errors and boundaries, acceptance and verification basis. Include only relevant content, avoiding empty sections and duplicated code. Link existing tests, interface definitions, and related decisions.

**Architecture documentation** describes the current system; distinguish proposed work from current state. Keep the reasons for important choices in ADRs and link currently effective decisions from the architecture documentation.

**ADRs** record important decisions with real tradeoffs, lasting relevance, and a high cost of change. Include context, decision, alternatives, tradeoffs, and consequences. Retain existing directory and heading formats; use this content structure where no format exists. Update the relevant decision document when the choice or its rationale changes.

**The glossary** maintains business concepts and meanings, aligning terminology across requirements, code, and documents. Keep implementation details and feature specifications in their corresponding documents.

Distinguish confirmed requirements, current implementation, and ideas awaiting validation. Code and tests can verify current behavior; requirements express intent. When they disagree, explain the discrepancy and its basis and handle it according to the task's intent. Mark uncertainty in unknown content.

## When to maintain documents

- Deliver corresponding documentation updates alongside changes to feature behavior, public interfaces, important constraints, operation, or testing. Add new conclusions with lasting value to the relevant topic.
- Extract confirmed, stable conclusions into usage instructions, specs, architecture, or terminology, preserving necessary rationale and related decisions. Current operating instructions and constraints should be self-contained, usable without chat history.
- When no persistent knowledge changes, no document is needed merely because a skill was used. Maintain content within the current request rather than expanding into project-wide reorganization.

### Reflect on corrections

<!-- skill: backnotprop/pstack@reflect -->
- **Reflect**: [Original instructions](https://github.com/backnotprop/pstack/blob/main/skills/reflect/SKILL.md), [Skill page](https://skills.sh/backnotprop/pstack/reflect).

Read and execute Reflect's original instructions for correction-triggered reflection or an explicit reflection request. Reflect handles durable improvements to reusable skill behavior. Project-specific design principles and conventions continue to follow this document's ownership and maintenance rules; keep them in their primary project documents rather than generalizing them into cross-project skill rules.

Retain Reflect's filtering and approval-before-editing requirements. Automatically starting reflection does not authorize a skill edit; reuse explicit authorization only within its agreed scope, presenting the proposed changes and destination before seeking any additional approval. Edit the maintained skill source when available, rather than an installation cache or an overriding copy; use the upstream installation-copy workflow only for skills without a maintained source.

These knowledge conventions govern document storage and collaboration. User requirements, project conditions, and actual evidence determine which analytical methods, references, and verification to use for the current task.
