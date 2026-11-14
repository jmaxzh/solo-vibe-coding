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

- `src/data/site.ts`：项目事实、导航、双语文案、用户场景、完整首次需求与页面元数据。修改能力、安装、许可或边界时核对 Skill 和仓库 README。
- `src/data/outcomes.ts`：四类代表任务的目标、困难、具体帮助、交付目标和需求；首页、使用场景和上手页共用，保持中英内容与操作边界对应。
- `src/data/case-study.ts`、`src/data/case-evidence.ts`：案例正文与审查后的公开事实。更新案例数据时核对完整任务记录、成本和限制；不得在构建或运行时导入研究档案。`case-evidence.available` 为真前禁止发布。
- `public/case-study/`：真实任务截图与独立起始项目 ZIP；截图注明组别和样本来源，ZIP包含独立使用说明和许可。
- `public/media/`：现成界面参考；来源、原许可和必要的转换说明随 `public/licenses/visual-assets.txt` 分发。更换素材时核对获取权限、公开分发范围、预览效果和实际加载，不把第三方参考当作 Skill 的实测成果。
- `src/components/Hero.astro`、`Home.astro`、`TaskStage.astro`：分栏首屏、四类任务示意、四个痛点、使用步骤、真实内容、安装与 FAQ；任务数据与内页共用。首页组件样式及 `Layout.astro` 中的 `body.homepage` 变量和导航页脚样式仅作用于首页。
- `src/components/WorkflowDiagram.astro`：首屏助手使用方式示意正文；与四类任务同步，说明具体需求、Skill专业方法与交付检查目标的关系。内容预渲染并支持无脚本切换，不依赖研究档案或第三方图片。
- `src/components/ImageCompare.astro`：可复用的设计参考对比组件；素材与真实执行证据分别注明来源。
- `src/components/DeviceMockup.astro`、`src/styles/vendor/devices.css`：现成设备样机与原作者样式；保留许可与归属，屏幕内容使用已取得的素材。
- `src/components/Terminal.astro`：安装终端展示；完整命令预渲染并可复制，输入动效不冒充真实安装结果，遵循减少动态效果与暂停偏好。
- `src/components/PageIntro.astro`：内页共用的品牌页头，以开放式文字标题承接正文，指南和案例按用途使用界面参考或实际截图；颜色、字号、间距和圆角以公共样式为准。
- `src/components/TaskVisual.astro`：首页与指南共用的四类任务界面参考，保留可访问名称、来源及演示数据说明。
- `src/components/QuoteCalculator.astro` 与 `src/lib/quote.ts`：可操作的报价示例、输入校验、金额计算和 CSV 下载；数据在浏览器处理，金额与下载共享计算逻辑。
- `src/content/build-log/`：英文和中文 Markdown 文章；保持对应 slug、真实日期与作者事实。新增文章后登记 `src/data/posts.ts`。
- `src/components/`、`src/layouts/`、`src/styles/global.css`：页面结构、交互与视觉；同时核对手机和关闭 JavaScript 的行为。
- `src/components/WebsiteMotion.astro`：首页标题、助手示意入场与任务切换的动画增强、暂停偏好和系统减少动态效果；文字全程可读，停用脚本不影响核心路径。阅读与操作页以稳定内容和即时反馈为主。
- `public/social-card.svg`：分享图片可编辑源。执行 `npm run assets` 重生成 PNG 并复制分发依赖的许可，随后提交这些资源。
- `public/licenses/`：自托管字体、Big.js 和视觉素材的许可；依赖与素材升级时核对相应归属和分发要求。

重要选择记录到 [决策索引](../docs/decisions.md)；更新行为时维护需求、架构、操作与测试文档。完整执行过程保留在研究档案。

## 用户与维护内容

官网的首页、真实任务、上手、场景、示例与更新面向产品使用者。维护知识库、ADR、研究与 CI 档案在仓库维护区域保留；网站不将它们作为文章或导航的阅读目标。`verify` 会检查这些已知维护链接是否误入发布页面。

更新使用示例时，给出用户想做的事、可操作或可核验的成果、重要条件与开始方式。用户自己的项目上下文可以作为“后续修改接着做”的收益说明，不与本仓库维护知识混用。

中英文保留相同产品事实和操作边界，分别按目标读者习惯写作；完整通读页面路径，并分别检查排版、术语、错误信息与图示说明。各页面类型在桌面和手机并排核对，保持品牌一致且适合操作或阅读。

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
