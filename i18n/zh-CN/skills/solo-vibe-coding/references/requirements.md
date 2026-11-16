# 需求与沟通

用于既有产品方向内的问题讨论、方案探索、业务概念澄清、MVP 切分、功能范围和验收条件。根据已有上下文补足影响当前任务的信息，区分已确认内容、待决问题与假设。

现成 PRD 与用户故事地图模板见[需求参考](resources/requirements.md)。

## 必选指导

<!-- skill: mattpocock/skills@grill-with-docs -->
- **grill-with-docs**：[原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)，[技能页](https://skills.sh/mattpocock/skills/grill-with-docs)。需求确认必须执行。读取并执行原文及其必需依赖，均取同一上游仓库和版本，复用已读原文。

执行时复用已有上下文与已确认结论，澄清本次范围内尚未明确的决策，经用户确认达成共识后再推进实现。范围变化时复核受影响的决策。需求、术语与决策按 [项目知识库规范](project-knowledge.md) 维护；涉及技术可行性与系统约束时引用 [架构与技术设计](architecture.md)。

对于影响较大、常规测试难覆盖的行为，在功能 spec 中用业务术语明确相关前置条件、允许的状态转换和必须保持的不变量，为[形式化验证](formal-verification.md)提供具体目标，例如同一支付事件最多产生一条记账记录。

## 按需补充

按当前任务选用以下指导，承接已有讨论与文档；整理中发现新的缺口时，补充到当前需求澄清中。

| 当前问题 | 可选技能 |
| --- | --- |
| 梳理复杂用户旅程或切分 MVP，区分首版必需与后置能力 | user-story-mapping |
| 将功能整理为目标、范围、行为与验收条件 | write-spec |

<!-- skill: anthropics/knowledge-work-plugins@write-spec -->
- **write-spec**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/write-spec/SKILL.md)。将功能想法整理为问题、目标、范围、用户行为、优先级、验收条件与成功指标。原版提供 PRD 结构和分类要求；面向产品需求，涉及接口、数据契约、错误与兼容性时，结合实现与架构参考补足必要技术内容。

### 用户旅程与 MVP 切分

<!-- skill: deanpeters/product-manager-skills@user-story-mapping -->
- **user-story-mapping**：[原文](https://github.com/deanpeters/product-manager-skills/blob/main/skills/user-story-mapping/SKILL.md)，[技能页](https://skills.sh/deanpeters/product-manager-skills/user-story-mapping)。将目标用户的任务分解为活动、步骤与任务，再沿完整路径划分版本范围。用于梳理复杂用户旅程，或为新产品、较大功能确定 MVP 范围；需要结构或示例时读取同目录的 `template.md` 和 `examples/sample.md`，关联的用户画像与 JTBD 技能仅在已有上下文存在相关缺口时补充。

切分 MVP 时，从已知用户、目标与使用场景出发，选择让用户从开始到获得结果、完成一次有价值任务所需的最少能力，包含必要依赖与失败处理。明确首版必需、后置能力及划分理由，为完整路径定义可观察的验收条件；保留范围遵守项目质量标准。映射深度及上游的活动、任务数量按实际流程调整，简单流程可用简短清单或表格表达。确认的范围与验收条件补充到对应 spec，需要时使用 write-spec。

## 文档协作

沿用已有功能 spec 和术语表；确认的需求补充到相应主题，未确认构想明确标注。需要专业文档维护指导时直接读取 [开发与质量中的 documentation-and-adrs](development.md#文档维护)。产品目标和技术约束可以共用一份 spec，按内容需要组织章节。
