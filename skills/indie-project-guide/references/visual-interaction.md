# 视觉与交互

用于界面与审美、设计系统、动效、图片、视频及视觉素材。按当前交付形式选技能；已有品牌、审美和技术栈优先沿用。只找素材时可直接定位下方素材条目，无须先加载制作技能。

| 当前问题 | 本文位置与主要候选 |
| --- | --- |
| 新界面与视觉方向 | 界面与审美：frontend-design、design-taste-frontend、ui-ux-pro-max |
| 评审与精修、操作手感、界面规范 | 界面与审美：impeccable、emil-design-eng、web-design-guidelines |
| Stitch 方案、提示、设计规范与组件实现 | Stitch 界面制作 |
| 主视觉、海报、封面、图解与连续图卡 | 图片与静态素材：imagegen、canvas-design、baoyu 系列 |
| 组件动画、滚动、粒子、3D 与性能 | 动效与交互：Emil、GSAP、motion-design、algorithmic-art、threejs |
| 可导出视频、字幕、配音与媒体后端 | 视频与媒体制作：Remotion、HyperFrames、fal |
| 找案例、模板、图标或媒体文件 | 灵感与界面、模板与组件、图标、动画与 3D 素材、摄影插画视频与声音素材 |

官网目的、文案和传播见 [获客与转化](acquisition.md)；实现中的排障与通用测试见 [开发与质量](development.md)。每项专业指导与素材只在本文维护，其他范畴按需引用。

## 界面与审美

结合产品用途、受众、具体页面参考和已有风格选择主导指南，辅助能力解决独立缺口。精修侧重局部质量，重设计涉及整体方向，规范审核依据明确规则。

<!-- skill: anthropics/skills@frontend-design -->
- **frontend-design**：[原文](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/frontend-design)。从产品主题、受众、材料和使用场景推导视觉方向，处理字体、配色、构图、层级和动效。适合有辨识度的新界面与官网。

<!-- skill: nextlevelbuilder/ui-ux-pro-max-skill@ui-ux-pro-max -->
- **ui-ux-pro-max**：[原文](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md)，[技能页](https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max)。提供设计风格、行业配色、字体组合、交互规范、图表与技术栈资料，适合建立设计依据。需要具体数据时，按原文路径读取相关引用与 CSV；使用检索脚本则需要取得脚本及运行环境。

