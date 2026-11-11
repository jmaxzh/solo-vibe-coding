# 架构与技术设计

用于系统结构、技术选型、容量与扩展、模块和数据边界、架构模式及决策评估。围绕功能需求与非功能约束比较方案，按问题选择相关参考。

| 当前问题 | 可选技能 |
| --- | --- |
| 系统设计、存储、缓存、消息队列、API、容量与扩展 | senior-architect |
| 比较具体选项、评估提案、创建或评估 ADR | architecture |
| 已考虑 Clean Architecture、六边形架构或 DDD 的边界与实现 | architecture-patterns |

业务概念和需求范围不明确时按需引用 [需求与沟通](requirements.md)。架构说明、功能技术约束和 ADR 遵循 [根技能的知识库规范](../SKILL.md#项目知识库规范)，实现与验证见 [开发与质量](development.md)。

## 可用技能

<!-- skill: alirezarezvani/claude-skills@senior-architect -->
- **senior-architect**：[原文](https://github.com/alirezarezvani/claude-skills/blob/main/engineering-team/skills/senior-architect/SKILL.md)。提供跨语言系统设计、单体与微服务、数据存储、缓存、消息队列、API、容量与扩展参考。按需读取 `references/architecture_patterns.md`、`references/system_design_workflows.md`、`references/tech_decision_guide.md`。原版含分步指南和选型偏好，具体选择仍需结合项目条件；Python 辅助脚本仅在任务确需执行时准备依赖，读取参考不要求运行脚本。

<!-- skill: anthropics/knowledge-work-plugins@architecture -->
- **architecture**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/architecture/SKILL.md)。围绕复杂度、成本、可扩展性、团队经验及约束比较方案，创建或评估 ADR。适合具体决策与提案评估；原版提供 ADR 模板，最终记录沿用项目约定，连接器按实际可用能力使用。

<!-- skill: wshobson/agents@architecture-patterns -->
- **architecture-patterns**：[原文](https://github.com/wshobson/agents/blob/main/plugins/backend-development/skills/architecture-patterns/SKILL.md)。提供 Clean Architecture、六边形架构与 DDD 的边界、依赖方向、用例、端口和适配器示例。模式有明确设计约束，适合已经考虑这些方向的复杂业务；采用前判断收益与复杂度，示例语言不决定项目语言。

## 文档协作

架构说明描述当前结构与约束，待实现方案标明状态；重要选择通过 ADR 保存背景、备选方案、取舍与后果。更新时延续项目约定，按需参考 [documentation-and-adrs](development.md#文档维护)，避免不同架构技能各建一份同主题记录。
