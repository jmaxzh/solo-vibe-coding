# Requirements and communication

Use for discussing problems, understanding user feedback, exploring solutions, clarifying business concepts, slicing an MVP, and defining feature scope and acceptance criteria within an existing product direction. Fill information gaps affecting the current task from existing context, distinguishing confirmed content, open decisions, and assumptions.

For existing PRD and user-story-map templates, see [requirements references](resources/requirements.md).

| Current problem | Optional skills |
| --- | --- |
| Analyze interviews, feedback, or public demand signals | customer-research |
| Explore problems, compare solutions, test assumptions | product-brainstorming |
| Slice an MVP around a complete user journey, separating first-release essentials from deferred capabilities | user-story-mapping |
| Organize a feature into goals, scope, behavior, and acceptance criteria | write-spec |
| Review requirements and specs before implementation to uncover omitted key decisions and implicit assumptions, aligning implementation expectations through questioning | grill-with-docs |
| Conflicting terms or unclear business concepts and relationships | domain-modeling |

Requirements confirmation establishes shared understanding and remaining uncertainty; the current task determines the discussion method. Maintain requirements and terminology according to the [project knowledge conventions](project-knowledge.md). Reference [architecture and technical design](architecture.md) for technical feasibility and system constraints.

For high-impact behavior that ordinary tests struggle to cover, state relevant preconditions, allowed state transitions, and invariants in the feature spec using business terms. These give [formal verification](formal-verification.md) a concrete target, such as one payment event producing at most one ledger entry.

## Available skills

<!-- skill: coreyhaines31/marketingskills@customer-research -->
- **customer-research**: [Source](https://github.com/coreyhaines31/marketingskills/blob/main/skills/customer-research/SKILL.md), [Skill page](https://skills.sh/coreyhaines31/marketingskills/customer-research). Supports interview and feedback analysis, public reviews and community material, and interview questionnaires. Existing customer material and public demand material call for different research approaches.

<!-- skill: anthropics/knowledge-work-plugins@write-spec -->
- **write-spec**: [Source](https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/write-spec/SKILL.md). Organize a feature idea into the problem, goals, scope, user behavior, priorities, acceptance criteria, and success metrics. The original provides a PRD structure and categorization requirements aimed at product requirements. For interfaces, data contracts, errors, and compatibility, supplement necessary technical content using implementation and architecture references.

<!-- skill: anthropics/knowledge-work-plugins@product-brainstorming -->
- **product-brainstorming**: [Source](https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/product-brainstorming/SKILL.md). Explore problems, generate solutions, and challenge assumptions within the existing product direction. Provides first principles, JTBD, opportunity trees, SCAMPER, and other thinking tools; the original includes divergent/convergent session structure and solution-count requirements. Select methods according to the actual exploration need, then move confirmed conclusions into the feature spec.

<!-- skill: mattpocock/skills@grill-with-docs -->
- **grill-with-docs**: [Source](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md), [Skill page](https://skills.sh/mattpocock/skills/grill-with-docs). Proactively review existing requirements and specs before implementation to uncover omitted key decisions and implicit assumptions that could change the result, aligning implementation expectations through questioning and concrete scenarios. The entry invokes [grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md) and domain-modeling listed on this page; read both dependencies from the same repository and version, reusing original instructions already read.

<!-- skill: mattpocock/skills@domain-modeling -->
- **domain-modeling**: [Source](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md). Clarify terminology, business concepts, and relationships, testing understanding against concrete scenarios and existing code. The original actively questions vague or contradictory concepts and immediately updates the glossary; use for tasks that actually require domain-model changes. Maintain vocabulary and necessary ADRs according to project conventions; merely reusing existing terms does not require a domain-modeling discussion.

## MVP slicing

<!-- skill: deanpeters/product-manager-skills@user-story-mapping -->
- **user-story-mapping**: [Source](https://github.com/deanpeters/product-manager-skills/blob/main/skills/user-story-mapping/SKILL.md), [Skill page](https://skills.sh/deanpeters/product-manager-skills/user-story-mapping). Map the target user's goal into activities, steps, and tasks, then draw a first-release boundary across the journey. Use when a new product or substantial feature needs an MVP scope. Read the same directory's `template.md` and `examples/sample.md` when their structure or examples are useful; related persona and JTBD skills are needed only when existing context leaves a relevant gap.

Start from the known user, goal, and usage scenario. Select the minimum capabilities needed to complete one valuable journey from start to outcome, including necessary dependencies and failure handling. Identify first-release essentials, deferred capabilities, and the reasons for the boundary; define observable acceptance criteria for the complete journey. Apply project quality standards to the retained scope. Adapt mapping depth and upstream activity/task counts to the actual workflow; a simple flow can use a short list or table. Add confirmed scope and acceptance criteria to the relevant spec, using write-spec as needed.

## Document collaboration

Retain existing feature specs and glossary; add confirmed requirements to their corresponding topics and explicitly label unconfirmed ideas. When specialist documentation maintenance guidance is needed, directly read [documentation-and-adrs in development and quality](development.md#documentation-maintenance). Product goals and technical constraints may share a spec, with sections organized according to the content.
