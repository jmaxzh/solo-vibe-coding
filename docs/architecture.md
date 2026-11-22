# 当前架构

仓库由独立分发的 Agent Skill 和静态生成的双语官网组成。官网介绍能力与使用方法，运行时不执行 Agent，不需要后端服务。

## 模块与边界

| 模块 | 位置 | 责任 |
| --- | --- | --- |
| 英文与中文技能 | `skills/solo-vibe-coding/`、`i18n/zh-CN/skills/solo-vibe-coding/` | 相同能力与结构的技能包，是能力事实主要来源 |
| 官网工程 | `website/` | 独立 npm 清单、锁文件与 Astro 配置 |
| 项目事实与文案 | `website/src/data/site.ts` | 品牌、路径、安装、双语文案、FAQ、更新核对请求和页面元数据 |
| 任务目录与请求 | `website/src/data/tasks.ts` | 六类能力与十二个通用任务，指南与上手页共用需求和检查点 |
| 页面与布局 | `website/src/pages/`、`website/src/layouts/` | 静态路由、导航、语言切换、SEO 和复制 |
| 页面组件 | `website/src/components/` | 首页、能力入口、工程交付、安装、任务指南与页头 |
| 视觉与交互 | `OrbitScene.astro`、`HomeInteractions.astro`、`WebsiteMotion.astro`、`Terminal.astro`、`src/styles/` | 装饰光环、可暂停粒子、主按钮反馈、安装命令和响应式排版 |
| 静态资源 | `website/public/` | 图标、分享图片、装饰图、字体与组件许可、`.nojekyll` |
| 自动检查 | `website/scripts/`、`website/tests/` | 产物、路由、交互、布局和可检测无障碍问题 |
| 发布流水线 | `.github/workflows/website.yml` | PR 检查、主分支检查与 GitHub Pages 发布 |
| 知识库 | `docs/`、`CONSTRAINTS.md` | 当前需求、架构、设计、测试和独立决策记录 |

## 构建与运行

维护者编辑双语数据和组件，经 Astro 构建为 `website/dist/`，通过静态产物与 Chromium 验证后部署到 GitHub Pages。

`[...path].astro` 生成中英文首页、开始使用、任务指南；`404.astro` 生成共用错误页，共七个 HTML。页面标题、摘要、语言链接和 sitemap 从同一页面定义生成。

首页内容静态可读，光环与字带按动画偏好增强。JavaScript 提供复制、动画暂停和上手页任务聚焦。指南与上手页从同一任务数据读取请求；有效任务参数和锚点保持安装、刷新、历史导航与语言切换的连续性。无脚本时全部需求和普通链接仍可用。

首页主题、导航及页脚颜色限定于首页，阅读内页保留暖纸色。安装终端只有命令演示，不展示未经执行的成功记录。

## 依赖与外部系统

- Astro、官方 sitemap 集成和 TypeScript；版本由 `website/package-lock.json` 固定。
- Playwright Chromium 和 axe 用于浏览器交互、布局与无障碍检查；本地和 CI 使用同一命令。
- Manrope 与 IBM Plex Mono 自托管，中文使用系统字体，许可证随站分发。
- GitHub 保存源码与 Actions 记录，GitHub Pages 仅发布 `website/dist/`。
- 用户在自己的编程助手中安装和执行 Skill，该环境与官网独立；官网没有账号、分析 SDK、数据库或表单后端。

站点源为 `https://jmaxzh.github.io`，项目路径为 `/solo-vibe-coding/`。资源、内链、canonical 和 sitemap 同时遵守这两个值。

Skill、研究与历史 ADR 不因位于仓库中而进入官网产物，网站也不链接它们作为维护阅读入口。源码与许可链接保留在页脚。

页面范围见 [ADR 0015](adr/0015-focused-website-content.md)，历史选择见[决策索引](decisions.md)，操作方法见[官网 README](../website/README.md)。
