# 界面与审美

用于产品界面、设计系统、审美方向、视觉评审和精修。用户重视设计与界面质量，需要具体参考、可比较方案和解释，不能只罗列工具。已有明确风格时沿用；偏好不明确但选择可逆时，模型依据页面任务和参考作出推荐，不要求用户掌握设计术语。

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

这些是能力选择，不是必经阶段。选一个主导设计指南，辅助能力只解决独立缺口。精修、重设计和规范审核是不同任务，不能以精修为由更换整套品牌。

## 核心候选

<!-- skill: anthropics/skills@frontend-design -->
- **frontend-design**：[原文](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/frontend-design)。强调从产品主题、受众、材料和使用场景推导视觉方向，处理字体、配色、构图、层级和动效。适合有辨识度的新界面与官网；不保证仅靠加载即可获得好设计。

<!-- skill: nextlevelbuilder/ui-ux-pro-max-skill@ui-ux-pro-max -->
- **ui-ux-pro-max**：[原文](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md)，[技能页](https://skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max)。设计资料、行业配色、字体、交互规范、图表与栈建议，适合建立可检查的设计依据。调研时包含约 80 种可检索风格、192 个产品配色/推理配置、74 组字体、120 条 UX 规则和 22 个技术栈；数字会变化。原文与必要的引用、CSV 数据可按路径远程读取，无须安装技能。运行其检索脚本属于额外执行能力，未取得文件和运行时不能假称已经检索。

<!-- skill: pbakaus/impeccable@impeccable -->
- **impeccable**：[原文](https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/SKILL.md)，[技能页](https://skills.sh/pbakaus/impeccable/impeccable)。覆盖新设计、评审、精修、简化、排版、配色、交互、动画和设计系统；内有 Persuade / Operate / Read / Experience 等场景区分。`shape`、`critique`、`audit`、`polish`、`bolder`、`quieter`、`distill`、`animate`、`colorize`、`typeset`、`harden`、`onboard` 等是其中的能力入口。远程读取对应 reference 文档即可应用指导；不为执行其 setup 安装 launcher、引擎或 hook。未运行其专用检查时如实说明，不能把模型评审说成已通过该引擎。

<!-- skill: leonxlnx/taste-skill@design-taste-frontend -->
- **design-taste-frontend / Taste Skill**：[原文](https://github.com/leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md)，[技能页](https://skills.sh/leonxlnx/taste-skill/design-taste-frontend)。重视视觉构思、真实参考、图片与产品 UI、版式和浏览器实看；官网、落地页和作品展示尤其匹配。源码目录 `taste-skill` 与实际 name 不同。风格规则和相关文档按需远程读取，服从用户 brief；其脚本与检查工具原本需要 Node 22+ 和 Chromium 系浏览器，远程阅读不代表这些工具已运行，不注册其中的 hook。历史独立条目见 [历史档案](deferred.md)。

<!-- skill: emilkowalski/skills@emil-design-eng -->
- **emil-design-eng**：[原文](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)，[技能页](https://skills.sh/emilkowalski/skills/emil-design-eng)。关注组件细节、按钮反馈、状态、弹簧与中断、感知性能和界面手感。适合产品本体的设计工程；只做动画时查看 [动效指南](motion.md)。

<!-- skill: vercel-labs/agent-skills@web-design-guidelines -->
- **web-design-guidelines**：[原文](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md)，[技能页](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines)。按 Vercel 的 Web Interface Guidelines 检查现有界面；上游会读取 [现行规范](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md)。它主要是审核能力，不替代视觉构思；不要求每次设计都附加全量审计。

<!-- skill: anthropics/skills@theme-factory -->
- **theme-factory**：[原文](https://github.com/anthropics/skills/blob/main/skills/theme-factory/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/theme-factory)。为幻灯片、文档、报告和 HTML 等产物应用或生成配色与字体主题；调研时提供 10 个预设。适合跨素材一致性，有既定品牌时优先复用既定品牌。

<!-- skill: anthropics/skills@web-artifacts-builder -->
- **web-artifacts-builder**：[原文](https://github.com/anthropics/skills/blob/main/skills/web-artifacts-builder/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/web-artifacts-builder)。针对复杂、多组件、带状态或路由的 Claude HTML artifacts；适配宿主后才使用其打包方法。普通仓库页面不需要为了套用它迁移到 artifact 环境。

## 参考与质量判断

需要示例时读 [灵感库](../resources/inspiration.md)；取组件读 [模板库](../resources/templates.md)；图标读 [图标库](../resources/icons.md)。给出具体参考点：字体层级、空间、密度、构图、颜色或反馈，不只给网站首页。

在用户要求的制作范围内观察实际渲染结果，关注文字层级、间距、对齐、图标统一、状态反馈和移动端表现。动效、3D、玻璃或粒子是按用途选择的表现手段，用户要求酷炫时也要让主体清楚可见。
