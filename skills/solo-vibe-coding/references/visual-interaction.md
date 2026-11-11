# Visual design and interaction

Use for interface aesthetics, design systems, motion, images, video, and visual assets. Select skills according to the current deliverable; prioritize established brand, aesthetics, and technology stack. For asset discovery alone, go directly to the resource entries below without first loading production skills.

| Current problem | Location and primary candidates |
| --- | --- |
| New interfaces and visual direction | Interface design and aesthetics: frontend-design, design-taste-frontend, ui-ux-pro-max |
| Review and polish, interaction feel, interface guidelines | Interface design and aesthetics: impeccable, emil-design-eng, web-design-guidelines |
| Stitch concepts, prompts, design standards, component implementation | Stitch interface production |
| Hero visuals, posters, covers, diagrams, sequential image cards | Images and static assets: imagegen, canvas-design, baoyu family |
| Component animation, scroll, particles, 3D, performance | Motion and interaction: Emil, GSAP, motion-design, algorithmic-art, threejs |
| Product demos, explainers, exportable video, captions, voice, media backends | Video and media production: video, Remotion, HyperFrames, fal |
| Find examples, templates, icons, or media files | Inspiration and interfaces, templates and components, icons, animation and 3D assets, photography/illustration/video/audio assets |

For website purpose, copy, and distribution, see [acquisition and conversion](acquisition.md); for implementation troubleshooting and general testing, see [development and quality](development.md). Maintain each specialist and asset only here, with other topics referencing them as needed.

## Interface design and aesthetics

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

## Stitch interface production

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

## Images and static assets

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

## Motion and interaction

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

## Video and media production

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

## Asset selection principles

Identify concrete examples, pages, screenshots, component source, or asset files, explaining the composition, typography, color, density, or motion rhythm being referenced. Provide playable examples for dynamic effects. Evaluate retrieval separately for screenshots, platform templates, source code, animation files, and online scenes; payment, accounts, downloads, and license scope depend on the selected item. Prefer assets compatible with the current stack; choosing a reference does not automatically migrate frameworks.

## Inspiration and interfaces

Use for full websites, product interfaces, and specific workflow references; inspect actual running behavior for dynamic examples.

