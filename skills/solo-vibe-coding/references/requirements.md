# Requirements and communication

Use for discussing problems, exploring solutions, clarifying business concepts, slicing an MVP, and defining feature scope and acceptance criteria within an existing product direction. Fill information gaps affecting the current task from existing context, distinguishing confirmed content, open decisions, and assumptions.

For existing PRD and user-story-map templates, see [requirements references](resources/requirements.md).

## Required guidance

<!-- skill: mattpocock/skills@grill-with-docs -->
- **grill-with-docs**: [Source](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md), [Skill page](https://skills.sh/mattpocock/skills/grill-with-docs). Required for requirements confirmation. Read and execute the original instructions and their required dependencies from the same upstream repository and version, reusing original instructions already read.

Reuse existing context and confirmed conclusions, clarifying unresolved decisions within the current scope until the user confirms shared understanding before implementation. Revisit affected decisions when the scope changes. Maintain requirements, terminology, and decisions according to the [project knowledge conventions](project-knowledge.md). Reference [architecture and technical design](architecture.md) for technical feasibility and system constraints.

For high-impact behavior that ordinary tests struggle to cover, state relevant preconditions, allowed state transitions, and invariants in the feature spec using business terms. These give [formal verification](formal-verification.md) a concrete target, such as one payment event producing at most one ledger entry.

## Optional guidance

Choose the following guidance for the current task, continuing from existing discussion and documents. Bring any new gaps found while organizing content into the ongoing requirements clarification.

| Current problem | Optional skills |
| --- | --- |
| Organize a complex user journey or slice an MVP, separating first-release essentials from deferred capabilities | user-story-mapping |
| Organize a feature into goals, scope, behavior, and acceptance criteria | write-spec |

<!-- skill: anthropics/knowledge-work-plugins@write-spec -->
- **write-spec**: [Source](https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/write-spec/SKILL.md). Organize a feature idea into the problem, goals, scope, user behavior, priorities, acceptance criteria, and success metrics. The original provides a PRD structure and categorization requirements aimed at product requirements. For interfaces, data contracts, errors, and compatibility, supplement necessary technical content using implementation and architecture references.

### User journeys and MVP slicing

<!-- skill: deanpeters/product-manager-skills@user-story-mapping -->
- **user-story-mapping**: [Source](https://github.com/deanpeters/product-manager-skills/blob/main/skills/user-story-mapping/SKILL.md), [Skill page](https://skills.sh/deanpeters/product-manager-skills/user-story-mapping). Map the target user's goal into activities, steps, and tasks, then draw release boundaries across the journey. Use to organize complex user journeys or define an MVP scope for a new product or substantial feature. Read the same directory's `template.md` and `examples/sample.md` when their structure or examples are useful; related persona and JTBD skills are needed only when existing context leaves a relevant gap.

When slicing an MVP, start from the known user, goal, and usage scenario. Select the minimum capabilities needed to complete one valuable journey from start to outcome, including necessary dependencies and failure handling. Identify first-release essentials, deferred capabilities, and the reasons for the boundary; define observable acceptance criteria for the complete journey. Apply project quality standards to the retained scope. Adapt mapping depth and upstream activity/task counts to the actual workflow; a simple flow can use a short list or table. Add confirmed scope and acceptance criteria to the relevant spec, using write-spec as needed.

## Document collaboration

Retain existing feature specs and glossary; add confirmed requirements to their corresponding topics and explicitly label unconfirmed ideas. When specialist documentation maintenance guidance is needed, directly read [documentation-and-adrs in development and quality](development.md#documentation-maintenance). Product goals and technical constraints may share a spec, with sections organized according to the content.
