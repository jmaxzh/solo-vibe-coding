---
name: sdlc-ui-design
description: 设计、实现、修改、审查或优化桌面、移动与网页的视觉界面，或提供 UI 原则指导。适用于视觉层级、排版、颜色、布局、响应式呈现、控件几何布局和动效。任务同时改变信息组织或交互行为时，结合 UX 指导。
license: MIT
---

> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../skills/sdlc-ui-design/SKILL.md)同步，差异以英文为准。

# UI 设计

## 适用范围

- 应用于用户请求的桌面、移动与网页视觉界面设计、实现、修改、审查、优化或原则指导。纯后端、纯数据库及其他不涉及视觉界面的任务超出本技能范围。
- 本技能独立于 SDLC 工作流，可单独安装。任务同时涉及信息组织、交互行为或恢复时，对这些决策使用可用的 UX 指导，例如 `sdlc-ux-design`。
- 仅请求原则指导时，在该层级简短答复，不自动扩展为具体产品设计、实现或验收。
- 仅请求审查时，报告问题和建议，不另行创建设计或修改实现。

## 按需读取规则

- 遵循下述公共原则，按实际目标和场景读取平台参考。
- 桌面端读取[桌面端原则](references/desktop.md)。
- 移动端读取[移动端原则](references/mobile.md)。
- 网页读取[网页原则](references/web.md)。
- 移动网页同时读取移动端和网页原则。其他平台组合按所选文档的引用条件补充读取。
- 平台未明确时，先依据任务及项目上下文判断。通用原则咨询仅使用公共原则，具体任务仍缺少必要平台决定时再向用户澄清。

## 设计交付

请求的设计工作包含视觉探索、方案设计、方案比选或原型验证时，使用本节。设计与实施混合的任务中，本节适用于设计部分；实施部分遵循其自身的交付要求。

- 优先使用生图呈现 UI 设计方案。已有界面的实际截图可作为参考。生图不可用或调用失败时，使用单页 HTML 呈现方案。改写自 [Impeccable 的生图方案与 HTML 草图方式](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/new-work.md)。
- UI/UX 混合设计交付 UI 设计图和可交互的 UX HTML 原型。UI 使用 HTML 后备方案时，两者共用一份 HTML。
- 交付 HTML 时，默认内联 CSS 和 JavaScript，使文件可直接打开。用本地状态和明确标识的示意数据演示已确定的交互范围。
- 在目标视口下检查渲染后的设计效果，优先使用实际内容；实际内容不可用时，使用明确标识的代表性内容。改写自 [Taste Skill 对可见结果和内容的要求](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md)。
- 以图像、预览和可打开的文件为交付主体。配套文字保持简短，仅说明打开方式、模拟范围和必要限制。

## 公共原则

### 原则的应用

- 根据用户请求的工作、目标平台和场景选取相关原则。
- 说明影响建议的适用条件和权衡，不将特定视觉风格作为通用要求。
- 引用数值要求或建议前，核验来源、计量单位及对目标平台的适用性。

### 设计原则

- **入口与操作可识别性**：让主要入口在视觉上易于识别。通过控件的外观、标签和位置，传达操作方式及动作含义。改写自 [Taste Skill 的控件原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L469-L473)。
- **一致性与风格**：图标、组件和装饰符合产品目的及既有设计约定。添加装饰时，保持内容可读、操作可用。选择适合产品类型、目标受众、使用环境和已说明视觉偏好的风格。改写自 [UI UX Pro Max 的风格选择指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md#L67-L83)。
- **视觉设计系统**：默认沿用产品的统一视觉设计约定，明确的页面例外在相应页面优先。按语义角色组织可复用的设计值和模式，已有重复需求时再提取共享定义。决定复用范围时保留用途上的差异。改写自 [UI UX Pro Max 的全局与页面覆盖机制](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md#L90-L111)、[Impeccable 的渐进提取指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/extract.md#L24-L42)及[复用边界](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/extract.md#L62-L68)。
- **审美方向**：用户明确指定的审美方向与技能自身的风格偏好冲突时，遵循用户的选择。改写自 [Impeccable 的设计原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/SKILL.md#L23-L26)。
- **展示页的视觉概念**：展示页的视觉概念应取自所展示对象自身的特征。改写自 [Taste Skill 从对象提取概念的原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L24-L29)。
- **内容适配**：选择能容纳实际内容形态、长度和数量的布局。结构无法承载所需内容时，调整结构并保留事实和必要信息。改写自 [Taste Skill 的内容与构图指导](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L123-L130)。
- **可用素材**：视觉方案依赖素材时，以已经存在或确实能够取得的素材为依据。所需素材不可用时，选择可实现的构图。改写自 [Taste Skill 的可用图像指导](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L76-L83)。
- **排版**：按阅读条件选择字体、字号和行距。用大小与字重建立层级。保持正文及辅助文字可读，放大后仍能获取必要内容和控件，避免截断或隐藏。
- **目标语言**：对产品支持的语言和书写系统，在排版与布局中适配文本扩展、阅读方向和相应文字的字形特性。改写自 [Impeccable 的国际化指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/harden.md#L85-L113)。
- **布局与间距**：用位置和分组表达重要性及关系。保持对齐和间距一致。密度适合阅读、比较和操作需要，避免多个重点争夺注意力。根据界面或容器实际可用的空间选择布局结构。空间变化时按需要重组内容，同时保持主要内容和操作可达。改写自 [Impeccable 的原生窗口适配指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.native.md#L13-L18)及 [Web 容器适配指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.md#L138-L143)。
- **色彩、状态与焦点**：定义并一致使用主要、辅助及状态色。保证文字、控件和状态具有足够对比度。颜色传达信息时，用文字或形状补充。让控件状态和焦点在视觉上可辨识。对产品支持的每一种外观模式，分别检查文字和控件的可读性，以及状态能否区分。目标平台提供高对比偏好时，界面呈现应响应这些设置。改写自 [UI UX Pro Max 的外观配对原则](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L87)及 [WPF 高对比支持指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/stacks/wpf.csv#L45)。
- **操作目标**：按鼠标、触控等输入方式确定目标尺寸和间距，使目标易于选中，降低相邻目标误触。
- **数据编码**：用图形呈现数据时，根据用户需要理解的数据关系选择视觉编码。明确适用的单位和尺度。改写自 [UI UX Pro Max 的图表与数据指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L225-L239)。
- **动效用途**：操作和阅读界面的动效用于反馈、说明状态变化或保持连续性。用动效解释变化时，应让人看懂原因与结果。以说服或体验为目的的界面，动效可以独立承担明确的视觉表达。用户启用目标环境支持的减少动态效果偏好时，应遵循该偏好。减少或替换动效时，仍须保持内容可读，并让必要的状态变化可以理解。改写自 [UI UX Pro Max 的动效含义原则](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L141)、[Impeccable 按界面目的区分动效的原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/animate.md#L3-L11)、[iOS 减少动态效果偏好](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L42-L45)及 [UI UX Pro Max 第 99 项的可读最终状态要求](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/ux-guidelines.csv)。
