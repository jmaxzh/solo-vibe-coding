> 中文维护译文，仅供开发者对照，不是技能安装或执行入口。与[英文原文](../../../../../skills/sdlc-ui-design/references/mobile.md)同步，差异以英文为准。

# 移动端 UI 设计原则

## 使用方式

- 读取[公共原则](../SKILL.zh-CN.md#公共原则)，按目标设备、操作系统和握持方式选取以下原则。
- 移动网页同时读取[网页原则](web.md)。

## 平台原则

- **触控与触达**：根据目标设备尺寸和握持方式，将高频操作放在便于触达的位置。相邻布局可能导致误触时，将后果严重的操作与高频操作分开。
- **可用区域**：避让系统栏、屏幕缺口和系统手势区域。
- **原生控件视觉**：对原生 iOS 或 Android 界面，优先采用目标平台用户容易识别的控件视觉语言。通过平台支持的主题及定制机制表达品牌选择。改写自 [Impeccable 的 iOS 控件约定](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L5-L9)及 [Android 控件约定](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/android.md#L5-L9)。
- **原生排版**：对原生 iOS 或 Android 界面，按平台的文本样式或角色组织文字，并响应用户的系统字号设置。改写自 [Impeccable 的 iOS 文本样式指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/ios.md#L22-L26)及 [Android 文本角色与缩放指导](https://github.com/pbakaus/impeccable/blob/9fadc41729c38fd47d7ae622b501558653f9d2e9/.agents/skills/impeccable/reference/android.md#L22-L26)。
