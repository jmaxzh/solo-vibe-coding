# 形式化验证候选与接入建议

建议为 Solo Vibe Coding 增加按风险选择的形式化验证指导：以开发与质量为操作入口，以质量指标与自动检查承接运行标准，需求和架构只补充性质定义与建模时机。优先考虑 Cursor 的创建、维护两项指导；性质测试独立作为日常测试补充，加密协议验证按专门任务发现。本轮完成候选调研与接入分析，未修改中英文 Skill 的行为。

## 目标与证据范围

- 请求：使用 Find Skill 查找安装量较高、质量较好的形式化验证 Skill，判断本项目适合加入哪些要求。“高清”按“高质量”理解。
- 本地分析基线：`c6a9c0b31c53a291b9e7ae785078c62a077076c1`，工作区开始时干净。检查了两种语言的主入口及需求、架构、开发、质量、技术栈和知识库相关内容。
- 2026-11-13 检索，记录时间为 10:55 UTC（北京时间 18:55）。按 [Find Skills 原文](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md)先查看 [skills.sh 榜单](https://skills.sh/)，再使用 Skills CLI `1.8.1` 搜索。
- 已执行八项查询：`formal verification`、`formal methods`、`model checking`、`tla`、`tlaplus`、`dafny`、`kani`、`property based testing`，均正常退出。四项主要候选核读原始 SKILL.md，并读取影响本次判断的依赖或说明。
- 安装量采用本次 CLI 返回的近似累计值；网页及搜索索引的缓存值有差异，不混用。安装量与仓库星数只表示采用信号，不代表独立用户数、成功率或已验证质量；本轮结果也不构成全站穷尽排名。

## 主要候选与选择依据

| 候选与来源 | 本次 CLI 安装量 | 内容质量与任务适配判断 | 接入建议 |
| --- | --- | --- | --- |
| [create-formal-verification-skill](https://skills.sh/cursor/plugins/create-formal-verification-skill)，`cursor/plugins` 的 pstack 子包 | 约 1.5K | 从代码中的高影响性质选题；按问题选择模型检查或代码验证；要求模型对应实现、检查能发现人为引入的错误、报告边界及可复跑命令 | 最适合作为建立验证的按需指导；需要适配项目范围、宿主和知识库约定 |
| [maintain-formal-verification-skill](https://skills.sh/cursor/plugins/maintain-formal-verification-skill)，同一子包 | 约 1.3K | 跟踪覆盖代码与同步版本；区分模型过时、预期行为改变及实现缺陷；复核变更后的检查仍有效 | 与创建入口配套，只在已有验证资产且相关实现或性质发生变化时使用 |
| [mermaid-to-proverif](https://skills.sh/trailofbits/skills/mermaid-to-proverif)，`trailofbits/skills` | 约 4.3K | 将加密协议时序图转为 ProVerif 模型，明确保密性、认证与可达性；适用边界清楚，附含重放问题的握手示例 | 专项候选。主要交付模型，仍需实际运行验证器；不适合泛化为普通权限或业务状态机指导 |
| [property-based-testing](https://skills.sh/trailofbits/skills/property-based-testing)，同一仓库 | 约 7.9K | 覆盖性质选择、输入生成、无效断言检查和反例分析；支持 JS/TS、Rust、Go 等本项目常用语言 | 日常测试补充。生成输入测试不等同形式化证明，应保留独立分类和证据表述 |

GitHub 公共 API 本次返回：`cursor/plugins` 16,163 stars，最近推送 2026-11-13；`trailofbits/skills` 8,168 stars，最近推送 2026-11-12，均未归档。数字属于整个仓库。Cursor 中两项入口文件最近修改日期分别为 2026-10-27、2026-10-19；Trail of Bits 两项入口分别为 2026-10-14、2026-08-17。这些记录支持仍可维护的判断，不证明某次推送改善了相应 Skill。[Cursor 仓库](https://github.com/cursor/plugins)、[Trail of Bits 仓库](https://github.com/trailofbits/skills)。

质量判断限于原文的完整性、边界与适配性，尚无本项目真实任务效果证据。[性质测试插件说明](https://github.com/trailofbits/skills/blob/149d7b21f4067765b82e67029730b42d228ef4b4/plugins/property-based-testing/README.md)公开了评估方法及不足，明确现有对照尚不能证明能写出更好的性质测试。本轮没有运行这些收费评估，也没有获得其余候选的独立效果对照。

### 依赖与使用负担

- Cursor 两项原文均设置 `disable-model-invocation: true`，面向显式使用的项目级建立或维护任务。若接入本项目，应按当前任务选择指导，避免将其扩展为每次改动都重新搜索全仓验证目标。
- 创建入口的 TLA+ 路线引用同版本 [statechart](https://github.com/cursor/plugins/blob/6e359ce0aba9e927914d8a940510aa2ef66a8f23/pstack/skills/statechart/SKILL.md)。该依赖需要能运行 TypeScript 的环境，首次通过 mise 获取 TLC 和 Java；图像渲染另有 Pele 依赖。本轮已读 statechart 原文，未获取脚本或执行工具。正式使用需核对所选路线的实际依赖，不把引用原文等同执行完成。
- ProVerif 候选以已有加密协议 Mermaid 图为输入；没有图时引用 crypto-protocol-diagram，模型与查询还需验证器执行。仅使用成熟认证库的普通业务项目，通常不需要进入该路线。
- 性质测试优先沿用项目已有库；其 [库选择指导](https://github.com/trailofbits/skills/blob/149d7b21f4067765b82e67029730b42d228ef4b4/plugins/property-based-testing/skills/property-based-testing/references/libraries.md)覆盖 fast-check、proptest 和 rapid 等。原文将首次增加测试依赖交由用户决定；本次仅评估内容，没有引入依赖。
- 本项目已有按原文远程读取的机制；发现候选不以安装或注册 Skill 为前提。后续是否生成产品项目本地的验证 Skill，按实际任务与现有约定决定，避免与已有检查命令和文档形成第二套同义入口。

### 其他发现

本次 CLI 还返回 `workersio/skills@kani-proof` 约 137 安装，`jonmumm/skills@tlaplus` 16，`nwave-ai/nwave@nw-formal-verification-tlaplus` 13，以及 `tlaplus/agentskills@tlaplus-from-source` 5。它们是后续 Rust 或 TLA+ 专门问题的发现线索；未核读其原文，不作质量推荐。安装量小也不足以判断质量差。

## 本项目适合增加的位置

| 位置 | 已有能力 | 建议增量与边界 |
| --- | --- | --- |
| [开发与质量：测试与验证](../../../../i18n/zh-CN/skills/solo-vibe-coding/references/development.md#测试与验证) | 示例测试、浏览器验证、实现纪律与审查 | 作为主要操作入口，集中维护创建／维护的上游链接、适用条件与验证结果要求；性质测试单列。其他页面回指此处，避免重复维护候选说明 |
| [质量指标与自动检查：指标选择](../../../../i18n/zh-CN/skills/solo-vibe-coding/references/quality-and-ci.md#指标选择) | 按风险和规模选择检查；统一命令、判定与运行时机 | 增加适用时的关键性质验证维度，记录工具版本、假设与界限、覆盖范围、超时／未知结果、耗时分层；沿用既有本地／CI 入口与 Runner 约定 |
| [需求与沟通](../../../../i18n/zh-CN/skills/solo-vibe-coding/references/requirements.md) | 行为、验收条件、业务术语与假设 | 对需加强验证的行为，明确前置条件、允许的状态转换和必须保持的性质；规格仍使用业务语言，常规需求无需数学化模板 |
| [架构与技术设计](../../../../i18n/zh-CN/skills/solo-vibe-coding/references/architecture.md) | 技术方案、系统边界、并发相关设计与取舍 | 当高影响问题来自交错执行、重试或状态组合时，考虑小范围模型检查；记录原子性、故障和一致性假设。设计模型的结论与实现是否符合模型分别判断 |
| [项目知识库规范](../../../../i18n/zh-CN/skills/solo-vibe-coding/references/project-knowledge.md) | spec、架构、测试说明、质量标准已有归属 | 沿用现有位置：性质进入 spec，运行命令进入质量／测试说明，模型与 harness 作为版本化源码维护；本阶段无需新增通用文档体系 |

最小接入可集中修改开发与质量、质量指标两页，再为需求与架构各补一个短指引；两种语言同步。现有 SKILL.md 已能路由到这些主题，技术栈也已有 Go 并发、Rust 与 MySQL 专项入口，初次接入可直接沿用。是否独立拆出专项参考页，按后续内容规模决定。

### 建议的行为要求草案

以下为待采用建议，不是本轮已生效的 Skill 规则：

> 当前任务涉及出错影响较大、常规测试难覆盖的并发、重试、状态转换或算法性质时，评估形式化验证的收益与建立、运行、维护成本。适用时围绕一条明确性质选择有效且可维护的范围；按问题选择模型检查或代码验证，性质测试作为独立的测试方法。沿用已有验证资产、命令和项目知识约定。
>
> 交付验证时说明性质、假设与界限、覆盖的设计或代码、工具和版本、复跑命令及实际结果。检查模型与实现的对应关系，在隔离范围确认检查能发现相关错误；相关代码、环境假设或需求变化后复核并重跑。区分模型问题、实现缺陷与尚不能判定的结果，按所用方法和范围表述保证。

这里的新增价值是表达并维护验证性质及其适用范围。[现有质量指导](../../../../skills/solo-vibe-coding/references/quality-and-ci.md#establishment-sequence-and-delivery)已要求有效性检查与工具错误非零退出，不需要再增加一套重复门禁；纯文档、普通页面与常规 CRUD 仍按实际风险选择其最小适用基线。

## 采用前的验证建议

后续若修改 Skill，除了中英文结构、来源链接和实际 diff 检查，还应观察至少以下不同类型的任务。它们是待执行方案，本轮没有宣称通过：

| 任务 | 需要观察的行为 |
| --- | --- |
| 修改落地页文案或普通表单 | 使用现有适用检查，保持低风险任务的阅读与运行负担 |
| 定位租约过期与重试导致的并发执行 | 明确业务性质，模型中的步骤与真实原子性对应，反例能解释为可发生的代码执行顺序 |
| 修改已有验证覆盖的函数或同一状态的新写入路径 | 识别覆盖变化，更新对应关系并复跑，旧模型通过不直接作为新代码的保证 |
| 为编解码或数值计算补测试 | 选择可检查的性质，测试真实代码，按生成测试结果报告 |
| 验证器超时、依赖缺失或模型包含不可能的步骤 | 报告执行或建模缺口，区分未知、模型问题与产品缺陷 |

任务观察应比较相同起点、需求、工具和预算下的结果、缺陷发现与额外耗时。静态检查只能证明文档接入完整，不能证明用户价值或整体成本没有退化。形式化检查本身也不代替真实环境测试和产品验收。

## 来源版本与可选安装方式

本轮固定版本：Cursor `6e359ce0aba9e927914d8a940510aa2ef66a8f23`；Trail of Bits `149d7b21f4067765b82e67029730b42d228ef4b4`。核读入口：

- [创建验证指导原文](https://github.com/cursor/plugins/blob/6e359ce0aba9e927914d8a940510aa2ef66a8f23/pstack/skills/create-formal-verification-skill/SKILL.md)。
- [维护验证指导原文](https://github.com/cursor/plugins/blob/6e359ce0aba9e927914d8a940510aa2ef66a8f23/pstack/skills/maintain-formal-verification-skill/SKILL.md)。
- [协议模型生成原文](https://github.com/trailofbits/skills/blob/149d7b21f4067765b82e67029730b42d228ef4b4/plugins/trailmark/skills/mermaid-to-proverif/SKILL.md)及其[握手模型示例](https://github.com/trailofbits/skills/blob/149d7b21f4067765b82e67029730b42d228ef4b4/plugins/trailmark/skills/mermaid-to-proverif/examples/simple-handshake/sample-output.pv)。示例已获取，未运行。
- [性质测试原文](https://github.com/trailofbits/skills/blob/149d7b21f4067765b82e67029730b42d228ef4b4/plugins/property-based-testing/skills/property-based-testing/SKILL.md)。

用户需要安装时，可分别使用以下命令；它们安装所选来源的当时版本，本轮未执行：

```sh
npx skills add cursor/plugins --skill create-formal-verification-skill
npx skills add cursor/plugins --skill maintain-formal-verification-skill
npx skills add trailofbits/skills --skill mermaid-to-proverif
npx skills add trailofbits/skills --skill property-based-testing
```

## 研究阶段交付评估

本次写入范围仅为本研究档案及其导航链接。相对于修改前，增加了可追溯的候选比较、具体接入位置和待验证要求；本次工作未改写正式语言包、官网内容、依赖、检查或发布配置。评估只覆盖这两份文档，不包含工作区的其他并行改动。收益证据是已执行的发现过程、固定版本原文及与当前 Skill 的逐项对照，属于选型与方案证据，不属于生成结果改善的实验证据。

档案增加了维护阅读量，但没有进入正式 Skill 的运行依赖，不增加使用者的默认读取、工具执行或验证要求。是否将建议采用为正式行为，仍需依据具体 diff 和任务观察评估收益与成本。

本地检查：两份修改文档共 26 个本地链接及锚点有效，实际 diff 与新增文件空白检查无错误；两种语言正式包相对分析基线无差异。

独立只读复核使用新上下文，先读取不含自评的正文与差异并形成结论，再核对上述自评。复核确认候选数据、固定版本来源、能力边界和接入位置有对应依据，未发现研究交付范围内的阻断问题，自评与独立判断一致。结论仅覆盖研究报告与导航。

真实任务效果、总体成本及完整运行路径仍未实测；本轮未执行验证器、性质测试、上游效果评估或产品项目实测，不能据本轮研究将正式能力或提效标为验收通过。

## 后续接入

用户确认后，中英文技能包已增加独立形式化验证参考页，由需求、架构、开发和质量指导按任务引用；性质测试另列。后续变更及其证据见[接入评估](formal-verification-update.md)和[只读情景走查](formal-verification-walkthrough.md)，上述研究阶段的未接入状态仅描述当时范围。
