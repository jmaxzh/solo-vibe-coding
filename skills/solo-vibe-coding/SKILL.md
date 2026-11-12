---
name: solo-vibe-coding
description: "Select specialist guidance for independent developers with an established product direction across acquisition and conversion, visual design and interaction, requirements and communication, architecture and technical design, development and quality, and production deployment and release. Prioritize quality criteria and automated checks in engineering projects and unify project knowledge conventions. Tasks can be entered independently; does not explore startup ideas."
---

# Solo Vibe Coding

Select specialist guidance and references according to the current problem, reusing project facts, constraints, and existing implementation. Read the directly relevant topic first and add others as needed for compound tasks; combine capabilities through references where topics intersect. Each task can be entered independently.

## Problem areas

| Current problem | Reference |
| --- | --- |
| Product value proposition, marketing copy, content distribution, building in public, websites and landing pages, conversion analysis | [Acquisition and conversion](references/acquisition.md) |
| Interface aesthetics, design systems, interaction, motion, images, video, or finding examples, templates, icons, and media assets | [Visual design and interaction](references/visual-interaction.md) |
| Discussing problems and solutions, understanding feedback, clarifying business terms, slicing an MVP, defining feature scope and acceptance criteria, maintaining requirements | [Requirements and communication](references/requirements.md) |
| System structure, technology selection, module and data boundaries, scaling, architectural patterns, technical constraints, decision records | [Architecture and technical design](references/architecture.md) |
| Implementation, performance, and runtime issues in React, Next.js, Tauri/Rust, Go/Gin, MySQL, and React Native | [Technology-specific guidance](references/technology-stack.md) |
| Defining project quality criteria, establishing check tools and CI, or configuring local automated checks | [Quality criteria and automated checks](references/quality-and-ci.md) |
| Local environment setup and debugging preparation, implementation, code review, troubleshooting, testing, verification, and related usage documentation | [Development and quality](references/development.md) |
| Production configuration, application packaging, single-VPS deployment, release verification, and rollback | [Production deployment and release](references/deployment.md) |

## Engineering project priorities

When starting or taking over any engineering project, prioritize defining quality criteria and establishing automated checks before implementing features or making structural refactors. Read existing standards, tool configuration, tests, and pipelines first; reuse them when they meet requirements. Where they are missing, use [quality criteria and automated checks](references/quality-and-ci.md) to establish an executable baseline appropriate to the project's size. When hosting or repository conditions do not support CI, use repeatable local automated checks. Subsequent tasks follow the existing standards and fill only the gaps exposed by the current change, without rebuilding the infrastructure.

## Application principles

- Provide advice, review, or implementation according to the current request, retaining known product facts, brand, aesthetics, technology stack, and code. Fill only information gaps that affect the task.
- Choose the most relevant specialist guidance, adding capabilities that address independent gaps when necessary. Read skills and assets on demand rather than loading every candidate listed in the same topic.
- Adapt upstream default steps, templates, and quantity requirements to user requirements and project conditions. The model chooses professional judgments, methods, and combinations according to the actual task. Style preferences follow the user's and project's existing choices.
- Locate project knowledge as needed for engineering tasks, using code and tests to understand facts and constraints. Follow the conventions below when reading or writing project knowledge.
- Base content on real products and evidence. References should identify concrete pages, screenshots, component source, or asset files; provide playable examples for dynamic effects. Report delivery status according to files actually obtained, execution, and verification results.

## Project knowledge conventions

Use these conventions to locate, supplement, and maintain project knowledge during engineering tasks, unifying document ownership, storage, and updates across skills. Paths below are relative to the product project being developed; create files according to actual content needs.

### Determine document locations

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
| Research and experiment archives | `docs/research/<topic>.md` | Investigations, experiments, verification, historical analysis worth retaining, with the applicability of conclusions |

When OpenAPI, JSON Schema, Protobuf, or generated interface documentation already exists, reference the primary source files. Specs supplement behavior, error, and compatibility constraints, reducing duplicate field definitions. Ordinary implementation details and executable tests belong in code and tests; project knowledge explains reusable intent, boundaries, and operating methods.

### Documents shared by multiple skills

- Update the existing primary document for a topic first; other documents reference it through links. Name documents by feature, domain, or system topic, avoiding a separate set of equivalent documents for each skill.
- Product requirements and necessary technical constraints for the same feature may share a spec. When content needs splitting, divide it by topic, cross-link the documents, and clarify their respective responsibilities.
- Upstream default directories, filenames, and templates follow the project's storage conventions. Retain existing structures for similar documents and merge useful content into the appropriate location. Use templates to fill information gaps, without creating a second document for the same topic or rearranging unrelated content.
- When a task uses several skills, subsequent guidance continues updating the same relevant document. Read existing content before adding to it, preserve valid constraints, tradeoffs, and qualifications, and check the actual differences introduced by this task.
- Navigation links to the primary maintained location; maintain relevant links when indexed documents are added, moved, or deleted. A small knowledge base may use the project README as its entry point before growing into a separate index.

