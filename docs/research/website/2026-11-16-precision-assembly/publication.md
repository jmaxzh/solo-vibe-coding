# GitHub Pages 发布与线上核验

精密装配版官网已发布到 GitHub Pages：[中文官网](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/) · [English](https://jmaxzh.github.io/solo-vibe-coding/)。

## 发布依据与结果

用户在获知视觉方案、检查结果和包体增量后，明确要求“部署到 github”。沿用仓库既有 main → Website Actions → GitHub Pages 流程，没有变更托管、访问范围或工作流。

- 官网提交：[`34cd2b24ecab2762a86727ecc100f80eb5a61f38`](https://github.com/jmaxzh/solo-vibe-coding/commit/34cd2b24ecab2762a86727ecc100f80eb5a61f38)。
- [Website 运行 43784523760](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43784523760)：检查及发布均成功；部署 job 于2026-11-16 01:11:59 UTC完成。
- 云端类型检查、17页构建与产物验证通过，54项Chromium测试通过（1.9分钟）；JavaScript 13.6KiB，完整发布目录1070.8KiB。
- GitHub deployment ID：`7813016964`，环境`github-pages`，关联上述官网提交。
- 只上传`website/dist`。截图与研究档案不进入官网发布包。

两份Skill文件原有的各八行修改没有进入官网提交，发布前后SHA-256保持一致，继续留在本地工作区。

## 独立发布审查

新上下文只读代理`github_release_review`先独立检查暂存区、原始要求、确认范围和既有工作流，再比较之前的独立审查与验证记录。

审查确认63个待发布路径全部属于`website/`和`docs/`，不包含Skill；任务/案例数据、报价计算与下载逻辑、依赖及锁文件未改，变动与已审视觉实现相符，未发现确定发布阻断项。审查没有重复全套测试；云端随后完整执行并通过。已披露的包体增加约221.5KiB／26.1%仍是成本，不标记严格帕累托通过。

## 线上核验

实际请求及浏览器记录见[production-checks.json](production-checks.json)，核验始于2026-11-16 01:12:17 UTC。

- 16个正常内容页和2个sitemap文件均返回HTTP200；内容页核对对应canonical。
- 21个样式、脚本、字体、图片、图标和案例起始ZIP资源均返回HTTP200；两幅概念图与分享图的线上SHA-256与本次源码一致。
- Chrome桌面实际走通中文首页选择growth → 安装需求 → 英文切换，任务连续；核对新主视觉、强调色与实际加载。
- 线上报价负数输入显示错误、结果清空、下载禁用；修正输入后得到33.00，实际下载CSV包含UTF-8 BOM与一致的CNY总额。
- 390px、DPR3手机预览无横向溢出，主视觉加载正常。上述浏览器操作没有JavaScript错误或失败请求。
- 已查看线上[桌面截图](screenshots/production-zh-CN-desktop.png)和[手机截图](screenshots/production-zh-CN-mobile.png)，与交付视觉一致。
- 域名根`robots.txt`返回HTTP404，没有提供阻断项目路径的规则；没有据此声称搜索引擎已抓取或收录。

## 保留边界

本次确认公开部署、资源和已操作路径可用。真实用户理解、首次制作、转化与提效、弱网LCP、Safari／Firefox实机、全量外链及外部安装服务仍未验证。

回退按官网README采用恢复已确认可用源码并重新运行完整工作流的方法，上一版发布源码为`d540b7cd2b17cafa7d6f242993825cd6b798aa86`。此次没有执行回退。
