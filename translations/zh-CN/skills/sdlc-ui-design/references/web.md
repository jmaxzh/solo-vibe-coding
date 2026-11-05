> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../../skills/sdlc-ui-design/references/web.md)同步，差异以英文为准。

# 网页 UI 设计原则

## 使用方式

- 读取[公共原则](../SKILL.zh-CN.md#公共原则)，按浏览器使用场景选取以下原则。
- 面向移动浏览器时，同时读取[移动端原则](mobile.md)。涉及桌面窗口行为或高频键鼠操作时，同时读取[桌面端原则](desktop.md)。

## 平台原则

- **响应式布局**：按可用视口和内容重排。支持文字缩放和方向变化。避免整页横向滚动。内容确需二维布局时，将必要的横向滚动限制在该内容区域。
- **异步布局稳定性**：网页布局应考虑异步内容的加载和更新，避免阅读位置及操作目标意外移动。改写自 [UI UX Pro Max 的异步内容空间指导](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/713eef51b04efc98d6fa565323b495f7c9c89fd4/.claude/skills/ui-ux-pro-max/references/quick-reference.md#L66)。
