# Visual design and interaction

Use for interface aesthetics, design systems, motion, images, video, and visual assets. Select skills according to the current deliverable; prioritize established brand, aesthetics, and technology stack. For asset discovery alone, go directly to [visual references and assets](resources/visual.md) without first loading production skills.

For website purpose, copy, and distribution, see [acquisition and conversion](acquisition.md); for implementation troubleshooting and general testing, see [development and quality](development.md). Maintain specialist guidance here and existing assets in [visual references and assets](resources/visual.md); other topics reference the relevant entry as needed.

## Select capabilities by deliverable

Identify the target artifact for functional pages, static pages, or social media assets, then select the lead guide and supporting capabilities. Supplement existing solutions for independent gaps; for asset discovery alone, go directly to [visual references and assets](resources/visual.md).

### Combine capabilities by deliverable

Visual design, images, motion, and video capabilities apply to functional pages, static pages, and social media assets. Choose a lead guide from the target artifact, reference effects, existing implementation, and available tools, then fill independent gaps; the combinations below are examples.

| Scenario | Capability combinations and use |
| --- | --- |
| Functional pages: tools, forms, settings, dashboards, and editors | Use frontend-design or the existing design system for layout and hierarchy; Emil or GSAP for state feedback, transitions, and interaction guidance; image generation, canvas-design, and algorithmic-art for illustrations, empty states, visualizations, or creative canvases. Effects support operation and understanding while retaining required behavior for real data, loading, empty and error states, and keyboard use. Combine implementation and verification with [development and quality](development.md). |
| Static pages: websites, landing pages, portfolios, articles, and event pages | Use frontend-design for the overall visual direction; imagegen or baoyu-image-gen for hero imagery, canvas-design for static composition; algorithmic-art for particles or flow fields, and gsap-scrolltrigger for scrolling, parallax, and scene changes. Select according to page purpose, adding Remotion or HyperFrames for video content; see [acquisition and conversion](acquisition.md) when structure and copy guidance is needed. |
| Social media assets: covers, illustrations, posters, carousels, demos, and short videos | Combine image generation, canvas-design, and the relevant baoyu skills for covers, illustrations, and posters; split carousels according to content structure. Remotion or HyperFrames combines real product screens, images, text, and audio into demos, explainers, or short videos; algorithmic-art and GSAP can supply generative visuals and motion choreography. See [channel selection](acquisition.md#channel-selection) when topic and platform messaging guidance is needed. |

For ready-made effects, select concrete components, templates, or media files from [visual references and assets](resources/visual.md); choose the relevant production guidance for custom effects. Prefer available host tools for image generation; baoyu-image-gen suits multiple providers or batch tasks. Retain existing video projects; for new projects, choose Remotion or HyperFrames according to React component reuse, HTML/GSAP authoring, and the available rendering environment.

When reusing a subject across pages and social media, retain brand, colors, typography, and real product assets while adapting composition, aspect ratio, text density, and pacing to the target medium. Check the actual deliverable: responsive behavior, operable states, and motion fallbacks for pages; dimensions, cropping, and text legibility for images; actual export, audiovisual synchronization, and opening/closing frames for video. Retain editable source or generation parameters needed by the user and identify preview and final-file locations.

### Asset selection principles

Identify concrete examples, pages, screenshots, component source, or asset files, explaining the composition, typography, color, density, or motion rhythm being referenced. Provide playable examples for dynamic effects. Evaluate retrieval separately for screenshots, platform templates, source code, animation files, and online scenes; payment, accounts, downloads, and license scope depend on the selected item. Prefer assets compatible with the current stack; choosing a reference does not automatically migrate frameworks.

## Production guidance

Select specialist guidance by the content to create or improve; Stitch-specific methods belong under interface production. Use the table to locate guidance and the corresponding sections for candidate applicability.

| Current problem | Location and primary candidates |
| --- | --- |
| New interfaces and visual direction | [Interface design and aesthetics](#interface-design-and-aesthetics): frontend-design, design-taste-frontend, ui-ux-pro-max |
| Review and polish, interaction feel, interface guidelines | [Interface design and aesthetics](#interface-design-and-aesthetics): impeccable, emil-design-eng, web-design-guidelines |
| Stitch concepts, prompts, design standards, component implementation | [Stitch interface production](#stitch-interface-production) |
| Hero visuals, posters, covers, diagrams, sequential image cards | [Images and static assets](#images-and-static-assets): imagegen, canvas-design, baoyu family |
| Component animation, scroll, particles, 3D, performance | [Motion and interaction](#motion-and-interaction): Emil, GSAP, motion-design, algorithmic-art, threejs |
| Product demos, explainers, exportable video, captions, voice, media backends | [Video and media production](#video-and-media-production): video, Remotion, HyperFrames, fal |

### Interface design and aesthetics

Select a lead guide according to product purpose, audience, specific page references, and existing style, using supporting capabilities for independent gaps. Polish focuses on local quality, redesign concerns overall direction, and guideline reviews use explicit rules.

<!-- skill: anthropics/skills@frontend-design -->
- **frontend-design**: [Source](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md), [Skill page](https://skills.sh/anthropics/skills/frontend-design). Derive visual direction from product subject, audience, material, and use context, covering typography, palette, composition, hierarchy, and motion. Suitable for distinctive new interfaces and public websites.

<!-- skill: nextlevelbuilder/ui-ux-pro-max-skill@ui-ux-pro-max -->
- **ui-ux-pro-max**: [Source](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md), [Skill page](https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max). Provides design styles, industry palettes, font pairings, interaction guidelines, charts, and stack material for establishing a design basis. When concrete data is needed, follow original paths to relevant references and CSV files; search scripts require obtaining the scripts and runtime environment.

<!-- skill: pbakaus/impeccable@impeccable -->
- **impeccable**: [Source](https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/SKILL.md), [Skill page](https://skills.sh/pbakaus/impeccable/impeccable). Covers new design, review, polish, simplification, typography, color, interaction, animation, and design systems; distinguishes Persuade / Operate / Read / Experience contexts. Read corresponding references such as `shape`, `critique`, `audit`, `polish`, `bolder`, `quieter`, `distill`, `animate`, `colorize`, `typeset`, `harden`, and `onboard` according to the task. State separately which model reviews and specialist-engine checks were actually performed.

<!-- skill: leonxlnx/taste-skill@design-taste-frontend -->
- **design-taste-frontend / Taste Skill**: [Source](https://github.com/leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md), [Skill page](https://skills.sh/leonxlnx/taste-skill/design-taste-frontend). Emphasizes visual concepts, real references, imagery and product UI, layout, and in-browser inspection for websites, landing pages, and showcases. The source directory is `taste-skill`; style guidance follows the project brief. Check script and browser-check runtime dependencies against current original instructions.

<!-- skill: emilkowalski/skills@emil-design-eng -->
- **emil-design-eng**: [Source](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md), [Skill page](https://skills.sh/emilkowalski/skills/emil-design-eng). Focuses on component details, button feedback, states, springs and interruption, perceived performance, and interface feel. Suitable for design engineering in the product itself; for animation alone, see [motion guidance](visual-interaction.md#motion-and-interaction).

<!-- skill: vercel-labs/agent-skills@web-design-guidelines -->
- **web-design-guidelines**: [Source](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md), [Skill page](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines). Review existing interfaces against Vercel's [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md), for interaction, typography, responsive behavior, and accessibility guideline reviews.

<!-- skill: anthropics/skills@theme-factory -->
- **theme-factory**: [Source](https://github.com/anthropics/skills/blob/main/skills/theme-factory/SKILL.md), [Skill page](https://skills.sh/anthropics/skills/theme-factory). Apply or generate color and typography themes for slides, documents, reports, HTML, and other artifacts, supporting consistency across assets; reuse the established brand where one exists.

<!-- skill: anthropics/skills@web-artifacts-builder -->
- **web-artifacts-builder**: [Source](https://github.com/anthropics/skills/blob/main/skills/web-artifacts-builder/SKILL.md), [Skill page](https://skills.sh/anthropics/skills/web-artifacts-builder). For complex, multi-component Claude HTML artifacts with state or routing; use its packaging method only after adapting it to the host. Ordinary repository pages do not require migration to an artifact environment merely to apply this skill.

<!-- skill: ibelick/ui-skills@baseline-ui -->
- **baseline-ui**: [Source](https://github.com/ibelick/ui-skills/blob/main/skills/baseline-ui/SKILL.md). Baseline conventions for interface implementation.

<!-- skill: addyosmani/web-quality-skills@accessibility -->
- **accessibility**: [Source](https://github.com/addyosmani/web-quality-skills/blob/main/skills/accessibility/SKILL.md), [Skill page](https://skills.sh/addyosmani/web-quality-skills/accessibility). Specific accessibility issues and specialist reviews: keyboard, focus, semantics, accessible names, screen readers, and contrast. Start general interface guideline reviews with web-design-guidelines, reading this entry when issues emerge or deeper verification is needed. Verify through actual pages, automated checks, and manual interaction; tool scores do not replace a complete accessibility conclusion. For browser test integration, see [testing and verification](development.md#testing-and-verification).

<!-- skill: ibelick/ui-skills@fixing-metadata -->
- **fixing-metadata**: [Source](https://github.com/ibelick/ui-skills/blob/main/skills/fixing-metadata/SKILL.md). Page metadata issues.

<!-- skill: anthropics/skills@brand-guidelines -->
- **brand-guidelines**: [Source](https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md). Apply Anthropic's brand colors and typography only for that brand's expression; use theme-factory or interface design guidance for general project themes.

`Taste Skill` / `taste-skill` corresponds to `design-taste-frontend`, with source under `skills/taste-skill`.

#### Stitch interface production

Source: [Google Labs Stitch Skills](https://github.com/google-labs-code/stitch-skills). Prompts and design expression can serve as text guidance; generating, editing, and exporting projects require actual tools and project access. `react:components` corresponds to `stitch::react-components`.

<!-- skill: google-labs-code/stitch-skills@stitch::generate-design -->
- **stitch::generate-design**: [Source](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/generate-design/SKILL.md), [Skill page](https://skills.sh/google-labs-code/stitch-skills/stitch::generate-design). Generate interfaces, edit designs, or produce variants from text, images, or mockups to explore concrete visual proposals; business logic requires separate implementation.

<!-- skill: google-labs-code/stitch-skills@enhance-prompt -->
- **enhance-prompt**: [Source](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/enhance-prompt/SKILL.md), [Skill page](https://skills.sh/google-labs-code/stitch-skills/enhance-prompt). Refine UI descriptions into layout, style, components, and design tokens for Stitch prompt improvement.

<!-- skill: google-labs-code/stitch-skills@design-md -->
- **design-md**: [Source](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/design-md/SKILL.md), [Skill page](https://skills.sh/google-labs-code/stitch-skills/design-md). Derive a semantic design system from a Stitch project to extract or maintain design standards.

<!-- skill: google-labs-code/stitch-skills@stitch::react-components -->
- **stitch::react-components**: [Source](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-build/skills/react-components/SKILL.md), [Skill page](https://skills.sh/google-labs-code/stitch-skills/stitch::react-components). Convert Stitch designs into modular Vite/React components or synchronize existing components.

<!-- skill: google-labs-code/stitch-skills@stitch-loop -->
- **stitch-loop**: [Source](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/stitch-loop/SKILL.md), [Skill page](https://skills.sh/google-labs-code/stitch-skills/stitch-loop). For user-selected iterative website building in Stitch, improving pages through repeated generation and inspection.

### Images and static assets

Choose raster generation, composition into images, SVG/code graphics, or editable UI according to the actual artifact. A pictured interface is not an implemented product, and slide-by-slide demo images are not an editable presentation. The baoyu family comes from [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills); actual generation requires the corresponding backend, credentials, and script runtime.

<!-- skill: openai/skills@imagegen -->
- **imagegen**: [Source](https://github.com/openai/skills/blob/main/skills/.system/imagegen/SKILL.md), [Skill page](https://skills.sh/openai/skills/imagegen). Generate and edit raster images, reference variants, transparent-background assets, hero visuals, and product concept images. Prioritize existing host image tools; CLI use requires the corresponding API credentials. Select tools for editable vectors and code graphics according to the actual delivery format.

<!-- skill: anthropics/skills@canvas-design -->
- **canvas-design**: [Source](https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md), [Skill page](https://skills.sh/anthropics/skills/canvas-design). Establish visual expression before creating static PNG/PDF works; suitable for posters and designs with little text, not website implementation.

<!-- skill: jimliu/baoyu-skills@baoyu-image-gen -->
- **baoyu-image-gen**: [Source](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-image-gen/SKILL.md), [Skill page](https://skills.sh/jimliu/baoyu-skills/baoyu-image-gen). API image generation and editing, supporting reference images, aspect ratios, saved prompts, and batch tasks. Suitable for multiple providers or batch work; available backends, models, and invocation methods follow current original instructions.

<!-- skill: jimliu/baoyu-skills@baoyu-cover-image -->
- **baoyu-cover-image**: [Source](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-cover-image/SKILL.md), [Skill page](https://skills.sh/jimliu/baoyu-skills/baoyu-cover-image). Organize covers by type, palette, rendering, text, mood, and target ratio to form a reusable cover style.

<!-- skill: jimliu/baoyu-skills@baoyu-infographic -->
- **baoyu-infographic**: [Source](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-infographic/SKILL.md), [Skill page](https://skills.sh/jimliu/baoyu-skills/baoyu-infographic). Choose layout and visual style by information structure for technical, process, and knowledge diagrams.

<!-- skill: jimliu/baoyu-skills@baoyu-xhs-images -->
- **baoyu-xhs-images**: [Source](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-xhs-images/SKILL.md), [Skill page](https://skills.sh/jimliu/baoyu-skills/baoyu-xhs-images). Split content into sequential image cards, combining layout, visual style, and palette for Chinese content, Xiaohongshu, or carousels.

<!-- skill: jimliu/baoyu-skills@baoyu-slide-deck -->
- **baoyu-slide-deck**: [Source](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-slide-deck/SKILL.md), [Skill page](https://skills.sh/jimliu/baoyu-skills/baoyu-slide-deck). Generate slide-by-slide demo images from content and an outline. When an editable presentation is required, inspect actual output and select appropriate capabilities; do not present images as editable source files.

<!-- skill: jimliu/baoyu-skills@baoyu-article-illustrator -->
- **baoyu-article-illustrator**: [Source](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-article-illustrator/SKILL.md). Article illustration placement, type, and generation; add only when article illustrations are requested.

<!-- skill: jimliu/baoyu-skills@baoyu-comic -->
- **baoyu-comic**: [Source](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-comic/SKILL.md). Comic-style explanations and story scenes.

### Motion and interaction

Choose Emil for component feedback and interruption; motion-design for rhythm and choreography; GSAP for timelines, scroll, and SVG; algorithmic-art for particles and threejs for interactive 3D. Match expressive intensity to actual use while considering responsiveness, interruption, mobile, and reduced-motion.

Official GSAP skills come from [greensock/gsap-skills](https://github.com/greensock/gsap-skills); read the specific module.

<!-- skill: greensock/gsap-skills@gsap-core -->
- **[gsap-core](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-core/SKILL.md)**: Basic tweens, transforms, easing, and stagger; [skill page](https://skills.sh/greensock/gsap-skills/gsap-core).

<!-- skill: greensock/gsap-skills@gsap-timeline -->
- **[gsap-timeline](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-timeline/SKILL.md)**: Timelines and choreography for multi-step animations.

<!-- skill: greensock/gsap-skills@gsap-scrolltrigger -->
- **[gsap-scrolltrigger](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-scrolltrigger/SKILL.md)**: Scroll triggers, pin, scrub, parallax, and horizontal scroll narratives; [skill page](https://skills.sh/greensock/gsap-skills/gsap-scrolltrigger).

<!-- skill: greensock/gsap-skills@gsap-react -->
- **[gsap-react](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-react/SKILL.md)**: React usage and lifecycle cleanup.

<!-- skill: greensock/gsap-skills@gsap-plugins -->
- **[gsap-plugins](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-plugins/SKILL.md)**: Flip, Draggable, SplitText, SVG paths and shapes, and other plugins; verify integration against current official documentation.

<!-- skill: greensock/gsap-skills@gsap-performance -->
- **[gsap-performance](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-performance/SKILL.md)**: Animation performance and implementation issues.

<!-- skill: greensock/gsap-skills@gsap-utils -->
- **[gsap-utils](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-utils/SKILL.md)**: Numeric, mapping, distribution, and other utilities.

<!-- skill: greensock/gsap-skills@gsap-frameworks -->
- **[gsap-frameworks](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-frameworks/SKILL.md)**: Integration and usage in other frameworks.

<!-- skill: lottiefiles/motion-design-skill@motion-design -->
- **motion-design**: [Source](https://github.com/LottieFiles/motion-design-skill/blob/main/skills/motion-design/SKILL.md), [Skill page](https://skills.sh/lottiefiles/motion-design-skill/motion-design). Motion personality, timing, easing, choreography, and principles of animation in UI. This is design guidance, not a ready-made Lottie file.

<!-- skill: emilkowalski/skills@animate -->
- **animate**: [Source](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md), [Skill page](https://skills.sh/emilkowalski/skills/animate). Select and implement purpose, technique, properties, curves, duration, and exit/interruption behavior from the current animation request.

<!-- skill: emilkowalski/skills@review-animations -->
- **review-animations**: [Source](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md). Review existing animations, analyzing concrete behavior and improvement directions.

<!-- skill: emilkowalski/skills@improve-animations -->
- **improve-animations**: [Source](https://github.com/emilkowalski/skills/blob/main/skills/improve-animations/SKILL.md). Use when the user requests systematic improvement of existing animations.

<!-- skill: emilkowalski/skills@animation-performance -->
- **animation-performance**: [Source](https://github.com/emilkowalski/skills/blob/main/skills/animation-performance/SKILL.md). Specialist animation performance guidance.

<!-- skill: anthropics/skills@algorithmic-art -->
- **algorithmic-art**: [Source](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md), [Skill page](https://skills.sh/anthropics/skills/algorithmic-art). Create interactive procedural art with p5.js, seeded randomness, noise, particles, and flow fields. Outputs an HTML/JS viewer and algorithm for visual experiments and showcase backgrounds.

<!-- skill: mengto/skills@threejs -->
- **threejs**: [Source](https://github.com/mengto/skills/blob/main/agent-skills/web-design/threejs/SKILL.md), [Skill page](https://skills.sh/mengto/skills/threejs). Real Web 3D, interactive heroes, object rotation, cameras, lighting, materials, and model loading; also consider asset and performance costs.

<!-- skill: mengto/skills@gsap -->
- **gsap (MengTo)**: [Source](https://github.com/mengto/skills/blob/main/agent-skills/web-design/gsap/SKILL.md), [Skill page](https://skills.sh/mengto/skills/gsap). Broad Web animation guidance; prioritize the corresponding official module for concrete GSAP API and framework-integration questions.

<!-- skill: ibelick/ui-skills@fixing-motion-performance -->
- **fixing-motion-performance**: [Source](https://github.com/ibelick/ui-skills/blob/main/skills/fixing-motion-performance/SKILL.md), [Skill page](https://skills.sh/ibelick/ui-skills/fixing-motion-performance). Diagnose and repair animation performance issues.

<!-- skill: kylezantos/design-motion-principles@design-motion-principles -->
- **design-motion-principles**: [Source](https://github.com/kylezantos/design-motion-principles/blob/main/skills/design-motion-principles/SKILL.md), [Skill page](https://skills.sh/kylezantos/design-motion-principles/design-motion-principles). For building or reviewing motion, drawing on public practices by Emil, Jakub Krehel, and Jhey Tompkins. This is a third-party synthesis, distinct from the creators' own skills.

### Video and media production

Choose programmatic video for precise UI and text; use actually available media backends for generated clips and audio. Remotion comes from [remotion-dev/skills](https://github.com/remotion-dev/skills); choose subskills by the video task. Preview and export require the corresponding project and rendering environment. Prioritize existing projects. Deliver actual rendered files and check results, distinguishing source, previews, static covers, and exported video.

<!-- skill: coreyhaines31/marketingskills@video -->
- **video**: [Source](https://github.com/coreyhaines31/marketingskills/blob/main/skills/video/SKILL.md), [Skill page](https://skills.sh/coreyhaines31/marketingskills/video). Product demos, explainers, website and YouTube videos, and splitting long videos into short clips. Choose recordings, programmatic video, generated clips, avatars, or other methods based on existing screen recordings, screenshots, and product assets. For topics and distribution goals, see [acquisition and conversion](acquisition.md#content-distribution-and-building-in-public); combine production tools below as needed. Reading guidance does not establish generation, editing, or rendering capability; check selected tools, credentials, and costs at execution time.

<!-- skill: remotion-dev/skills@remotion-best-practices -->
- **[remotion-best-practices](https://github.com/remotion-dev/skills/blob/main/skills/remotion-best-practices/SKILL.md)**: [Skill page](https://skills.sh/remotion-dev/skills/remotion-best-practices). Routing entry for Remotion specialists, selecting subskills and references according to the current video task.

<!-- skill: remotion-dev/skills@remotion-create -->
- **[remotion-create](https://github.com/remotion-dev/skills/blob/main/skills/remotion-create/SKILL.md)**: Create a new composition or video project.

<!-- skill: remotion-dev/skills@remotion-render -->
- **[remotion-render](https://github.com/remotion-dev/skills/blob/main/skills/remotion-render/SKILL.md)**: Render video and still frames.

<!-- skill: remotion-dev/skills@remotion-studio -->
- **[remotion-studio](https://github.com/remotion-dev/skills/blob/main/skills/remotion-studio/SKILL.md)**: Preview and Studio.

<!-- skill: remotion-dev/skills@remotion-captions -->
- **[remotion-captions](https://github.com/remotion-dev/skills/blob/main/skills/remotion-captions/SKILL.md)**: Caption processing.

<!-- skill: remotion-dev/skills@remotion-markup -->
- **[remotion-markup](https://github.com/remotion-dev/skills/blob/main/skills/remotion-markup/SKILL.md)**: React video layouts and elements.

<!-- skill: remotion-dev/skills@remotion-interactivity -->
- **[remotion-interactivity](https://github.com/remotion-dev/skills/blob/main/skills/remotion-interactivity/SKILL.md)**: Structure for editable, selectable elements in Studio.

<!-- skill: remotion-dev/skills@remotion-multimedia -->
- **[remotion-multimedia](https://github.com/remotion-dev/skills/blob/main/skills/remotion-multimedia/SKILL.md)**: Trimming, cropping, media information, and related operations.

<!-- skill: remotion-dev/skills@remotion-maps -->
- **[remotion-maps](https://github.com/remotion-dev/skills/blob/main/skills/remotion-maps/SKILL.md)**: Maps, routes, and geographic videos.

<!-- skill: remotion-dev/skills@remotion-saas -->
- **[remotion-saas](https://github.com/remotion-dev/skills/blob/main/skills/remotion-saas/SKILL.md)**: Specialist guidance for video applications or video SaaS.

<!-- skill: remotion-dev/skills@remotion-docs -->
- **[remotion-docs](https://github.com/remotion-dev/skills/blob/main/skills/remotion-docs/SKILL.md)**: Consult current APIs.

<!-- skill: remotion-dev/skills@remotion-upgrade -->
- **[remotion-upgrade](https://github.com/remotion-dev/skills/blob/main/skills/remotion-upgrade/SKILL.md)**: Upgrade an existing Remotion project.

<!-- skill: remotion-dev/skills@remotion-license -->
- **[remotion-license](https://github.com/remotion-dev/skills/blob/main/skills/remotion-license/SKILL.md)**: Determine license and cost conditions for the intended video-framework use.

<!-- skill: heygen-com/hyperframes@hyperframes -->
- **hyperframes**: [Source](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes/SKILL.md), [Skill page](https://skills.sh/heygen-com/hyperframes/hyperframes). Produce video with HTML compositions, GSAP timelines, scenes, captions, audio, and parameterized rendering. Read entry-point references as needed for launch videos, explainers, charts, vertical content, and other formats.

<!-- skill: heygen-com/hyperframes@media-use -->
- **media-use**: [Source](https://github.com/heygen-com/hyperframes/blob/main/skills/media-use/SKILL.md), [Skill page](https://skills.sh/heygen-com/hyperframes/media-use). Find or generate images, icons, brand marks, music, sound effects, voiceovers, avatars, transcripts, cutouts, and color-grading assets. Some capabilities are local; others require HeyGen login, credits, or payment. Check each against the current environment and user scope. Image-model generation and video-timeline rendering are distinct capabilities.

<!-- skill: heygen-com/hyperframes@remotion-to-hyperframes -->
- **remotion-to-hyperframes**: [Source](https://github.com/heygen-com/hyperframes/blob/main/skills/remotion-to-hyperframes/SKILL.md). Migrate a Remotion project to HyperFrames.

<!-- skill: fal-ai-community/skills@fal-video-generation -->
- **fal-video-generation**: [Source](https://github.com/fal-ai-community/skills/blob/main/skills/fal-video-generation/SKILL.md), [Skill page](https://skills.sh/fal-ai-community/skills/fal-video-generation). Generate or transform clips, image animation, reference video, extension, and frame-rate upconversion, requiring the corresponding model, endpoint, and available invocation tools.

<!-- skill: fal-ai-community/skills@genmedia -->
- **genmedia**: [Source](https://github.com/fal-ai-community/skills/blob/main/skills/genmedia/SKILL.md). Discover models, inspect schemas, upload, and execute from a terminal; requires the actual CLI and service credentials.

<!-- skill: fal-ai-community/skills@fal-media -->
- **fal-media**: [Source](https://github.com/fal-ai-community/skills/blob/main/skills/fal-media/SKILL.md). Media-operation entry for the corresponding MCP host; do not assume it is currently available.

## Asset resources

For existing examples, templates, icons, fonts, charts, and media, read [visual references and assets](resources/visual.md) as needed.