### What content should express

**Feature specs** follow the actual complexity and include the information needed to understand and implement the feature: goals and scope, key behavior and scenarios, necessary interface or data constraints, errors and boundaries, acceptance and verification basis. Include only relevant content, avoiding empty sections and duplicated code. Link existing tests, interface definitions, and related decisions.

**Architecture documentation** describes the current system; distinguish proposed work from current state. Keep the reasons for important choices in ADRs and link currently effective decisions from the architecture documentation.

**ADRs** record important decisions with real tradeoffs, lasting relevance, and a high cost of change. Include context, decision, alternatives, tradeoffs, and consequences. Retain existing directory and heading formats; use this content structure where no format exists. When a decision changes, add a new record identifying what it supersedes and preserve the earlier record for traceability.

**The glossary** maintains business concepts and meanings, aligning terminology across requirements, code, and documents. Keep implementation details and feature specifications in their corresponding documents.

Distinguish confirmed requirements, current implementation, and ideas awaiting validation. Code and tests can verify current behavior; requirements express intent. When they disagree, explain the discrepancy and its basis and handle it according to the task's intent. Mark uncertainty in unknown content.

### When to maintain documents

- Deliver corresponding documentation updates alongside changes to feature behavior, public interfaces, important constraints, operation, or testing. Add new conclusions with lasting value to the relevant topic.
- Update ordinary instructions directly, with version control retaining history. Temporary investigations, candidate comparisons, and failed attempts normally belong in task feedback; retain them in research archives when a full record is needed.
- Extract confirmed, stable conclusions into usage instructions, specs, architecture, or terminology, preserving necessary rationale and related decisions. Current operating instructions and constraints should be self-contained, usable without chat history or research archives.
- When no persistent knowledge changes, no document is needed merely because a skill was used. Maintain content within the current request rather than expanding into project-wide reorganization.

These knowledge conventions govern document storage and collaboration. User requirements, project conditions, and actual evidence determine which analytical methods, references, and verification to use for the current task.

## Remote reading and discovery

Read the selected skill's original instructions and necessary references from its upstream repository; skills do not need to be installed or registered. The source links in topic references are the entry points. Use the user-specified version or an existing copy; otherwise read the current upstream source.

- When a GitHub `blob` page is incomplete, obtain the corresponding raw source. When only a repository is known, locate the exact `SKILL.md` first. README and search summaries help locate it but do not replace the original skill instructions.
- Resolve relative links against the remote file's directory, including `references/...`, `../...`, `scripts/...`, and `assets/...`. Keep entry points and references in the same repository and version; pin them to the same commit when it can be resolved. Reuse content of that version already read in the session.
- Names and directories can differ; relevant topics note former names. Confirm identity through the original repository's frontmatter and actual source paths. Same-named forks or summaries are insufficient to establish equivalent capabilities.
- Read text guidance, rules, examples, and readable data as needed. Inspect source, necessary files, and runtime requirements and obtain dependencies for scripts, templates, and assets only when the task actually requires execution. Reading guidance does not mean tools have been executed.
- Use image/video models, browsers, renderers, MCP, or APIs actually available in the current environment. When tools, accounts, or dependencies are missing, state the specific gap and deliver the guidance, drafts, or source files still possible.
- When reading fails, check the address, version, or redirects. If it remains unreadable, state that full guidance was not obtained, identify the basis for continuing, and complete what remains possible.

### Discover supplementary skills

<!-- skill: vercel-labs/skills@find-skills -->
- Source: [find-skills in vercel-labs/skills](https://github.com/vercel-labs/skills/tree/main/skills/find-skills); [Original instructions](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md); [Skill page](https://skills.sh/vercel-labs/skills/find-skills).

When this guide does not cover the current need, a candidate is unavailable, or the user requests further discovery, follow the original find-skills instructions. Inspect [skills.sh](https://skills.sh/) or original repositories, checking source, maintenance, adoption, relevant usage feedback, and task fit. An existing host search CLI may be used for read-only search. Stars and installs are signals, not substitutes for quality and suitability judgments; say when no suitable candidate is found.

Consult the [Agent Skills format](https://agentskills.io/), [skills.sh documentation](https://skills.sh/docs), and [search API documentation](https://skills.sh/docs/api) according to the task. Check only the entry points, dependencies, availability, and retrieval methods that affect current use.
