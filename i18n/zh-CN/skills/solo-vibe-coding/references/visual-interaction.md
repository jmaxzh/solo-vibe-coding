# 视觉与交互

用于界面与审美、设计系统、动效、图片、视频及视觉素材。按当前交付形式选技能；已有品牌、审美和技术栈优先沿用。只找素材时可直接进入[视觉参考与素材](resources/visual.md)，无须先加载制作技能。

官网目的、文案和传播见 [获客与转化](acquisition.md)；实现中的排障与通用测试见 [开发与质量](development.md)。专业指导在本文维护，现成素材在[视觉参考与素材](resources/visual.md)维护；其他范畴按需引用对应条目。

## 按交付目标选择能力

先确定功能页、静态页或自媒体素材的目标产物，再选择主指导与补充能力；已有方案按独立缺口补充，只找素材时直接进入[视觉参考与素材](resources/visual.md)。

### 按交付场景组合能力

视觉、图片、动效与视频能力可用于功能页、静态页及自媒体素材。按目标产物、参考效果、已有实现与实际工具选择主指导，再补充独立缺口；以下组合是选择示例。

| 场景 | 能力组合与应用 |
| --- | --- |
| 功能页：工具、表单、设置、仪表盘与编辑器 | frontend-design 或已有设计系统指导布局与视觉层级；Emil 或 GSAP 补充状态反馈、过渡与操作引导；图片生成、canvas-design、algorithmic-art 可用于插画、空状态、可视化或创作画布。视觉效果服务操作与信息理解，保留真实数据、加载、空态、错误和键盘操作等所需行为。实现与验证结合[开发与质量](development.md)。 |
| 静态页：官网、落地页、作品集、文章与活动页 | frontend-design 确定整体视觉；imagegen 或 baoyu-image-gen 制作主视觉，canvas-design 处理静态构图；algorithmic-art 制作粒子或流场，gsap-scrolltrigger 编排滚动、视差与场景切换。按页面用途选取，视频内容可组合 Remotion 或 HyperFrames；结构与文案需要时见[获客与转化](acquisition.md)。 |
| 自媒体素材：封面、配图、海报、图卡、演示与短视频 | 封面、配图与海报结合图片生成、canvas-design 及相应 baoyu 技能；系列图卡按内容结构拆分。Remotion 或 HyperFrames 将真实产品画面、图片、文字与音频组合为演示、讲解或短视频；algorithmic-art 和 GSAP 可补充生成式画面与动态编排。选题与平台表达需要时见[渠道选择](acquisition.md#渠道选择)。 |

需要现成效果时，从[视觉参考与素材](resources/visual.md)选取具体组件、模板或媒体文件；需要定制效果时选择对应制作指导。图片生成优先使用宿主可用工具，多供应商或批量任务可选 baoyu-image-gen。视频沿用已有工程；新工程按 React 组件复用、HTML/GSAP 制作方式与可用渲染环境选择 Remotion 或 HyperFrames。

同一主题跨页面和自媒体复用时，沿用品牌、配色、字体与真实产品素材，按目标载体调整构图、比例、文字密度和节奏。交付检查覆盖实际产物：页面的响应式、可操作状态和动效降级；图片的尺寸、裁切和文字可读性；视频的实际导出、音画同步与首尾画面。保留用户需要的可编辑源码或生成参数，说明预览与最终文件的位置。

### 素材取用原则

定位具体案例、页面、截图、组件源码或素材文件，说明参考的构图、字体、色彩、密度或动作节奏。动态效果提供可播放示例。截图、平台模板、源码、动画文件与在线场景分别判断获取方式；付费、账号、下载与授权范围以选中条目为准。优先与当前技术栈兼容的素材，不因选择参考而自动迁移框架。

## 制作指导

按需要制作或改进的内容选择专业指导；Stitch 的专项方法归入界面制作。下表用于定位，候选的适用条件见对应章节。

| 当前问题 | 本文位置与主要候选 |
| --- | --- |
| 新界面与视觉方向 | [界面与审美](#界面与审美)：frontend-design、design-taste-frontend、ui-ux-pro-max |
| 评审与精修、操作手感、界面规范 | [界面与审美](#界面与审美)：impeccable、emil-design-eng、web-design-guidelines |
| Stitch 方案、提示、设计规范与组件实现 | [Stitch 界面制作](#stitch-界面制作) |
| 主视觉、海报、封面、图解与连续图卡 | [图片与静态素材](#图片与静态素材)：imagegen、canvas-design、baoyu 系列 |
| 组件动画、滚动、粒子、3D 与性能 | [动效与交互](#动效与交互)：Emil、GSAP、motion-design、algorithmic-art、threejs |
| 产品演示、讲解、可导出视频、字幕、配音与媒体后端 | [视频与媒体制作](#视频与媒体制作)：video、Remotion、HyperFrames、fal |

### 界面与审美

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

#### Stitch 界面制作

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

### 图片与静态素材

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

### 动效与交互

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

### 视频与媒体制作

精确展示 UI 与文字可选程序化视频，生成式片段和声音使用实际可用媒体后端。Remotion 来自 [remotion-dev/skills](https://github.com/remotion-dev/skills)，按视频任务选择子技能；预览与导出需要对应工程及渲染环境。已有工程优先沿用。交付实际渲染文件与检查结果，区分源码、预览、静态封面与已导出视频。

<!-- skill: coreyhaines31/marketingskills@video -->
- **video**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/video/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/video)。用于产品演示、讲解视频、官网与 YouTube 视频及长视频拆短片；结合现有录屏、截图和产品素材选择录屏、程序化视频、生成片段或数字人等制作方式。选题与传播目标见[获客与转化](acquisition.md#内容传播与公开开发)，具体制作按需组合下方工具。读取指导不代表已具备生成、剪辑或渲染能力，执行时核对所选工具、凭据与费用条件。

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

## 素材资源

需要现成案例、模板、图标、字体、图表或媒体时，按需读取[视觉参考与素材](resources/visual.md)。
