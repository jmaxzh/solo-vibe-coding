# 官网开发与发布

官网使用 Astro 生成静态页面，发布到 GitHub Pages 默认项目地址：

```text
https://jmaxzh.github.io/solo-vibe-coding/
```

英文位于项目根路径，中文位于 `zh-CN/`。能力事实来自仓库 Skill 与 README，当前结构和决策见 [项目知识库](../docs/README.md)。

## 环境与开发

官网构建需要 Node.js 22.23.4+；CI 使用 Node.js 24。本要求仅用于官网工程，Skill 的安装要求见仓库 README。

在 `website/` 中执行：

```sh
npm ci
npm run dev
```

开发地址包含项目路径：`http://127.0.0.1:4321/solo-vibe-coding/`。浏览器测试会自动启动生产构建预览，不需要另外保留开发服务器。

```sh
npm run validate
npx playwright install chromium
npm run test:e2e
```

本地已有 Chrome 时，可以使用 `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e`。CI 固定安装 Playwright 对应的 Chromium；验证记录应说明实际使用的浏览器。

## 修改内容与资源

- `src/data/site.ts`：项目事实、页面路径、双语文案、安装、更新与版本核对请求、FAQ 和元数据。能力与边界对照 Skill 和仓库 README。
- `src/data/tasks.ts`：六类任务目录、十二份通用需求与检查点，供指南和上手页共用。中英文保持相同范围，每份需求的开始链接延续同一任务。
- `src/components/TaskEntries.astro`、`DeliveryMethod.astro`：六类能力入口与工程交付方法。各任务可以独立使用，完整工程路径不作为所有任务的必经流程。
- `src/components/Hero.astro`、`Home.astro`：首屏、能力入口、使用步骤与交付方法、安装和 FAQ。首页样式及 `Layout.astro` 中的首页主题限定于首页。
- `src/components/OrbitScene.astro`、`HomeInteractions.astro`、`WebsiteMotion.astro`：原创装饰图、粒子轨道、主按钮指针反馈、标题动效和动画偏好；离屏、隐藏或减少动画时停止 Canvas 绘制，核心路径不依赖动效。
- `public/media/orbit/chrome-orbit.webp`：首页装饰概念图，随静态资源分发。
- `src/components/Terminal.astro`、`CodeBlock.astro`：完整可复制的命令与需求；终端的输入动画仅为命令演示。
- `src/components/GettingStarted.astro`、`Guides.astro`、`PageIntro.astro`：安装、更新、版本核对、任务需求与内页页头；同时核对语言、手机、键盘和关闭 JavaScript 的行为。
- `src/layouts/Layout.astro`、`src/styles/global.css`：公共导航、页脚、元数据、复制和响应式排版。
- `public/social-card.svg`：分享图片可编辑源。执行 `npm run assets` 生成 PNG 并复制字体许可，提交生成资源。
- `public/licenses/`：自托管字体及保留组件的许可与来源；更换素材或依赖时核对归属和分发要求。

公开内容为中英文首页、开始使用、任务指南，以及共用 404，共七个 HTML 页面。新增或删除页面时同步维护路由、导航、元数据、sitemap 和验证脚本的页面清单；构建产物不得包含未登记页面和无用途的资源。

重要选择记录到[决策索引](../docs/decisions.md)；行为变动时同步维护需求、架构、操作与测试文档。

## 用户与维护内容

官网介绍 Skill 能力、工程交付方法、安装使用和通用任务需求。制作发生在用户自己的编程助手中，实际结果取决于模型、工具、项目条件与授权。

维护知识库、ADR、研究和 CI 记录在仓库中查阅，不成为官网文章或导航的阅读目标。`verify` 检查维护链接是否误入发布页面。

两种语言保留相同产品事实和操作边界，分别按读者习惯写作；检查完整导航路径、术语、需求、排版与交互状态。

## GitHub Pages 发布

工作流位于 `.github/workflows/website.yml`。仓库的 **Settings → Pages → Build and deployment → Source** 应设为 **GitHub Actions**。通过 GitHub CLI 首次启用时：

```sh
gh api --method POST repos/jmaxzh/solo-vibe-coding/pages -f build_type=workflow
```

该操作只在尚未启用 Pages 时执行；现有站点先通过 `gh api repos/jmaxzh/solo-vibe-coding/pages` 确认状态，按需使用更新接口，避免重复创建。

官网源码、Skill 事实来源、当前知识文档或工作流发生变化并推送主分支后，工作流从锁文件安装依赖，执行与本地相同的检查和浏览器验证。只有检查成功，才上传 `website/dist/` 并由部署 job 发布。只修改 `docs/research/` 档案不会触发官网重建，因为档案不是构建输入。也可以在主分支从 Actions 手动运行 Website 工作流。

标准 Linux runner 用于公开仓库；不使用大规格 runner 或依赖缓存。Pages 产物保留一天。平台存储和计费条件按 GitHub 当前规则核对。

确认发布时核对：

1. Website 工作流的检查与发布均成功，提交 SHA 与待发布代码一致。
2. 默认英文首页、中文首页和内页返回成功，样式、字体、图片可以加载。
3. `/solo-vibe-coding/sitemap-index.xml` 及其引用的 sitemap 可访问。
4. 域名根目录 `https://jmaxzh.github.io/robots.txt` 的实际响应没有阻断项目路径；项目子目录 robots.txt 无法承担该控制。

## 搜索平台验证

在 Google Search Console 中添加 `https://jmaxzh.github.io/solo-vibe-coding/` 的 URL 前缀属性；将平台提供的验证 HTML 文件放入 `public/`，或将明确提供的验证 meta 加入布局后重新发布。验证文件名与内容必须采用平台实际提供值。

验证通过后提交 `/solo-vibe-coding/sitemap-index.xml`。Bing Webmaster Tools 使用其支持的站点验证方式。站长平台接入状态以账号中的实际结果为准；没有验证凭据时不能宣称已提交或已收录。

## 回退与故障定位

打开失败的 Actions 运行，先区分类型检查、构建、产物验证、浏览器测试、部署权限或平台故障。检查失败不会进入部署 job，已上线版本继续服务。

需要回退时，选择已确认可用的发布提交，恢复该版本的官网源文件及相应依赖锁文件，提交到主分支并重新运行完整工作流。用新提交记录回退，不改写共享分支历史。发布完成后重复生产检查。

如果站点使用的域名或仓库名改变，同时更新 `astro.config.mjs`、`src/data/site.ts`、产物验证器与相关操作文档，再检查所有 canonical、语言链接、资源和 sitemap。
