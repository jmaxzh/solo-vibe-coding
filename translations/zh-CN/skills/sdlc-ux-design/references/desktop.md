> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../../skills/sdlc-ux-design/references/desktop.md)同步，差异以英文为准。

# 桌面端 UX 设计原则

## 使用方式

- 读取[公共原则](../SKILL.zh-CN.md#公共原则)，按目标操作系统、输入方式和窗口使用场景选取以下原则。
- 界面在浏览器中运行时，同时读取[网页原则](web.md)。

## 平台原则

- **快捷键与焦点恢复**：按平台惯例提供常用快捷键，避免干扰文字输入。关闭浮层后，将焦点恢复到触发控件或下一步需要的控件。
- **WPF 动作一致性**：WPF 界面中，在同一上下文内，同一动作的各个入口应采用一致的可执行条件和目标判定。归纳自 [UI UX Pro Max 的 WPF 命令、参数及输入绑定指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/src/ui-ux-pro-max/data/stacks/wpf.csv#L28-L32)。
