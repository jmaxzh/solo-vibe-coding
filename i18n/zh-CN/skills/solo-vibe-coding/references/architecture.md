# 架构与技术设计

用于新功能设计、技术选择、方案比较，以及现有代码结构诊断。围绕功能需求与非功能约束选择指导，先落实[质量指标与自动检查](quality-and-ci.md)中的适用基线。

现成数据结构、应用实现与架构案例见[架构参考](resources/architecture.md)。

| 当前问题 | 使用入口 |
| --- | --- |
| 新功能设计、技术选择、方案比较、创建或评估 ADR | architecture |
| 现有代码难改、模块耦合、确定重构优先级 | improve-codebase-architecture |
| 实际实现和重构时的纪律与验证 | [开发与质量中的 UB Mode](development.md#实现与重构) |

业务概念和需求范围不明确时按需引用[需求与沟通](requirements.md)。架构说明、功能技术约束和 ADR 遵循[项目知识库规范](project-knowledge.md)。

比较并发、重试或故障恢复方案时，对影响较大、难以测试的性质考虑[形式化验证](formal-verification.md)。明确原子步骤、故障假设与一致性保证，区分设计模型的验证结果与实现遵循模型的证据。

## 默认技术栈

沿用用户或项目已明确的技术选择；缺少约定时，根据业务需求匹配下表。默认栈满足需求时直接采用，业务约束明确不适配时再比较替代方案，说明依据与代价。

| 场景 | 默认选择 |
| --- | --- |
| 桌面端 | Tauri + Rust，前端 React |
| 后端 | Go + Gin |
| 数据库 | MySQL |
| 官网、SEO、静态站 | Next.js + React |
| 功能站 | React |
| 移动端 | React Native；确认界面非常少且简单时使用原生 |

选型输出给出适用场景、技术选择及必要理由；认证、部署、后台任务等组件按实际业务需要补充。

选定技术后的实现、框架用法、数据访问、性能与运行指导见[技术栈专项](technology-stack.md)。专项指导沿用这里的技术选择，系统边界与选型取舍仍由本文负责。

## 可用技能

<!-- skill: anthropics/knowledge-work-plugins@architecture -->
- **architecture**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/architecture/SKILL.md)。围绕复杂度、成本、可扩展性、团队经验及约束比较方案，设计新组件、评估提案并形成 ADR。入口以决策框架为主；确需深入系统设计时，按原文读取同仓库的 `engineering/skills/system-design/SKILL.md`。输出沿用项目文档约定，连接器按实际可用能力使用。

<!-- skill: mattpocock/skills@improve-codebase-architecture -->
- **improve-codebase-architecture**：[原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md)。从用户指定范围或近期变更热点探索浅模块、耦合与测试困难，提出用较小接口隐藏更多实现复杂度的重构候选。先展示问题、收益与前后结构，再选择方向深入设计；诊断本身不等于授权实施重构。

Matt 架构诊断的关联指导按阶段读取，均取同仓库同版本：

- 诊断前读取 [codebase-design](https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/SKILL.md)，统一深模块、接口与可替换接缝的分析含义。该分析词汇用于解释设计，不替换项目已有业务术语。
- 报告需要时读取诊断目录中的 `HTML-REPORT.md`；原版将报告写入系统临时目录，报告展示依赖的 CDN 与浏览器能力以实际环境为准。
- 用户选定候选后读取 [grilling](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)；只有领域概念确需变化时再引用[现有 domain-modeling](requirements.md#可用技能)。需要比较接口方案时读取 `codebase-design` 的相关引用。

原版包含子代理探索与并行设计；按宿主能力和已有授权执行。无法委派时在当前上下文完成相同分析并说明执行范围，不将读取指导表述为已运行子代理。

## 文档协作

架构说明描述当前结构与约束，待实现方案标明状态；重要选择通过 ADR 保存背景、备选方案、取舍与后果。更新时延续项目约定，按需参考 [documentation-and-adrs](development.md#文档维护)，共同维护已有文档。