<!-- skill: pbakaus/impeccable@impeccable -->
- **impeccable**：[原文](https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/SKILL.md)，[技能页](https://skills.sh/pbakaus/impeccable/impeccable)。覆盖新设计、评审、精修、简化、排版、配色、交互、动画和设计系统；区分 Persuade / Operate / Read / Experience 等场景。按任务读取 `shape`、`critique`、`audit`、`polish`、`bolder`、`quieter`、`distill`、`animate`、`colorize`、`typeset`、`harden`、`onboard` 等对应参考。模型评审和专用引擎检查需要分别说明实际执行情况。

<!-- skill: leonxlnx/taste-skill@design-taste-frontend -->
- **design-taste-frontend / Taste Skill**：[原文](https://github.com/leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md)，[技能页](https://skills.sh/leonxlnx/taste-skill/design-taste-frontend)。重视视觉构思、真实参考、图片与产品 UI、版式和浏览器实看，适合官网、落地页和作品展示。源码目录为 `taste-skill`；风格指导服从项目 brief，脚本与浏览器检查按当前原文核对运行依赖。

<!-- skill: emilkowalski/skills@emil-design-eng -->
- **emil-design-eng**：[原文](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)，[技能页](https://skills.sh/emilkowalski/skills/emil-design-eng)。关注组件细节、按钮反馈、状态、弹簧与中断、感知性能和界面手感。适合产品本体的设计工程；只做动画时查看 [动效指南](visual-interaction.md#动效与交互)。

<!-- skill: vercel-labs/agent-skills@web-design-guidelines -->
- **web-design-guidelines**：[原文](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)，[技能页](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines)。按 Vercel 的 [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) 检查现有界面，适用于交互、排版、响应式和可访问性规范评审。

<!-- skill: anthropics/skills@theme-factory -->
- **theme-factory**：[原文](https://github.com/anthropics/skills/blob/main/skills/theme-factory/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/theme-factory)。为幻灯片、文档、报告和 HTML 等产物应用或生成配色与字体主题，适合跨素材一致性；已有品牌时复用既定品牌。

<!-- skill: anthropics/skills@web-artifacts-builder -->
- **web-artifacts-builder**：[原文](https://github.com/anthropics/skills/blob/main/skills/web-artifacts-builder/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/web-artifacts-builder)。针对复杂、多组件、带状态或路由的 Claude HTML artifacts；适配宿主后才使用其打包方法。普通仓库页面不需要为了套用它迁移到 artifact 环境。

<!-- skill: ibelick/ui-skills@baseline-ui -->
- **baseline-ui**：[原文](https://github.com/ibelick/ui-skills/blob/main/skills/baseline-ui/SKILL.md)。界面实现的基础规范。

<!-- skill: addyosmani/web-quality-skills@accessibility -->
- **accessibility**：[原文](https://github.com/addyosmani/web-quality-skills/blob/main/skills/accessibility/SKILL.md)，[技能页](https://skills.sh/addyosmani/web-quality-skills/accessibility)。具体无障碍问题与专项审查：键盘、焦点、语义、可访问名称、读屏及对比度。一般界面规范评审先用 web-design-guidelines，发现问题或需要深入验证时读取本项；用实际页面、自动检查和人工交互验证，工具分数不能代替完整无障碍结论。浏览器测试接入见[测试与验证](development.md#测试与验证)。

<!-- skill: ibelick/ui-skills@fixing-metadata -->
- **fixing-metadata**：[原文](https://github.com/ibelick/ui-skills/blob/main/skills/fixing-metadata/SKILL.md)。页面元数据问题。

<!-- skill: anthropics/skills@brand-guidelines -->
- **brand-guidelines**：[原文](https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md)。应用 Anthropic 的品牌色与字体，仅适用于该品牌表达；通用项目主题使用 theme-factory 或界面设计指导。

`Taste Skill` / `taste-skill` 对应 `design-taste-frontend`，源码目录为 `skills/taste-skill`。

## Stitch 界面制作

来源：[Google Labs Stitch Skills](https://github.com/google-labs-code/stitch-skills)。提示与设计表达可作为文本指导；生成、编辑和导出项目需要实际工具与项目访问能力。`react:components` 对应 `stitch::react-components`。

<!-- skill: google-labs-code/stitch-skills@stitch::generate-design -->
- **stitch::generate-design**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/generate-design/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/stitch::generate-design)。根据文本、图片或 mockup 生成界面、编辑设计或生成变体，适合探索具体视觉方案；业务逻辑需要另外实现。

<!-- skill: google-labs-code/stitch-skills@enhance-prompt -->
- **enhance-prompt**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/enhance-prompt/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/enhance-prompt)。将 UI 描述细化为布局、风格、组件和设计 token，适用于 Stitch 提示优化。

<!-- skill: google-labs-code/stitch-skills@design-md -->
- **design-md**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/design-md/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/design-md)。从 Stitch 项目归纳语义化设计系统，适用于提取或维护设计规范。

<!-- skill: google-labs-code/stitch-skills@stitch::react-components -->
- **stitch::react-components**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-build/skills/react-components/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/stitch::react-components)。将 Stitch 设计转为模块化 Vite/React 组件或同步既有组件。

<!-- skill: google-labs-code/stitch-skills@stitch-loop -->
- **stitch-loop**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/stitch-loop/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/stitch-loop)。适用于用户选择的 Stitch 迭代建站任务，通过循环生成与检查完善页面。

## 图片与静态素材

位图生成、排版成图、SVG/代码图形和可编辑 UI 按实际产物选择。图片中的界面不等于已实现的产品，逐页演示图也不等于可编辑 PPT。baoyu 系列来自 [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills)，实际生成需要相应后端、凭据与脚本运行环境。

<!-- skill: openai/skills@imagegen -->
- **imagegen**：[原文](https://github.com/openai/skills/blob/main/skills/.system/imagegen/SKILL.md)，[技能页](https://skills.sh/openai/skills/imagegen)。生成与编辑位图、参考图变体、透明背景素材、主视觉和产品概念图。优先宿主已有的图像工具；使用 CLI 路径需要对应 API 凭据。可编辑矢量和代码图形按实际交付形式选择工具。

<!-- skill: anthropics/skills@canvas-design -->
- **canvas-design**：[原文](https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/canvas-design)。先确定视觉表达，再制作 PNG/PDF 静态作品；适合海报与少量文字的视觉设计，不用于实现网页。

<!-- skill: jimliu/baoyu-skills@baoyu-image-gen -->
- **baoyu-image-gen**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-image-gen/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-image-gen)。API 图片生成与编辑，支持参考图、比例、保存提示和批量任务。适合需要多供应商或批处理的工作；可用后端、模型和调用方式以当前原文为准。

<!-- skill: jimliu/baoyu-skills@baoyu-cover-image -->
- **baoyu-cover-image**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-cover-image/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-cover-image)。按类型、色板、渲染、文字、情绪和目标比例组织封面，适合形成可复用的封面风格。

<!-- skill: jimliu/baoyu-skills@baoyu-infographic -->
- **baoyu-infographic**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-infographic/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-infographic)。按信息结构选择布局与视觉风格，用于技术、流程与知识内容图解。

<!-- skill: jimliu/baoyu-skills@baoyu-xhs-images -->
- **baoyu-xhs-images**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-xhs-images/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-xhs-images)。将内容拆为连续图卡，结合布局、视觉风格与色板组织表达，适合中文内容、小红书或轮播图。

<!-- skill: jimliu/baoyu-skills@baoyu-slide-deck -->
- **baoyu-slide-deck**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-slide-deck/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-slide-deck)。从内容和大纲生成逐页演示图；需可编辑演示文稿时，检查它的实际输出并选择适配能力，不假称图片为可编辑源文件。

