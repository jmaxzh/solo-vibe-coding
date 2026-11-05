> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../../skills/sdlc-ux-design/references/mobile.md)同步，差异以英文为准。

# 移动端 UX 设计原则

## 使用方式

- 读取[公共原则](../SKILL.zh-CN.md#公共原则)，按目标设备、操作系统和握持方式选取以下原则。
- 移动网页同时读取[网页原则](web.md)。

## 平台原则

- **键盘与任务可达性**：键盘出现后，当前字段、错误提示和必要控件仍然可见，或可通过滚动到达。
- **导航与返回**：遵循目标系统惯例。区分返回上级、关闭临时界面和切换主要区域。返回时按需要恢复筛选、滚动位置等浏览状态。移动端界面应按可用空间和目标平台调整导航形式。核心任务应保持可达，其逻辑关系应保持容易识别。改写自 [Impeccable 的自适应导航指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.native.md#L13-L18)及[核心功能约束](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/adapt.native.md#L53-L58)。
