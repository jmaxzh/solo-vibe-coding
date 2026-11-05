> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../../skills/sdlc-ux-design/references/web.md)同步，差异以英文为准。

# 网页 UX 设计原则

## 使用方式

- 读取[公共原则](../SKILL.zh-CN.md#公共原则)，按浏览器使用场景选取以下原则。
- 面向移动浏览器时，同时读取[移动端原则](mobile.md)。涉及桌面窗口行为或高频键鼠操作时，同时读取[桌面端原则](desktop.md)。

## 平台原则

- **历史记录与标签页**：导航符合浏览器前进、后退的预期。保留在新标签页打开链接等原生行为。避免重复或无意义的历史记录。
- **链接与按钮语义**：用原生链接导航，用原生按钮执行动作。控件实现应具备所需的交互语义和行为。
- **局部状态通知**：在网页中，对需要告知用户的局部数量或状态变化，向辅助技术用户提供足够的上下文。通知期间保持用户当前焦点。改写自 [UI UX Pro Max 的上下文状态更新指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L33)。
