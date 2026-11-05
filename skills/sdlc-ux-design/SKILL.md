---
name: sdlc-ux-design
description: Design, implement, modify, review, or optimize product task experiences for desktop, mobile, and web, or advise on UX principles. Use for information organization, interaction behavior, navigation, feedback, user control, recovery, interface wording, and accessible operation. Combine with UI guidance when the task also changes visual presentation.
license: MIT
---

# UX Design

## Applicability

- Apply automatically to product task experience design, implementation, modification, review, optimization, or principle guidance for desktop, mobile, and web.
- This skill works independently of the SDLC workflow and can be installed alone. For tasks that also involve visual hierarchy, typography, color, layout, control geometry, or motion, use available UI guidance such as `sdlc-ui-design` for those decisions.
- Apply to the requested user experience work. Backend-only, database-only, and other tasks without user-facing interaction work are outside this skill's scope.
- When only principle guidance is requested, keep the response at that level rather than expanding into product-specific design, implementation, or acceptance testing.

## Read on demand

- Follow the shared principles below and read platform references for the actual target and scenario.
- Desktop: read [desktop principles](references/desktop.md).
- Mobile: read [mobile principles](references/mobile.md).
- Web: read [web principles](references/web.md).
- For mobile web, read both mobile and web principles. For other combinations, load additional references according to the selected documents' conditions.
- If the platform is unspecified, infer it from the task and project context first. For general advice, use only shared principles. Ask for clarification only if a concrete task still lacks a necessary platform decision.

## Design delivery

Apply this section only to design exploration, visual proposals, concept comparison, interaction design, and prototype validation. Implementation tasks follow their own delivery requirements. In a mixed design-and-implementation task, apply this section only to the explicitly needed design phase.

- Present UX designs as an interactive single-page HTML artifact. Make the main actions, relevant state changes, and necessary return or recovery paths operable in the prototype. Check that controls and feedback demonstrate the intended operation and distinguish relevant states. Adapted from [UI UX Pro Max, controls, feedback, and states](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L164-L186).
- Default to inline CSS and JavaScript so the HTML opens directly. Use local state and clearly identified illustrative data to demonstrate the agreed interaction scope.
- For combined UI/UX design, use image generation first for the UI proposal and provide an interactive UX HTML prototype. If image generation is unavailable or fails, use one HTML artifact for both. This image-first approach and HTML fallback draw on [Impeccable, generated comps and HTML sketches](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/new-work.md).
- Inspect the visible prototype with actual content at the intended viewport. Adapted from [Taste Skill, visible results and content](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md).
- Lead delivery with the interactive preview and openable HTML file. Keep accompanying prose brief and limited to opening instructions, simulation scope, and necessary limitations.
- For principle-only questions, give a brief answer at the requested level.

## Shared principles

### Applying the principles

- Apply principles relevant to the requested work, target platform, and scenario.
- Explain applicability conditions and tradeoffs.
- Before citing numeric requirements or recommendations, verify their source, units, and applicability to the target platform.

### Design principles

- **Tasks and outcomes**: organize the UI by user goals and operation order. Prioritize information and actions needed for the current task. Evaluate each surface by what its users need to accomplish there. Adapted from [Impeccable, surface success](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/SKILL.md#L30-L39).
- **Entry points and controls**: make primary entry points discoverable. Use button labels that identify actions and their objects, and label ambiguous icons. Define the intended operation clearly. Adapted from [Taste Skill, controls and constraints](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L469-L473).
- **Icon semantics**: determine an icon's semantics from its current use. Hide redundant decorative icons beside visible text from the accessibility tree. Provide a text alternative for meaningful standalone icons. Expose an icon control's accessible name and applicable state. Adapted from [UI UX Pro Max, contextual icon semantics](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L13).
- **Task priority**: on a task-oriented screen, let the question users need answered first determine visual emphasis and reading order. Adapted from [Taste Skill, the screen's first question](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/app-screens.md#L186-L199).
- **Presentation structure**: let a presentation page's claims and the evidence for them determine which sections it needs and in what order. Adapted from [Taste Skill, claims and proof](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L100-L105).
- **Factual and illustrative content**: base claims and evidence about real products, customers, or business activity on available facts. Clearly identify illustrative content. Adapted from [Taste Skill, proof and sample content](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/copy.md#L131-L150) and [Impeccable, factual claims](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/craft-floor.md#L40).
- **Data consistency**: within the same reporting scope, keep the same fact consistent wherever it appears, and keep derived figures consistent with their underlying data. Make differences in scope, time period, or calculation basis clear. Derived from [Taste Skill, data consistency and baselines](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/app-screens.md#L168-L184).
- **Cognitive load**: present options and context needed for decisions, reduce memorization and repeated input, and let users inspect and change defaults. Reveal complex options as they become relevant. Keep the information needed for a decision available at the point of choice, including when reducing steps. Adapted from [UI UX Pro Max, progressive disclosure](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L173).
- **Learning**: reduce unnecessary mental effort introduced by the interface. Support the learning that helps users understand and master their task. Adapted from [Impeccable, cognitive load and learning](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/critique.md#L333-L350).
- **Simplification**: judge simplification by the obstacles it removes from the user's task. Preserve necessary functionality, decision-relevant information, and accessibility. Adapted from [Impeccable, the goal of simplification](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/distill.md#L18-L26) and [its boundaries](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/distill.md#L86-L92).
- **Consistency**: follow platform interaction conventions and consistent control behavior.
- **Status and waiting feedback**: show location, processing status, and outcomes. Distinguish loading, empty data, and failure. Respond promptly to actions. For long operations, provide reliable status and show actual progress when measurable. Scale feedback to importance without frequent interruption. Keep each state's meaning, permitted actions, and presentation consistent, distinguishing read-only, disabled, and in-progress states. Adapted from [UI UX Pro Max, state distinctions](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L164-L186).
- **User control**: provide discoverable exit, cancel, and return actions. Support undo and redo where appropriate and clarify which changes they affect. Explain consequences before irreversible actions.
- **Modality**: reserve modal interaction for tasks that require interrupting the current work or protecting focus. Adapted from [Impeccable, modality](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/craft-floor.md#L24).
- **Error prevention and recovery**: state input and operation constraints in advance at the point where they apply. Require confirmation when the consequences warrant it. Validate at appropriate times without interrupting incomplete input. On failure, preserve valid input, identify the issue and its location, explain known causes without presenting guesses as facts, and offer a recovery path.
- **Connectivity and recovery**: for network-dependent tasks, make the capabilities available under limited connectivity clear. Offer fallback or recovery actions that the product actually supports. Adapted from [UI UX Pro Max, offline and slow-network guidance](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L74-L75).
- **Interface language**: use language the intended audience understands. Retain familiar domain terms when they convey the intended meaning precisely. Adapted from [Impeccable, voice and terminology](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/clarify.md#L67-L69).
- **Accessible operation**: support keyboard and assistive technology in the target environment, with identifiable control names, states, and focus. Provide equivalent actions for precision input or complex gestures. Choose interaction behavior based on the input capabilities actually available. Make primary actions usable without hover. Adapted from [Impeccable, input capabilities and hover](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.md#L215-L241).
