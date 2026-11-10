# 官网与落地页

用于官网、首屏、概念展示页、候补名单页和整站模板选择。区分官网的多入口表达与落地页的单一主要目的，使用真实产品说明、原型、演示或已有客户证据支撑内容。

## 选择

- 官网视觉与整体制作：根据任务选 [界面指南](interface-design.md) 的 frontend-design、design-taste-frontend 或 impeccable，主导者择一。
- 页面结构与行动入口：landing-page；文案问题用 [产品表达与文案](positioning-copy.md)。
- 需要文字/图片生成多种界面方案且有 Stitch：stitch::generate-design；已有 Stitch 设计转 React：stitch::react-components。
- 需要可维护模板：读 [模板与组件](../resources/templates.md)，优先与现有栈匹配的代码；Framer/Webflow 可用作参考或在对应平台直接编辑，不假定可获取付费源码。

## 专项候选

<!-- skill: mengto/skills@landing-page -->
- **landing-page**：[原文](https://github.com/mengto/skills/blob/main/agent-skills/web-design/landing-page/SKILL.md)，[技能页](https://skills.sh/mengto/skills/landing-page)。关注页面目的、受众、核心价值、首屏、信息次序、视觉证据与 CTA，可根据表达需求选择经典、叙事、极简或比较结构。

以下来自 [Google Labs Stitch Skills](https://github.com/google-labs-code/stitch-skills)。提示组织与设计表达可作为文本指导；生成、编辑或导出 Stitch 项目需要对应工具与项目访问能力。

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

## 输出取决于当前任务

分析任务提供参考和关键选择依据，设计任务提供具体方案，实现任务在既有技术环境中完成所需页面。

生成主视觉转 [图片指南](images.md)，网页特效转 [动效指南](motion.md)，要可导出短片转 [视频指南](video.md)。同一项目复用已经确认的品牌信息和设计 token。
