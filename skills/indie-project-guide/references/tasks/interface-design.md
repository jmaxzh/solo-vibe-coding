# 界面与审美

用于产品界面、设计系统、审美方向、视觉评审和精修。用具体参考、方案和选择依据帮助设计决策；已有风格时沿用，方向尚未确定时依据页面用途和参考推荐。

## 选择边界

| 当前需求 | 优先候选 |
| --- | --- |
| 新界面的视觉方向、字体、构图 | frontend-design；官网表达强时也可选 design-taste-frontend |
| 配色、字体搭配、布局、交互与跨页面一致性 | ui-ux-pro-max |
| 评价审美、定位问题、做针对性精修或重设计 | impeccable |
| 按钮、弹窗、状态、动画决策和操作手感 | emil-design-eng |
| 检查交互、排版、响应式、可访问性规范 | web-design-guidelines |
| 图文作品、落地页等多个产物共享主题 | theme-factory |
| 宿主中的复杂交互 HTML artifact | web-artifacts-builder；核对宿主能力 |

按任务选择主导设计指南，辅助能力解决独立缺口。精修侧重既有设计的局部质量，重设计涉及更广的视觉方向，规范审核关注明确的规则。

## 核心候选

<!-- skill: anthropics/skills@frontend-design -->
- **frontend-design**：[原文](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/frontend-design)。从产品主题、受众、材料和使用场景推导视觉方向，处理字体、配色、构图、层级和动效。适合有辨识度的新界面与官网。

<!-- skill: nextlevelbuilder/ui-ux-pro-max-skill@ui-ux-pro-max -->
- **ui-ux-pro-max**：[原文](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md)，[技能页](https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max)。提供设计风格、行业配色、字体组合、交互规范、图表与技术栈资料，适合建立设计依据。需要具体数据时，按原文路径读取相关引用与 CSV；使用检索脚本则需要取得脚本及运行环境。

<!-- skill: pbakaus/impeccable@impeccable -->
- **impeccable**：[原文](https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/SKILL.md)，[技能页](https://skills.sh/pbakaus/impeccable/impeccable)。覆盖新设计、评审、精修、简化、排版、配色、交互、动画和设计系统；区分 Persuade / Operate / Read / Experience 等场景。按任务读取 `shape`、`critique`、`audit`、`polish`、`bolder`、`quieter`、`distill`、`animate`、`colorize`、`typeset`、`harden`、`onboard` 等对应参考。模型评审和专用引擎检查需要分别说明实际执行情况。

<!-- skill: leonxlnx/taste-skill@design-taste-frontend -->
- **design-taste-frontend / Taste Skill**：[原文](https://github.com/leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md)，[技能页](https://skills.sh/leonxlnx/taste-skill/design-taste-frontend)。重视视觉构思、真实参考、图片与产品 UI、版式和浏览器实看，适合官网、落地页和作品展示。源码目录为 `taste-skill`；风格指导服从项目 brief，脚本与浏览器检查按当前原文核对运行依赖。

<!-- skill: emilkowalski/skills@emil-design-eng -->
- **emil-design-eng**：[原文](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)，[技能页](https://skills.sh/emilkowalski/skills/emil-design-eng)。关注组件细节、按钮反馈、状态、弹簧与中断、感知性能和界面手感。适合产品本体的设计工程；只做动画时查看 [动效指南](motion.md)。

<!-- skill: vercel-labs/agent-skills@web-design-guidelines -->
- **web-design-guidelines**：[原文](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)，[技能页](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines)。按 Vercel 的 [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) 检查现有界面，适用于交互、排版、响应式和可访问性规范评审。

<!-- skill: anthropics/skills@theme-factory -->
- **theme-factory**：[原文](https://github.com/anthropics/skills/blob/main/skills/theme-factory/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/theme-factory)。为幻灯片、文档、报告和 HTML 等产物应用或生成配色与字体主题，适合跨素材一致性；已有品牌时复用既定品牌。

<!-- skill: anthropics/skills@web-artifacts-builder -->
- **web-artifacts-builder**：[原文](https://github.com/anthropics/skills/blob/main/skills/web-artifacts-builder/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/web-artifacts-builder)。针对复杂、多组件、带状态或路由的 Claude HTML artifacts；适配宿主后才使用其打包方法。普通仓库页面不需要为了套用它迁移到 artifact 环境。

## 专项入口

具体规范问题可读取下列原文核对适用范围，视觉构思仍按上表选择。

<!-- skill: ibelick/ui-skills@baseline-ui -->
- **baseline-ui**：[原文](https://github.com/ibelick/ui-skills/blob/main/skills/baseline-ui/SKILL.md)。界面实现的基础规范。
<!-- skill: ibelick/ui-skills@fixing-accessibility -->
- **fixing-accessibility**：[原文](https://github.com/ibelick/ui-skills/blob/main/skills/fixing-accessibility/SKILL.md)。具体可访问性问题。
<!-- skill: ibelick/ui-skills@fixing-metadata -->
- **fixing-metadata**：[原文](https://github.com/ibelick/ui-skills/blob/main/skills/fixing-metadata/SKILL.md)。页面元数据问题。
<!-- skill: anthropics/skills@brand-guidelines -->
- **brand-guidelines**：[原文](https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md)。应用 Anthropic 的品牌色与字体，仅适用于该品牌表达；通用项目主题使用 theme-factory 或界面设计指导。

## 参考与质量判断

需要示例时读 [灵感库](../resources/inspiration.md)；取组件读 [模板库](../resources/templates.md)；图标读 [图标库](../resources/icons.md)。给出具体参考点：字体层级、空间、密度、构图、颜色或反馈，不只给网站首页。

在用户要求的制作范围内观察实际渲染结果，关注文字层级、间距、对齐、图标统一、状态反馈和移动端表现。动效、3D、玻璃或粒子是按用途选择的表现手段，用户要求酷炫时也要让主体清楚可见。
