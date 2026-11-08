> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../../skills/sdlc-ui-design/references/sources.md)同步，差异以英文为准。

# 来源上下文

本文将[本地技能](../SKILL.zh-CN.md)及平台参考与选定原文段落对应，保留改编上下文。来源边界见入口文档 P4；查阅条件和原文不可用时的处理见 R2.4；数值核验见 R4.3。任务授权、设计与实现分别验收，以及针对性的实现检查，均为本地规则，不是采用上游流程。

## 固定版本

- [UI UX Pro Max，`713eef51b04efc98d6fa565323b495f7c9c89fd4`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/713eef51b04efc98d6fa565323b495f7c9c89fd4)。
- [Taste Skill，`12af471f627f866411b4bd785b19646d3672784c`](https://github.com/Leonxlnx/taste-skill/tree/12af471f627f866411b4bd785b19646d3672784c)。
- [Impeccable，`9fadc41729c38fd47d7ae622b501558653f9d2e9`](https://github.com/pbakaus/impeccable/tree/9fadc41729c38fd47d7ae622b501558653f9d2e9)。

## UI 方案形式

Impeccable 区分图像主导与代码主导的路径，操作型和阅读型界面采用代码主导。本技能保留所有规模设计任务的 UI 生图优先及 HTML 后备方式。这是本地交付约定，不采用上游按界面目的分流的方式及其审批流程。

原文段落：[Impeccable 的生图方案与 HTML 草图方式](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/new-work.md#L29-L55)。

## 渲染后的设计

Taste Skill 使用自身的浏览器工具及多轮审查，以真实内容检查渲染页面和截图。本地改编保留在目标视口下检查设计产物的要求，实际内容不可用时使用已标识的代表性内容；不要求使用这些脚本、固定宽度或迭代次数。

原文段落：[Taste Skill 对可见结果和内容的要求](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L307-L341)。

## 入口与操作可识别性

原文区分能自行传达操作方式的控件，以及仍需说明真实输入限制的字段。本地视觉规则关注外观、标签和位置，不禁止必要的帮助或输入约束说明。

原文段落：[Taste Skill 的控件原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L469-L473)。

## 一致性与风格

UI UX Pro Max 在查询目录前，结合产品、受众、使用环境、风格偏好和检测到的技术栈确定方向。本地改编保留与上下文相符的要求，不强制使用搜索工具、目录或特定审美。

原文段落：[UI UX Pro Max 的风格选择指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md#L67-L83)。

## 视觉设计系统

全局与页面覆盖机制针对视觉规则及明确的页面例外。Impeccable 还提供渐进提取、语义化设计值及按用途确定的复用边界。本地改编不要求采用其文件结构或命令，页面例外也不覆盖无关的产品、无障碍或授权约束。

原文段落：[UI UX Pro Max 的全局与页面覆盖机制](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/SKILL.md#L90-L111)；[Impeccable 的渐进提取指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/extract.md#L24-L42)；[复用边界](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/extract.md#L62-L68)。

## 审美方向

Impeccable 将明确的需求置于自身风格警示之上，并区分精修与重新设计。本地规则保留这种优先关系；引用该段落不会引入来源技能的其他风格禁令或重新设计流程。

原文段落：[Impeccable 的设计原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/SKILL.md#L23-L26)。

## 展示页的视觉概念

Taste Skill 从展示对象自身的特征提取概念。其随机分配设计方向的流程和自定审美属于另外的选择。本地改编适用于展示页，不要求每个工作型界面都添加主题装饰。

原文段落：[Taste Skill 从对象提取概念的原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L24-L29)。

## 内容适配

Taste Skill 在构图假设无法承载实际内容时调整构图，同时要求内容完整。本地规则将其推广至内容形态、长度和数量，保留事实与必要信息，不要求运行分配设计方向的命令。

原文段落：[Taste Skill 的内容与构图指导](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L141-L153)；[Taste Skill 的完整内容要求](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L217-L221)。

## 可用素材

原文在选择依赖素材的构图前，先清点实际照片、产品界面、能够取得的生成图像及其他素材。本地改编保留可实现性要求，不假定每个环境都有生图工具、网络或档案素材。

原文段落：[Taste Skill 的可用图像指导](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L76-L83)。

## 目标语言

Impeccable 涵盖文本扩展、RTL 布局及文字特有的字形处理，包括保留有意义的连字控制字符。本地改编限定于产品支持的语言和书写系统；示例中的扩展比例和测试语言不是通用要求。

原文段落：[Impeccable 的国际化指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/harden.md#L85-L113)。

## 布局与间距

原生参考按窗口尺寸类别重组布局，并涵盖多窗口场景；Web 参考包含按容器适配。本地规则依据界面或容器的可用空间，保留主要内容和操作的可达性，不强制特定布局技术。

原文段落：[Impeccable 的原生窗口适配指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.native.md#L13-L18)；[Web 容器适配指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.md#L138-L143)。

## 色彩、状态与焦点

UI UX Pro Max 指导配对设计受支持的外观模式，并另行说明 WPF 高对比资源。本地改编检查产品实际支持的外观，并响应平台提供的高对比偏好；不要求新增主题，也不将 WPF 机制套用于其他平台。

原文段落：[UI UX Pro Max 的外观配对原则](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L87)；[WPF 高对比支持指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/stacks/wpf.csv#L45)。

## 数据编码

原文将图表形式与数据关系对应，并涵盖尺度、单位、标签和无障碍呈现。本地 UI 规则按用户需要理解的关系选择视觉编码；上游图表目录、数值阈值和实现方案保留为参考材料。

原文段落：[UI UX Pro Max 的图表与数据指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L225-L239)。

## 动效用途

UI UX Pro Max 提供因果表达、动效可中断性、输入不受阻塞及减少动态效果后的可读状态。Impeccable 区分说服或体验类界面的表现性动效与操作或阅读界面的反馈动效，并支持原生偏好。本地改编保留这些界面目的差异，将中断限定于已支持的切换或取消交互，并区分中断动效和取消后台操作。

原文段落：[UI UX Pro Max 的动效含义原则](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L141)；[Impeccable 按界面目的区分动效的原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/animate.md#L3-L11)；[iOS 减少动态效果偏好](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L42-L45)；[UI UX Pro Max 第 99 项的可读最终状态要求](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/ux-guidelines.csv#L100)；[UI UX Pro Max 的可中断与不阻塞操作指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L149-L150)。

## 工作型界面密度

Taste Skill 报告工作型界面中的密度观察范围，并将字号、行高和内边距一并考虑。本地改编保留桌面操作界面的这一关系；研究中的示例尺寸和数量不是整个平台的默认值。

原文段落：[Taste Skill 的密度原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/app-screens.md#L1010-L1021)。

## 原生控件视觉

iOS 和 Android 参考遵循各自平台惯例，通过支持的定制方式为品牌表达留出空间。本地改编关注原生控件视觉，不将某个平台的控件语言移植到另一个平台或所有 Web 界面。

原文段落：[Impeccable 的 iOS 控件约定](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L5-L9)；[Android 控件约定](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/android.md#L5-L9)。

## 原生排版

原生参考将文字映射到平台角色及系统字号偏好。其中指定的字体和示例字号属于相应平台的上下文。本地规则保留按角色组织文字及系统缩放，不将这些数值作为通用要求。

原文段落：[Impeccable 的 iOS 文本样式指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L22-L26)；[Android 文本角色与缩放指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/android.md#L22-L26)。

## 异步布局稳定性

UI UX Pro Max 为异步内容预留空间，以防止布局偏移。本地改编表达阅读位置和操作目标应保持稳定的目标，不指定特定占位形式或加载动效。

原文段落：[UI UX Pro Max 的异步内容空间指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L66)。
