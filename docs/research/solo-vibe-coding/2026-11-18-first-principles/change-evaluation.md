# 技术方案的第一性原理要求：调研与变更评估

本记录描述首次接入版本。用户随后明确所指为马斯克式第一性原理，当前选择与规则已按[后续评估](musk-method-update.md)调整；以下保留当时的判断与证据。

技术方案已增加三项要求：区分事实与假设、从目标和约束推导最简充分设计、为关键假设定义验证。沿用调研、评估、设计三步流程及领域内的数据结构／逻辑算法／控制算法结构；补充指导仅在缺乏依据的约束限制解法或新需求需要重审既有结构时读取。

## 请求与检索依据

- 用户原始请求：“本skill 的技术方案中加上‘第一性原理’的相关要求，使用find skill 查找仓库高星，高安装量的skill”。
- 开始时工作区干净，修改基线为 `1e041146ae84ed2b8a27dbfa5fea0151c0bd9c2c`。遵循仓库的双语对应、金字塔结构、职责范围及过程档案分离要求。
- 2026-11-18 按 [find-skills 原文](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md)先查看 [skills.sh 榜单](https://skills.sh/)，再用 Skills CLI `1.9.0` 执行 `first principles`、`first-principles`、`firstprinciples`、`critical thinking` 四项检索，均以退出码 0 完成。
- 安装量采用本次 CLI 的近似累计值；星标为本次 GitHub 公共 API 返回的整个仓库数值。两者是采用信号，不代表该技能的独立用户数、效果或质量；本轮不是全站穷尽排名。

## 候选与采用判断

| 候选 | 本次安装量／仓库星标 | 原文核读与判断 |
| --- | --- | --- |
| [Cursor：principle-redesign-from-first-principles](https://skills.sh/cursor/plugins/principle-redesign-from-first-principles) | 约 5.4K／17,055 | 本次相关候选中同时具有较强采用信号。把新需求视为初始设计条件，检查受影响引用，整体考虑、渐进交付；适合作为重审已有结构的专项指导，不把它扩大为每项需求都重写系统。 |
| [thinking-first-principles](https://skills.sh/tjboudreaux/cc-thinking-skills/thinking-first-principles) | 836／1,753 | 较聚焦地覆盖约束分类、独立证据、最简充分重构与证伪检查，并限制对成熟适用方案的过度推导。安装量低于 find-skills 偏好的 1K，不表述为高安装量；作为内容适配的补充。 |
| [LifeOS：FirstPrinciples](https://skills.sh/danielmiessler/lifeos/firstprinciples) | 213／19,925 | 仓库星标高，具体技能采用量较低。入口包含拆解、挑战、重建及 LifeOS 定制／意图文件；其挑战预算、平台与政策等可变约束的做法，需要额外适配本项目已确认选择的边界。本轮仅核读入口，未读全意图文件，不将其接入运行指导。 |

三个仓库均未归档，最近推送分别为 2026-11-18、2026-08-07、2026-11-05；推送日期不等同技能文件的维护日期。另有科学批判思考等较高安装量搜索结果，未作为第一性原理专项推荐，也未据搜索摘要判断质量。

核读版本及来源：

- [Cursor 原文](https://github.com/cursor/plugins/blob/35a90942a7f02e1ebbc2443643179815f2147954/pstack/skills/principle-redesign-from-first-principles/SKILL.md)，提交 `35a90942a7f02e1ebbc2443643179815f2147954`。
- [thinking-first-principles 原文](https://github.com/tjboudreaux/cc-thinking-skills/blob/7b8fece345dfaa11773be7152ccd194589cb5437/skills/thinking-first-principles/SKILL.md)，提交 `7b8fece345dfaa11773be7152ccd194589cb5437`。
- [LifeOS 入口原文](https://github.com/danielmiessler/lifeos/blob/f6ab5e0228bfb356c82edbf52b69344dbd585486/LifeOS/install/skills/FirstPrinciples/SKILL.md)，提交 `f6ab5e0228bfb356c82edbf52b69344dbd585486`。

Cursor 全仓树读取不完整，随后直接获取确切路径；公共 API 后续触发限流，通过 `git ls-remote` 取得 main 提交并成功核读固定版本。已接入两项均为自包含文本指导，没有必须运行的脚本或配套引用。原文均设 `disable-model-invocation: true`，本项目按既有远程读取约定应用其正文，不改变宿主注册及调用设置。本轮未安装上游技能。

## 实际差异与成本

| 位置 | 修改前 | 修改后与用途 |
| --- | --- | --- |
| 两语言 `references/technical-planning.md` | 要求调研、评估、设计，按领域与三层结构输出；未显式要求约束分类与证据推导 | 新增三项第一性原理要求及两项有条件的上游指导；总体推荐需概括事实、约束和关键假设，使选型依据可检查。 |
| 两语言 `references/architecture.md` | 为完整方案提供流程入口，支持独立选型、评估 | 增加到第一性原理要求的链接，独立评估技术选择与设计时使用同一要求。 |

正式包四份文件共 24 行新增、4 行删除。英文净增 253 个按空白切分的词，中文净增 852 个字符，均包含 Markdown 标记与 URL 等文本；这不是 token 或阅读时间测量。没有增加默认安装、模型调用、固定备选数量、每次必跑实验或新的输出阶段；两个专项远程读取只在文中条件成立时使用。新增内容带来有限的阅读与双语维护成本，不能称总体使用成本不变。

能力改善的直接证据是实际差异：此前隐含的事实／假设区分、方案推导与关键假设验证现在可以在方案中逐项检查。保留用户／项目选型、默认栈、成熟方案复用、任务授权和验收要求，避免把分析扩展为自行更换技术栈或重写。三步流程、领域三层结构、既有来源、主入口与其余正式包文件均保留；档案不进入运行引用。

这支持文档能力和适用边界的改善；没有真实产品任务的前后对照，无法证明决策质量、交付时间或总体成本获得帕累托改进。交付仅评价文档接入与审查发现的退化，不将未测量的用户效果判为通过。

## 验证范围

- 中英文 `quick_validate.py` 均输出 `Skill is valid!`。
- 两语言文件树、各 20 份 Markdown 的标题层级与远程 URL 多重集对应；324 项本地链接及锚点有效。
- 实际 `git diff --check` 通过，核对正式包仅修改上述四份文件。人工核读新增语义及默认选择、复用、授权、输出结构和验收相关上下文。
- 这些是实现完整性检查，不是产品效果或工具执行证据。未执行真实产品方案、对照实验、上游实施工作流或耗时测量。

新上下文的[独立只读评审](independent-review.md)先形成判断、再核对本自评，未发现阻断问题或必须修正的正式包退化；普通 CSV 导出、缺乏依据的扩容及新增离线编辑三项只读情景判断支持触发条件与边界可理解。该结论限于文档接入，不代表真实任务效果或总体成本的帕累托改进已经验证。
