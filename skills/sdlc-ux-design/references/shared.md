# Shared UX Rules

On-demand execution clauses R4–R8 use the entry document’s P bases; select by requested work, platform, and scenario.

## Tasks, content, and decisions

| Clause | When | Requirement | Criterion | Basis |
| --- | --- | --- | --- | --- |
| **R4.1** | Organizing a task surface | Organize the UI by user goals and operation order. [Source context](sources.md#tasks-and-outcomes) | Organization follows the user's task sequence. | P2 |
| **R4.2** | Organizing a task surface | Prioritize information and actions needed for the current task. | Task-critical information and actions take priority. | P2 |
| **R4.3** | Organizing a task surface | Evaluate the surface by what its users need to accomplish there. | Evaluation names the surface's user outcome. | P2 |
| **R4.4** | Designing a task-oriented screen | Let the question users need answered first determine visual emphasis and reading order. [Source context](sources.md#task-priority) | Emphasis and reading order answer the first task question. | P2 |
| **R4.5** | Structuring a presentation page | Let its claims and their evidence determine sections and order. [Source context](sources.md#presentation-structure) | Sections support the page's claims and evidence. | P2 |
| **R4.6** | Using claims or evidence about real products, customers, or business activity | Base them on available facts. [Source context](sources.md#factual-and-illustrative-content) | Illustrative details are not presented as real evidence. | P5 |
| **R4.7** | Using illustrative content, including prototype data | Clearly identify it as illustrative. | Illustrative content is distinguishable from factual content. | P5 |
| **R4.8** | Repeating facts in the same reporting scope | Keep each fact consistent wherever it appears. [Source context](sources.md#data-consistency) | Repeated facts agree within the reporting scope. | P5 |
| **R4.9** | Showing derived figures | Keep figures consistent with their underlying data. | Displayed figures reconcile with underlying data. | P5 |
| **R4.10** | Scope, time period, or calculation basis differs | Make the differences clear. | Differences in reporting bases are explicit. | P5 |
| **R4.11** | Supporting a decision | Present the needed options and context. [Source context](sources.md#cognitive-load) | Decision inputs are available at the point of choice, including when reducing steps. | P2 |
| **R4.12** | Supporting a decision | Reduce memorization imposed by the interface. | Task context can be consulted rather than recalled from another step. | P2 |
| **R4.13** | Supporting a decision | Reduce repeated input. | The task does not needlessly request already supplied information. | P2 |
| **R4.14** | Supporting a decision | Let users inspect defaults. | Defaults are inspectable before the decision. | P2 |
| **R4.15** | Supporting a decision | Let users change defaults. | Defaults can be changed for the decision. | P2 |
| **R4.16** | Complex options become relevant to the task | Reveal those options. | Complex options are disclosed when relevant, with decision context preserved. | P2 |
| **R4.17** | Supporting task learning | Reduce unnecessary mental effort introduced by the interface. [Source context](sources.md#learning) | Removed effort concerns operating the interface, not understanding the task. | P2 |
| **R4.18** | Supporting task learning | Support learning that helps users understand and master their task. | Task-understanding support survives simplification. | P2 |
| **R4.19** | Simplifying an experience | Judge simplification by the obstacles removed from the user's task. [Source context](sources.md#simplification) | The removed task obstacles can be named. | P2 |
| **R4.20** | Simplifying an experience | Preserve necessary functionality. | The required task remains completable. | P2 |
| **R4.21** | Simplifying an experience | Preserve decision-relevant information. | Decision inputs remain available. | P2 |
| **R4.22** | Simplifying an experience | Preserve accessibility. | Supported accessible operation remains available. | P2 |

## Controls and language

| Clause | When | Requirement | Criterion | Basis |
| --- | --- | --- | --- | --- |
| **R5.1** | Providing entry points and controls | Make primary entry points discoverable. [Source context](sources.md#entry-points-and-controls) | Primary task entry points can be located. | P3 |
| **R5.2** | Providing entry points and controls | Make each control's intended action clear. | Users can identify the action before activating it. | P3 |
| **R5.3** | Providing entry points and controls | Use button labels that identify actions and their objects. | Labels identify both action and object. | P3 |
| **R5.4** | Providing entry points and controls | Label ambiguous icons. | Ambiguous glyphs have explanatory labels. | P3 |
| **R5.5** | Determining icon semantics | Use the icon's current use. [Source context](sources.md#icon-semantics) | Decoration, standalone information, and controls are distinguished by use, not glyph alone. | P3 |
| **R5.6** | An icon redundantly decorates visible text | Hide it from the accessibility tree. | Redundant decoration is not announced. | P4 |
| **R5.7** | A standalone icon carries meaning | Provide a text alternative. | The icon's information has a text equivalent. | P4 |
| **R5.8** | An icon is a control | Expose its accessible name. | The control has an accessible name. | P4 |
| **R5.9** | An icon is a control | Expose its applicable state. | Relevant control state is exposed. | P4 |
| **R5.10** | Choosing control behavior | Follow platform interaction conventions. | Behavior agrees with target-platform conventions. | P3 |
| **R5.11** | Choosing control behavior | Keep control behavior consistent. | Equivalent controls in the same context behave consistently. | P3 |
| **R5.12** | Writing interface language | Use language the intended audience understands. [Source context](sources.md#interface-language) | Wording is understandable to the intended audience. | P3 |
| **R5.13** | Writing interface language | Retain familiar domain terms when they convey the intended meaning precisely. | Precise familiar terms are not replaced with less precise wording. | P3 |

## Status and feedback

| Clause | When | Requirement | Criterion | Basis |
| --- | --- | --- | --- | --- |
| **R6.1** | Showing task or navigation state | Show the user's current place. [Source context](sources.md#status-and-waiting-feedback) | The current task or navigation position is identifiable. | P3 |
| **R6.2** | Showing task or navigation state | Show processing status. | Processing is identifiable while occurring. | P3 |
| **R6.3** | Showing task or navigation state | Show outcomes. | The result of the operation is identifiable. | P3 |
| **R6.4** | Showing task or navigation state | Distinguish loading, empty data, and failure. | These states cannot be mistaken for one another. | P3 |
| **R6.5** | Showing task or navigation state | Align each state's presentation with its meaning. | Presentation agrees with state meaning. | P3 |
| **R6.6** | Showing task or navigation state | Align available actions with state meaning. | Actions agree with the represented state. | P3 |
| **R6.7** | Showing task or navigation state | Distinguish read-only, disabled, and in-progress states. | These states have distinguishable behavior and feedback. | P3 |
| **R6.8** | Responding to an action | Respond promptly. | The action is acknowledged without leaving users uncertain whether it registered. | P3 |
| **R6.9** | An operation is long-running | Provide reliable status. | Status reflects the operation's actual state. | P3 |
| **R6.10** | Progress is measurable | Show actual progress. | Displayed progress comes from measured work. | P3 |
| **R6.11** | Choosing feedback intensity | Scale feedback to importance without frequent interruption. | Routine updates do not repeatedly interrupt the task. | P3 |

## Control and recovery

| Clause | When | Requirement | Criterion | Basis |
| --- | --- | --- | --- | --- |
| **R7.1** | Supporting user control | Provide discoverable exit, cancel, and return actions. [Source context](sources.md#user-control) | These actions can be found in the task flow. | P3 |
| **R7.2** | Undo/redo applicability is being decided | Support undo and redo where appropriate to those changes. | Explain applicability conditions and tradeoffs under R2.11. | P3 |
| **R7.3** | Undo/redo applicability is being decided | Clarify which changes undo and redo affect. | The affected changes are identifiable before use. | P3 |
| **R7.4** | Before an irreversible action | Explain consequences. | Consequences are available before committing. | P3 |
| **R7.5** | A visual transition is running | Do not prevent supported return, switching, or cancellation actions. | Supported actions remain operable during transitions. | P3 |
| **R7.6** | A visual transition is running | Distinguish interrupting an animation from cancelling a background operation. | Animation interruption is not represented as background cancellation unless that operation is actually cancelled. | P3 |
| **R7.7** | Considering modal interaction | Reserve it for tasks requiring interruption of current work or protection of focus. [Source context](sources.md#modality) | The task requires interruption or protected focus. | P3 |
| **R7.8** | Input or operation constraints apply | State constraints in advance at the point where they apply. | Users can see constraints before the constrained action. | P3 |
| **R7.9** | Operation consequences warrant confirmation | Require confirmation. | Confirmation precedes committing the consequential action; judge against the operation's stated consequences. | P3 |
| **R7.10** | Validating input | Validate at task-appropriate times without interrupting incomplete input. | Timing fits the task/input state; incomplete input is not interrupted. | P3 |
| **R7.11** | An operation fails | Preserve valid input. | Valid entered data survives failure. | P3 |
| **R7.12** | An operation fails | Identify the issue. | The failed condition is identifiable. | P3 |
| **R7.13** | An operation fails | Identify the issue's location. | Users can locate the affected field or operation. | P3 |
| **R7.14** | An operation fails | Explain known causes without presenting guesses as facts. | Known causes and hypotheses are distinguishable. | P3 |
| **R7.15** | An operation fails | Offer a recovery path. | A next action for recovery is available. | P3 |
| **R7.16** | The task depends on a network | Make capabilities under limited connectivity clear. [Source context](sources.md#connectivity-and-recovery) | Users can tell what remains available. | P3 |
| **R7.17** | The task depends on a network | Offer fallback or recovery actions the product actually supports. | No unsupported offline, queuing, or recovery capability is promised. | P3 |

## Accessible operation

| Clause | When | Requirement | Criterion | Basis |
| --- | --- | --- | --- | --- |
| **R8.1** | Supporting operation in the target environment | Support keyboard operation. [Source context](sources.md#accessible-operation) | Task actions can be performed with the target environment's keyboard interaction. | P4 |
| **R8.2** | Supporting operation in the target environment | Support assistive technology operation with identifiable control names, states, and focus. | Assistive technology can identify control names, states, and focus. | P4 |
| **R8.3** | Supporting operation in the target environment | Choose interaction behavior based on input capabilities actually available. | Behavior is not inferred from screen size alone. | P4 |
| **R8.4** | Supporting operation in the target environment | Make primary actions usable without hover. | A non-hover path performs each primary action. | P4 |
| **R8.5** | Using precision input or complex gestures | Provide equivalent actions. | The same task outcome is reachable by an equivalent action. | P4 |

