# GitHub Pages 发布记录

新版中英文首页已推送并成功发布，公开地址为：

- [中文首页](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/)
- [英文首页](https://jmaxzh.github.io/solo-vibe-coding/)

## 授权与版本

用户在预览交付后明确要求推送到 GitHub 并部署。按该授权，将已独立审查的首页提交推送到 `website/nova-homepage` 和 `main`，沿用原有 Actions/Pages 流程，没有修改生产配置。ADR 0007 的状态更新为已采纳。

- 发布源码：[3a5dc0009e3455882c978eb44b7b22b94fea0f24](https://github.com/jmaxzh/solo-vibe-coding/commit/3a5dc0009e3455882c978eb44b7b22b94fea0f24)。
- [Website Actions](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43571240977)：Website checks 和 Publish GitHub Pages 均成功，部署 SHA 与上述提交相同。
- GitHub Pages deployment ID：`7784403978`；原始状态见 [github-deployment-statuses.json](github-deployment-statuses.json)。
- 本地原工作区仍在原 `main` 状态，两份 Skill 未提交修改保留；发布来自隔离工作树，没有将这些修改纳入提交。

## 线上核验

使用本机 Chrome `157.0.8103.51` 实际访问公开地址，覆盖中英文与1440×1000、390×844两个视口：

- 返回HTTP200并显示新标题、渐变与默认设计任务，四个痛点可见，无横向溢出。
- 任务选择、刷新、语言切换、进入对应任务的上手页正常。
- 真实案例图片正常加载；报价计算得到独立预期的1955.00，CSV下载包含相同金额与UTF-8 BOM。
- 中英文上手、指南、案例、更新与文章及sitemap共12个公开路径返回HTTP200。
- 起始项目ZIP下载的文件头正确；没有页面脚本错误或HTTP失败资源。

详细时间、视口、检查结果及截图见 [production-check.json](production-check.json)、`screenshots/production-*`，核验脚本为 [verify-production.mjs](verify-production.mjs)。Actions结果见 [github-actions.json](github-actions.json) 与 [ci-summary.txt](ci-summary.txt)。

已完成的独立审查结论继续适用于此次发布的首页实现。以上线上检查不替代真实用户理解、首次安装和实际使用效果验证；产品价值与阅读成本边界见 [差异评估](change-evaluation.md)。