<!-- skill: jimliu/baoyu-skills@baoyu-article-illustrator -->
- **baoyu-article-illustrator**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-article-illustrator/SKILL.md)。文章配图位置、类型与生成；只有用户要求文章配图时追加。

<!-- skill: jimliu/baoyu-skills@baoyu-comic -->
- **baoyu-comic**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-comic/SKILL.md)。用于漫画式解释与故事画面。

## 动效与交互

组件反馈与中断可选 Emil；节奏与编排可选 motion-design；时间线、滚动和 SVG 可选 GSAP；粒子和交互 3D 分别参考 algorithmic-art、threejs。表现强度服务实际用途，同时关注响应、可中断性、移动端和 reduced-motion。

GSAP 官方技能来自 [greensock/gsap-skills](https://github.com/greensock/gsap-skills)，按具体模块读取。

<!-- skill: greensock/gsap-skills@gsap-core -->
- **[gsap-core](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-core/SKILL.md)**：基础 tween、变换、缓动和 stagger；[技能页](https://skills.sh/greensock/gsap-skills/gsap-core)。

<!-- skill: greensock/gsap-skills@gsap-timeline -->
- **[gsap-timeline](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-timeline/SKILL.md)**：多段动画的时间线与编排。

<!-- skill: greensock/gsap-skills@gsap-scrolltrigger -->
- **[gsap-scrolltrigger](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-scrolltrigger/SKILL.md)**：滚动触发、pin、scrub、视差、横向滚动叙事；[技能页](https://skills.sh/greensock/gsap-skills/gsap-scrolltrigger)。

<!-- skill: greensock/gsap-skills@gsap-react -->
- **[gsap-react](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-react/SKILL.md)**：React 使用与生命周期清理。

<!-- skill: greensock/gsap-skills@gsap-plugins -->
- **[gsap-plugins](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-plugins/SKILL.md)**：Flip、Draggable、SplitText、SVG 路径与形状等插件；具体接入方式按当前官方文档核对。

<!-- skill: greensock/gsap-skills@gsap-performance -->
- **[gsap-performance](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-performance/SKILL.md)**：动画性能与实现问题。

<!-- skill: greensock/gsap-skills@gsap-utils -->
- **[gsap-utils](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-utils/SKILL.md)**：数值、映射、分布等工具。

<!-- skill: greensock/gsap-skills@gsap-frameworks -->
- **[gsap-frameworks](https://github.com/greensock/gsap-skills/blob/main/skills/gsap-frameworks/SKILL.md)**：其他框架下的接入与用法。

<!-- skill: lottiefiles/motion-design-skill@motion-design -->
- **motion-design**：[原文](https://github.com/LottieFiles/motion-design-skill/blob/main/skills/motion-design/SKILL.md)，[技能页](https://skills.sh/lottiefiles/motion-design-skill/motion-design)。动效人格、时间、缓动、编排与 UI 中的动画原则；它是设计指导，不是已制作好的 Lottie 文件。

<!-- skill: emilkowalski/skills@animate -->
- **animate**：[原文](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md)，[技能页](https://skills.sh/emilkowalski/skills/animate)。从当前动画请求选择目的、技术、属性、曲线、时长与退出/中断方式并实现。

<!-- skill: emilkowalski/skills@review-animations -->
- **review-animations**：[原文](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md)。审阅现有动画，分析具体表现与改进方向。

<!-- skill: emilkowalski/skills@improve-animations -->
- **improve-animations**：[原文](https://github.com/emilkowalski/skills/blob/main/skills/improve-animations/SKILL.md)。用户要求系统改善现有动画时使用。

<!-- skill: emilkowalski/skills@animation-performance -->
- **animation-performance**：[原文](https://github.com/emilkowalski/skills/blob/main/skills/animation-performance/SKILL.md)。动画性能专项。

<!-- skill: anthropics/skills@algorithmic-art -->
- **algorithmic-art**：[原文](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/algorithmic-art)。使用 p5.js、种子随机、噪声、粒子和流场制作可交互程序化艺术；输出 HTML/JS 查看器和算法，适合视觉实验与展示背景。

<!-- skill: mengto/skills@threejs -->
- **threejs**：[原文](https://github.com/mengto/skills/blob/main/agent-skills/web-design/threejs/SKILL.md)，[技能页](https://skills.sh/mengto/skills/threejs)。真实网页 3D、交互首屏、物体旋转、相机、灯光、材质与模型加载；同时考虑素材与性能成本。

<!-- skill: mengto/skills@gsap -->
- **gsap（MengTo）**：[原文](https://github.com/mengto/skills/blob/main/agent-skills/web-design/gsap/SKILL.md)，[技能页](https://skills.sh/mengto/skills/gsap)。综合网页动画指导；具体 GSAP API 与框架接入问题优先查对应官方模块。

<!-- skill: ibelick/ui-skills@fixing-motion-performance -->
- **fixing-motion-performance**：[原文](https://github.com/ibelick/ui-skills/blob/main/skills/fixing-motion-performance/SKILL.md)，[技能页](https://skills.sh/ibelick/ui-skills/fixing-motion-performance)。用于动画性能问题的诊断与修正。

<!-- skill: kylezantos/design-motion-principles@design-motion-principles -->
- **design-motion-principles**：[原文](https://github.com/kylezantos/design-motion-principles/blob/main/skills/design-motion-principles/SKILL.md)，[技能页](https://skills.sh/kylezantos/design-motion-principles/design-motion-principles)。可用于构建或评审，参考 Emil、Jakub Krehel、Jhey Tompkins 的公开实践；它是第三方归纳，区别于创作者自己的技能。

## 视频与媒体制作

精确展示 UI 与文字可选程序化视频，生成式片段和声音使用实际可用媒体后端。Remotion 来自 [remotion-dev/skills](https://github.com/remotion-dev/skills)，按视频任务选择子技能；预览与导出需要对应工程及渲染环境。已有工程优先沿用。交付实际渲染文件与检查结果，区分源码、预览、静态封面与已导出视频。

<!-- skill: remotion-dev/skills@remotion-best-practices -->
- **[remotion-best-practices](https://github.com/remotion-dev/skills/blob/main/skills/remotion-best-practices/SKILL.md)**：[技能页](https://skills.sh/remotion-dev/skills/remotion-best-practices)。Remotion 专项指导的路由入口，按当前视频任务选择对应子技能与参考。

<!-- skill: remotion-dev/skills@remotion-create -->
- **[remotion-create](https://github.com/remotion-dev/skills/blob/main/skills/remotion-create/SKILL.md)**：建立新的 composition 或视频项目。

<!-- skill: remotion-dev/skills@remotion-render -->
- **[remotion-render](https://github.com/remotion-dev/skills/blob/main/skills/remotion-render/SKILL.md)**：渲染视频与静帧。

<!-- skill: remotion-dev/skills@remotion-studio -->
- **[remotion-studio](https://github.com/remotion-dev/skills/blob/main/skills/remotion-studio/SKILL.md)**：预览与 Studio。

<!-- skill: remotion-dev/skills@remotion-captions -->
- **[remotion-captions](https://github.com/remotion-dev/skills/blob/main/skills/remotion-captions/SKILL.md)**：字幕处理。

<!-- skill: remotion-dev/skills@remotion-markup -->
- **[remotion-markup](https://github.com/remotion-dev/skills/blob/main/skills/remotion-markup/SKILL.md)**：React 视频布局与元素。

<!-- skill: remotion-dev/skills@remotion-interactivity -->
- **[remotion-interactivity](https://github.com/remotion-dev/skills/blob/main/skills/remotion-interactivity/SKILL.md)**：Studio 中可编辑、可选择元素的结构。

<!-- skill: remotion-dev/skills@remotion-multimedia -->
- **[remotion-multimedia](https://github.com/remotion-dev/skills/blob/main/skills/remotion-multimedia/SKILL.md)**：剪裁、裁切和媒体信息等。

<!-- skill: remotion-dev/skills@remotion-maps -->
- **[remotion-maps](https://github.com/remotion-dev/skills/blob/main/skills/remotion-maps/SKILL.md)**：地图、路线与地理视频。

<!-- skill: remotion-dev/skills@remotion-saas -->
- **[remotion-saas](https://github.com/remotion-dev/skills/blob/main/skills/remotion-saas/SKILL.md)**：制作视频应用或视频 SaaS 的专项。

<!-- skill: remotion-dev/skills@remotion-docs -->
- **[remotion-docs](https://github.com/remotion-dev/skills/blob/main/skills/remotion-docs/SKILL.md)**：查阅现行 API。

<!-- skill: remotion-dev/skills@remotion-upgrade -->
- **[remotion-upgrade](https://github.com/remotion-dev/skills/blob/main/skills/remotion-upgrade/SKILL.md)**：已有 Remotion 工程升级。

<!-- skill: remotion-dev/skills@remotion-license -->
- **[remotion-license](https://github.com/remotion-dev/skills/blob/main/skills/remotion-license/SKILL.md)**：查明视频框架在实际用途下的授权与费用条件。

<!-- skill: heygen-com/hyperframes@hyperframes -->
- **hyperframes**：[原文](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes/SKILL.md)，[技能页](https://skills.sh/heygen-com/hyperframes/hyperframes)。使用 HTML 组合、GSAP 时间线、场景、字幕、音频和可参数化渲染制作视频。发布片、解释片、图表和竖屏内容等按需读取入口中的参考。

<!-- skill: heygen-com/hyperframes@media-use -->
- **media-use**：[原文](https://github.com/heygen-com/hyperframes/blob/main/skills/media-use/SKILL.md)，[技能页](https://skills.sh/heygen-com/hyperframes/media-use)。查找或生成图片、图标、品牌标志、音乐、音效、配音、数字人、转录、抠像与调色素材。部分为本地能力，部分依赖 HeyGen 登录、额度或付费；逐项以当前环境和用户范围为准。图像模型生成与视频时间线渲染是不同能力。

<!-- skill: heygen-com/hyperframes@remotion-to-hyperframes -->
- **remotion-to-hyperframes**：[原文](https://github.com/heygen-com/hyperframes/blob/main/skills/remotion-to-hyperframes/SKILL.md)。用于将 Remotion 工程迁移到 HyperFrames。

<!-- skill: fal-ai-community/skills@fal-video-generation -->
- **fal-video-generation**：[原文](https://github.com/fal-ai-community/skills/blob/main/skills/fal-video-generation/SKILL.md)，[技能页](https://skills.sh/fal-ai-community/skills/fal-video-generation)。生成或转换片段、图像动画、参考视频、扩展与升格，需要对应模型、端点与可用的调用工具。

<!-- skill: fal-ai-community/skills@genmedia -->
- **genmedia**：[原文](https://github.com/fal-ai-community/skills/blob/main/skills/genmedia/SKILL.md)。终端环境发现模型、看 schema、上传与运行；需要实际 CLI 与服务凭据。

<!-- skill: fal-ai-community/skills@fal-media -->
- **fal-media**：[原文](https://github.com/fal-ai-community/skills/blob/main/skills/fal-media/SKILL.md)。对应 MCP 宿主的媒体操作入口；不假定当前存在。

## 素材取用原则

定位具体案例、页面、截图、组件源码或素材文件，说明参考的构图、字体、色彩、密度或动作节奏。动态效果提供可播放示例。截图、平台模板、源码、动画文件与在线场景分别判断获取方式；付费、账号、下载与授权范围以选中条目为准。优先与当前技术栈兼容的素材，不因选择参考而自动迁移框架。

## 灵感与界面

用于完整网站、产品界面与具体操作流程参考；动态案例应观察实际运行效果。

<!-- resource: https://www.lapa.ninja/ -->
### Lapa Ninja
- 入口：[lapa.ninja](https://www.lapa.ninja/)。大量完整落地页，可按 SaaS、AI、开发者工具、极简、3D、字体、颜色、技术平台筛选；也分 Hero、Features、Pricing、FAQ、CTA、Footer、动效、OG 图与字体。
- AI 用法：找具体页面或区块，提供截图与结构/排版说明。适合快速准备首屏与落地页参考，不假定截图附带源码。
- 获取：基础浏览可用，另有 [Pro](https://www.lapa.ninja/pro/) 的收藏等功能，站内还有模板、免费资源与插画入口。

<!-- resource: https://land-book.com/ -->
### Land-book
- 入口：[land-book.com](https://land-book.com/)。人工精选、持续更新的网站与局部参考，可按行业、颜色、字体、平台、极简、Apple 风格、3D、视差等筛选，另有 Motion、OG Images 与 Headlines。
- AI 用法：选择一个主视觉方向，说明要参考其色彩、字体、留白或构图；收藏多个案例不等于要求模型全部混用。
- 获取：免费与 [Pro](https://land-book.com/pro) 并存；Pro、保存和 Figma 等具体功能按现行套餐核对。

<!-- resource: https://mobbin.com/ -->
### Mobbin
- 入口：[mobbin.com](https://mobbin.com/)。真实上线的 App、Web 产品屏幕与操作流程，适合导航、设置、编辑器、弹窗、登录和复杂交互参考。
- AI 用法：提供具体 screen/flow，或在用户已有访问能力时用 [Mobbin MCP](https://mobbin.com/mcp) 搜索。MCP 不是本 Skill 的内置工具。
- 获取：免费范围有限，完整库与 MCP 的可用范围按当前套餐核对。

<!-- resource: https://www.saasframe.io/ -->
### SaaSFrame
- 入口：[saasframe.io](https://www.saasframe.io/)。SaaS 官网、产品界面、页面模式与用户流程，能按页面用途及截图文字搜索。
- AI 用法：定位首屏、定价、导航、设置或空状态等具体页面；可获取的 Figma 文件须符合实际账号权限。
- 获取：[免费与 Pro](https://www.saasframe.io/pricing)。浏览结果、移动版本与 Figma 文件等能力按实际访问范围取用。

<!-- resource: https://www.awwwards.com/ -->
### Awwwards
- 入口：[awwwards.com](https://www.awwwards.com/)。作品评选与展示，含 React、GSAP、WebGL、3D、滚动、动画、作品集等分类。
- AI 用法：优先打开具体作品的 live site，找构图、视觉叙事和动作节奏；适合探索创意上限，不推断获奖视觉就是当前产品的最佳操作界面。
- 获取：作品可浏览，另有 Pro、市场与课程；没有默认模板源码授权。

<!-- resource: https://recent.design/ -->
### Recent
- 入口：[recent.design](https://recent.design/)。涵盖 Web、Interface、Branding、Motion、Illustration、Posters、发布视频、OG 图、App 截图与图标。
- AI 用法：具体案例加截图/动态示例，可用于官网、品牌和发布素材的视觉方向。

<!-- resource: https://tympanus.net/codrops/ -->
### Codrops
- 入口：[Codrops](https://tympanus.net/codrops/)。创意网页、交互、WebGL 和动画示例的发现入口；后续取用应找到具体文章、演示与对应源码及其说明。
- AI 用法：用特定 demo、对应文章与真实代码研究实现，提取与当前效果有关的构图、交互和技术方法。

## 模板与组件

用于整站、页面区块及可修改源码；模板的素材、字体和平台依赖按具体条目核对。

<!-- resource: https://www.framer.com/marketplace/templates/ -->
### Framer Marketplace
- [模板入口](https://www.framer.com/marketplace/templates/)：软件、AI、SaaS、作品集、代理商、电商等完整网站模板；免费与付费混合。
- AI：选具体模板的预览页面和截图，明确参考的字体、首屏、区块和动画；在 Framer 内可使用对应编辑能力。平台模板不等于可直接用于现有 React 仓库的全部源码。
- 带设计系统或技能的 Agent Templates 可用于辅助编辑，具体能力以条目与平台访问权限为准。

<!-- resource: https://webflow.com/templates -->
### Webflow Templates
- [模板入口](https://webflow.com/templates)：大量行业整站模板，含免费分类、营销页、个人站与 CMS 等。
- AI：参考完整站点、响应式与动态效果，或在用户选择的 Webflow 环境编辑。不要把公开 demo 的可浏览性推断为可下载付费模板。

<!-- resource: https://astro.build/themes/ -->
### Astro Themes
- [主题入口](https://astro.build/themes/)：官网、博客、作品集、文档与内容站，免费与商业主题并存。
- AI：选择与需求相符且源码可获取的主题，沿 GitHub/仓库入口读取真实文件、许可证和技术栈，检查具体主题的实现质量。

<!-- resource: https://21st.dev/ -->
### 21st.dev
- [入口](https://21st.dev/)：社区组件、模板、主题、首屏、Shader、背景、图标与应用案例，带预览、来源和面向 AI 的复制提示。
- AI：选具体条目，把提示词、源码或 registry 信息交给当前模型；优先解释如何适配已有主题。
- 获取：免费入口与付费或会员能力按具体条目判断。

<!-- resource: https://www.shadcnblocks.com/ -->
### Shadcnblocks
- [入口](https://www.shadcnblocks.com/)：大量 Hero、Feature、Pricing、Bento、导航、应用壳和其他响应式区块，另有整站模板与组件。
- AI：使用具体区块源码或 Shadcn CLI/registry 对接，通常面向 React、Tailwind、shadcn/ui，整站模板还覆盖 Next.js / Astro。
- 获取：免费资源与 Pro 内容并存，按具体区块或模板获取源码。

<!-- resource: https://ui.shadcn.com/blocks -->
### shadcn/ui Blocks 与 Registry
- [官方 Blocks](https://ui.shadcn.com/blocks)：Dashboard、侧栏、表格、图表、登录注册等可复制源码区块；官方页面明确为免费开源。
- AI：读取具体预览和文件，在项目中适配；[Registry 文档](https://ui.shadcn.com/docs/registry) 可用于理解代码分发与地址。Registry 能分发的不只有组件，也可能有页面、主题、配置或其他文件，取用前看实际内容。
- 它是组件与规范来源，不会自动决定项目的审美方向；相应的设计判断可用界面任务指南补足。

<!-- resource: https://cruip.com/ -->
### Cruip
- [入口](https://cruip.com/)：整体风格较完整的营销、SaaS 与 Dashboard 模板，覆盖 Next.js、Astro 和 Tailwind 等。
- AI：有权获取模板后读真实源码，沿用其设计系统扩展；主要为付费模板，个别免费资源看具体条目。

<!-- resource: https://tailwindcss.com/plus/templates -->
### Tailwind Plus
- [模板入口](https://tailwindcss.com/plus/templates)：Tailwind 的商业网站模板来源。
- AI：在已有购买与授权访问时读取模板源码，提取布局与组件并适配现有项目；访问受限时可使用可获取的预览作视觉参考。

## 图标

优先沿用主要图标家族，保持网格、大小、线宽、粗细和视觉重量一致；区分 UI 图标、品牌标志和动态图标。

<!-- resource: https://lucide.dev/ -->
### Lucide
- [入口](https://lucide.dev/)；[源码](https://github.com/lucide-icons/lucide)。统一线性 SVG，可调大小、颜色、线宽，支持多个技术栈与按需引入。
- AI 文档：[llms.txt](https://lucide.dev/llms.txt)、[llms-full.txt](https://lucide.dev/llms-full.txt)。可以给具体图标名和实际包接口，避免模型发明不存在的 export。
- 获取：免费开源，ISC；品牌标志用途另看其品牌说明。

<!-- resource: https://phosphoricons.com/ -->
### Phosphor Icons
- [入口](https://phosphoricons.com/)；[React 源码](https://github.com/phosphor-icons/react)。不同重量、填充与双色等表现，适合更有性格的产品与图文素材。
- AI：用具体图标名、weight 和源码接口，React 使用官方包 `@phosphor-icons/react`，具体接口以对应版本文档为准。
- 获取：开源图标体系，实际包和资产看对应说明。网站依赖 JavaScript 时可读官方仓库。

<!-- resource: https://tabler.io/icons -->
### Tabler Icons
- [入口](https://tabler.io/icons)；[源码](https://github.com/tabler/tabler-icons)。描边与填充，多种集成方式，适合功能丰富的工具与后台。
- AI：具体 SVG、sprite 或组件源码，可统一网格、线宽和色彩。
- 获取：图标源码免费开源、MIT；网站另有打包格式与其他产品付费包，不能混为一谈。

<!-- resource: https://icon-sets.iconify.design/ -->
### Iconify
- [图标集搜索](https://icon-sets.iconify.design/)；[框架文档](https://iconify.design/)；[源码](https://github.com/iconify/iconify)。聚合大量图标家族，适合按名称检索并比较不同体系。
- AI：给出真实图标集前缀与名称，使用对应 SVG 或组件；先比较风格，再固定一个体系。
- 获取：按具体图标集展示的授权使用，不能给整个聚合库套一个统一资产授权。

<!-- resource: https://simpleicons.org/ -->
### Simple Icons
- [入口](https://simpleicons.org/)；[源码](https://github.com/simple-icons/simple-icons)。技术与商业品牌的 SVG 标志，适合技术栈、集成和开发者工具页面。
- AI：选择真实品牌条目，保持官方图形与颜色信息；品牌标志不同于普通通用 UI 图标。

<!-- resource: https://lucide-animated.com/ -->
### Lucide Animated
- [入口](https://lucide-animated.com/)；[源码](https://github.com/pqoqubbw/icons)。Lucide + Motion 的可复制 React 动态图标，适合按钮、悬停与状态反馈。
- AI：[llms.txt](https://lucide-animated.com/llms.txt)、[完整文档](https://lucide-animated.com/llms-full.txt)、[图标目录](https://lucide-animated.com/icons/llms.txt)、[skill.md](https://lucide-animated.com/skill.md)，并提供 `/mcp` 入口。Skill 文档可直接远程读取；MCP 连接是独立能力，不因读了文档就视作已经可用。
- 获取：MIT 开源，源码或 registry 取用须与实际技术栈匹配。

<!-- resource: https://heroicons.com/ -->
### Heroicons
- [入口](https://heroicons.com/)；[官方源码](https://github.com/tailwindlabs/heroicons)。Tailwind 作者维护的 SVG 图标，有 React / Vue 接口与 Figma 入口，MIT 开源。
- AI：选择相符的大小与样式，沿官方导出使用，不与现有图标家族无理由混用。

## 动画与 3D 素材

按任务取得可编辑代码、动画文件或在线场景，并配实际预览与技术形式。

<!-- resource: https://reactbits.dev/ -->
### React Bits
- [入口](https://reactbits.dev/)；[源码](https://github.com/DavidHDev/react-bits)。动态文字、背景、粒子、卡片、微交互等，提供 JS/TS 与 CSS/Tailwind 版本，可复制源码或 CLI 取用；基础开源，另有 Pro。
- AI：给具体效果页面与源码，明确使用哪一版本、如何适配项目。适合创意首屏与能录制展示的视觉实验。

<!-- resource: https://magicui.design/ -->
### Magic UI
- [入口](https://magicui.design/)；[源码](https://github.com/magicuidesign/magicui)；[Pro 模板](https://pro.magicui.design/)。免费开源的 React/TypeScript/Tailwind/Motion 效果与组件，另有付费区块和模板。
- AI：选择具体动画组件、复制真实源码并适配主题，适合 SaaS 与营销页面。不要默认整个网站模板都是免费资源。

<!-- resource: https://ui.aceternity.com/ -->
### Aceternity UI
- [入口](https://ui.aceternity.com/)。光束、Shader、3D 卡片、轮播、文字、背景与动态首屏；组件之外还有页面、区块与整站模板。
- AI：使用具体组件源码、registry 或已有 MCP 能力；主要面向 React、Next.js、Tailwind、Motion。
- 获取：有免费组件，完整区块、页面、模板与 All-Access 等付费范围按具体条目核对；registry 和 MCP 接入方法查对应文档。

<!-- resource: https://motion-primitives.com/ -->
### Motion Primitives
- [入口](https://motion-primitives.com/)；[文档](https://motion-primitives.com/docs)；[源码](https://github.com/ibelick/motion-primitives)。基于 Motion 与 Tailwind 的可修改 React 动效组件，适合细腻的状态、文字与组件过渡。
- 获取：仓库 MIT，可从官方文档或源码核对所用版本的 API。

<!-- resource: https://lottiefiles.com/free-animations -->
### LottieFiles
- [免费动画](https://lottiefiles.com/free-animations)：加载、成功、图标、插画等；另有 [Lottie Creator](https://lottiefiles.com/lottie-creator)、[移动工具](https://lottiefiles.com/mobile) 和付费功能。
- AI：提供实际 `.json` / `.lottie` 等文件与适配 runtime，确认主题、颜色和尺寸。下载动画与编辑、优化、CDN、视频导出是不同能力，按 [当前套餐](https://lottiefiles.com/pricing) 核对。
- 不把这里的动画素材和 LottieFiles 的 motion-design 指导 Skill 混为同一个能力。

<!-- resource: https://rive.app/marketplace/ -->
### Rive Marketplace
- [入口](https://rive.app/marketplace/)：社区可交互动画、角色与精选作品，适合有状态或响应输入的动效。
- AI：用真实 Rive 文件、对应 runtime 和交互输入说明；复杂状态机不能仅凭静态截图推断。
- 获取：具体素材有各自授权，编辑与运行服务按其说明使用。

<!-- resource: https://community.spline.design/ -->
### Spline Community
- [入口](https://community.spline.design/)：发现、Remix 和分享 3D 场景与模板，适合交互首屏、3D 对象和创意空间。
- AI：提供具体项目、场景链接、截图与互动目标；进入 Spline 编辑或网页嵌入时需要对应能力。
- 获取：[套餐](https://spline.design/pricing) 决定 Web、视频、水印等导出能力；选定场景后核对所需格式的可用性。

<!-- resource: https://gsap.com/showcase/ -->
### GSAP Showcase
- [案例](https://gsap.com/showcase/)；[官方 demos](https://demos.gsap.com/)；[文档](https://gsap.com/docs/)。按真实作品观察滚动、SVG、文字、3D 与编排。
- AI：打开具体案例，再找对应公开 demo 或源码；展示页不保证每个商业作品都公开代码。实现选择看 [动效指南](visual-interaction.md#动效与交互)。

## 摄影、插画、视频与声音素材

用于主视觉、文章配图、B-roll、配乐与音效，按具体资源的格式和用途选择。

<!-- resource: https://undraw.co/illustrations -->
### unDraw
- [插画入口](https://undraw.co/illustrations)：人物、工作、技术、空状态与功能解释等插画，可调整主色以适配品牌。
- AI：选具体插画，提供下载文件与主色；适合解释性页面和空状态。免费插画与 Plus 支持者内容分开，实际使用按资源说明。

<!-- resource: https://unsplash.com/ -->
### Unsplash
- [入口](https://unsplash.com/)：摄影、纹理、建筑、自然、人物、实验和 3D 等视觉资源。
- AI：选择具体图片与适配裁切，最好提供实际文件；不要只留搜索页或可能变化的随机图片 URL。
- 获取：免费内容与 Unsplash+ 并存，确认选中条目的真实可获取性。

<!-- resource: https://www.pexels.com/videos/ -->
### Pexels
- [视频入口](https://www.pexels.com/videos/)：实拍视频与背景片段，另有摄影。
- AI：给具体片段或已取得的视频文件、片段用途和时间范围，适合作为演示片的辅助画面。
- 获取：有免费社区素材，提供 Image & Video API 入口；API 与资源使用能力不等于当前已获得凭据。

<!-- resource: https://mixkit.co/ -->
### Mixkit
- [入口](https://mixkit.co/)：视频、音乐、音效与剪辑模板。
- AI：选具体文件，明确是视频、音效还是编辑器模板；后者可能针对 Premiere、After Effects、Final Cut 或 DaVinci Resolve，不能直接等同 Remotion 组件。
- 获取：网站有免费资源，另有 Envato 商业服务入口；资源类型和具体许可按选中条目核对。
