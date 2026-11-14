# 整站体验版发布记录

本版已于2026-11-14 08:07:29（Asia/Shanghai；UTC为00:07:29）部署到GitHub Pages。发布范围为官网、相关规范和研究记录，不包含两份开工前已存在的本地Skill修改。

- [中文首页](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/)、[开始使用](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/getting-started/)、[使用指南](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/guides/)、[英文官网](https://jmaxzh.github.io/solo-vibe-coding/)。
- 发布代码：[`3c15019c0a9624da3f3eb8a3f568de41077ae551`](https://github.com/jmaxzh/solo-vibe-coding/commit/3c15019c0a9624da3f3eb8a3f568de41077ae551)。
- [Website运行43531790311](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43531790311)：检查与发布两个job均success，SHA与发布代码一致。

本地实现、视觉/语言评估及成本见[报告](report.md)和[独立审查](independent-review.md)。

## CI与实际发布

- Node.js24、锁文件依赖安装、静态构建与产物验证通过；Astro检查0错误、0警告。
- 34项Playwright Chromium测试全部通过，57.4秒。
- 17个HTML页面，JS13.9KiB、全站790.2KiB，满足原有质量预算。
- Artifact `14086924491`的ZIP SHA-256为`9acfc297d61703726f3f7c2731045d9ada359a5b5c6f31d886e55371386105e3`，与GitHub API digest相同。
- Pages部署`7779513037`返回success，环境地址为既有项目官网路径。

原始证据：[CI运行](github-run.json)、[artifact](github-artifact.json)、[部署状态](github-deployment.json)。

## 公开文件核验

[41文件记录](production-files.json)覆盖实际artifact内全部普通文件：最终均返回200，响应字节SHA-256与CI产物相同，也与本地审阅产物相同。包括17HTML、CSS/JS、字体、4张场景辅助WebP、实际截图、起始项目ZIP和sitemap。本地另有`.nojekyll`，未进入既有上传流程artifact，不计入41文件。

首次请求一个备用`.woff`文件返回503，单独重试后返回200且字节匹配；记录保留首次失败与复核时间。没有因此修改源码、字体或工作流。

## 独立生产复核

只读评审在形成源码独立判断、复核修复并对照本地自评之后，继续核对同一发布SHA的CI和正式HTTPS页面，先完成生产独立判断，再对照发布评估。未发现剩余上线阻断。

- [28视图及路径记录](independent-production-browser.json)：7类页面×中英×1440/390，均HTTP200，单一主标题、无横向溢出，共享页头正确；报价安装/语言/刷新/历史路径保持`quote`。
- [16种场景状态](independent-production-scenes.json)：四案例×中英×两宽度，图示和可访问说明正常，入场文字不透明；原生选择、桌面键盘、暂停跨语言/恢复/系统减少动态效果通过。
- 中英手机无JavaScript时，任务需求、报价初始结果与禁用输入可用；404中文浅色、noindex，桌面和手机axe无严重或关键违规。
- 无运行时页面错误。快速导航曾取消一张延迟加载图片，[单独重访](independent-image-recheck.json)确认HTTP200、完整加载，图像宽度1280；未作为资源故障。

## 发布评估与边界

已完成用户授权的提交、推送、检查与正式部署；公开文件与审阅版本一致。两份既有本地Skill修改SHA-256保持不变。未修改依赖、工作流或质量门槛。研究记录不参与官网构建，后续仅更新研究目录不触发Website重建。

本轮没有真实用户的理解/安装测试、审美与转化数据或低端实机性能数据。发布成功及工程检查不能证明这些效果。上一官网代码为`2103cfd5551f618e2fb5b440a82275d8c0a553d4`，需要回退时沿用网站README的新提交回退与复核流程。