<!-- resource: https://www.lapa.ninja/ -->
### Lapa Ninja
- Entry: [lapa.ninja](https://www.lapa.ninja/). Many complete landing pages, filterable by SaaS, AI, developer tools, minimalism, 3D, typography, color, and technical platform; also organized into Hero, Features, Pricing, FAQ, CTA, Footer, motion, OG images, and fonts.
- AI usage: find specific pages or sections, providing screenshots and structural/layout explanations. Suitable for quickly preparing hero and landing-page references; do not assume screenshots include source code.
- Access: basic browsing is available, with collections and other [Pro](https://www.lapa.ninja/pro/) features; the site also has template, free-resource, and illustration entry points.

<!-- resource: https://land-book.com/ -->
### Land-book
- Entry: [land-book.com](https://land-book.com/). Hand-curated, continuously updated websites and section references, filterable by industry, color, typography, platform, minimalism, Apple style, 3D, parallax, and others, with Motion, OG Images, and Headlines sections.
- AI usage: choose a primary visual direction and explain the colors, typography, whitespace, or composition being referenced; collecting several examples does not require the model to mix all of them.
- Access: free and [Pro](https://land-book.com/pro) coexist; verify Pro, saving, Figma, and other specific features against current plans.

<!-- resource: https://mobbin.com/ -->
### Mobbin
- Entry: [mobbin.com](https://mobbin.com/). Shipped App and Web screens and workflows for navigation, settings, editors, dialogs, authentication, and complex interaction references.
- AI usage: provide specific screens/flows, or use [Mobbin MCP](https://mobbin.com/mcp) search when the user already has access. MCP is not a built-in tool of this skill.
- Access: the free scope is limited; verify full-library and MCP availability against current plans.

<!-- resource: https://www.saasframe.io/ -->
### SaaSFrame
- Entry: [saasframe.io](https://www.saasframe.io/). SaaS websites, product interfaces, page patterns, and user flows, searchable by page purpose and screenshot text.
- AI usage: identify specific hero, pricing, navigation, settings, or empty-state pages; available Figma files must be within actual account permissions.
- Access: [free and Pro](https://www.saasframe.io/pricing). Use browsing results, mobile versions, Figma files, and other capabilities within actual access scope.

<!-- resource: https://www.awwwards.com/ -->
### Awwwards
- Entry: [awwwards.com](https://www.awwwards.com/). Work awards and showcases, including React, GSAP, WebGL, 3D, scrolling, animation, portfolios, and other categories.
- AI usage: prioritize opening the work's live site for composition, visual storytelling, and motion rhythm. Suitable for exploring creative possibilities; do not infer that award-winning visuals are the best operational interface for the current product.
- Access: work can be browsed, with additional Pro, marketplace, and courses; template source licensing is not included by default.

<!-- resource: https://recent.design/ -->
### Recent
- Entry: [recent.design](https://recent.design/). Covers Web, Interface, Branding, Motion, Illustration, Posters, launch videos, OG images, App screenshots, and icons.
- AI usage: concrete examples with screenshots/dynamic demos for visual direction in websites, branding, and launch assets.

<!-- resource: https://tympanus.net/codrops/ -->
### Codrops
- Entry: [Codrops](https://tympanus.net/codrops/). Discovery for creative websites, interaction, WebGL, and animation examples; subsequent use should locate the specific article, demo, corresponding source, and explanations.
- AI usage: study implementation through a specific demo, its article, and actual code, extracting composition, interaction, and technical methods relevant to the current effect.

## Templates and components

Use for complete sites, page sections, and modifiable source; check assets, fonts, and platform dependencies per template.

<!-- resource: https://www.framer.com/marketplace/templates/ -->
### Framer Marketplace
- [Template entry](https://www.framer.com/marketplace/templates/): full-site templates for software, AI, SaaS, portfolios, agencies, commerce, and others; free and paid options mixed.
- AI: select a concrete template preview and screenshots, specifying typography, hero, sections, and animation being referenced; use corresponding editing capabilities inside Framer. A platform template does not imply complete source directly usable in an existing React repository.
- Agent Templates with design systems or skills can assist editing; specific capabilities depend on the item and platform access permissions.

<!-- resource: https://webflow.com/templates -->
### Webflow Templates
- [Template entry](https://webflow.com/templates): many industry-specific complete templates, including free categories, marketing pages, personal sites, and CMS.
- AI: reference complete sites, responsiveness, and motion, or edit in the user-selected Webflow environment. Do not infer that a publicly browsable demo makes a paid template downloadable.

<!-- resource: https://astro.build/themes/ -->
### Astro Themes
- [Theme entry](https://astro.build/themes/): public websites, blogs, portfolios, documentation, and content sites, with free and commercial themes.
- AI: choose a theme suited to the requirement with accessible source, follow its GitHub/repository entry to actual files, license, and stack, and inspect the specific theme's implementation quality.

<!-- resource: https://21st.dev/ -->
### 21st.dev
- [Entry](https://21st.dev/): community components, templates, themes, heroes, shaders, backgrounds, icons, and application examples, with previews, sources, and copyable prompts for AI.
- AI: select a concrete item and provide prompts, source, or registry information to the current model; prioritize explaining adaptation to the existing theme.
- Access: assess free access and paid or member capabilities per item.

<!-- resource: https://www.shadcnblocks.com/ -->
### Shadcnblocks
- [Entry](https://www.shadcnblocks.com/): many Hero, Feature, Pricing, Bento, navigation, app-shell, and other responsive sections, plus complete templates and components.
- AI: use specific block source or Shadcn CLI/registry integration, usually for React, Tailwind, and shadcn/ui; complete templates also cover Next.js / Astro.
- Access: free resources and Pro content coexist; obtain source for the specific section or template.

<!-- resource: https://ui.shadcn.com/blocks -->
### shadcn/ui Blocks and Registry
- [Official Blocks](https://ui.shadcn.com/blocks): copyable source blocks for dashboards, sidebars, tables, charts, authentication, and more; the official page states they are free and open source.
- AI: read specific previews and files and adapt them to the project. [Registry documentation](https://ui.shadcn.com/docs/registry) explains code distribution and addresses. A registry can distribute components, pages, themes, configuration, and other files; inspect actual content before use.
- This is a component and specification source; it does not automatically determine the project's aesthetic direction. Interface-task guidance can supplement the corresponding design judgment.

<!-- resource: https://cruip.com/ -->
### Cruip
- [Entry](https://cruip.com/): cohesive marketing, SaaS, and dashboard templates covering Next.js, Astro, Tailwind, and others.
- AI: after obtaining authorized template access, read actual source and extend the existing design system. Most templates are paid; check individual free resources by item.

<!-- resource: https://tailwindcss.com/plus/templates -->
### Tailwind Plus
- [Template entry](https://tailwindcss.com/plus/templates): a source of commercial Tailwind website templates.
- AI: read template source when purchase and authorized access already exist, extracting layouts/components and adapting them to the existing project. When access is restricted, use available previews as visual references.

## Icons

Prioritize the primary existing icon family, keeping grid, size, stroke width, weight, and visual balance consistent. Distinguish UI icons, brand marks, and animated icons.

<!-- resource: https://lucide.dev/ -->
### Lucide
- [Entry](https://lucide.dev/); [source](https://github.com/lucide-icons/lucide). Consistent outline SVGs with adjustable size, color, and stroke width, supporting multiple stacks and selective imports.
- AI documentation: [llms.txt](https://lucide.dev/llms.txt), [llms-full.txt](https://lucide.dev/llms-full.txt). Provide specific icon names and actual package interfaces, avoiding invented exports.
- Access: free and open source, ISC; see separate brand guidance for brand-mark usage.

<!-- resource: https://phosphoricons.com/ -->
### Phosphor Icons
- [Entry](https://phosphoricons.com/); [React source](https://github.com/phosphor-icons/react). Multiple weights, fills, and duotone treatments for more distinctive products and visual content.
- AI: use concrete icon names, weight, and source interfaces. React uses the official `@phosphor-icons/react` package; consult the corresponding version's documentation for interfaces.
- Access: an open-source icon system; check the actual package and asset descriptions. Read the official repository when the website depends on JavaScript.

<!-- resource: https://tabler.io/icons -->
### Tabler Icons
- [Entry](https://tabler.io/icons); [source](https://github.com/tabler/tabler-icons). Outline and filled icons with multiple integrations for feature-rich tools and admin interfaces.
- AI: use specific SVGs, sprites, or component source, aligning grid, stroke, and color.
- Access: icon source is free and open source, MIT; packaged formats and paid bundles for other site products are separate offerings.

<!-- resource: https://icon-sets.iconify.design/ -->
### Iconify
- [Icon-set search](https://icon-sets.iconify.design/); [framework documentation](https://iconify.design/); [source](https://github.com/iconify/iconify). Aggregates many icon families for name-based search and comparison.
- AI: provide real set prefixes and icon names, using corresponding SVGs or components. Compare styles first, then settle on one system.
- Access: follow the displayed license for the specific icon set; do not apply one asset license to the whole aggregation.

<!-- resource: https://simpleicons.org/ -->
### Simple Icons
- [Entry](https://simpleicons.org/); [source](https://github.com/simple-icons/simple-icons). Technology and commercial brand SVG marks for stack, integration, and developer-tool pages.
- AI: select actual brand entries and preserve official shapes and color information; brand marks differ from ordinary generic UI icons.

<!-- resource: https://lucide-animated.com/ -->
### Lucide Animated
- [Entry](https://lucide-animated.com/); [source](https://github.com/pqoqubbw/icons). Copyable Lucide + Motion React animated icons for buttons, hover, and state feedback.
- AI: [llms.txt](https://lucide-animated.com/llms.txt), [full documentation](https://lucide-animated.com/llms-full.txt), [icon catalog](https://lucide-animated.com/icons/llms.txt), and [skill.md](https://lucide-animated.com/skill.md), plus a `/mcp` entry point. Skill instructions can be read remotely; an MCP connection is a separate capability and is not available merely because documentation was read.
- Access: MIT open source; source or registry use must match the actual technology stack.

<!-- resource: https://heroicons.com/ -->
### Heroicons
- [Entry](https://heroicons.com/); [official source](https://github.com/tailwindlabs/heroicons). SVG icons maintained by the Tailwind authors, with React / Vue interfaces and a Figma entry point, MIT open source.
- AI: select matching sizes and styles, use official exports, and avoid mixing existing icon families without a reason.

## Animation and 3D assets

Obtain editable code, animation files, or online scenes according to the task, with actual previews and technical formats.

<!-- resource: https://reactbits.dev/ -->
### React Bits
- [Entry](https://reactbits.dev/); [source](https://github.com/DavidHDev/react-bits). Animated text, backgrounds, particles, cards, microinteractions, and more, with JS/TS and CSS/Tailwind variants, obtainable through copied source or CLI; the base offering is open source, with additional Pro content.
- AI: provide a specific effect page and source, stating the variant and adaptation to the project. Suitable for creative heroes and visual experiments that can be recorded for demonstration.

<!-- resource: https://magicui.design/ -->
### Magic UI
- [Entry](https://magicui.design/); [source](https://github.com/magicuidesign/magicui); [Pro templates](https://pro.magicui.design/). Free, open-source React/TypeScript/Tailwind/Motion effects and components, with additional paid sections and templates.
- AI: select specific animation components, copy actual source, and adapt to the theme for SaaS and marketing pages. Do not assume complete website templates are all free.

<!-- resource: https://ui.aceternity.com/ -->
### Aceternity UI
- [Entry](https://ui.aceternity.com/). Beams, shaders, 3D cards, carousels, text, backgrounds, and dynamic heroes; also offers pages, sections, and complete templates beyond components.
- AI: use specific component source, registries, or existing MCP capabilities; primarily for React, Next.js, Tailwind, and Motion.
- Access: free components exist; verify paid access for complete sections, pages, templates, All-Access, and other offerings per item. Consult corresponding documentation for registry and MCP integration.

<!-- resource: https://motion-primitives.com/ -->
### Motion Primitives
- [Entry](https://motion-primitives.com/); [documentation](https://motion-primitives.com/docs); [source](https://github.com/ibelick/motion-primitives). Modifiable React motion components based on Motion and Tailwind for refined state, text, and component transitions.
- Access: repository MIT; verify version-specific APIs through official documentation or source.

<!-- resource: https://lottiefiles.com/free-animations -->
### LottieFiles
- [Free animations](https://lottiefiles.com/free-animations): loading, success, icons, illustrations, and more, with additional [Lottie Creator](https://lottiefiles.com/lottie-creator), [mobile tools](https://lottiefiles.com/mobile), and paid features.
- AI: provide actual `.json` / `.lottie` or other files and the matching runtime, confirming theme, color, and dimensions. Downloads, editing, optimization, CDN, and video export are distinct capabilities; verify against [current plans](https://lottiefiles.com/pricing).
- Distinguish these animation assets from LottieFiles' motion-design guidance skill.

<!-- resource: https://rive.app/marketplace/ -->
### Rive Marketplace
- [Entry](https://rive.app/marketplace/): community interactive animations, characters, and curated works for stateful or input-responsive motion.
- AI: use actual Rive files, corresponding runtimes, and interaction-input descriptions; complex state machines cannot be inferred from static screenshots alone.
- Access: individual assets have their own licenses; follow the editor and runtime service descriptions.

<!-- resource: https://community.spline.design/ -->
### Spline Community
- [Entry](https://community.spline.design/): discover, remix, and share 3D scenes and templates for interactive heroes, 3D objects, and creative spaces.
- AI: provide specific projects, scene links, screenshots, and interaction goals; editing in Spline or embedding in a page requires corresponding capabilities.
- Access: [plans](https://spline.design/pricing) determine Web, video, watermark, and other export capabilities. After selecting a scene, verify availability of the required format.

<!-- resource: https://gsap.com/showcase/ -->
### GSAP Showcase
- [Showcase](https://gsap.com/showcase/); [official demos](https://demos.gsap.com/); [documentation](https://gsap.com/docs/). Observe scroll, SVG, typography, 3D, and choreography in actual work.
- AI: open a specific example, then find corresponding public demos or source. A showcase does not guarantee every commercial work publishes code. For implementation choices, see [motion guidance](visual-interaction.md#motion-and-interaction).

## Photography illustration video and audio assets

Use for hero imagery, article illustrations, B-roll, music, and sound effects, selecting by the specific resource's format and purpose.

<!-- resource: https://undraw.co/illustrations -->
### unDraw
- [Illustration entry](https://undraw.co/illustrations): people, work, technology, empty states, feature explanations, and other illustrations, with adjustable primary color to match the brand.
- AI: select a specific illustration, providing the downloaded file and primary color for explanatory pages and empty states. Distinguish free illustrations from Plus supporter content; actual use follows resource descriptions.

<!-- resource: https://unsplash.com/ -->
### Unsplash
- [Entry](https://unsplash.com/): photography, textures, architecture, nature, people, experiments, 3D, and other visual resources.
- AI: select a specific image and suitable crop, preferably providing the actual file. Do not leave only a search page or a potentially changing random image URL.
- Access: free content and Unsplash+ coexist; confirm actual availability of the selected item.

<!-- resource: https://www.pexels.com/videos/ -->
### Pexels
- [Video entry](https://www.pexels.com/videos/): live-action videos and background clips, plus photography.
- AI: provide specific clips or obtained video files, clip purpose, and time ranges as supporting footage for demos.
- Access: free community assets and an Image & Video API entry point are available; API and resource capabilities do not mean credentials have been obtained.

<!-- resource: https://mixkit.co/ -->
### Mixkit
- [Entry](https://mixkit.co/): video, music, sound effects, and editing templates.
- AI: select specific files and clarify whether they are video, sound effects, or editor templates; the latter may target Premiere, After Effects, Final Cut, or DaVinci Resolve and are not directly equivalent to Remotion components.
- Access: the site has free resources plus an Envato commercial-service entry point; check resource type and specific license for the selected item.
