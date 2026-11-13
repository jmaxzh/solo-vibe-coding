# 官网视觉版发布记录

本版已于2026-11-14发布到GitHub Pages，部署成功时间为07:03:58（Asia/Shanghai，UTC为2026-11-13 23:03:58）。

- [中文官网](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/)、[英文官网](https://jmaxzh.github.io/solo-vibe-coding/)。
- 发布代码：[`2103cfd5551f618e2fb5b440a82275d8c0a553d4`](https://github.com/jmaxzh/solo-vibe-coding/commit/2103cfd5551f618e2fb5b440a82275d8c0a553d4)。
- [Website运行43524039902](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43524039902)：Website checks与Publish GitHub Pages均成功，SHA与发布代码一致。
- 发布范围为官网视觉、外部场景、相关规范与研究记录。两份开工前已有的本地Skill修改未纳入提交，内容SHA-256保持一致。

## CI与产物

- Node.js24、锁文件依赖安装、静态构建和产物验证通过；Astro检查0错误、0警告。
- 34项Playwright Chromium测试全部通过，47.8秒。
- 17个HTML页面；JavaScript14.0KiB，全站1309.2KiB，满足原有预算。
- Artifact `14085005459`：下载ZIP的SHA-256为`5ab71d693c627bf64d986f8fffb6e14d9cca978d38d90b639ae6d036b20c8632`，与GitHub API digest一致。
- Pages部署`7778570307`返回success，公开地址为既有GitHub Pages项目路径。

原始证据：[运行](github-run.json)、[artifact](github-artifact.json)、[部署状态](github-deployment.json)。发布前设计、成本和本地验证见[报告](report.md)。

## 线上核验

[生产文件记录](production-files.json)覆盖实际artifact中的47个普通文件：所有地址返回200，HTTP响应字节SHA-256与CI产物逐一相同，也与本地审阅产物相同。范围包括17页HTML、CSS、JS、字体、10张新WebP、其他图片、起始项目ZIP与sitemap。本地生成目录另有`.nojekyll`，未进入既有上传流程artifact，未将其算入47文件。

全新上下文的只读评审独立检查了发布授权、前后提交、范围、工作流与正式HTTPS页面，再核对发布评估。[6组生产浏览器复核](independent-production-review.md)覆盖中英、桌面/手机、启用/关闭JavaScript，确认四场景对应需求、语言保持任务、键盘焦点、图片、浮动、视差、暂停与系统减少动态效果。未发现剩余发布阻断项。

生产截图：[英文桌面](production-screenshots/en.desktop.png)、[中文手机](production-screenshots/zh-CN.mobile.png)。

## 评估与边界

用户授权的视觉版已提交、推送、通过既有检查并实际部署；线上响应和关键交互得到核验。未更改依赖、工作流、质量门槛或Skill包。发布增加的资源与维护成本仍按设计报告披露，不能因上线成功而表述为零成本。

工程与发布证据不能证明真实用户的审美偏好、理解速度、安装转化或低端实机性能；本轮没有这些数据。研究档案更新不参与官网构建，也不触发新的Website部署。上一官网代码为`ad3bbea31fb2ff0b6934285dd4f696a60d95f9f9`，如需回退沿用网站README中的新提交回退和复核流程。
