# 马斯克式第一性原理：来源与接入评估

本记录描述来源接入版本；用户随后要求改为一句轻量提示，当前版本见[轻量提示变更记录](lightweight-update.md)，以下保留当时的判断与证据。

技术方案改为使用 LifeOS `FirstPrinciples` 的“拆解 → 挑战 → 重建”方法：把问题拆到有独立依据的基本事实，质疑继承的假设，再从这些事实建立方案。此前引用的 Cursor 结构重审技能已移出第一性原理入口；`thinking-first-principles` 也不再作为该入口的补充来源。

## 需求与判断依据

用户在最初要求“技术方案中加上第一性原理要求，使用 find skill 查找高星、高安装量技能”之后，明确所指是马斯克宣传的第一性原理。首次选择侧重了结构重审及采用信号，对方法本身的匹配判断不足。本轮按明确后的含义重新检索与接入；这一纠正不转化为正式包中的维护禁令或对话记录。

2026-11-18 使用 `npx skills find` 执行 `musk`、`elon musk`、`first principles` 三项查询，均以退出码 0 完成。安装量取本轮 CLI 近似累计值；LifeOS、Cursor 和 thinking-first-principles 的仓库星标复用本会话同日首次核查，两个新增候选的仓库状态本轮通过 GitHub API 核查。星标是整个仓库的数值，不是单项技能的效果证据。

