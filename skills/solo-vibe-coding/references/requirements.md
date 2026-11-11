# Requirements and communication

Use for discussing problems, understanding user feedback, exploring solutions, clarifying business concepts, and defining feature scope and acceptance criteria within an existing product direction. Fill information gaps affecting the current task from existing context, distinguishing confirmed content, open decisions, and assumptions.

| Current problem | Optional skills |
| --- | --- |
| Analyze interviews, feedback, or public demand signals | customer-research |
| Explore problems, compare solutions, test assumptions | product-brainstorming |
| Organize a feature into goals, scope, behavior, and acceptance criteria | write-spec |
| Conflicting terms or unclear business concepts and relationships | domain-modeling |

Requirements confirmation establishes shared understanding and remaining uncertainty; the current task determines the discussion method. Maintain requirements and terminology according to the [root skill's knowledge conventions](../SKILL.md#project-knowledge-conventions). Reference [architecture and technical design](architecture.md) for technical feasibility and system constraints.

## Available skills

<!-- skill: coreyhaines31/marketingskills@customer-research -->
- **customer-research**: [Source](https://github.com/coreyhaines31/marketingskills/blob/main/skills/customer-research/SKILL.md), [Skill page](https://skills.sh/coreyhaines31/marketingskills/customer-research). Supports interview and feedback analysis, public reviews and community material, and interview questionnaires. Existing customer material and public demand material call for different research approaches.

<!-- skill: anthropics/knowledge-work-plugins@write-spec -->
- **write-spec**: [Source](https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/write-spec/SKILL.md). Organize a feature idea into the problem, goals, scope, user behavior, priorities, acceptance criteria, and success metrics. The original provides a PRD structure and categorization requirements aimed at product requirements. For interfaces, data contracts, errors, and compatibility, supplement necessary technical content using implementation and architecture references.

<!-- skill: anthropics/knowledge-work-plugins@product-brainstorming -->
- **product-brainstorming**: [Source](https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/product-brainstorming/SKILL.md). Explore problems, generate solutions, and challenge assumptions within the existing product direction. Provides first principles, JTBD, opportunity trees, SCAMPER, and other thinking tools; the original includes divergent/convergent session structure and solution-count requirements. Select methods according to the actual exploration need, then move confirmed conclusions into the feature spec.

<!-- skill: mattpocock/skills@domain-modeling -->
- **domain-modeling**: [Source](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md). Clarify terminology, business concepts, and relationships, testing understanding against concrete scenarios and existing code. The original actively questions vague or contradictory concepts and immediately updates the glossary; use for tasks that actually require domain-model changes. Maintain vocabulary and necessary ADRs according to project conventions; merely reusing existing terms does not require a domain-modeling discussion.

## Document collaboration

Retain existing feature specs and glossary; add confirmed requirements to their corresponding topics and explicitly label unconfirmed ideas. When specialist documentation maintenance guidance is needed, directly read [documentation-and-adrs in development and quality](development.md#documentation-maintenance). Product goals and technical constraints may share a spec, with sections organized according to the content.
