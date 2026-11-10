# 动效与交互

适用于网页内动画、组件手感、滚动叙事、粒子、程序化图形、3D 与性能。要导出视频文件则读取 [视频指南](video.md)，不要把网页实时动画说成已导出短片。

## 选择

- 组件响应、过渡、弹簧与中断：Emil 的 animate 或 emil-design-eng；只评审则 review-animations。
- 动效节奏、缓动、编排、品牌气质：LottieFiles 的 motion-design，兼容多种实现技术。
- 时间线、滚动、SVG、复杂联动：GSAP 官方对应技能，按问题选择模块。
- 粒子、流场、参数化艺术：algorithmic-art；真实交互 3D、光照和材质：threejs。
- 需要直接使用现成效果：读 [动画素材库](../resources/animation.md)，选具体源码或文件。

## GSAP 官方技能组

来源：[greensock/gsap-skills](https://github.com/greensock/gsap-skills)，源码 `skills/<name>/SKILL.md`。不要因库包含多个技能就全量加载。

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

## 其他候选

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

## 判断依据

说明动画是在表达反馈、引导注意、展示结构还是表现品牌；表现强度服务项目 brief，实现时照顾操作响应、可中断性、移动端和 reduced-motion。
