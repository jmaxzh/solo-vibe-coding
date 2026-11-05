> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../../skills/sdlc-ux-design/references/sources.md)同步，差异以英文为准。

# 来源上下文

本文将[本地技能](../SKILL.zh-CN.md)及其平台参考与选定的原文段落对应，保留按需查阅所需的上下文；维护中的执行规则仍以英文技能指令为准。引用不会自动引入上游命令、工具链、审批步骤、风格禁令或数值默认值。

假设、例外、数值或改编细节影响决策时，查看相关条目及原文。原文不可访问时，说明仍未核实的结论，不臆造缺失细节。任务授权、设计与实现分别验收，以及针对性的实现检查，均为本地规则，不是采用上游流程。

## 固定版本

- [UI UX Pro Max，`713eef51b04efc98d6fa565323b495f7c9c89fd4`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/713eef51b04efc98d6fa565323b495f7c9c89fd4)。
- [Taste Skill，`12af471f627f866411b4bd785b19646d3672784c`](https://github.com/Leonxlnx/taste-skill/tree/12af471f627f866411b4bd785b19646d3672784c)。
- [Impeccable，`9fadc41729c38fd47d7ae622b501558653f9d2e9`](https://github.com/pbakaus/impeccable/tree/9fadc41729c38fd47d7ae622b501558653f9d2e9)。

## 交互原型

UI UX Pro Max 提供可操作控件、反馈和状态可区分性的指导，并未指定单页 HTML 交付形式。该原型形式、本地状态及其与生产实现的分离，均为本地选择，对所有规模的设计任务保留。

原文段落：[UI UX Pro Max 的控件、反馈和状态指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L164-L186)。

## 混合设计形式

Impeccable 支持生成设计图和 HTML 草图，并按界面目的调整构建路径。本技能保留混合设计的 UI 生图优先与可交互 UX HTML 原型；生图不可用或失败时，两者共用一份 HTML。不采用上游的交付分流和审批关卡。

原文段落：[Impeccable 的生图方案与 HTML 草图方式](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/new-work.md#L29-L55)。

## 渲染后的原型

Taste Skill 通过浏览器检查和审查循环检查渲染结果及截图。本地改编在目标视口下，以实际内容或已标识的代表性内容检查设计原型，不将来源的工具、固定视口集合或生产构建检查引入原型验收。

原文段落：[Taste Skill 对可见结果和内容的要求](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L307-L341)。

## 任务与成果

Impeccable 根据用户在具体界面上的活动选择成功标准，而非仅依据产品类别。本地改编保留用户目标和操作顺序，不要求使用来源中的界面模式持久化文件或规定的分类程序。

原文段落：[Impeccable 的界面成功标准](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/SKILL.md#L30-L39)。

## 入口与控件

Taste Skill 将控件的外形、标签和位置与其操作联系起来，同时区分需要可见说明的真实输入约束。本地规则保留入口可发现性和动作表述清楚的要求，不删除必要指导。

原文段落：[Taste Skill 的控件及输入约束原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L469-L473)。

## 图标语义

UI UX Pro Max 按当前用途确定图标语义：重复表达的装饰、独立信息或交互控件。本地改编保留这一区分及相关状态信息，不为某个图形永久指定无障碍角色。

原文段落：[UI UX Pro Max 的上下文图标语义指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L13)。

## 任务优先级

Taste Skill 用工作型界面的首要问题决定重点和阅读顺序。本地改编适用于操作型界面，不要求每个界面采用相同的首屏指标、图表或组件模式。

原文段落：[Taste Skill 关于界面首要问题的原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/app-screens.md#L186-L199)。

## 展示页的内容结构

原文围绕主张及其依据组织展示页，而非套用固定的区块顺序。本地改编针对展示内容，不将操作流程改成营销论证。

原文段落：[Taste Skill 的主张与依据原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L100-L105)。

## 事实与示意内容

Taste Skill 区分真实依据和明确虚构的样例，并允许补全示意细节；Impeccable 要求主张基于已提供的事实。本地规则保持真实活动相关主张的事实性，并标识示意内容。上游允许编写样例细节，不构成真实价格、客户或能力的证据。

原文段落：[Taste Skill 的依据与样例内容指导](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/copy.md#L131-L150)；[Impeccable 的事实陈述原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/craft-floor.md#L48)。

## 数据一致性

Taste Skill 让重复出现的事实和展示的合计使用一致依据，并为相对数值说明基准。本地改编将一致性限定在同一统计上下文，并明确不同时间段、范围或计算口径。

原文段落：[Taste Skill 的数据一致性与基准规则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/app-screens.md#L168-L184)。

## 认知负担

UI UX Pro Max 逐步呈现复杂选项。本地改编保留用户在作出选择时所需的决策上下文；仅减少可见选项或步骤，并不能证明体验更好。

原文段落：[UI UX Pro Max 的渐进披露原则](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L173)。

## 学习

Impeccable 区分界面造成的可避免负担与帮助用户理解、掌握任务的有益学习。本地规则保留这一区分，不将所有学习都视为需要消除的阻力。

原文段落：[Impeccable 对认知负担与学习的区分](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/critique.md#L333-L350)。

## 简化

Impeccable 按移除的障碍衡量简化，同时保留必要功能、决策信息和无障碍支持。本地改编保留这些边界，不引入通用的步骤数或功能数目标。

原文段落：[Impeccable 的简化目标](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/distill.md#L18-L26)；[简化边界](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/distill.md#L86-L92)。

## 状态与等待反馈

UI UX Pro Max 区分输入、处理中、空数据、失败、禁用和只读等条件。本地改编使状态含义、反馈和可用操作相互一致；来源中的时间示例和视觉处理不是通用默认值。

原文段落：[UI UX Pro Max 的状态区分原则](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L164-L186)。

## 用户控制

UI UX Pro Max 说明动效应可中断，转场期间仍可输入。本地补充保留产品实际支持的返回、切换和取消操作，不承诺中断动效即可取消后台任务。

原文段落：[UI UX Pro Max 的可中断与不阻塞操作指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L149-L150)。

## 模态交互

Impeccable 将模态交互限定于需要中断或保护焦点的任务。本地改编保留这一基于用途的边界，不采用相邻的页面结构和装饰规则。

原文段落：[Impeccable 的模态使用原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/craft-floor.md#L29)。

## 连接与恢复

原文说明离线提示及慢网降级。本地改编限定于产品实际支持的能力，不因来源建议降级，就承诺离线存储、排队或恢复机制。

原文段落：[UI UX Pro Max 的离线与慢网指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L74-L75)。

## 界面语言

Impeccable 使用简单语言，同时保留受众理解的术语，并根据情境调整语气。本地规则保留准确且熟悉的专业术语，不要求采用来源的整套文案流程。

原文段落：[Impeccable 的用语与术语原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/clarify.md#L67-L69)。

## 无障碍操作

Impeccable 区分输入能力与屏幕尺寸，并反对依赖悬停才能使用的功能。本地改编保留键盘和辅助技术操作、精细输入或复杂手势的替代操作，以及主要操作在无悬停时仍可用的要求；来源中的 CSS 示例不是强制实现。

原文段落：[Impeccable 的输入能力与悬停指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.md#L215-L241)。

## WPF 动作一致性

WPF 来源涵盖命令可用性、异步执行、参数和快捷键绑定。本地改编保留同一上下文中各入口的可执行条件与目标判定一致，不强制特定命令库。

原文段落：[UI UX Pro Max 的 WPF 命令、参数及输入绑定指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/stacks/wpf.csv#L28-L32)。

## 导航与返回

原生来源按可用宽度和平台惯例适配导航，同时在较小设备上保留核心功能。本地改编保留这些关系和任务可达性，不强制一种导航模式或来源特有的设备测试流程。

原文段落：[Impeccable 的自适应导航指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.native.md#L13-L18)；[核心功能约束](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.native.md#L53-L58)。

## 局部状态通知

UI UX Pro Max 为相关数量或状态变化提供上下文，同时保持焦点。本地改编针对用户需要知道的更新，不要求播报每次 DOM 变化，也不为局部更新移动焦点。

原文段落：[UI UX Pro Max 的上下文状态更新指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L33)。
