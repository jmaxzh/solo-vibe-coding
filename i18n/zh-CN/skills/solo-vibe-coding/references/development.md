# 开发与质量

用于在现有项目中搭建本地环境与准备调试、实现变更、审查代码、排查故障、选择测试与验证结果。先按[质量指标与自动检查](quality-and-ci.md)确定并落实项目基线，已有设施优先沿用。结合实际技术栈、实现、日志和测试选择指导。

现成开源产品、Gin 示例与本地 Compose 组合见[开发参考](resources/development.md)。

| 当前问题 | 可选技能 |
| --- | --- |
| 建立质量标准、检查工具、CI 或本地自动检查 | [质量指标与自动检查](quality-and-ci.md) |
| 搭建本地环境、启动依赖服务、初始化数据与准备调试 | [本地环境与调试准备](#本地环境与调试准备)；容器化服务使用 docker-patterns |
| 实现明确的功能或修改、行为保持的重构 | UB Mode 主导工程纪律，Ponytail 辅助简化与复用 |
| 模拟用户完成任务，验收实际运行的实现 | [真实验收](#真实验收) |
| 探索 Web 用户旅程与复现问题 | dogfood（Vercel） |
| 探索 iOS/Android 原生应用用户旅程与复现问题 | dogfood（Callstack） |
| 检查实现是否过重、存在过度设计或可减少的代码 | ponytail-review |
| 检查项目规则与代码风格的遵守情况 | 项目指令、既有约定与格式化/lint 配置 |
| 错误、异常行为、性能或偶发故障 | debugging-strategies |
| 默认技术栈的实现、性能、安全、数据访问与运行 | [技术栈专项](technology-stack.md) |
| 常规测试难覆盖的高影响性质，或维护已有形式化检查 | [形式化验证](formal-verification.md) |
| 编解码、规范化、算法或数据结构在生成输入上的性质 | property-based-testing |
| 重构、优化、替换实现或迁移时，与可信参考实现比较行为 | property-based-testing 的差分测试指导 |
| JS/TS 的异步、Mock、组件与接口测试 | javascript-testing-patterns |
| Playwright 测试编写、关键用户路径与不稳定测试 | playwright-best-practices |
| 已有 Cypress 项目的端到端测试 | e2e-testing-patterns 的 Cypress 部分 |
| 使用 CLI 操作浏览器、检查页面与复现用户路径 | playwright-cli |
| 使用说明、API 文档、约束、注意事项与 ADR 的维护 | documentation-and-adrs |
| 生产部署、发布验证和回滚 | [生产部署与发布](deployment.md) |

需求或技术方案仍有关键不确定性时，按需引用 [需求与沟通](requirements.md) 或 [架构与技术设计](architecture.md)。文档读写遵循 [项目知识库规范](project-knowledge.md)。

## 真实验收

按技术方案完成实现后，依据已确认需求及方案中的场景进行首次真实验收。在实际运行的应用中，模拟目标用户从入口完成任务并获得结果。按产品形态选择适用的浏览器、桌面端、移动端或 CLI 工具，验证实际系统响应与结果。

沿用项目验收标准；需要确定标准时，使用[质量指标与自动检查](quality-and-ci.md#上游指导)中的 constraint-driven-development。

1. **准备验收环境**：沿用项目启动流程，准备必要服务与代表性数据，确认应用可操作。
2. **执行完整用户旅程**：覆盖本次需求范围内的关键路径、重要分支与异常情形。检查用户可见反馈和最终结果，按需核对状态变化、持久化与跨模块衔接；对照预期保留必要操作步骤、实际结果和证据。
3. **判定验收状态**：适用场景与项目必需检查通过后，验收通过。失败时修复并重跑受影响场景，按影响范围扩展验证。缺少环境、工具不可用或场景未执行时，报告验证缺口；关键缺口未补足时，验收未完成。

在本次需求范围内，使用下列指导开展用户视角探索与问题复现：

<!-- skill: vercel-labs/agent-browser@dogfood -->
- **dogfood（Vercel，Web）**：[原文](https://github.com/vercel-labs/agent-browser/blob/main/skill-data/dogfood/SKILL.md)。探索 Web 操作流程、边界与错误状态，核实可复现性，保留适用的截图、视频和操作步骤。读取同版本的问题分类参考与报告模板。执行上游 CLI 流程需要 agent-browser 与浏览器；适配宿主已有适用浏览器工具时，说明实际执行方式。

<!-- skill: callstack/agent-device@dogfood -->
- **dogfood（Callstack，iOS/Android）**：[原文](https://github.com/callstack/agent-device/blob/main/skills/dogfood/SKILL.md)。探索原生移动应用操作流程并收集运行证据。需要 agent-device 0.14.0+ 及目标设备或模拟器；按原文读取 `agent-device help dogfood`，取得匹配的操作流程。依赖缺失时报告验证缺口。

浏览器操作继续使用 playwright-cli 或宿主适用工具；持久 Playwright 回归测试使用[测试与验证](#测试与验证)中的 playwright-best-practices。

实现期间继续使用单元测试、集成测试与质量检查。首次验收通过后，进入下述审查重构循环。

### 验收后的审查重构循环

按 **非 bug 代码评审 → 行为保持的重构 → 针对改动复验 → 再次评审** 往复，范围限于本次变更及必要关联代码。

每完成一次评审计一轮，按以下方式循环：

- **评审**：使用 [ponytail-review 与项目规则、代码风格检查](#代码评审与调试)，检查实现必要性、重复、过度抽象、可读性及项目约定的遵守情况。发现以实际代码为依据，没有经核实的问题时评审通过。每次评审结束后，若评审通过，或累计评审轮数超过 3，则停止循环，不再开始下一次重构。
- **重构**：针对查实且收益明确的问题改进结构，保持已验收的用户行为、接口契约、错误处理和数据副作用，遵循下方实现与重构纪律。
- **复验**：每次重构后重跑受影响的用户场景和自动检查。未受影响的部分复用仍有效的首次验收结果，影响范围需要时再重做完整验收。复验失败时，修正或撤回对应重构并重新验证，再进入下一轮评审。

评审中发现的 bug 按缺陷修复处理，并重新验收受影响场景。报告评审轮数、停止原因、遗留发现及最终验收状态；达到轮次上限不代表评审或验收通过。

## 本地环境与调试准备

先读取项目的环境搭建说明、运行时约束、锁文件、配置示例与启动脚本，沿用已有原生或容器化流程。准备所需运行时与依赖，配置本地环境变量，启动实际需要的配套服务，执行适用的数据库迁移与开发数据初始化，再启动应用并验证服务连接和一条关键应用路径。保留已有本地数据，区分首次初始化与可重复执行的启动操作。

<!-- skill: affaan-m/ecc@docker-patterns -->
- **docker-patterns**：[原文](https://github.com/affaan-m/ecc/blob/main/skills/docker-patterns/SKILL.md)，[技能页](https://skills.sh/affaan-m/ecc/docker-patterns)。本地应用、数据库、缓存及其他配套服务的 Docker 与 Compose 指导，覆盖环境变量、初始化脚本、就绪检查、网络、持久数据卷、热更新和调试端口。需要容器化开发时读取原文，示例技术栈、版本、端口和命令按实际项目适配。镜像构建细节见[容器构建指导](technology-stack.md#容器构建)，生产操作见[生产部署与发布](deployment.md)。

按[项目知识库规范](project-knowledge.md)在项目已有使用文档中维护可重复执行的环境搭建、启动、停止和验证命令。如实报告启动与验证结果及缺少的前置条件。应用可运行后，使用下方调试与测试指导排查故障、验证变更。

## 实现与重构

<!-- skill: unclebob/ub-mode@ub-mode -->
- **UB Mode**：[原文](https://github.com/unclebob/ub-mode/blob/master/SKILL.md)。主要工程纪律：先使行为正确，再改善结构；以失败测试驱动最小实现，测试公开行为，重构前固定行为并在修改后验证。结合领域数据结构、入口校验、类型约束、幂等与共享状态管理组织代码。测试不可行时说明原因并使用有效的替代验证，不写自证测试。

<!-- skill: DietrichGebert/ponytail@ponytail -->
- **Ponytail**：[原文](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail/SKILL.md)。在完整满足需求和项目质量标准的前提下，选择最小完整实现和最短有效 diff。优先采用现有项目能力，其次标准库或平台能力，再考虑已安装依赖，最后编写新代码。检查受影响的调用方、测试、配置与导出，保留错误处理、安全和项目约定。

UB Mode 主导验证与工程纪律，Ponytail 专注复用和简化，不以短 diff 或小自测降低项目质量标准。明确的架构重构按已选方案调整结构，范围和行为由需求及验收条件界定。上游模式的作用范围服从当前任务与用户选择。

UB Mode 的 `crapper`、`dryer`、`mutator` 工具先核对是否真实可用；缺少时按[质量指标与自动检查](quality-and-ci.md)选择项目适用工具，分别检查复杂度与覆盖、重复和变异测试，不能宣称等价实现了上游指标。上游数字按项目质量标准明确采用范围与例外。操作记录用于任务反馈或研究档案，稳定约束才进入项目知识库；提交、推送、worktree 清理按用户授权与工作区规则执行，技能默认步骤不构成额外授权。

## 代码评审与调试

实施交付时，[首次真实验收](#真实验收)通过后再进行非 bug 代码评审，遵循其中的审查重构循环。对照需求、已确认方案、验收条件及适用的项目规则与代码风格，审查当前 diff 和关联代码。使用 ponytail-review 审查精简空间，覆盖需求外改动、增删行数与实现必要性。深度与任务规模匹配。只复用需求、代码和上下文未变部分的结论，补查新增或受影响部分。独立评审与排障请求直接使用对应指导。

<!-- skill: DietrichGebert/ponytail@ponytail-review -->
- **ponytail-review**：[原文](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-review/SKILL.md)。先读 diff 与关联代码，再按原文核实 Lean 精简发现。有经核实的精简机会时，定位问题、报告更小完整方案及有依据的预计可减少行数；无发现时简短报告。保留所需行为、正确性、安全与必要验证。审查只读，修复按任务授权执行；功能验收仍单独完成。

- **项目规则与代码风格**：读取适用的 `AGENTS.md`、项目文档、格式化/lint 配置与周边代码，检查明确要求和既有约定的遵守情况，复用适用的项目检查。对查实的偏离定位代码并给出规则或约定依据，区分项目要求与个人偏好；说明审查范围和未执行的检查。默认终端报告，GitHub 评论需用户授权。

<!-- skill: wshobson/agents@debugging-strategies -->
- **debugging-strategies**：[原文](https://github.com/wshobson/agents/blob/main/plugins/developer-essentials/skills/debugging-strategies/SKILL.md)。提供复现、收集证据、假设验证、差异比较、Git bisect、追踪、性能与内存排查方法。原版有四阶段框架，按故障证据选择相关方法；工具选择与高级技巧可读其 `references/tools-and-techniques.md`。依赖实际错误、日志、环境与变更信息，区分已经验证的根因和待验证推测。

## 测试与验证

<!-- skill: trailofbits/skills@property-based-testing -->
- **property-based-testing**：[原文](https://github.com/trailofbits/skills/blob/main/plugins/property-based-testing/skills/property-based-testing/SKILL.md)，[技能页](https://skills.sh/trailofbits/skills/property-based-testing)。编写、评审和分析属性测试与差分测试。按任务读取同版本的生成、评审、失败分析或库选择参考。行为具有适合检验的不变量时选择属性测试，有可信对照实现时选择差分测试；适用时结合生成输入使用。

  - **属性**：从需求、接口契约和领域规则提取往返转换、幂等与领域不变量，独立于实现逻辑表达。按契约生成输入，覆盖重要边界，并检查样例实际检验了目标行为、断言能够发现违反性质的情况。
  - **差分比较**：以可信旧实现、独立库或简单模型作为参考。在可比较条件下向两个实现提供相同输入，核对适用的返回值、错误和状态变化。依据契约明确允许的差异，调查不一致原因，不直接假定旧实现正确。
  - **失败处理**：保留重放信息，包括适用时的随机种子，以及最小反例。区分实现缺陷、错误性质、输入域问题与参考实现缺陷；将确认的缺陷固化为确定性回归测试。

  沿用项目已有测试框架和库，在项目运行预算内执行；新增依赖按项目要求与已有授权决定。这些方法与示例测试互补，提供抽样证据；[形式化验证](formal-verification.md)另有其方法与保证范围。

<!-- skill: wshobson/agents@javascript-testing-patterns -->
- **javascript-testing-patterns**：[原文](https://github.com/wshobson/agents/blob/main/plugins/javascript-typescript/skills/javascript-testing-patterns/SKILL.md)。JS/TS 的 Jest、Vitest、Testing Library、异步、Mock、Fixture、组件与接口测试模式。仅在相关技术栈下使用，示例中的框架配置和数据清理方式需要适配项目实际设施。

<!-- skill: currents-dev/playwright-best-practices-skill@playwright-best-practices -->
- **playwright-best-practices**：[原文](https://github.com/currents-dev/playwright-best-practices-skill/blob/main/playwright-best-practices/SKILL.md)，[技能页](https://skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices)。Playwright 测试的主要指导；按编写、调试、不稳定测试或基础设施问题读取对应引用，覆盖定位与等待、Fixture、认证、Mock、视觉回归及框架适配。组件/API 测试只有项目已选 Playwright 时才采用其对应部分，已有 Jest/Vitest 测试仍由 javascript-testing-patterns 指导；Go 测试见[技术栈专项](technology-stack.md#go-与-gin)。测试目标和覆盖基线沿用项目质量标准。

<!-- skill: wshobson/agents@e2e-testing-patterns -->
- **e2e-testing-patterns**：[原文](https://github.com/wshobson/agents/blob/main/plugins/developer-essentials/skills/e2e-testing-patterns/SKILL.md)。已有 Cypress 项目的指导入口，读取其 Cypress 模式与相关调试参考。按项目已有框架工作；Playwright 项目使用上方专用入口。

<!-- skill: microsoft/playwright-cli@playwright-cli -->
- **playwright-cli**：[原文](https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md)，[技能页](https://skills.sh/microsoft/playwright-cli/playwright-cli)。使用浏览器快照、元素引用、表单操作、截图和网络检查复现或验证页面行为。需要实际可用的 CLI 与浏览器；宿主已有适用浏览器工具时沿用其接口。持久测试的设计与实现由 playwright-best-practices 负责，交互操作本身不等于已建立回归测试。Web 浏览器验证不能代替 Tauri 的 Rust/IPC 或 React Native 原生端验证。

## 文档维护

<!-- skill: addyosmani/agent-skills@documentation-and-adrs -->
- **documentation-and-adrs**：[原文](https://github.com/addyosmani/agent-skills/blob/main/skills/documentation-and-adrs/SKILL.md)。维护 README、API 说明、已知限制、注意事项和决策依据，强调保留原因、取舍与适用边界。支持沿用现有 ADR 约定；所有持久文档按 [项目知识库规范](project-knowledge.md) 归位，与其他工程技能共同更新已有文档。

根据实际运行的检查报告结果。测试模式落实为项目中的测试代码；行为、接口或操作方法变化时同步相关文档。有复用价值的限制与注意事项写入对应主题，临时评审、排查和失败尝试按任务需要反馈或留档。
