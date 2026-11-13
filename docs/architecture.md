# 当前架构

仓库由独立分发的 Agent Skill 和静态生成的双语官网组成。官网是产品介绍与文档入口，运行时不执行 Agent，也不依赖后端服务。

## 模块与边界

| 模块 | 位置 | 责任 |
| --- | --- | --- |
| 默认英文技能 | `skills/solo-vibe-coding/` | 技能行为、任务指导、引用与许可证；能力事实的主要来源 |
| 对应中文技能 | `i18n/zh-CN/skills/solo-vibe-coding/` | 保持能力与结构一致的中文内容 |
| 官网构建工程 | `website/` | 独立 npm 清单、锁文件与 Astro 配置 |
| 项目事实与界面文案 | `website/src/data/site.ts` | 品牌、网址、安装命令、双语文案、六类任务示例与页面元数据 |
| 构建日志 | `website/src/content/build-log/`、`website/src/data/posts.ts` | 双语 Markdown、显式文章索引、真实日期与对应 slug |
| 页面与布局 | `website/src/pages/`、`website/src/layouts/` | 静态路由、页面结构、导航、语言切换、SEO、渐进增强 |
| 展示组件与样式 | `website/src/components/`、`website/src/styles/` | 首页、指南、任务工作台、代码复制和响应式排版 |
| 静态资源 | `website/public/` | 图标、分享图片、字体许可与 `.nojekyll` |
| 自动检查 | `website/scripts/`、`website/tests/` | 产物完整性、交互、布局与可自动检测的无障碍问题 |
| 发布流水线 | `.github/workflows/website.yml` | PR 检查、主分支检查与 Pages 发布 |
| 知识库 | `docs/`、`CONSTRAINTS.md` | 需求、架构、决策与独立研究档案 |

## 构建与运行

```text
维护者编辑双语文案 / Markdown / 组件
          ↓
Astro + 锁定的 npm 依赖
          ↓
website/dist/：HTML、CSS、少量 JS、字体、图片、sitemap
          ↓
产物验证 + Chromium 验证
          ↓
GitHub Pages：/solo-vibe-coding/
```

默认英文页面位于项目根路径，中文位于 `zh-CN/`。内容由构建期生成，不在客户端按浏览器语言改写；切换语言保持页面主题。`[...path].astro` 生成四类页面及已登记的文章，`404.astro` 生成项目 404 页。

JavaScript 增强复制和六类任务的标签页交互。关闭 JavaScript 后保留普通链接、六个示例面板、安装命令、指南、日志与 FAQ。

## 依赖与外部系统

- 构建使用 Astro、官方 sitemap 集成与 TypeScript；当前版本以 `website/package-lock.json` 为准。
- 本地和 CI 使用同一组 npm 检查命令。浏览器测试依赖 Playwright Chromium 和 axe。
- Manrope 与 IBM Plex Mono 随站点自托管；中文使用系统字体。字体许可随发布资源提供。
- 用户从网站复制命令后，在自己的编程助手中安装和运行 Skill。该执行环境与官网托管完全独立。
- GitHub 保存源码、Issue、Actions 记录和 Pages 发布。首版没有账号系统、表单后端、浏览器端分析服务或数据库。

## 重要约束

站点源为 `https://jmaxzh.github.io`，项目路径为 `/solo-vibe-coding/`；二者同时用于资源、内链、canonical 和 sitemap。源码与配置应一起维护。

研究档案和 Skill 文件不会因位于同一个仓库而自动作为官网静态资源发布。发布输入仅为 `website/dist/`，安装包仍从 Skill 目录分发。

采用依据见 [决策索引](decisions.md)，操作方法见 [官网 README](../website/README.md)。
