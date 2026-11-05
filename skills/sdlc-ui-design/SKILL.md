---
name: sdlc-ui-design
description: Design, implement, modify, review, or optimize visual interfaces for desktop, mobile, and web, or advise on UI principles. Use for visual hierarchy, typography, color, layout, responsive presentation, control geometry, and motion. Combine with UX guidance when the task also changes information organization or interaction behavior.
license: MIT
---

# UI Design

## Applicability

- Apply automatically to visual interface design, implementation, modification, review, optimization, or principle guidance for desktop, mobile, and web.
- This skill works independently of the SDLC workflow and can be installed alone. For tasks that also involve information organization, interaction behavior, or recovery, use available UX guidance such as `sdlc-ux-design` for those decisions.
- Apply to the requested visual work. Backend-only, database-only, and other tasks without visual interface work are outside this skill's scope.
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

- Present UI design proposals through image generation first. Existing interface screenshots may serve as references. If image generation is unavailable or fails, present the proposal as a single-page HTML artifact. Adapted from [Impeccable, generated comps and HTML sketches](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/new-work.md).
- For combined UI/UX design, provide the UI design image and an interactive UX HTML prototype. When UI uses the HTML fallback, use one HTML artifact for both.
- Default to inline CSS and JavaScript so the HTML opens directly. Use local state and clearly identified illustrative data to demonstrate the agreed interaction scope.
- Inspect the visible design with actual content at the intended viewport. Adapted from [Taste Skill, visible results and content](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md).
- Lead delivery with images, previews, and openable files. Keep accompanying prose brief and limited to opening instructions, simulation scope, and necessary limitations.
- For principle-only questions, give a brief answer at the requested level.

## Shared principles

### Applying the principles

- Apply principles relevant to the requested work, target platform, and scenario.
- Explain applicability conditions and tradeoffs. Do not prescribe a particular visual style universally.
- Before citing numeric requirements or recommendations, verify their source, units, and applicability to the target platform.

### Design principles

- **Entry points and affordances**: make primary entry points visually recognizable. Make a control's operation clear through its appearance, label, and placement. Use the intended action and meaning to guide its visual presentation. Adapted from [Taste Skill, controls](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L469-L473).
- **Consistency and style**: align icons, components, and decoration with product purpose and existing design conventions. Keep content readable and actions usable when adding decoration. Choose a visual style that fits the product type, intended audience, context of use, and stated visual preferences. Adapted from [UI UX Pro Max, style selection](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md#L67-L83).
- **Visual design system**: apply product-wide design rules by default. An explicit page-level exception takes precedence on that page. These rules concern the visual design system. Organize reusable design values and patterns by semantic role, and extract them when repeated needs are established. Preserve distinctions in intent when deciding what to reuse. Adapted from [UI UX Pro Max, master and overrides](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md#L90-L111), [Impeccable, incremental extraction](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/extract.md#L24-L42), and [reuse boundaries](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/extract.md#L62-L68).
- **Aesthetic direction**: follow the user's explicit aesthetic choices when they conflict with the skill's stylistic preferences. Adapted from [Impeccable, how to design](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/SKILL.md#L23-L26).
- **Presentation concept**: ground a presentation page's visual concept in characteristics specific to its subject. Adapted from [Taste Skill, the subject's idea](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L24-L29).
- **Content fit**: choose layouts that accommodate the actual content's form, length, and quantity. When a structure cannot hold the required content, adapt the structure while preserving facts and necessary information. Adapted from [Taste Skill, content and composition](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L123-L130).
- **Available media**: when a visual approach depends on media, base it on assets that exist or can actually be obtained. Choose a feasible composition when the required assets are unavailable. Adapted from [Taste Skill, available imagery](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L76-L83).
- **Typography**: choose fonts, sizes, and line spacing for reading conditions. Establish hierarchy through size and weight. Keep body and supporting text readable, including when enlarged, without clipping or hiding necessary content or controls.
- **Target languages**: for the languages and writing systems the product supports, accommodate text expansion, reading direction, and script-specific shaping in typography and layout. Adapted from [Impeccable, internationalization](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/harden.md#L85-L113).
- **Layout and spacing**: use position and grouping to express importance and relationships. Apply alignment and spacing consistently. Match density to reading, comparison, and operation needs. Avoid competing emphasis. Choose layout structure based on the space available to the interface or container. Reorganize content as needed when that space changes, keeping primary content and actions accessible. Adapted from [Impeccable, native window adaptation](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.native.md#L13-L18) and [web container adaptation](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.md#L138-L143).
- **Color, states, and focus**: define primary, supporting, and status colors and use them consistently. Ensure adequate contrast for text, controls, and states. Supplement color with text or shapes. Make control states and focus visually identifiable. For each appearance the product supports, verify text and control readability and state distinctions. Where the target platform exposes high-contrast preferences, honor them in the rendered interface. Adapted from [UI UX Pro Max, appearance pairing](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L87) and [WPF high-contrast support](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/stacks/wpf.csv#L45).
- **Interaction targets**: size and space targets for mouse, touch, or other input methods, making them easy to select without accidental adjacent activation.
- **Data encoding**: when presenting data graphically, choose visual encodings suited to the relationships users need to understand. Make applicable units and scales clear. Adapted from [UI UX Pro Max, charts and data](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L225-L239).
- **Motion purpose**: use motion on task-oriented and reading surfaces for feedback, state changes, or continuity. When motion explains a change, make its cause and effect understandable. On persuasive or experiential surfaces, motion may serve a clear expressive purpose in its own right. When a user enables a reduced-motion preference supported by the target environment, honor it. When reducing or replacing motion, keep content readable and necessary state changes understandable. Adapted from [UI UX Pro Max, motion meaning](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L141), [Impeccable, motion by visitor mode](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/animate.md#L3-L11), [iOS reduced-motion preferences](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L42-L45), and [UI UX Pro Max, readable final state, guideline 99](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/ux-guidelines.csv).
