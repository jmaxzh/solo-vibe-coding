# 决策索引

本索引记录官网的产品、设计、工程与发布选择。初版接受日期为 2026-11-13；后续日期与状态见各 ADR。D01–D23 为初版记录；其中受众、首页入口、公开日志与任务标签页已由 D24–D31 和 [ADR 0005](adr/0005-user-outcomes-and-audiences.md) 调整，其余按各主维护位置继续有效。

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
| D24 | 面向目标明确但没有完整技术判断力的使用者 | 承接用户明确的服务对象，专业方法由助手按任务选用 | [ADR 0005](adr/0005-user-outcomes-and-audiences.md) |
| D25 | 从用户想做的事和可用成果进入，替代专业分类首屏 | 用户可用自己的目标开始；六类专业能力在 Skill 内保留 | [当前需求](specs/website.md) |
| D26 | 提供可计算、校验与下载的报价工具作为实际示例 | 直接体验结果；增加本地脚本和十进制库，无后端服务 | [需求](specs/website.md#可用示例) |
| D27 | 上手从环境检查和安装走到打开成果及继续修改 | Codex CLI/IDE 为明确主路径，其他助手按需展开；安装与实际制作效果分别验证 | [ADR 0005](adr/0005-user-outcomes-and-audiences.md) |
| D28 | 维护知识留在仓库维护入口，网站提供用户用法与更新 | 避免把内部追溯材料当成用户阅读任务；仍保留开源与许可入口 | [ADR 0005](adr/0005-user-outcomes-and-audiences.md) |
| D29 | 保留既有页面及场景锚点，编辑已有公开文章为用户成果介绍 | 减少旧链接退化，原制作过程由版本历史与维护档案保留 | [当前架构](architecture.md) |
| D30 | 产品定义、FAQ、SEO/GEO 元数据和分享卡片按新受众对齐 | 语义与用户收益一致；不承诺收录、排名或 AI 引用 | [当前需求](specs/website.md#seo-与-geo) |
| D31 | 工程验证和目标用户产品验收分别记录 | 自动检查证明功能与技术条件；实际理解与首次制作仍需观察用户 | [测试说明](testing.md) |
| D32 | 报价使用锁定版本 Big.js，金额按阶段四舍五入到分 | 避免十进制中点因浮点误差少算一分，页面与 CSV 共用金额；增加小型 MIT 依赖及升级检查成本 | [当前架构](architecture.md#依赖与外部系统) |
| D33 | 官网以现有Agent增加的指导组织价值定位 | 回答为何额外安装Skill；通用成品能力不足以证明增量效果 | [ADR 0006](adr/0006-skill-increment-and-case-evidence.md) |
| D34 | 将指令事实、实际行为和比较效果分别表达 | 源码可证明指导要求，提效或效果领先需真实对照；不将官网工程测试归因于Skill | [当前需求](specs/website.md) |
| D35 | 用同模型、同项目和同需求的两轮任务观察 | 新会话延续各组文件，共同验收和补救规则；少量样本不代表一般优势 | [ADR 0006](adr/0006-skill-increment-and-case-evidence.md) |
| D36 | 共同环境故障保留原结果，登记同等条件的新批次 | 不将工具限制当作Skill效果，也不删除超时、失败和缺失成本 | [ADR 0006](adr/0006-skill-increment-and-case-evidence.md) |
| D37 | 真实任务、截图及起始项目独立作为用户内容发布 | 研究日志与评分器留维护区，网站运行/构建不依赖研究档案；增加静态资源维护成本 | [当前架构](architecture.md) |
| D38 | 保留报价工具、场景和既有文章URL | 报价工具作为次级体验，实际Skill任务承担增量说明；维护旧链接与用户入口 | [当前需求](specs/website.md) |
| D39 | 首页使用浅蓝渐变、居中标题与宽幅助手使用示意 | 对应明确的视觉参考与完整叙事；增加长页内容维护与滚动量 | [ADR 0007](adr/0007-homepage-assistant-preview.md) |
| D40 | 四个痛点常驻，首屏默认设计任务并同步四类需求与检查目标 | 用户可同时辨认困难，再按任务开始；示意与实际证据分别标注 | [当前需求](specs/website.md) |
| D41 | 首页视觉覆盖限定在首页，内页按类型后续延展 | 控制公共样式影响；暂时保留两种页面视觉，需核对跨页体验 | [ADR 0007](adr/0007-homepage-assistant-preview.md) |

细粒度视觉参数与交互状态以 [global.css](../website/src/styles/global.css) 和组件为准，依赖以锁文件为准。历史评审与执行证据从 [研究档案](research/README.md) 查阅。
