# 钴蓝折纸首页发布记录

本版已按用户明确要求推送GitHub并通过原有Actions发布到GitHub Pages。生产部署配置、Astro静态架构和双语项目路径均未改变。

- [中文新版](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/?v=d9c1698)
- [English](https://jmaxzh.github.io/solo-vibe-coding/?v=d9c1698)
- 发布源码：[d9c16983e7315bb2995b08bfe4368bcc75494143](https://github.com/jmaxzh/solo-vibe-coding/commit/d9c16983e7315bb2995b08bfe4368bcc75494143)。website/cobalt-fold与main同步atomic push。
- [Website Actions 43593449908](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43593449908)：检查与Pages发布均成功。CI使用原配置、Node24及Playwright Chromium，validate通过、17页及所有链接/语言/元数据/预算验证通过，54项浏览器测试通过（2.1m）。详见 [github-actions.json](github-actions.json)、[ci-summary.txt](ci-summary.txt)。
- Pages deployment ID：7787360780，SHA与发布源码一致，最终状态success。见 [github-deployment.json](github-deployment.json)、[github-deployment-statuses.json](github-deployment-statuses.json)。

## 公开网址实际操作

使用Chrome157.0.8103.51及减少动画设置，访问中英两种语言、1440×1000与390×844共四组首页。地址带发布版本参数，canonical与原项目路径不变。

四组页面均返回200、显示预期奶油白主题、默认设计任务、四个痛点；原创WebP解码为1536×1024，减少动画下场景静止，真实案例图片正常加载。选择推广任务后刷新、切换语言及主行动进入上手页均保留任务。实际报价输入20小时、单价80、额外100、预留15%得到1955.00，下载CSV含UTF-8 BOM及相同金额。

另有双语上手、指南、案例、更新、文章与sitemap共12个路径返回200；案例ZIP实际下载成功，文件头有效。页面脚本错误0、站内HTTP失败资源0。根robots.txt返回404，没有该文件提供的阻断规则；项目子目录不代替根robots控制。详见 [production-check.json](production-check.json)、[verify-production.mjs](verify-production.mjs) 与screenshots/production-*。

在仓库根目录，以RELEASE_COMMIT=完整发布SHA运行node docs/research/website/2026-11-14-cobalt-fold/verify-production.mjs可复核。脚本只读取公开站点、执行浏览器内交互与下载，不写入服务端数据。

## 范围与限制

独立审查在发布前形成，本记录补充其当时尚无的公开部署证据，不扩大审查者直接执行的范围。前版完整代码与截图仍可从既有提交及分支查阅；本轮截图包含同一视口的前后对照。

主工作区main按相同提交快进同步，原有两份未提交Skill修改保留，不纳入官网提交。没有真实用户理解、转化、实体设备功耗和全面辅助设备研究；本轮审美仍由用户判断。详见 [验收](verification.md)、[独立审查](independent-review.md)、[差异及成本](change-evaluation.md)。
