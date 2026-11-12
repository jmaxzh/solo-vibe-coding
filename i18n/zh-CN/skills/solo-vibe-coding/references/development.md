# 开发与质量

用于在现有项目中搭建本地环境与准备调试、实现变更、审查代码、排查故障、选择测试与验证结果。先按[质量指标与自动检查](quality-and-ci.md)确定并落实项目基线，已有设施优先沿用。结合实际技术栈、实现、日志和测试选择指导。

| 当前问题 | 可选技能 |
| --- | --- |
| 建立质量标准、检查工具、CI 或本地自动检查 | [质量指标与自动检查](quality-and-ci.md) |
| 搭建本地环境、启动依赖服务、初始化数据与准备调试 | [本地环境与调试准备](#本地环境与调试准备)；容器化服务使用 docker-patterns |
| 实现明确的功能或修改、行为保持的重构 | UB Mode 主导工程纪律，Ponytail 辅助简化与复用 |
| 评审变更中的明确 bug 与项目规则违规 | claude-plugins-official 的 code-review；原版面向 GitHub PR |
| 检查实现是否过重、存在过度设计或可减少的代码 | ponytail-review |
| 错误、异常行为、性能或偶发故障 | debugging-strategies |
| 默认技术栈的实现、性能、安全、数据访问与运行 | [技术栈专项](technology-stack.md) |
| JS/TS 的异步、Mock、组件与接口测试 | javascript-testing-patterns |
| Playwright 测试编写、关键用户路径与不稳定测试 | playwright-best-practices |
| 已有 Cypress 项目的端到端测试 | e2e-testing-patterns 的 Cypress 部分 |
| 使用 CLI 操作浏览器、检查页面与复现用户路径 | playwright-cli |
| 使用说明、API 文档、约束、注意事项与 ADR 的维护 | documentation-and-adrs |
| 生产部署、发布验证和回滚 | [生产部署与发布](deployment.md) |

需求或技术方案仍有关键不确定性时，按需引用 [需求与沟通](requirements.md) 或 [架构与技术设计](architecture.md)。文档读写遵循 [项目知识库规范](project-knowledge.md)。

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

实现变更交付前，使用 ponytail-review 对照需求、已确认方案和验收条件审查最终 diff，覆盖需求外改动、增删行数与实现必要性。出现膨胀迹象时提前审查，深度与任务规模匹配。只复用需求、代码和上下文未变部分的结论，补查新增或受影响部分。

<!-- skill: DietrichGebert/ponytail@ponytail-review -->
- **ponytail-review**：[原文](https://github.com/DietrichGebert/ponytail/blob/main/skills/ponytail-review/SKILL.md)。先读 diff 与关联代码，再按原文核实 Lean 精简发现并定位。报告更小完整方案及有依据的预计可减少行数，保留所需行为、正确性、安全与必要验证。审查只读，修复按任务授权执行；功能验收仍单独完成。

<!-- plugin: anthropics/claude-plugins-official@code-review -->
- **code-review 插件**：[原文](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-review/commands/code-review.md)。通过独立代理与问题复核检查明确 bug 和适用的项目规则违规，按原文过滤一般风格、维护性与覆盖率建议；这些过滤仅适用于本项，日常质量标准仍由工程纪律与自动检查承担。默认终端报告，GitHub 评论需用户授权。

已安装插件且具备其 GitHub PR 上下文、Claude Code 代理与模型选择、GitHub 工具时使用；否则依据实际宿主与项目规则，读取文件和 diff，按相同高置信标准审查，说明范围与未执行的检查。远程读取不等于安装插件或运行完整插件流程。

<!-- skill: wshobson/agents@debugging-strategies -->
- **debugging-strategies**：[原文](https://github.com/wshobson/agents/blob/main/plugins/developer-essentials/skills/debugging-strategies/SKILL.md)。提供复现、收集证据、假设验证、差异比较、Git bisect、追踪、性能与内存排查方法。原版有四阶段框架，按故障证据选择相关方法；工具选择与高级技巧可读其 `references/tools-and-techniques.md`。依赖实际错误、日志、环境与变更信息，区分已经验证的根因和待验证推测。

## 测试与验证

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
