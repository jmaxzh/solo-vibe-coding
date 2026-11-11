# 开发与质量

用于在现有项目中实现变更、审查代码、排查故障、选择测试与验证结果。结合实际技术栈、实现、日志和测试选择指导，已有工程设施优先沿用。

| 当前问题 | 可选技能 |
| --- | --- |
| 实现明确的功能或修改 | 根据需求、设计与项目代码完成，按需搭配下列专业能力 |
| 检查文件、diff 或 PR 的正确性、安全、性能和可维护性 | code-review |
| 错误、异常行为、性能或偶发故障 | debugging-strategies |
| 判断测试层级、关键路径与覆盖缺口 | testing-strategy |
| JS/TS 的异步、Mock、组件与接口测试 | javascript-testing-patterns |
| 浏览器关键用户路径与不稳定测试 | e2e-testing-patterns |
| 使用说明、API 文档、约束、注意事项与 ADR 的维护 | documentation-and-adrs |

需求或技术方案仍有关键不确定性时，按需引用 [需求与沟通](requirements.md) 或 [架构与技术设计](architecture.md)。文档读写遵循 [根技能的知识库规范](../SKILL.md#项目知识库规范)。

## 代码评审与调试

<!-- skill: anthropics/knowledge-work-plugins@code-review -->
- **code-review**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/code-review/SKILL.md)。审查代码的正确性、安全、性能、可维护性和测试，给出问题位置、影响与建议。支持文件或 diff；PR 和 CI 信息需要真实访问能力。原版有报告结构，通常作为本次评审反馈交付，值得长期保留的约束再写入对应项目文档。

<!-- skill: wshobson/agents@debugging-strategies -->
- **debugging-strategies**：[原文](https://github.com/wshobson/agents/blob/main/plugins/developer-essentials/skills/debugging-strategies/SKILL.md)。提供复现、收集证据、假设验证、差异比较、Git bisect、追踪、性能与内存排查方法。原版有四阶段框架，按故障证据选择相关方法；工具选择与高级技巧可读其 `references/tools-and-techniques.md`。依赖实际错误、日志、环境与变更信息，区分已经验证的根因和待验证推测。

## 测试与验证

<!-- skill: anthropics/knowledge-work-plugins@testing-strategy -->
- **testing-strategy**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/testing-strategy/SKILL.md)。从关键路径、风险、错误与边界条件选择单元、集成、契约、端到端等测试层级，识别覆盖缺口。偏策略与范围判断，实际测试结合项目框架、数据和运行方式实现。

<!-- skill: wshobson/agents@javascript-testing-patterns -->
- **javascript-testing-patterns**：[原文](https://github.com/wshobson/agents/blob/main/plugins/javascript-typescript/skills/javascript-testing-patterns/SKILL.md)。JS/TS 的 Jest、Vitest、Testing Library、异步、Mock、Fixture、组件与接口测试模式。仅在相关技术栈下使用，示例中的框架配置和数据清理方式需要适配项目实际设施。

<!-- skill: wshobson/agents@e2e-testing-patterns -->
- **e2e-testing-patterns**：[原文](https://github.com/wshobson/agents/blob/main/plugins/developer-essentials/skills/e2e-testing-patterns/SKILL.md)。Playwright、Cypress 的浏览器测试，覆盖关键用户路径、页面对象、定位与等待、追踪和不稳定测试排查。适合 Web 端到端验证，按需读取原版引用中的详细模式。

## 文档维护

<!-- skill: addyosmani/agent-skills@documentation-and-adrs -->
- **documentation-and-adrs**：[原文](https://github.com/addyosmani/agent-skills/blob/main/skills/documentation-and-adrs/SKILL.md)。维护 README、API 说明、已知限制、注意事项和决策依据，强调保留原因、取舍与适用边界。支持沿用现有 ADR 约定；所有持久文档按 [项目知识库规范](../SKILL.md#项目知识库规范) 归位，与其他工程技能共同更新已有文档。

根据实际运行的检查报告结果。测试模式落实为项目中的测试代码；行为、接口或操作方法变化时同步相关文档。有复用价值的限制与注意事项写入对应主题，临时评审、排查和失败尝试按任务需要反馈或留档。
