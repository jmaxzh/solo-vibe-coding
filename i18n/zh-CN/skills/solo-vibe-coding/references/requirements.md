# 需求与沟通

用于既有产品方向内的问题讨论、用户反馈理解、方案探索、业务概念澄清、MVP 切分、功能范围和验收条件。根据已有上下文补足影响当前任务的信息，区分已确认内容、待决问题与假设。

| 当前问题 | 可选技能 |
| --- | --- |
| 分析访谈、反馈或公开需求信号 | customer-research |
| 探索问题、比较解法、检验假设 | product-brainstorming |
| 围绕完整用户路径切分 MVP，区分首版必需与后置能力 | user-story-mapping |
| 将功能整理为目标、范围、行为与验收条件 | write-spec |
| 术语冲突、业务概念与关系不清 | domain-modeling |

需求确认用于明确共识和剩余不确定性，讨论方式由当前任务决定。需求与术语按 [根技能的知识库规范](../SKILL.md#项目知识库规范) 维护；涉及技术可行性与系统约束时引用 [架构与技术设计](architecture.md)。

## 可用技能

<!-- skill: coreyhaines31/marketingskills@customer-research -->
- **customer-research**：[原文](https://github.com/coreyhaines31/marketingskills/blob/main/skills/customer-research/SKILL.md)，[技能页](https://skills.sh/coreyhaines31/marketingskills/customer-research)。支持访谈与反馈分析、公开评论和社区资料、访谈问卷。已有客户资料和公开需求资料适用不同的研究方式。

<!-- skill: anthropics/knowledge-work-plugins@write-spec -->
- **write-spec**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/write-spec/SKILL.md)。将功能想法整理为问题、目标、范围、用户行为、优先级、验收条件与成功指标。原版提供 PRD 结构和分类要求；面向产品需求，涉及接口、数据契约、错误与兼容性时，结合实现与架构参考补足必要技术内容。

<!-- skill: anthropics/knowledge-work-plugins@product-brainstorming -->
- **product-brainstorming**：[原文](https://github.com/anthropics/knowledge-work-plugins/blob/main/product-management/skills/product-brainstorming/SKILL.md)。在既有产品方向内探索问题、生成解法、挑战假设。提供第一性原理、JTBD、机会树、SCAMPER 等思考工具；原版有发散与收敛的会话结构及方案数量要求。按当前探索需要选择方法，确认的结论再进入功能 spec。

<!-- skill: mattpocock/skills@domain-modeling -->
- **domain-modeling**：[原文](https://github.com/mattpocock/skills/blob/main/skills/engineering/domain-modeling/SKILL.md)。澄清术语、业务概念与关系，用具体场景和现有代码检验理解。原版会主动追问含糊或矛盾的概念并即时更新术语表；适合确需调整领域模型的任务。按项目约定维护词汇与必要 ADR，单纯复用已有术语无需启动领域建模讨论。

## MVP 切分

<!-- skill: deanpeters/product-manager-skills@user-story-mapping -->
- **user-story-mapping**：[原文](https://github.com/deanpeters/product-manager-skills/blob/main/skills/user-story-mapping/SKILL.md)，[技能页](https://skills.sh/deanpeters/product-manager-skills/user-story-mapping)。将目标用户的任务分解为活动、步骤与任务，再沿完整路径划出首版范围。用于新产品或较大功能需要确定 MVP 范围时；需要结构或示例时读取同目录的 `template.md` 和 `examples/sample.md`，关联的用户画像与 JTBD 技能仅在已有上下文存在相关缺口时补充。

从已知用户、目标与使用场景出发，选择让用户从开始到获得结果、完成一次有价值任务所需的最少能力，包含必要依赖与失败处理。明确首版必需、后置能力及划分理由，为完整路径定义可观察的验收条件；保留范围遵守项目质量标准。映射深度及上游的活动、任务数量按实际流程调整，简单流程可用简短清单或表格表达。确认的范围与验收条件补充到对应 spec，需要时使用 write-spec。

## 文档协作

沿用已有功能 spec 和术语表；确认的需求补充到相应主题，未确认构想明确标注。需要专业文档维护指导时直接读取 [开发与质量中的 documentation-and-adrs](development.md#文档维护)。产品目标和技术约束可以共用一份 spec，按内容需要组织章节。
