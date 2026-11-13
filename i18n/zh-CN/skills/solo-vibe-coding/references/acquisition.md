# 获客与转化

用于已有产品的价值表达、营销文案、内容传播、公开开发、官网与落地页及转化分析。根据真实功能、进展与证据表达；定性建议和已经验证的效果分别说明。

现成文案、邮件、广告和产品流程案例见[获客参考](resources/acquisition.md)。

| 当前问题 | 可选技能 |
| --- | --- |
| 产品是谁用、解决什么、如何表达价值 | product-marketing、copywriting、copy-editing |
| 传播方法、交易内容与表达心理 | marketing-ideas、offers、marketing-psychology |
| 社交帖、开发日志、内容组合与公开开发 | social、content-strategy；重要发布使用 launch |
| 公众号草稿与 X 填稿、媒体上传 | baoyu-post-to-wechat、baoyu-post-to-x |
| 小工具作为传播入口 | free-tools |
| 官网或落地页的结构与行动入口 | landing-page |
| 页面转化、埋点归因、营销定时任务 | cro、analytics、marketing-loops |

页面视觉与制作、图片、视频和模板直接见 [视觉与交互](visual-interaction.md)。理解用户问题或归纳访谈反馈见 [需求与沟通](requirements.md)。

## 产品表达与文案

以下技能来自 [marketingskills](https://github.com/coreyhaines31/marketingskills)。复用已知产品事实与品牌语气，补充影响当前表达的缺失信息。

<!-- skill: coreyhaines31/marketingskills@product-marketing -->
- **product-marketing**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/product-marketing/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/product-marketing)。整理产品定义、受众、场景、差异、顾虑、替代方案、品牌语气和证据。可从已有代码、文案或明确想法整理；复用现有上下文，需要可维护文档时可采用上游的 `.agents/product-marketing.md` 格式。

<!-- skill: coreyhaines31/marketingskills@copywriting -->
- **copywriting**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/copywriting)。用于页面目的、首屏、卖点、段落、CTA 和顾虑表达。依据真实功能和用户指定受众写作；没有评价、客户数或收益数据时，用实际演示与说明支撑。

<!-- skill: coreyhaines31/marketingskills@copy-editing -->
- **copy-editing**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/copy-editing/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/copy-editing)。针对既有文案改善清晰度、语气、利益表达、具体性与证据，保留所需的内容与个人表达。

<!-- skill: coreyhaines31/marketingskills@marketing-psychology -->
- **marketing-psychology**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-psychology/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/marketing-psychology)。解释决策、价值认知与页面表达；避免把心理框架当作未经验证的效果结论。

<!-- skill: coreyhaines31/marketingskills@marketing-ideas -->
- **marketing-ideas**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-ideas/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/marketing-ideas)。营销方法库，按当前产品阶段、传播目标、受众和资源筛选适合的方法。

<!-- skill: coreyhaines31/marketingskills@offers -->
- **offers**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/offers/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/offers)。用于交付内容、权益、承诺和交易结构的具体问题。

## 内容传播与公开开发

公开开发以 social 负责故事、帖子、平台适配与内容复用，content-strategy 负责主题、选题优先级和内容规划；产品上线、重要功能及阶段成果发布时按需使用 launch。根据实际原型、视觉实验、实现难点或使用证据选择内容；起草、排期与实际发布分别交付。中文平台结合具体语境适配。

<!-- skill: coreyhaines31/marketingskills@social -->
- **social**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/social/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/social)。主题、故事、开头、平台适配、内容复用与日程建议，覆盖 X、LinkedIn、Instagram、TikTok、Facebook 等；中文平台按具体语境适配。
- 其 [ship-post](https://github.com/coreyhaines31/marketingskills/blob/main/skills/social/references/ship-post.md) 从提交和 diff 中找真实变化，向开发者确认用户之前的困难和现在的改变，再起草 X 与指定 subreddit 的不同版本。没有用户报告时不编造痛点、反馈、增长、营收或“快了几倍”。无可见新功能时如实描述或建议本次不发，不能把依赖升级虚构成用户成果。
- `ship-post.md` 是 social 的子参考，按需直接远程读取。区分起草、排期与实际发布，按用户要求交付。

<!-- skill: coreyhaines31/marketingskills@content-strategy -->
- **content-strategy**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/content-strategy/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/content-strategy)。内容支柱、话题、可搜索/可分享素材、购买阶段和资源分配，适用于产品内容与 SEO 规划。

<!-- skill: coreyhaines31/marketingskills@launch -->
- **launch**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/launch/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/launch)。产品或功能发布、早期访问、候补名单和 Product Hunt 等，涵盖自有、租用、借用渠道与多次发布的组织方式。

