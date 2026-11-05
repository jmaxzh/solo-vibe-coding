---
name: sdlc-ui-design
description: Design, implement, modify, review, or optimize visual interfaces for desktop, mobile, and web, or advise on UI principles. Use for visual hierarchy, typography, color, layout, responsive presentation, control geometry, and motion. Combine with UX guidance when the task also changes information organization or interaction behavior.
license: MIT
---

# UI Design

## Applicability

- Apply to the requested visual interface design, implementation, modification, review, optimization, or principle guidance for desktop, mobile, and web. Backend-only, database-only, and other tasks without visual interface work are outside this skill's scope.
- This skill works independently of the SDLC workflow and can be installed alone. For tasks that also involve information organization, interaction behavior, or recovery, use available UX guidance such as `sdlc-ux-design` for those decisions.
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

Use this section for requested visual exploration, proposals, concept comparison, or prototype validation, regardless of change size. In mixed tasks, it applies to the design portion; implementation delivery and acceptance follow the task and existing project requirements.

- Present UI design proposals through image generation first. Existing interface screenshots may serve as references. If image generation is unavailable or fails, present the proposal as a single-page HTML artifact. [Source context](references/sources.md#design-proposal-format).
- For combined UI/UX design, provide the UI design image and an interactive UX HTML prototype. When UI uses the HTML fallback, use one HTML artifact for both.
- For HTML artifacts, default to inline CSS and JavaScript so they open directly. Use local state and clearly identified illustrative data to demonstrate the agreed interaction scope.
- Inspect the rendered design at the intended viewport using actual content where available; otherwise use clearly identified representative content. [Source context](references/sources.md#rendered-design).
- Lead delivery with images, previews, and openable files. Keep accompanying prose brief and limited to opening instructions, simulation scope, and necessary limitations.

## Shared principles

### Applying the principles

- Apply principles relevant to the requested work, target platform, and scenario.
- Explain conditions and tradeoffs that affect the recommendation. Do not prescribe a particular visual style universally.
- Before citing numeric requirements or recommendations, verify their source, units, and applicability to the target platform.

### Design principles

- **Entry points and affordances**: make primary entry points visually recognizable. Use a control's appearance, label, and placement to communicate how to use it and what its action means. [Source context](references/sources.md#entry-points-and-affordances).
- **Consistency and style**: align icons, components, and decoration with product purpose and existing design conventions. Keep content readable and actions usable when adding decoration. Choose a visual style that fits the product type, intended audience, context of use, and stated visual preferences. [Source context](references/sources.md#consistency-and-style).
- **Visual design system**: use product-wide visual design rules by default, with explicit page-level exceptions taking precedence on those pages. Organize reusable design values and patterns by semantic role, extracting shared definitions when repeated needs are established. Preserve distinctions in intent when deciding what to reuse. [Source context](references/sources.md#visual-design-system).
- **Aesthetic direction**: follow the user's explicit aesthetic choices when they conflict with the skill's stylistic preferences. [Source context](references/sources.md#aesthetic-direction).
- **Presentation concept**: ground a presentation page's visual concept in characteristics specific to its subject. [Source context](references/sources.md#presentation-concept).
- **Content fit**: choose layouts that accommodate the actual content's form, length, and quantity. When a structure cannot hold the required content, adapt the structure while preserving facts and necessary information. [Source context](references/sources.md#content-fit).
- **Available media**: when a visual approach depends on media, base it on assets that exist or can actually be obtained. Choose a feasible composition when the required assets are unavailable. [Source context](references/sources.md#available-media).
- **Typography**: choose fonts, sizes, and line spacing for reading conditions. Establish hierarchy through size and weight. Keep body and supporting text readable, including when enlarged, without clipping or hiding necessary content or controls.
- **Target languages**: for the languages and writing systems the product supports, accommodate text expansion, reading direction, and script-specific shaping in typography and layout. [Source context](references/sources.md#target-languages).
- **Layout and spacing**: use position and grouping to express importance and relationships. Apply alignment and spacing consistently. Match density to reading, comparison, and operation needs. Avoid competing emphasis. Choose layout structure based on the space available to the interface or container. Reorganize content as needed when that space changes, keeping primary content and actions accessible. [Source context](references/sources.md#layout-and-spacing).
- **Color, states, and focus**: define primary, supporting, and status colors and use them consistently. Ensure adequate contrast for text, controls, and states. When color conveys information, supplement it with text or shapes. Make control states and focus visually identifiable. For each appearance the product supports, verify text and control readability and state distinctions. Where the target platform exposes high-contrast preferences, honor them in the rendered interface. [Source context](references/sources.md#color-states-and-focus).
- **Interaction targets**: size and space targets for mouse, touch, or other input methods, making them easy to select without accidental adjacent activation.
- **Data encoding**: when presenting data graphically, choose visual encodings suited to the relationships users need to understand. Make applicable units and scales clear. [Source context](references/sources.md#data-encoding).
- **Motion purpose**: use motion on task-oriented and reading surfaces for feedback, state changes, or continuity. When motion explains a change, make its cause and effect understandable. On persuasive or experiential surfaces, motion may serve a clear expressive purpose in its own right. When a user enables a reduced-motion preference supported by the target environment, honor it. When reducing or replacing motion, keep content readable and necessary state changes understandable. Nonessential motion must not block input. Where an interaction supports switching or cancellation, make its animation interruptible and transition to the latest interaction state; interrupting an animation does not itself cancel a background operation. [Source context](references/sources.md#motion-purpose).
