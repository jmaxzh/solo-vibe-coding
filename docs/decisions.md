# 决策索引

本索引记录官网首版已采用的产品、设计、工程与发布选择。接受日期为 2026-11-13。依据为已确认的官网方案、GitHub Pages 默认域名要求、仓库事实与对应官方文档。

重要取舍由 ADR 说明；稳定操作与参数由各主维护文档和代码维护。新增具有持续影响的选择时补充此表；替换重要选择时新增关联旧记录的 ADR。

| 编号 | 选择 | 依据与代价 | 主维护位置 |
| --- | --- | --- | --- |
| D01 | 面向已有产品方向的独立开发者，主要行动为开始使用 | 对应 Skill 既有范围；不扩大为创业方向探索服务 | [需求](specs/website.md) |
| D02 | 首页、快速开始、任务指南、构建日志作为首版内容 | 覆盖理解、尝试与持续了解；新增主题需要真实内容支撑 | [ADR 0002](adr/0002-content-and-languages.md) |
| D03 | 默认英文、独立中文网址、同主题切换 | 与仓库语言一致且便于独立索引；增加翻译维护成本 | [ADR 0002](adr/0002-content-and-languages.md) |
| D04 | 展示六类任务，示例写明预期交付 | 以具体用法解释能力；保留实际执行对工具与授权的依赖 | [需求](specs/website.md) |
| D05 | 使用暖白、石墨黑、橙色与深色任务工作台 | 符合已确认的视觉方向，示例成为主角；不同色面分别验证对比度 | [ADR 0003](adr/0003-visual-and-interaction.md) |
| D06 | Manrope、IBM Plex Mono 自托管，中文使用系统字体 | 保留视觉识别并减少第三方运行时请求；随站分发字体许可 | [ADR 0003](adr/0003-visual-and-interaction.md) |
| D07 | Logo、插图、分享卡片保留 SVG 源，分享卡另有 PNG | 图形与界面同源、便于修改，PNG 兼容分享平台；更新时重生成 | [官网 README](../website/README.md) |
| D08 | Astro 静态生成，交互使用小型原生脚本 | 支持多页、Markdown 与 HTML 正文；需要 Node 构建环境 | [ADR 0001](adr/0001-static-site-and-github-pages.md) |
| D09 | 官网独立位于 website/，仅发布 dist/ | Skill 分发和研究档案与官网产物边界清楚；独立维护 npm 依赖 | [架构](architecture.md) |
| D10 | GitHub Pages 默认项目网址，无自定义域名 | 用户确认，已有公开仓库可用；需要正确处理项目路径 | [ADR 0001](adr/0001-static-site-and-github-pages.md) |
| D11 | 依赖锁文件与 Actions 完整 SHA 固定版本 | 保证可重复构建；升级需要主动检查兼容性与验证 | [官网 README](../website/README.md) |
| D12 | CI 使用公开仓库免费标准 Linux runner，不启用依赖缓存 | 已核对公开仓库与官方计费条件；每次从锁文件安装，避免持久主机处理外部 PR | [ADR 0001](adr/0001-static-site-and-github-pages.md) |
| D13 | 同一检查入口用于本地、PR 与主分支；仅主分支部署 | 防止未验证代码发布；流水线通过不代表已启用分支保护 | [质量标准](../CONSTRAINTS.md) |
| D14 | 任务切换与复制渐进增强，FAQ 使用原生 details | 保留无 JavaScript 阅读与导航；两种运行方式都需验证 | [ADR 0003](adr/0003-visual-and-interaction.md) |
| D15 | 每页独立元数据、自身 canonical、双向 hreflang 与 sitemap | 让主题与语言关系可理解；项目路径纳入所有公开网址 | [ADR 0004](adr/0004-discoverability-and-evidence.md) |
| D16 | 结构化数据描述真实创作、页面与文章 | 与可见内容一致；不以无依据评分满足富结果条件 | [ADR 0004](adr/0004-discoverability-and-evidence.md) |
| D17 | 不将项目目录 robots.txt 作为有效抓取规则 | 协议只读取域名根目录文件；部署时核对根目录实际状态 | [ADR 0004](adr/0004-discoverability-and-evidence.md) |
| D18 | 首版 GEO 侧重清晰正文、来源、作者与真实日期 | 可理解与可核验；不把可选 AI 索引文件当成收录保证 | [ADR 0004](adr/0004-discoverability-and-evidence.md) |
| D19 | 首版使用站长工具观察搜索表现，不加载分析 SDK | 减少页面依赖；暂不提供站内行为漏斗或可验证安装量 | [ADR 0004](adr/0004-discoverability-and-evidence.md) |
| D20 | 用静态产物验证、浏览器交互与 axe 建立质量基线 | 覆盖发布关键风险；不能替代全部人工无障碍或真实用户性能 | [测试说明](testing.md) |
| D21 | 单日 Pages 构建产物保留，仅部署 job 获写入权限 | 缩短存储周期与权限暴露；历史回退通过源码重建执行 | [官网 README](../website/README.md) |
| D22 | 操作知识、决策、公开日志和研究档案分别维护 | 首次使用不依赖聊天或档案；重要决策与验证历史仍可追溯 | [知识库入口](README.md) |
| D23 | 研究档案单独变更不触发官网构建 | 档案不是发布输入，可在发布后补全证据；源码与当前规范仍触发完整检查 | [官网 README](../website/README.md) |

细粒度视觉参数与交互状态以 [global.css](../website/src/styles/global.css) 和组件为准，依赖以锁文件为准。历史评审与执行证据从 [研究档案](research/README.md) 查阅。
