# 场景版官网发布验证

本版已于2026-11-13通过既有GitHub Actions流程部署到GitHub Pages，部署成功时间为15:10:25 UTC。

- [中文官网](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/)
- [英文官网](https://jmaxzh.github.io/solo-vibe-coding/)
- 发布代码：[`ad3bbea31fb2ff0b6934285dd4f696a60d95f9f9`](https://github.com/jmaxzh/solo-vibe-coding/commit/ad3bbea31fb2ff0b6934285dd4f696a60d95f9f9)
- [Website运行43449557421](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43449557421)：检查和Pages部署均成功，提交SHA与发布代码一致。

## CI与发布产物

- Node.js 24、锁文件安装、Astro检查、静态构建与产物校验通过，0错误、0警告。
- 30项Playwright Chromium测试全部通过，55.0秒。
- 17个HTML页面，其中16个内容页面进入sitemap，404不参与索引；静态验证另外统计了sitemap-index引用的子sitemap地址。
- JavaScript 11.3 KiB，全站564.6 KiB，满足既有预算。
- Artifact `14049542772`：下载ZIP的SHA-256为`992c8a2f7f40d5679797e659c4a1de35568508de627e43c4f434a32683679cb3`，与GitHub API digest一致。
- 实际发布的36个普通文件，公开地址全部返回200，响应字节SHA-256与该artifact逐一一致，覆盖HTML、CSS、JS、字体、图片、起始项目ZIP与sitemap。
- 本地生成目录另有`.nojekyll`，未进入既有上传流程的artifact；本地37文件与实际发布36文件是不同口径，不代表缺页。

原始证据：[CI运行](github-run.json)、[artifact](github-artifact.json)、[部署状态](github-deployment.json)、[生产文件校验](production-files.json)。

## 生产浏览器

[8组检查](production-browser.json)覆盖中英两语、1440/390两种宽度、启用/关闭JavaScript：四场景切换、对应需求、安装往返、刷新、历史导航、语言切换、复制与报价工具。启用脚本时确认所选任务属性已初始化；关闭脚本时确认全部需求保持可读。线上报价计算与CSV下载也已实际验证，无页面异常、资源失败或横向溢出。

独立复核另行运行了[生产交互检查](independent-production-browser.json)与[历史及语言状态检查](independent-navigation-stability.json)。后者区分了新文档加载中的即时状态与脚本初始化后的稳定状态：等待初始化后，URL、任务参数、选中任务与可见需求一致。

生产截图：[中文桌面](production-screenshots/zh-CN.1440.png)、[中文手机](production-screenshots/zh-CN.390.png)、[英文桌面](production-screenshots/en.1440.png)、[英文手机](production-screenshots/en.390.png)。

## 独立复核与范围

全新上下文的只读评审独立核对了原始发布请求、前后提交、发布范围、README维护说明、工作流门槛、CI与部署SHA、artifact摘要、36文件生产一致性以及实际交互，再检查改动评估和验证记录。未发现已知发布阻断或能力回归。Skill包、依赖、质量标准和工作流未改动。

域名根目录`robots.txt`实测404，没有提供阻断规则。实际收录、排名、用户理解、安装转化与提效未验证；发布成功和工程检查不能作为这些效果的证明。

已知上一发布代码为`dad270ff529638c2999dab6c3d5622e99fb36eee`；如需回退，沿用官网README中的新提交回退、完整检查和生产复核流程。
