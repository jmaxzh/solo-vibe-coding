# 用户导向改版验证记录

基线：`c9390f73579207e1066c2037519afa2590b59cff`，开始时主分支与远端一致，工作区干净。改版目标见评审简报与当前需求，新决策由 ADR0005 保存。

## 本地检查

- 静态检查：Astro / TypeScript 0错误、0警告、0提示；构建13个HTML，双语对应、内链锚点、元数据、结构化数据和sitemap通过。
- 最终产物：JS约10.2 KiB，整站约288.3 KiB。相比原版约1.7/268.5 KiB增加约8.5/19.8 KiB，换取实际计算、校验、CSV下载和新增示例页。新增锁定版本 Big.js 7.0.1（MIT，无其他运行依赖）及开发类型声明 @types/big.js 7.0.0；无新增后端或外部运行服务。体积上限仍为JS60 KiB、整站5 MiB，未降低。
- 浏览器：修复评审发现后，本地Chrome的最终22项检查通过（16.1秒），覆盖桌面与手机、两种语言、完整开始路径、数字修改、错误/缺值、分级舍入、零值、大数布局、CSV与BOM、导航与同主题语言切换、复制和权限失败、无JavaScript、404与axe严重/关键问题。
- 验证器负例：构建目录分别注入不存在的链接和本仓库维护知识库链接，验证器均非零退出；恢复原文件后通过。
- 两个Skill包的diff为空。
- `git diff --check` 通过。

## 安装核对

用官方npm registry中的 `skills@1.8.1`，分别在两个新建临时Git项目运行定向安装，验证 Codex `.agents/skills/solo-vibe-coding` 和 Claude Code `.claude/skills/solo-vibe-coding` 各19个文件与仓库一致。未修改用户全局技能目录。结果见 [installation-check.json](installation-check.json)。

官方说明核对：Codex CLI/IDE通过 `$` 或 `/skills` 选择，新增技能未出现时重启；Claude Code通过 `/solo-vibe-coding` 调用。网站提供明确主路径与按需展开的其他安装方式。

评审发现通用Codex入门旧地址已重定向到ChatGPT通用快速开始，与本站CLI/IDE路径不同。改为官方 [Codex CLI安装与首次运行](https://learn.chatgpt.com/docs/codex/cli#getting-started)，并同步双语文案；读取官方Markdown正文核对安装、登录与项目文件夹步骤。

## 独立评审修正

初轮本地工程检查通过后，独立只读评审发现两个P2问题：金额中点浮点误差与新用户官方入口不匹配。金额示例 `0.29 × 0.50` 旧实现得到0.14，`3.75` 加9.2%预留得到4.09；采用十进制库后分别为0.15与4.10。浏览器还允许极接近两位小数的输入，故先把单价和额外费用量化到分，再按工时与预留分阶段四舍五入；CSV复用同一金额。

以上三种边界与实际下载已加入双语桌面/手机检查，最终22项全部通过。初轮无依赖实现和19.1秒结果不作为最终版本通过依据。MIT库许可复制到发布资源；依赖与体积成本同步当前架构、ADR与决策索引。

许可从上游复制时保留了CRLF，导致diff空白检查失败；资源脚本现规范化为LF并仅保留一个结尾换行，许可正文不变。重新生成、构建与diff检查后再作交付判断。

## 视觉检查

本地保存桌面首页、手机中文首页、桌面示例与手机中文上手页。核对成果是否成为首屏主角、用户目标是否直观、手机操作与长需求是否可读。截图不等于目标用户可用性实验。

## 发布证据

- 官网发布提交：`d6184eadc18e23304aa2f63d84a3e233a0fcac84`，与基线之间的diff为本轮实现。
- [本轮GitHub Actions](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43381221238) 成功；Ubuntu标准runner使用Node24.22.2，类型/构建/产物检查通过，匹配的Chromium运行22项检查全部通过（14.0秒），随后部署成功。记录见 [ci-run.json](ci-run.json) 与 [ci-summary.txt](ci-summary.txt)。
- 公开地址：[英文首页](https://jmaxzh.github.io/solo-vibe-coding/)、[中文首页](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/)、[中文实际示例](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/examples/quote-calculator/)。
- 全部27个公开文件（构建中的`.nojekyll`不作为HTTP资源请求）均返回200，SHA256与本地最终产物逐个一致，包括13个HTML、脚本、样式、字体、许可、分享图与sitemap。未知路径返回自定义404且含有效首页入口；域根robots.txt返回404，未将项目目录文件误当根规则。见 [production-check.json](production-check.json)。
- 公网Chrome核对双语首页、可操作示例、手机宽度、维护直链边界、完整首次需求、CLI入门入口、两组金额中点、真实CSV/BOM及同一示例语言切换；无页面异常或失败响应。见 [production-browser.json](production-browser.json)。四张截图已从公网刷新，本地预览服务器已停止。
- 独立评审先判断、后读取自评；交付前结论与发布后复核在 [review.md](review.md) 保存。

发布后的证据补充仅修改研究档案，不更改部署源码；此类提交按既有工作流不触发重新发布。

## 仍未验证

没有真实目标用户试用、助手端从空项目完成制作的独立评估、搜索平台账号验证、真实用户性能、排名或AI引用数据；不把工程与发布通过写成这些结果已经通过。