| 候选 | 安装量／仓库星标 | 针对明确后需求的判断 |
| --- | --- | --- |
| [LifeOS FirstPrinciples](https://skills.sh/danielmiessler/lifeos/firstprinciples) | 213／19,925 | 入口明确标注 `Musk methodology`，以拆解、挑战、重建组织分析；本轮核读入口及三个同版本意图文件，采用为方法来源。安装量较低，不能称同时满足高星、高安装量。 |
| [elon-musk-perspective](https://skills.sh/alchaincyf/elon-musk-skill/elon-musk-perspective) | 约 4.6K／579 | 有直接匹配的第一性原理章节，但入口还要求角色扮演，并包含五步算法、其他心智模型和表达风格。核读相关入口章节后，判断整体调用范围超过技术方案的方法要求，未接入。 |
| [ClawFu first-principles](https://skills.sh/guia-matthieu/clawfu-skills/first-principles) | 402／150 | 内容直接涉及马斯克式拆解、基本事实与重建，入口可读；仓库已归档，且采用信号没有明显优势，未优先选择。 |
| [Cursor principle-redesign-from-first-principles](https://skills.sh/cursor/plugins/principle-redesign-from-first-principles) | 约 5.4K／17,055 | 可用于把新需求视为初始条件重新审视结构，但不完整覆盖基本事实拆解与约束挑战，不能承担本次主要方法入口。 |
| [thinking-first-principles](https://skills.sh/tjboudreaux/cc-thinking-skills/thinking-first-principles) | 836／1,753 | 已包含较吻合的基本事实推导与验证；方法并非无关。本次统一到明确采用 Musk methodology 且有完整三阶段指导的 LifeOS 来源，减少并列入口。 |

本轮没有找到在已核查候选中同时具有较高安装量、较高仓库星标且可直接承担这一单一方法入口的选项。选择 LifeOS 是任务适配取舍，不是安装量排名或已验证的效果优胜结论。

## 来源版本与适配

- LifeOS：`f6ab5e0228bfb356c82edbf52b69344dbd585486`；[入口](https://github.com/danielmiessler/lifeos/blob/f6ab5e0228bfb356c82edbf52b69344dbd585486/LifeOS/install/skills/FirstPrinciples/SKILL.md)、[Deconstruct](https://github.com/danielmiessler/lifeos/blob/f6ab5e0228bfb356c82edbf52b69344dbd585486/LifeOS/install/skills/FirstPrinciples/Intents/Deconstruct.md)、[Challenge](https://github.com/danielmiessler/lifeos/blob/f6ab5e0228bfb356c82edbf52b69344dbd585486/LifeOS/install/skills/FirstPrinciples/Intents/Challenge.md)、[Reconstruct](https://github.com/danielmiessler/lifeos/blob/f6ab5e0228bfb356c82edbf52b69344dbd585486/LifeOS/install/skills/FirstPrinciples/Intents/Reconstruct.md)均已核读。
- 马斯克主题技能：`44bb5ec2c6d10377174b6763153b188d05f1d04f`；[原文](https://github.com/alchaincyf/elon-musk-skill/blob/44bb5ec2c6d10377174b6763153b188d05f1d04f/SKILL.md)。本轮核读与选择有关的角色扮演、第一性原理、五步算法及表达风格章节，未执行工作流。
- ClawFu：`4108f5c010ccaa8b5707fa05ca1d888ae167e548`；[原文](https://github.com/guia-matthieu/clawfu-skills/blob/4108f5c010ccaa8b5707fa05ca1d888ae167e548/skills/strategy/first-principles/SKILL.md)已核读。仓库最近推送 2026-10-01，已归档；马斯克主题仓库最近推送 2026-11-15，未归档。
- Cursor 和 thinking-first-principles 的固定版本与核查见[首次调研记录](change-evaluation.md)，本轮复用已读原文。ClawFu 首次猜测路径返回 404，随后通过仓库树找到确切原文。

适配沿用本项目已确立的规则：上游模板、备选数量和分析详略服从任务规模及既有方案结构；LifeOS 的定制目录不成为本项目的新知识库位置。分析可以揭示某项选型属于可调整选择，当前交付仍遵守已确认范围、预算、期限、合规和项目选型；建议变更须说明影响并服从任务授权。理论资源下限与实际总成本分开表述，项目数字须有相应依据。本轮仅取用文本方法，没有安装技能或运行其工程工作流。

## 实际差异、收益与成本

相对本轮开始时的版本，仅重写两语言 `references/technical-planning.md` 的第一性原理段落和总体方案依据条目；原三步流程、领域三层输出、默认栈、成熟实现复用、任务授权及验收要求保持。

| 维度 | 修改前 | 修改后 |
| --- | --- | --- |
| 方法含义 | 事实／假设区分、最简设计与验证，两个按条件入口 | 显式按拆解、挑战、重建组织，主要来源明确采用 Musk methodology。 |
| 推导起点 | 以目标及约束支撑选择，结构重审是主要新增来源之一 | 先识别基本事实和必要功能，挑战组件／约束的必要性，再从基本事实重建并比较现状。 |
| 使用范围 | 两个条件触发来源 | 一个方法入口，深入时按需读取三个同版本意图文件；简单任务仍可简述。 |

英文正式页净增 26 个按空白切分的词，中文净减 44 个字符，均含 Markdown 与 URL。正文长度变化不是实际阅读或执行耗时；LifeOS 入口和三个意图文件比此前自包含来源更长，存在取文与阅读成本。按需读取控制深入分析范围，不宣称总体成本不变。

实际差异直接改善了与用户明确语义的匹配度及推导步骤的可操作性；两种语言对应、既有工程边界保留。没有真实产品任务前后对照，尚不能证明实际决策质量、交付时间或总体成本构成帕累托改进。

## 实现验证

- 中英文 `quick_validate.py` 均输出 `Skill is valid!`；`git diff --check` 通过。
- 两语言文件树、各 20 份 Markdown 的标题层级及远程 URL 多重集对应；324 项本地链接及锚点有效。
- 与本轮修改前快照比较，两语言必选三步流程逐字保持；已核读本轮两份正式页的实际 diff。
- 首次调研与首次独立审查保留为历史记录并标记适用版本，正式包没有依赖档案。

新上下文的[独立只读审查](musk-method-review.md)先形成判断、再核对本自评，确认方法匹配明确后的需求，未发现阻断缺陷；三个只读情景支持方法与边界可理解。以上证据不构成真实任务效果或总体成本的验收，也不支持整体帕累托改进已经验证的结论。
