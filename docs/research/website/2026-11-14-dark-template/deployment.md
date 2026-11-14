# 深色分栏模板发布记录

新版已推送并发布到 GitHub Pages：

- [中文首页](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/?v=6747f86)
- [英文首页](https://jmaxzh.github.io/solo-vibe-coding/?v=6747f86)

本轮延续用户先前明确的推送与部署要求，先在隔离分支完成，再通过现有流程发布，没有修改生产配置。

## 版本与检查

- 发布源码：[6747f86f058255b85bfa4a51899a964bf3a9bc40](https://github.com/jmaxzh/solo-vibe-coding/commit/6747f86f058255b85bfa4a51899a964bf3a9bc40)。分支`website/new-template`与`main`同步推送。
- [Website Actions](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43573454903)：Website checks 和 Publish GitHub Pages 均成功；42项原浏览器测试通过。
- Pages deployment ID：`7784681092`，SHA与发布源码一致；状态见 [github-deployment-statuses.json](github-deployment-statuses.json)。
- Actions证据见 [github-actions.json](github-actions.json)、[ci-summary.txt](ci-summary.txt)。

## 实际线上操作

使用Chrome `157.0.8103.51`，分别访问未带版本参数的中英文首页及桌面1440×1000、手机390×844视口；页面返回200且首页深色变量为预期值，确认不是旧浅蓝页面。完整检查包括：

- 默认设计任务、四痛点、无横向溢出、真实案例图片加载。
- 任务选择与刷新、切换语言、携带任务进入上手页。
- 报价计算1955.00、带UTF-8 BOM和一致金额的CSV下载。
- 中英文上手、指南、案例、更新、文章与sitemap共12个公开路径返回200；起始项目ZIP可下载且文件头正确。
- 页面脚本错误0，失败HTTP资源0。

详情见 [production-check.json](production-check.json)、[verify-production.mjs](verify-production.mjs) 和 `screenshots/production-*`。最终访问链接带版本参数以便重新查看；canonical与既有项目路径不变。

原工作区仍保留两份未提交的Skill修改，未随本轮提交发布。独立审查无未修复实现阻断；真实用户偏好、理解和使用效果仍待验证，详见 [独立审查](independent-review.md) 与 [差异评估](change-evaluation.md)。
