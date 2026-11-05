---
name: sdlc-ux-design
description: 设计、实现、修改、审查或优化桌面、移动与网页的产品内任务体验，或提供 UX 原则指导。适用于信息组织、交互行为、导航、反馈、用户控制、恢复、界面用语和无障碍操作。任务同时改变视觉呈现时，结合 UI 指导。
license: MIT
---

> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../skills/sdlc-ux-design/SKILL.md)同步，差异以英文为准。

# UX 设计

## 适用范围

- 应用于用户请求的桌面、移动与网页产品内任务体验设计、实现、修改、审查、优化或原则指导。纯后端、纯数据库及其他不涉及面向用户的交互工作的任务超出本技能范围。
- 本技能独立于 SDLC 工作流，可单独安装。任务同时涉及视觉层级、排版、颜色、布局、控件几何布局或动效时，对这些决策使用可用的 UI 指导，例如 `sdlc-ui-design`。
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

请求的设计工作包含交互探索、方案设计、方案比选或原型验证时，使用本节。设计与实施混合的任务中，本节适用于设计部分；实施部分遵循其自身的交付要求。

- 使用可交互的单页 HTML 呈现 UX 设计。原型中的主要操作、相关状态变化及必要的返回或恢复路径应可操作。核对控件和反馈能否演示预期操作，并区分相关状态。改写自 [UI UX Pro Max 的控件、反馈和状态指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L164-L186)。
- HTML 默认内联 CSS 和 JavaScript，可直接打开。用本地状态和明确标识的示意数据演示已确定的交互范围。
- UI/UX 混合设计优先通过生图呈现 UI 方案，并提供可交互的 UX HTML 原型。生图不可用或调用失败时，两者共用一份 HTML。生图优先及 HTML 后备方式借鉴 [Impeccable 的生图方案与 HTML 草图方式](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/new-work.md)。
- 在目标视口下检查渲染后的原型效果，优先使用实际内容；实际内容不可用时，使用明确标识的代表性内容。改写自 [Taste Skill 对可见结果和内容的要求](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md)。
- 以交互预览和可打开的 HTML 文件为交付主体。配套文字保持简短，仅说明打开方式、模拟范围和必要限制。

## 公共原则

### 原则的应用

- 根据用户请求的工作、目标平台和场景选取相关原则。
- 说明影响建议的适用条件和权衡。
- 引用数值要求或建议前，核验来源、计量单位及对目标平台的适用性。

### 设计原则

- **任务与成果**：按用户目标和操作顺序组织界面。优先当前任务所需的信息和行动。评价一个界面时，以用户在这个界面需要达成的结果为准。改写自 [Impeccable 的界面成功标准](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/SKILL.md#L30-L39)。
- **入口与控件**：让主要入口易于发现，每个控件的预期动作清楚。按钮标签说明动作及对象，为有歧义的图标附标签。改写自 [Taste Skill 的控件及输入约束原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L469-L473)。
- **图标语义**：根据图标当前的用途确定语义。从无障碍树中隐藏可见文字旁重复表达的装饰图标。为传递信息的独立图标提供文字替代。向辅助技术提供图标控件的名称及适用状态。改写自 [UI UX Pro Max 的上下文图标语义指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L13)。
- **任务优先级**：操作型界面应根据用户首先需要得到回答的问题，确定视觉重点和阅读顺序。改写自 [Taste Skill 关于界面首要问题的原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/app-screens.md#L186-L199)。
- **展示页的内容结构**：用展示页要传达的主张及其依据，决定需要哪些内容，以及它们的呈现顺序。改写自 [Taste Skill 的主张与依据原则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/SKILL.md#L100-L105)。
- **事实与示意内容**：关于真实产品、客户或业务活动的主张及证据应基于可用事实。明确标识示意内容。改写自 [Taste Skill 的依据与样例内容指导](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/copy.md#L131-L150)及 [Impeccable 的事实陈述原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/craft-floor.md#L40)。
- **数据一致性**：在同一统计范围内，同一事实在不同位置应保持一致，派生数值应与其基础数据一致。统计范围、时间段或计算口径存在差异时应明确说明。归纳自 [Taste Skill 的数据一致性与基准规则](https://github.com/Leonxlnx/taste-skill/blob/12af471f627f866411b4bd785b19646d3672784c/skills/taste-skill/references/app-screens.md#L168-L184)。
- **认知负担**：提供决策所需的选项和上下文，减少记忆与重复输入，允许检查和修改默认值。复杂选项随任务需要逐步呈现。用户作决定时，应能获得这个决定所需的信息，减少步骤时也要保留这些信息。改写自 [UI UX Pro Max 的渐进披露原则](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L173)。
- **学习**：减少界面额外造成的认知负担。支持有助于用户理解和掌握任务的学习。改写自 [Impeccable 对认知负担与学习的区分](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/critique.md#L333-L350)。
- **简化**：以用户完成任务时少了哪些障碍来衡量简化效果。保留必要功能、决策所需信息和无障碍支持。改写自 [Impeccable 的简化目标](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/distill.md#L18-L26)及[简化边界](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/distill.md#L86-L92)。
- **一致性**：遵循平台交互惯例，保持控件行为一致。
- **状态与等待反馈**：显示用户在任务或导航中的当前位置、处理状态和结果。区分加载、空数据和失败。及时回应操作。耗时任务提供可靠状态，进度可测量时显示真实进度。反馈强度与重要程度相称，避免频繁打断。各状态的界面表达和可用操作应符合该状态的含义；区分只读、禁用和处理中状态。改写自 [UI UX Pro Max 的状态区分原则](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L164-L186)。
- **用户控制**：提供易于发现的退出、取消和返回操作。适当时支持撤销与重做，并明确影响哪些变化。不可逆操作前说明后果。
- **模态交互**：将模态交互用于确需中断当前工作或保护焦点的任务。改写自 [Impeccable 的模态使用原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/craft-floor.md#L24)。
- **错误预防与恢复**：在适用位置提前说明输入和操作约束。操作后果值得确认时要求确认。在适当时机校验，避免打断未完成的输入。失败后保留有效输入，指出问题及其位置，说明已知原因并区分推测，提供恢复路径。
- **连接与恢复**：对依赖网络的任务，明确连接受限时仍可使用的能力。提供产品实际支持的降级或恢复操作。改写自 [UI UX Pro Max 的离线与慢网指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L74-L75)。
- **界面语言**：使用目标用户能理解的语言。保留他们熟悉且能准确表达含义的专业术语。改写自 [Impeccable 的用语与术语原则](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/clarify.md#L67-L69)。
- **无障碍操作**：支持目标环境中的键盘和辅助技术，提供可识别的控件名称、状态及焦点。为精细输入或复杂手势提供等效操作。根据实际可用的输入能力选择交互行为。主要操作应能通过非悬停方式完成。改写自 [Impeccable 的输入能力与悬停指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.md#L215-L241)。
