# GitHub候选与发布记录

2026-11-15用户授权正式发布。PR #9已合并，GitHub Pages已上线：[中文正式站点](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/?v=85ea88f) / [English](https://jmaxzh.github.io/solo-vibe-coding/?v=85ea88f)。完整SHA、检查、部署与公开核验见 [deployment.md](deployment.md)。

## 发布前候选交付记录

本轮交付方式为候选分支website/prism-nocturne及其GitHub草稿PR，等待用户确认后再决定正式采纳。工程基线为ba342fd，视觉比较对象为已认可的f2b27f3；本次不合并main、不发布正式GitHub Pages。

- [候选分支](https://github.com/jmaxzh/solo-vibe-coding/tree/website/prism-nocturne)
- [对应PR列表](https://github.com/jmaxzh/solo-vibe-coding/pulls?q=is%3Apr+head%3Awebsite%2Fprism-nocturne)
- [本地可操作图览](http://127.0.0.1:8771/)
- [完整静态预览ZIP](prism-static-preview.zip)，含启动说明及许可，可独立解压预览。
- [复盘与本轮目标](design-brief.md)、[验收](verification.md)、[独立审查](independent-review.md)、[差异与成本](change-evaluation.md)。

现有Website工作流的pull_request事件运行检查与浏览器测试，部署job仅允许main的非PR事件；本轮保持配置不变。GitHub上的运行状态和日志从草稿PR的Checks页查看。预览包与本机截图对应本分支已完成的本地构建，文件清单和哈希见preview-manifest.json。

用户确认前，现有main提交、正式站点和原工作区两份未提交Skill修改保持原状。
