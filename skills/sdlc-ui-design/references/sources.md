# Source Context

These notes map the [local skill](../SKILL.md) and platform references to selected original passages, preserving adaptation context. Source boundaries: entry document P4. Consultation and unavailable passages: R2.4. Numeric verification: R4.3. Task authorization, separate design and implementation acceptance, and focused implementation checks are local rules, not adoption of an upstream playbook.

## Pinned revisions

- [UI UX Pro Max, `713eef51b04efc98d6fa565323b495f7c9c89fd4`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/713eef51b04efc98d6fa565323b495f7c9c89fd4).
- [Taste Skill, `12af471f627f866411b4bd785b19646d3672784c`](https://github.com/Leonxlnx/taste-skill/tree/12af471f627f866411b4bd785b19646d3672784c).
- [Impeccable, `9fadc41729c38fd47d7ae622b501558653f9d2e9`](https://github.com/pbakaus/impeccable/tree/9fadc41729c38fd47d7ae622b501558653f9d2e9).

## Design proposal format

Impeccable distinguishes image-led and code-led paths, including code-led working and reading surfaces. This skill deliberately keeps image-first UI proposals, with an HTML fallback, for design tasks of every size. That format is a local delivery choice; the upstream mode-based split and approval workflow are not adopted.

Original passages: [Impeccable, generated comps and HTML sketches](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/new-work.md#L29-L55).

## Rendered design

Taste Skill inspects rendered pages and screenshots with real content through its own browser tooling and repeated review loop. The adaptation retains inspection of the design artifact at its intended viewport, with labeled representative content when actual content is unavailable; it does not require those scripts, fixed widths, or iteration counts.

Original passages: [Taste Skill, visible results and content](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L307-L341).

## Entry points and affordances

The source distinguishes controls that communicate their operation from fields whose genuine input limits still need explanation. The local visual rule concerns appearance, labels, and placement; it does not prohibit necessary help or input constraints.

Original passages: [Taste Skill, controls](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L469-L473).

## Consistency and style

UI UX Pro Max relates direction to product, audience, usage context, style preferences, and detected stack before querying its catalog. The adaptation retains the contextual fit without requiring the search tool, catalog, or a prescribed aesthetic.

Original passages: [UI UX Pro Max, style selection](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md#L67-L83).

## Visual design system

The master/page pattern concerns visual rules and explicit page overrides. Impeccable adds incremental extraction, semantic tokens, and reuse boundaries based on intent. The adaptation does not require their file layout or commands, and page-level exceptions do not override unrelated product, accessibility, or authorization constraints.

Original passages: [UI UX Pro Max, master and overrides](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md#L90-L111); [Impeccable, incremental extraction](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/extract.md#L24-L42); [reuse boundaries](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/extract.md#L62-L68).

## Aesthetic direction

Impeccable gives an explicit brief priority over its own stylistic warnings and distinguishes refinement from redesign. The local rule preserves that priority; linking this passage does not import the source skill's other style bans or redesign procedure.

Original passages: [Impeccable, how to design](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/SKILL.md#L23-L26).

## Presentation concept

Taste Skill derives a presentation concept from characteristics of its subject. Its random direction-dealing process and house aesthetic are separate choices. The adaptation applies to presentation pages and does not require thematic decoration on every working screen.

Original passages: [Taste Skill, the subject's idea](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L24-L29).

## Content fit

Taste Skill changes a composition whose assumptions cannot hold the real content and also requires complete content. The local rule generalizes this to content form, length, and quantity while preserving facts and necessary information; it does not require the direction-dealing commands.

Original passages: [Taste Skill, content and composition](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L141-L153); [Taste Skill, complete content](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L217-L221).

## Available media

The source inventories actual photographs, product screens, obtainable generated imagery, and other material before choosing an asset-dependent composition. The adaptation preserves feasibility without assuming that image tools, network access, or archive assets exist in every environment.

Original passages: [Taste Skill, available imagery](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L76-L83).

## Target languages

Impeccable covers text expansion, RTL layout, and script-specific shaping, including preservation of meaningful joining characters. The adaptation is scoped to supported languages and writing systems; example expansion percentages and named test languages are not universal requirements.

Original passages: [Impeccable, internationalization](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/harden.md#L85-L113).

## Layout and spacing

The native reference restructures layouts for window size classes, including multi-window use; the web reference includes container-based adaptation. The local rule uses available interface or container space and preserves access to primary content and actions without mandating a particular layout technique.

Original passages: [Impeccable, native window adaptation](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.native.md#L13-L18); [web container adaptation](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.md#L138-L143).

## Color, states, and focus

UI UX Pro Max pairs supported appearances and separately describes WPF high-contrast resources. The adaptation checks the appearances the product supports and honors exposed high-contrast preferences; it does not require adding themes or using WPF mechanisms on other platforms.

Original passages: [UI UX Pro Max, appearance pairing](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L87); [WPF high-contrast support](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/stacks/wpf.csv#L45).

## Data encoding

The source relates chart forms to data relationships and covers scales, units, labels, and accessible presentation. The local UI rule selects encodings for the relationship users need to understand; the upstream chart catalog, numeric thresholds, and implementation recipes remain reference material.

Original passages: [UI UX Pro Max, charts and data](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L225-L239).

## Motion purpose

UI UX Pro Max supplies cause-and-effect motion, interruptibility, non-blocking input, and readable reduced-motion states. Impeccable distinguishes expressive persuasive/experiential motion from task and reading feedback, with native preference support. The local adaptation preserves those surface distinctions, scopes interruption to supported switching or cancellation, and distinguishes animation interruption from background-operation cancellation.

Original passages: [UI UX Pro Max, motion meaning](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L141); [Impeccable, motion by visitor mode](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/animate.md#L3-L11); [iOS reduced-motion preferences](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L42-L45); [UI UX Pro Max, readable final state, guideline 99](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/ux-guidelines.csv#L100); [UI UX Pro Max, interruptible and non-blocking motion](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L149-L150).

## Working-interface density

Taste Skill reports density ranges observed in working screens and treats text size, row pitch, and padding together. The adaptation preserves that relationship for desktop task interfaces; the study's example sizes and counts are not platform-wide defaults.

Original passages: [Taste Skill, density](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/app-screens.md#L1010-L1021).

## Native component visuals

The iOS and Android references use their respective platform conventions and leave room for brand expression through supported customization. The adaptation concerns native component visuals; it does not transpose one platform's component language onto the other or onto all web interfaces.

Original passages: [Impeccable, iOS component conventions](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L5-L9); [Android component conventions](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/android.md#L5-L9).

## Native typography

The native references map text to platform roles and system font-size preferences. Their named fonts and example point sizes remain platform-specific context. The local rule retains role-based typography and system scaling without imposing those values universally.

Original passages: [Impeccable, iOS text styles](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L22-L26); [Android text roles and scaling](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/android.md#L22-L26).

## Asynchronous layout stability

UI UX Pro Max reserves space for asynchronous content to prevent layout shifts. The adaptation states the intended outcome for reading position and interaction targets; it does not prescribe a particular placeholder or loading animation.

Original passages: [UI UX Pro Max, asynchronous content space](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L66).
