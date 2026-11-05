---
name: sdlc-ux-design
description: Design, implement, modify, review, or optimize product task experiences for desktop, mobile, and web, or advise on UX principles. Use for information organization, interaction behavior, navigation, feedback, user control, recovery, interface wording, and accessible operation. Combine with UI guidance when the task also changes visual presentation.
license: MIT
---

# UX Design

## Applicability

- Apply to the requested product task experience design, implementation, modification, review, optimization, or principle guidance for desktop, mobile, and web. Backend-only, database-only, and other tasks without user-facing interaction work are outside this skill's scope.
- This skill works independently of the SDLC workflow and can be installed alone. For tasks that also involve visual hierarchy, typography, color, layout, control geometry, or motion, use available UI guidance such as `sdlc-ui-design` for those decisions.
- When only principle guidance is requested, give a brief answer at that level rather than expanding into product-specific design, implementation, or acceptance testing.
- For review-only requests, report findings and recommendations without creating a new design or changing implementation.
- Design exploration, proposals, concept comparison, and prototype validation create or modify standalone design artifacts only. Change production code only when the request includes implementation.
- For mixed requests, deliver the design before continuing with the authorized implementation. Deliver and assess each separately; prototype validation does not establish implementation acceptance.
- For implementation, follow existing project checks. When the current environment supports reproducing a defect, use a focused recheck of that defect; choose checks for other behavior changes according to their risk and scope. Do not set up additional verification environments, produce formal verification reports, or duplicate existing checks solely to satisfy this skill.
- For implementation results, report checks performed, observations, and unverified scope. Distinguish runtime evidence, code-based inference, and subjective judgment; model self-assessment is not user acceptance.

## Read on demand

- Follow the shared principles below and read platform references for the actual target and scenario.
- Desktop: read [desktop principles](references/desktop.md).
- Mobile: read [mobile principles](references/mobile.md).
- Web: read [web principles](references/web.md).
- For mobile web, read both mobile and web principles. For other combinations, load additional references according to the selected documents' conditions.
- If the platform is unspecified, infer it from the task and project context first. For general advice, use only shared principles. Ask for clarification only if a concrete task still lacks a necessary platform decision.
- For an adaptation's context or limits, consult its linked entry in [source context](references/sources.md) and, when needed, the original passage. The English instructions in this skill define the local adaptation; consultation does not import upstream workflows or toolchains.

## Design delivery

Use this section for requested interaction exploration, proposals, concept comparison, or prototype validation, regardless of change size. In mixed tasks, it applies to the design portion; implementation delivery and acceptance follow the task and existing project requirements.

- Present UX designs as an interactive single-page HTML artifact. Make the main actions, relevant state changes, and necessary return or recovery paths operable in the prototype. Check that controls and feedback demonstrate the intended operation and distinguish relevant states. [Source context](references/sources.md#interactive-prototype).
- Default to inline CSS and JavaScript so the HTML opens directly. Use local state and clearly identified illustrative data to demonstrate the agreed interaction scope.
- For combined UI/UX design, use image generation first for the UI proposal and provide an interactive UX HTML prototype. If image generation is unavailable or fails, use one HTML artifact for both. [Source context](references/sources.md#combined-design-format).
- Inspect the rendered prototype at the intended viewport using actual content where available; otherwise use clearly identified representative content. [Source context](references/sources.md#rendered-prototype).
- Lead delivery with the interactive preview and openable HTML file. Keep accompanying prose brief and limited to opening instructions, simulation scope, and necessary limitations.

## Shared principles

### Applying the principles

- Apply principles relevant to the requested work, target platform, and scenario.
- Explain conditions and tradeoffs that affect the recommendation.
- Before citing numeric requirements or recommendations, verify their source, units, and applicability to the target platform.

### Design principles

- **Tasks and outcomes**: organize the UI by user goals and operation order. Prioritize information and actions needed for the current task. Evaluate each surface by what its users need to accomplish there. [Source context](references/sources.md#tasks-and-outcomes).
- **Entry points and controls**: make primary entry points discoverable and each control's intended action clear. Use button labels that identify actions and their objects; label ambiguous icons. [Source context](references/sources.md#entry-points-and-controls).
- **Icon semantics**: determine an icon's semantics from its current use. Hide redundant decorative icons beside visible text from the accessibility tree. Provide a text alternative for meaningful standalone icons. Expose an icon control's accessible name and applicable state. [Source context](references/sources.md#icon-semantics).
- **Task priority**: on a task-oriented screen, let the question users need answered first determine visual emphasis and reading order. [Source context](references/sources.md#task-priority).
- **Presentation structure**: let a presentation page's claims and the evidence for them determine which sections it needs and in what order. [Source context](references/sources.md#presentation-structure).
- **Factual and illustrative content**: base claims and evidence about real products, customers, or business activity on available facts. Clearly identify illustrative content. [Source context](references/sources.md#factual-and-illustrative-content).
- **Data consistency**: within the same reporting scope, keep the same fact consistent wherever it appears, and keep derived figures consistent with their underlying data. Make differences in scope, time period, or calculation basis clear. [Source context](references/sources.md#data-consistency).
- **Cognitive load**: present options and context needed for decisions, reduce memorization and repeated input, and let users inspect and change defaults. Reveal complex options as they become relevant. Keep the information needed for a decision available at the point of choice, including when reducing steps. [Source context](references/sources.md#cognitive-load).
- **Learning**: reduce unnecessary mental effort introduced by the interface. Support the learning that helps users understand and master their task. [Source context](references/sources.md#learning).
- **Simplification**: judge simplification by the obstacles it removes from the user's task. Preserve necessary functionality, decision-relevant information, and accessibility. [Source context](references/sources.md#simplification).
- **Consistency**: follow platform interaction conventions and consistent control behavior.
- **Status and waiting feedback**: show the user's current place in the task or navigation, processing status, and outcomes. Distinguish loading, empty data, and failure. Respond promptly to actions. For long operations, provide reliable status and show actual progress when measurable. Scale feedback to importance without frequent interruption. Align each state's presentation and available actions with its meaning; distinguish read-only, disabled, and in-progress states. [Source context](references/sources.md#status-and-waiting-feedback).
- **User control**: provide discoverable exit, cancel, and return actions. Support undo and redo where appropriate and clarify which changes they affect. Explain consequences before irreversible actions. Visual transitions must not prevent supported return, switching, or cancellation actions. Distinguish interrupting an animation from cancelling a background operation. [Source context](references/sources.md#user-control).
- **Modality**: reserve modal interaction for tasks that require interrupting the current work or protecting focus. [Source context](references/sources.md#modality).
- **Error prevention and recovery**: state input and operation constraints in advance at the point where they apply. Require confirmation when the consequences warrant it. Validate at appropriate times without interrupting incomplete input. On failure, preserve valid input, identify the issue and its location, explain known causes without presenting guesses as facts, and offer a recovery path.
- **Connectivity and recovery**: for network-dependent tasks, make the capabilities available under limited connectivity clear. Offer fallback or recovery actions that the product actually supports. [Source context](references/sources.md#connectivity-and-recovery).
- **Interface language**: use language the intended audience understands. Retain familiar domain terms when they convey the intended meaning precisely. [Source context](references/sources.md#interface-language).
- **Accessible operation**: support keyboard and assistive technology in the target environment, with identifiable control names, states, and focus. Provide equivalent actions for precision input or complex gestures. Choose interaction behavior based on the input capabilities actually available. Make primary actions usable without hover. [Source context](references/sources.md#accessible-operation).
