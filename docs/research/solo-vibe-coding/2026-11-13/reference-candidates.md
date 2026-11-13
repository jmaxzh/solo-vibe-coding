# 参考网站与发现技能候选

这份档案保存 `solo-vibe-coding` 参考来源的候选快照，收录现成的案例库、素材站、模板目录，以及帮助检索这些资源的 Skill。下文保留发现时的核查情况，本轮接入状态见末尾；接入指导与资源入口不代表已经安装工具或完成使用效果验证。

优先选择能定位到具体案例、页面、素材文件或源码的网站，并分别记录参考用途、可获取的内容和访问条件。专业规范与案例、素材分开标识；安装量与 Star 只作为采用度线索。

## 已确认保留的 Skill 候选

以下安装量是 2026-11-13 的 Skills CLI 查询快照；网页缓存中的数字可能不同。能力已读取上游原文，未安装或实际执行。

| Skill 与来源 | 安装量约数 | 现成参考来源与用途 | 使用条件与选型边界 |
| --- | --- | --- | --- |
| [mobbin/skills 的 search](https://skills.sh/mobbin/skills/search)，[原文](https://github.com/mobbin/skills/blob/main/skills/search/SKILL.md) | 1.4K | 搜索 Mobbin 中真实产品的屏幕、操作流程与官网区块 | Mobbin 官方来源；原文要求先读同仓库的 best-practices。实际检索需要 Mobbin MCP 及 Pro、Team 或 Enterprise 套餐。旧索引 mobbin-search 的 777 次安装单独计数，不并入本项 |
| [21st-dev/skill 的 21st-cli-use](https://skills.sh/21st-dev/skill/21st-cli-use)，[原文](https://github.com/21st-dev/skill/blob/main/skills/21st-cli-use/SKILL.md) | 2.4K | 搜索 21st.dev 的现成 React/shadcn 组件、主题与模板，获取预览、CSS 或源码 | 21st 官方来源；CLI 目录检索与代码获取需要登录或 API Key，源码获取有额度。Skill 同时含生成入口，本候选的相关用途是搜索与取得已有目录内容 |
| [mengto/skills 的 daily-ui-inspiration-capture](https://skills.sh/mengto/skills/daily-ui-inspiration-capture)，[原文](https://github.com/mengto/skills/blob/main/agent-skills/codex/daily-ui-inspiration-capture/SKILL.md) | 1.6K | 从 Framer、Dribbble 和真实网站采集落地页、截图及动态效果 | 原版面向每日五项参考的完整采集包，包含固定文件结构、截图、录屏和说明；指定 Codex 内置浏览器。适合批量采集，单次找链接时流程可能偏重 |
| [ComposioHQ/awesome-claude-skills 的 competitive-ads-extractor](https://skills.sh/composiohq/awesome-claude-skills/competitive-ads-extractor)，[原文](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/competitive-ads-extractor/SKILL.md) | 5.8K | 从 Facebook、LinkedIn 等广告库取得真实广告，比较文案、定位和创意 | 实际采集依赖浏览器或其他访问工具；Skill 文本本身不提供广告库连接。公开投放记录可支持案例研究，不能单独证明转化表现 |

来源仓库的 Star 快照：Mobbin 约 67、21st 约 40、MengTo 约 7.4K、ComposioHQ 约 79.3K。前两项是服务方官方技能，但仓库采用证据仍少；这些数字均不是单项任务效果评测。

## 已提及的新增视觉候选

以下保留已讨论的视觉来源，按实际资源类型区分。规范类条目保留为候选依据，尚未判定为适合正式素材目录的入口。

| 来源 | 类型 | 可以参考或取得的内容 | 当前核查与边界 |
| --- | --- | --- | --- |
| [Noto CJK](https://github.com/notofonts/noto-cjk) | 字体素材 | Noto Sans CJK、Noto Serif CJK 字体，下载指引与版本记录 | 已读取官方仓库；具体字形、格式及许可证随所选文件核对 |
| [Google Fonts](https://fonts.google.com/) | 字体目录，补充入口 | 可检索的字体家族；Noto CJK 官方仓库另提供对应 Google Fonts 名称与链接 | 主站依赖 JavaScript；尚未实测筛选与下载流程 |
| [Apache ECharts Examples](https://echarts.apache.org/examples/en/index.html)，[源码](https://github.com/apache/echarts-examples) | 可运行图表案例与源码 | 具体图表演示、配置及实现，用于复杂图表和数据呈现 | 已读取官方示例仓库；示例站依赖 JavaScript，未逐个运行图表 |
| [W3C 中文排版需求](https://www.w3.org/TR/clreq/) | 排版规范 | 中文标点、断行、字距等排版依据 | 已读取原文；属于规范参考，不提供字体资产或成品设计库 |
| [WAI-ARIA APG Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) | 交互规范与控件示例 | 控件的语义、键盘行为及相应示例 | 已读取目录；用于交互行为依据，不是视觉素材库 |
| [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) | 平台设计规范 | Apple 平台的界面与交互惯例 | 已核查官方入口与布局指导；属于平台规范，不是通用案例或素材库 |

[Recent 的发布视频栏目](https://recent.design/launch-videos)已核查可作为现成视频参考；Recent 本身已在正式视觉资源清单中，不重复计作新增站点。

## 其他场景的素材网站候选

本轮优先保留营销成品、产品流程、真实数据结构、开源实现，以及配置和监控模板。下面的“优先评估”指与现有任务范围的匹配度；所有条目仍是候选，单个素材与工程的质量需要在选用时检查。

### 获客与内容传播

| 来源 | 现成内容与使用场景 | 本轮核查、访问条件与边界 | 候选优先级 |
| --- | --- | --- | --- |
| [Marketing Examples](https://marketingexamples.com/) | 营销文案、价值表达、CTA、内容传播和落地页案例拆解 | 已读取分类与[具体 CTA 案例](https://marketingexamples.com/landing-page/cta)；内容公开可读，部分论据包含在图片中。适合参考表达与结构，文中效果描述不直接等于自身产品的预期收益 | 优先评估 |
| [Really Good Emails](https://reallygoodemails.com/) | 欢迎、功能发布、促销、召回等邮件的内容与版式 | 已读取主页和[欢迎邮件分类](https://reallygoodemails.com/categories/welcome)，可定位具体邮件；收藏和工作台等功能与公开浏览分开。未实测 HTML 获取，不承诺每个案例提供源码 | 优先评估 |
| [Good Email Copy](https://www.goodemailcopy.com/) | 公司实际邮件的文字内容，适合注册、通知、故障说明和营销表达 | 已读取主站，提供搜索和标签入口，署名由 Front 提供；未实测搜索结果。定位比综合营销库更窄，可作为邮件文案补充 | 按需 |
| [Swiped.co](https://swiped.co/) | 广告、销售信、促销和文案的历史案例与拆解 | 已读取案例目录；同时收录较老的直邮与经典广告，适合研究表达机制，不作为近期 SaaS 或中文平台趋势的默认来源 | 按需 |
| [Google Ads Transparency Center](https://adstransparency.google.com/) | 已发布的 Google 广告，可按广告主或网站查找竞品表达与创意 | 已取得入口与 [Google 官方说明](https://support.google.com/My-Ad-Center-Help/answer/12155361?hl=en-en)；支持地区和日期等筛选，检索页依赖 JavaScript，本次未完成实际查询。属于真实广告库，不是按效果评选的优质案例榜 | 按广告任务评估 |
| [TikTok Creative Center Top Ads](https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en) | 平台收录的广告短视频、开头、脚本节奏和创意表现 | 已读取目录与[官方使用说明](https://ads.tiktok.com/resources/help/article/how-to-use-the-top-ads-dashboard)：有行业、地区、目标等筛选及相对表现信息，未登录只能看有限条目。本次页面未返回广告结果，未实测播放或检索 | 按短视频广告任务评估 |
| [数英项目库](https://www.digitaling.com/projects)，[收录说明](https://www.digitaling.com/projects/collection) | 中文品牌传播、广告、活动与创意项目，包含每周、每月精选 | 已取得数英自身的索引摘要与收录机制说明；主站和项目页本次均返回 403，尚未核读具体案例。保留中文营销方向的发现线索，不列为完成内容核查的推荐 | 待核查 |

### 产品流程与需求沟通

| 来源 | 现成内容与使用场景 | 本轮核查、访问条件与边界 | 候选优先级 |
| --- | --- | --- | --- |
| [Growth.Design Case Studies](https://growth.design/case-studies) | 围绕真实产品的引导、注册、付费、留存和流程摩擦的图文拆解 | 已读取目录与 [Loom 案例](https://growth.design/case-studies/loom-psychology)；案例页提示免费注册后观看，取得了文本版本。案例中的心理解释与改进意见属于作者分析，不是产品内部实验结果 | 优先评估 |
| [Notion Product Templates](https://www.notion.com/templates/category/product)，[PRD 分类](https://www.notion.com/templates/category/product-requirements-doc) | 现成的 PRD、路线图、反馈收集和发布计划模板 | 已读取目录，可区分 Notion 与其他创作者、免费与付费条目；未登录复制模板。平台模板用于参考结构，选用时不要求把现有项目文档迁入 Notion | 按需 |
| [Miro User Story Map Templates](https://miro.com/templates/user-story-map/) | 用户故事地图、完整任务路径与版本切分的现成画板模板 | 已读取多项模板列表，含 Miro 官方与社区模板。原生编辑与复制依赖 Miro 账号及相应权限；可先参考预览，不要求迁移项目协作工具 | 按需 |
| [Product Hunt](https://www.producthunt.com/) | 同类产品的发布页、价值表达、功能展示和公开讨论 | 已读取当前发布列表；可用于已有产品方向内的对标，讨论与榜单不是用户需求或产品质量的代表性证明 | 按产品对标或发布任务评估 |

### 架构 数据与实现复用

| 来源 | 现成内容与使用场景 | 本轮核查、访问条件与边界 | 候选优先级 |
| --- | --- | --- | --- |
| [DrawSQL Templates](https://drawsql.app/templates) | 真实开源项目与应用的数据库结构、关系图和可克隆模板 | 已读取目录、[WordPress](https://drawsql.app/templates/wordpress)、[Laravel](https://drawsql.app/templates/laravel)条目与[套餐](https://drawsql.app/pricing)，并取得 WordPress 官方 schema 源文件用于交叉参考；未逐字段验证图示或实测克隆、SQL 导出。免费方案面向公开且有限表数的图，私有图及更高额度需另核对 | 优先评估 |
| [CodebaseShow RealWorld](https://codebase.show/projects/realworld)，[RealWorld 源仓库](https://github.com/realworld-apps/realworld) | 用不同前后端技术实现同一应用的现成工程，可比较认证、文章、评论和 API 分层 | 已读取 RealWorld 当前 README，官方将实现目录指向 CodebaseShow；目录站依赖 JavaScript，未实测其筛选或选定实现。各项目的维护、版本、许可证与测试分别判断，不把全部实现视为统一验收通过 | 按实现对比任务评估 |
| [The Architecture of Open Source Applications](https://aosabook.org/en/) | 开源应用作者对真实系统结构、组件协作与设计取舍的案例说明 | 已读取目录与第一卷引言，在线章节可读。它是实际架构案例集，部分内容年代较早，适合研究设计依据，不提供当前默认技术栈的即用模板 | 按架构研究任务评估 |
| [OpenAlternative](https://openalternative.co/) | 按用途、类别与许可证查找现成开源产品，进入项目主页或源码继续评估 | 已读取目录与筛选入口；适合发现可复用产品和对标项目。目录收录不等于对每个项目的维护、功能完整度或许可证适配作保证，采用前回到源仓库核实 | 优先评估 |
| [Gin Examples](https://github.com/gin-gonic/examples) | Gin 官方组织提供的具体功能示例与源码 | 已读取仓库与 README，原文定位为可运行示例；未安装或运行。适用于已选 Go/Gin 的实现问题，依赖和启动条件按所选示例核对 | 按技术栈需要评估 |

### 环境 部署与运行

| 来源 | 现成内容与使用场景 | 本轮核查、访问条件与边界 | 候选优先级 |
| --- | --- | --- | --- |
| [Awesome Selfhosted](https://awesome-selfhosted.net/) | 按用途分类的现成自托管应用，适合查找可在自有服务器运行的软件 | 已读取目录，包含源码、实现语言、许可证等信息；对现有单台 VPS 方案有发现价值。实际资源需求、部署拓扑、维护状态和备份方式仍按项目核对 | 优先评估 |
| [Docker Official Images](https://hub.docker.com/u/library) | 数据库、代理、运行时等组件的现成官方镜像目录 | 已读取目录；镜像版本、架构、配置、许可证与生产要求按具体镜像判断。“官方镜像”标识不保证部署配置适合当前项目 | 按基础组件需要评估 |
| [Docker Awesome Compose](https://github.com/docker/awesome-compose) | 本地开发中多服务组合的现成 Compose 示例，如 Go、代理和数据库组合 | 已读取 README 与 nginx-golang-mysql 的 compose.yaml。上游明确这些样例用于本地开发，不能直接部署生产；该具名样例当前默认镜像实际为 MariaDB，不应据目录名假定它直接满足 MySQL 默认栈 | 仅作为本地环境素材评估 |
| [Cloudflare Templates](https://github.com/cloudflare/templates) | 带实际文件的 Cloudflare 工程模板，包含 React、Vite、Next.js 等入口 | 已读取 README、根目录与 Vite/React 模板说明；未构建或部署。部分模板包含 Hono、D1、Durable Objects 等后端能力，选用时保持项目“前端 Cloudflare、业务后端单台 VPS”的既定边界，并核对实际服务成本 | 按前端部署需要评估 |
| [GitHub Actions Starter Workflows](https://github.com/actions/starter-workflows) | 官方 CI、部署、扫描及自动化 YAML 模板 | 已读取 README 与 ci/go.yml。Go 示例仍使用 ubuntu-latest、Go 1.20 和旧版 Action，需按实际项目版本与指定自托管 Runner 更新；仓库目前不接收社区贡献，但说明仍提供安全与重大破坏性变更修复。模板不等于完整质量基线 | 按 CI 任务评估 |
| [Grafana Dashboards](https://grafana.com/grafana/dashboards/) | 可导入的服务器、数据库和应用监控面板 | 已读取目录与 [Node Exporter Full](https://grafana.com/grafana/dashboards/1860-node-exporter-full/)条目，后者提供导入 ID 和 JSON 下载入口。依赖匹配的数据源、Exporter、指标名及版本；未下载导入或接入实际监控。监控运行成本另行评估 | 优先评估 |

## 后续选型与证据范围

已读取的公开页面、原始 README、目录和部分配置支持以上内容类型与访问条件的判断。需要 JavaScript、登录、下载或运行才能完成的检查已在相应条目中标明；候选档案不把这些步骤记录为已完成。

正式接入时按当前任务选择少量互补来源，明确其提供的是成品参考、可编辑模板、源码还是运行资产。现有技能的技术栈、质量标准、部署拓扑和工具授权不因这份档案改变；正式技能与运行时引用不依赖本研究档案。

## 本轮接入状态

本轮为中英文技能各增加六份资源页，入口分别指向专业指导和现成参考；资源名称和使用条件不从本档案动态加载。

| 正式资源页 | 本轮接入 |
| --- | --- |
| [视觉参考与素材](../../../../skills/solo-vibe-coding/references/resources/visual.md) | 保留原有 34 个入口，新增 Google Fonts、Noto CJK、ECharts Examples；补充 Recent 发布视频链接。Mobbin search、21st-cli-use 与 daily-ui-inspiration-capture 为按需读取的可选检索指导 |
| [获客参考](../../../../skills/solo-vibe-coding/references/resources/acquisition.md) | Marketing Examples、Really Good Emails、Growth.Design、Google Ads Transparency Center、TikTok Top Ads；competitive-ads-extractor 为可选广告采集与分析指导 |
| [需求参考](../../../../skills/solo-vibe-coding/references/resources/requirements.md) | Notion 产品模板、Miro 用户故事地图模板 |
| [架构参考](../../../../skills/solo-vibe-coding/references/resources/architecture.md) | DrawSQL Templates、CodebaseShow / RealWorld、AOSA |
| [开发参考](../../../../skills/solo-vibe-coding/references/resources/development.md) | OpenAlternative、Gin Examples、Docker Awesome Compose；Compose 示例仅用于本地环境参考 |
| [部署与运行参考](../../../../skills/solo-vibe-coding/references/resources/deployment.md) | Awesome Selfhosted、Docker Official Images、Cloudflare Templates、Grafana Dashboards |

Good Email Copy、Swiped、Product Hunt、数英、GitHub Actions Starter Workflows，以及 W3C 中文排版需求、APG、Apple HIG 本轮继续留作候选。前述公开浏览与原文阅读证据没有扩展为账号后检索、下载、构建、导入或部署实测。

本轮核读的检索指导版本：`mobbin/skills@cac338357d596415773874f06a6c16e862c195e4`（含 search 与 best-practices）、`21st-dev/skill@15c7436c41dc88c54094f1be93ce53bda456b114`、`mengto/skills@07274a3b3dba5f6a311186ddaf65765d94f78cec`、`ComposioHQ/awesome-claude-skills@be2a406907dbc61b73e6827ded415c96139d13a2`。正式入口继续按用户指定版本或当前原文读取，这些版本号仅用于追溯本轮核查。
