# 官网与落地页

用于已有产品方向的官网、首屏、概念展示页、候补名单页和整站模板选择。先区分官网的多入口表达与落地页的单一主要目的；没有真实客户或评价也能制作，用真实产品说明、原型或演示支撑。只要找模板或分析参考时，不自动搭建或部署网站。

## 选择

- 官网视觉与整体制作：根据任务选 [界面指南](interface-design.md) 的 frontend-design、design-taste-frontend 或 impeccable，主导者择一。
- 页面结构与行动入口：landing-page；文案问题用 [产品表达与文案](positioning-copy.md)，不要自动叠加所有设计指南。
- 需要文字/图片生成多种界面方案且有 Stitch：stitch::generate-design；已有 Stitch 设计转 React：stitch::react-components。
- 需要可维护模板：读 [模板与组件](../resources/templates.md)，优先与现有栈匹配的代码；Framer/Webflow 可用作参考或在对应平台直接编辑，不假定可获取付费源码。

## 专项候选

<!-- skill: mengto/skills@landing-page -->
- **landing-page**：[原文](https://github.com/mengto/skills/blob/main/agent-skills/web-design/landing-page/SKILL.md)，[技能页](https://skills.sh/mengto/skills/landing-page)。关注页面目的、受众、核心价值、首屏、信息次序、视觉证据与 CTA；可选经典、叙事、极简或比较结构。上游写作中提及现有转化与顾虑时，冷启动可使用明确假设，不要求先获得转化数据。

以下来自 [Google Labs Stitch Skills](https://github.com/google-labs-code/stitch-skills)，路径和实际命名空间以源码为准。都需要其所用 Stitch 能力真实连接；本指南不默认配置服务。

<!-- skill: google-labs-code/stitch-skills@stitch::generate-design -->
- **stitch::generate-design**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-design/skills/generate-design/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/stitch::generate-design)。根据文本、图片或 mockup 生成界面，也可编辑与生成变体；适合先探索具体视觉方案。不是自动完成业务逻辑的工具。

<!-- skill: google-labs-code/stitch-skills@enhance-prompt -->
- **enhance-prompt**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/enhance-prompt/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/enhance-prompt)。将模糊 UI 描述细化为布局、风格、组件和设计 token 提示；用于 Stitch 提示优化，不是所有任务都要先做的阶段。

<!-- skill: google-labs-code/stitch-skills@design-md -->
- **design-md**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/design-md/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/design-md)。从 Stitch 项目归纳语义化设计系统；只有任务需要提取或维护设计规范时使用，不强制新建 DESIGN.md。

<!-- skill: google-labs-code/stitch-skills@stitch::react-components -->
- **stitch::react-components**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-build/skills/react-components/SKILL.md)，[当前索引](https://skills.sh/google-labs-code/stitch-skills/stitch::react-components)。将 Stitch 设计转为模块化 Vite/React 组件或同步既有组件；历史索引 `react:components` 见 [别名档案](deferred.md)。

<!-- skill: google-labs-code/stitch-skills@stitch-loop -->
- **stitch-loop**：[原文](https://github.com/google-labs-code/stitch-skills/blob/main/plugins/stitch-utilities/skills/stitch-loop/SKILL.md)，[技能页](https://skills.sh/google-labs-code/stitch-skills/stitch-loop)。它是迭代建站的自主循环模式，保留为已调研候选。用户明确选择这种迭代模式才使用；不能用它把本指导 Skill 变成自动项目流水线。

## 输出取决于当前任务

只分析：给参考和关键选择依据。要设计方案：展示可比较的具体方向。要实现：在既有技术环境中实现请求范围。部署、发布和平台账号操作不由“设计官网”的模糊表述自动触发；已有明确授权则不重复询问。

生成主视觉转 [图片指南](images.md)，网页特效转 [动效指南](motion.md)，要可导出短片转 [视频指南](video.md)。同一项目复用已经确认的品牌信息和设计 token。
