# 架构与技术设计

用于方案、选型、评估与结构诊断。基于已知需求及非功能约束，先落实[质量基线](quality-and-ci.md)；现成结构、实现与案例见[架构参考](resources/architecture.md)。

生成技术方案必须遵循[流程与输出结构](technical-planning.md)；独立调研、选型与评估按下列入口选用。

## 选择指导

- **search-first**：[原文](https://github.com/affaan-m/ecc/blob/main/skills/search-first/SKILL.md)。调查项目内实现与业界成熟方案；按[通用复用要求](../SKILL.md#结合项目条件应用指导)评估，说明覆盖与剩余工作，建议采用、扩展、组合或自建。方案产出依据和建议；安装、实现依任务授权。

- **architecture**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/architecture/SKILL.md)。选型与提案评估入口。比较复杂度、成本、扩展性、经验、交付与维护负担，说明备选、推荐、理由及后果。ADR 遵循项目约定，连接器按实际可用能力使用。

- **system-design**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/system-design/SKILL.md)。将选定方向展开为技术方案。结合现有实现说明变更，按需覆盖组件、数据流、API／数据模型、缓存、队列、错误／重试、容量、可靠性及监控；用适用图示说明假设、取舍与增长后复查条件，详略随规模调整。

代码难改、模块耦合或需确定重构优先级时，用下方 improve-codebase-architecture。实现／重构纪律与验证用 [UB Mode](development.md#实现与重构)。

沿用已确认需求与验收；关键需求或范围缺口按[需求与沟通](requirements.md#必选指导)补足。文档遵循[项目知识库规范](project-knowledge.md)。

并发、重试或恢复涉及高影响、难以测试的性质时，考虑[形式化验证](formal-verification.md)。明确原子步骤、故障假设与一致性保证，区分模型结果与实现符合模型的证据。

## 默认技术栈

沿用用户／项目选型；无约定时按业务匹配下表。默认栈适配时直接采用，业务约束明确不适配时再比较替代，说明依据与代价。

| 场景 | 默认选择 |
| --- | --- |
| 桌面端 | Tauri + Rust，前端 React |
| 后端 | Go + Gin |
| 数据库 | MySQL |
| 官网、SEO、静态站 | Next.js + React |
| 功能站 | React |
| 移动端 | React Native；确认界面非常少且简单时使用原生 |

说明场景、选择及理由，按需补充认证、部署、后台任务等。实现、框架、数据访问、性能与运行用[技术栈专项](technology-stack.md)；专项沿用选型，系统边界与取舍由本文负责。

## 代码结构诊断

- **improve-codebase-architecture**：[原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/improve-codebase-architecture/SKILL.md)。从指定范围或近期热点查找浅模块、耦合与测试困难，提出小接口隐藏更多复杂度的重构候选。先展示问题、收益及前后结构，再选方向深入；诊断不授权实施。

关联指导按阶段读取，均取同仓库同版本：

- 诊断前读 [codebase-design](https://github.com/mattpocock/skills/blob/main/skills/engineering/codebase-design/SKILL.md)，统一深模块、接口、可替换接缝的分析含义，保留项目业务术语。
- 报告按需读诊断目录的 `HTML-REPORT.md`。原版写入系统临时目录；CDN／浏览器支持以实际环境为准。
- 用户选定候选后，承接需求共识，用 [grill-with-docs](requirements.md#必选指导)细化；比较接口时读取 codebase-design 的相关引用。

原版子代理探索与并行设计依宿主能力和授权执行；无法委派时在当前上下文分析并说明范围，读取指导不等于运行子代理。

## 文档协作

架构说明记录当前结构与约束，待实现方案标注状态。重要选择以 ADR 保存背景、备选、取舍及后果；延续项目约定，按需用 [documentation-and-adrs](development.md#文档维护)共同更新已有文档。
