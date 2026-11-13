# 架构参考

寻找现成数据库结构、应用实现与架构案例。结合项目规模和约束比较相关结构与取舍；决策使用[架构与技术设计](../architecture.md)，实现细节使用[技术栈专项](../technology-stack.md)。

## DrawSQL Templates

<!-- resource: https://drawsql.app/templates -->
- [模板目录](https://drawsql.app/templates)：来自已有应用与开源项目的数据库关系图和可克隆结构，例如 [WordPress](https://drawsql.app/templates/wordpress)。
- 用具体结构研究实体与关系，复用前再核对相应版本的源码迁移或 schema 文件。公开与私有图、表数、克隆及 SQL 导出取决于选定功能和[套餐](https://drawsql.app/pricing)。

## CodebaseShow 与 RealWorld

<!-- resource: https://codebase.show/projects/realworld -->
- [实现目录](https://codebase.show/projects/realworld)，由 [RealWorld 仓库](https://github.com/realworld-apps/realworld)引用：同一应用及共用 API 规格的不同前后端实现。
- 选择相关技术栈，读取实际实现，比较模块组织、API 边界、认证与数据处理。目录站需要 JavaScript，源码仓库可作为另一入口。各实现的维护情况、许可证、依赖版本和测试结果分别评估。

## The Architecture of Open Source Applications

<!-- resource: https://aosabook.org/en/ -->
- [案例集](https://aosabook.org/en/)：应用作者说明真实系统的组件、协作、设计选择与经验。
- 按当前架构问题读取相关章节。在线章节可读，部分描述较早期系统；参考其依据与取舍，同时核对对当前技术栈和项目规模的适用性。