<!-- skill: coreyhaines31/marketingskills@free-tools -->
- **free-tools**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/free-tools/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/free-tools)。Engineering as Marketing：评估检查器、转换器、计算器、生成器等是否提供独立价值、服务同一受众并自然引向主产品。结合维护与传播投入判断，效果由实际线索和试用验证。

### 渠道选择

按本次目标渠道选择内容指导与制作能力。同一产品进展可复用事实与素材，再按各渠道的受众、语言和形式改编。 封面、配图、海报、图卡及长短视频的能力组合见[按交付场景组合能力](visual-interaction.md#按交付场景组合能力)；仅制作素材时可直接进入该处。

| 渠道 | 内容指导 | 制作与发布 |
| --- | --- | --- |
| 产品官网 | content-strategy 规划文章与开发记录；copywriting 处理页面价值表达与行动入口 | 页面制作见[界面与审美](visual-interaction.md#界面与审美) |
| 微信公众号 | content-strategy 规划选题，结合中文长文的叙事与阅读语境 | baoyu-post-to-wechat 排版与写入草稿；配图见[图片与静态素材](visual-interaction.md#图片与静态素材) |
| 小红书 | social 指导故事与内容复用，结合平台语境改编 | [baoyu-xhs-images](visual-interaction.md#图片与静态素材) 制作系列图卡；账号发布需要另外具备相应能力 |
| X | social；从代码进展起草时按需读取 ship-post | baoyu-post-to-x 填稿与上传媒体 |
| YouTube | content-strategy 规划主题与系列 | [video 与视频制作工具](visual-interaction.md#视频与媒体制作) 指导产品演示、讲解和长短视频复用；上传需要相应账号与工具 |

### 公众号与 X 操作

以下技能来自 [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills)。内容起草完成后，实际需要写入平台时再读取；执行需要对应账号、工具和运行环境。

<!-- skill: jimliu/baoyu-skills@baoyu-post-to-wechat -->
- **baoyu-post-to-wechat**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-post-to-wechat/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-post-to-wechat)。支持 Markdown、HTML 与纯文本文章排版及公众号草稿写入，也支持多图片贴图。API 方式需要公众号凭据与 IP 白名单配置；浏览器方式需要 Chrome 与已登录会话，脚本需要 Bun 或原文支持的运行方式。交付时说明草稿是否已写入，实际群发或公开发布按用户授权执行。

<!-- skill: jimliu/baoyu-skills@baoyu-post-to-x -->
- **baoyu-post-to-x**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-post-to-x/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-post-to-x)。通过真实 Chrome 填入文字、图片、视频或长文章；浏览器控制方式按用户要求和当前能力选择，脚本方式需要 Bun 或原文支持的运行方式。需要 X 登录，长文章需要相应账号权益。填稿、上传和实际发布分别报告，发布操作按用户授权执行。

## 官网与落地页

官网可有多个表达入口，落地页围绕明确目的组织。结构与文案在此选择，视觉设计与实现按需引用 [界面与审美](visual-interaction.md#界面与审美)；已有 Stitch 设计及其工具指导见 [Stitch](visual-interaction.md#stitch-界面制作)。

<!-- skill: mengto/skills@landing-page -->
- **landing-page**：[原文](https://github.com/mengto/skills/blob/main/agent-skills/web-design/landing-page/SKILL.md)，[技能页](https://skills.sh/mengto/skills/landing-page)。关注页面目的、受众、核心价值、首屏、信息次序、视觉证据与 CTA，可根据表达需求选择经典、叙事、极简或比较结构。

## 转化、追踪与营销任务

使用真实页面、流量、事件和执行条件；效果判断关注样本、观察窗口和归因口径。埋点代码的实现与验证可搭配 [开发与质量](development.md)。

<!-- skill: coreyhaines31/marketingskills@cro -->
- **cro**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/cro/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/cro)。分析价值表达、标题、CTA、层级、证据、顾虑和流程摩擦。定性建议与已测量的转化提升分别表述。

<!-- skill: coreyhaines31/marketingskills@analytics -->
- **analytics**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/analytics/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/analytics)。追踪计划、事件、UTM、GA4/GTM/PostHog/Mixpanel 等及数据质量；分析时关注样本、观察窗口与归因口径。

<!-- skill: coreyhaines31/marketingskills@marketing-loops -->
- **marketing-loops**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-loops/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/marketing-loops)。定时或事件触发的营销任务指导，需要对应的执行环境。

## 名称兼容

`product-marketing-context` → `product-marketing`；`social-content` → `social`；`free-tool-strategy` → `free-tools`；`launch-strategy` → `launch`；`page-cro` → `cro`；`analytics-tracking` → `analytics`。以所选上游版本的 frontmatter 确认真实入口。
