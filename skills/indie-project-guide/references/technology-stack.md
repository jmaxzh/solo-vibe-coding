# 技术栈专项

用于技术已经明确后的实现、框架用法、性能、安全、数据访问与运行。默认选择见[架构与技术设计](architecture.md#默认技术栈)，工程纪律与验证见[开发与质量](development.md)，质量标准与检查入口见[质量指标与自动检查](quality-and-ci.md)。按当前问题读取对应专项及其必要引用。

## 职责与适配

- 用户要求、项目现有选择、质量标准和知识库约定共同确定任务边界；专项补充具体技术方法。上游的框架、ORM、日志库、托管商、目录、覆盖率和固定操作步骤按这些约定适配，技术示例不构成迁移或增加依赖的理由。
- 先核对依赖清单、锁文件和运行版本。涉及 API、缓存、权限、构建或平台差异时，结合目标版本官方文档与真实验证采用示例；同一任务的范畴交叉通过引用组合，重合部分由下表指定入口负责。
- 上游审查建议用于当前实现范围；正式代码评审使用既有[代码评审入口](development.md#代码评审与调试)。模型、子代理、CLI、服务与工具依赖按宿主能力和任务授权使用，缺少时说明实际执行范围。

| 当前问题 | 主要入口 |
| --- | --- |
| React Web 的加载、数据瀑布、包体积和渲染性能 | vercel-react-best-practices |
| React 组件接口、组合与状态边界 | vercel-composition-patterns |
| Next.js App Router、RSC、路由、数据与缓存 | nextjs-app-router-patterns；性能规则按需引用 React 入口 |
| Web 页面 LCP、INP、CLS 的测量与定位 | core-web-vitals |
| Tauri 配置、IPC、权限、打包与更新 | tauri-v2 |
| Rust 所有权、错误、类型与语言实践 | rust-best-practices；Tokio 专项用 rust-async-patterns |
| Go 实现、测试、并发、性能、安全、数据访问、可观测性 | Go 与 Gin 中对应专项 |
| Go GitHub Actions | [质量指标与自动检查中的 Go CI](quality-and-ci.md#上游指导) |
| MySQL 表、索引、SQL、锁、迁移与运维 | mysql；Go 调用侧用 golang-database |
| React Native 实现、列表、导航与交互 | vercel-react-native-skills |
| React Native 启动、内存、原生线程或持续掉帧 | react-native-best-practices |
| React Native 版本与原生工程升级 | upgrading-react-native |
| 容器镜像、构建阶段与运行镜像 | multi-stage-dockerfile |

视觉方向、组件动效和无障碍见[视觉与交互](visual-interaction.md)；Web 测试及浏览器操作见[开发与质量](development.md#测试与验证)。

## React 与 Next.js

<!-- skill: vercel-labs/agent-skills@vercel-react-best-practices -->
- **vercel-react-best-practices**：[原文](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md)，[技能页](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices)。React Web 与 Next.js 的性能规则，按数据瀑布、包体积、服务端、数据获取及渲染问题选择 `rules/` 文件。React Native 使用下方移动端入口；Tauri 的 React 前端仅应用适用的客户端规则。

<!-- skill: vercel-labs/agent-skills@vercel-composition-patterns -->
- **vercel-composition-patterns**：[原文](https://github.com/vercel-labs/agent-skills/blob/main/skills/composition-patterns/SKILL.md)，[技能页](https://skills.sh/vercel-labs/agent-skills/vercel-composition-patterns)。处理布尔 props 膨胀、复合组件、Provider、状态提升和可复用组件接口；只负责组件层面的组合。跨模块结构由[架构指导](architecture.md)负责，React 19 API 按项目版本使用。

<!-- skill: wshobson/agents@nextjs-app-router-patterns -->
- **nextjs-app-router-patterns**：[原文](https://github.com/wshobson/agents/blob/main/plugins/frontend-mobile-development/skills/nextjs-app-router-patterns/SKILL.md)，[技能页](https://skills.sh/wshobson/agents/nextjs-app-router-patterns)。Next.js App Router 的 RSC、流式渲染、并行/拦截路由、Server Actions、Route Handlers、元数据和数据缓存；详细实现按需读 `references/details.md`。针对现有 Next.js 版本核对异步参数、缓存默认值和失效 API；Pages Router 项目沿用已有路由。Go + Gin 已承担的业务 API 保持既有归属，Next.js 示例不改变服务边界。

<!-- skill: addyosmani/web-quality-skills@core-web-vitals -->
- **core-web-vitals**：[原文](https://github.com/addyosmani/web-quality-skills/blob/main/skills/core-web-vitals/SKILL.md)，[技能页](https://skills.sh/addyosmani/web-quality-skills/core-web-vitals)。通过真实用户数据与实验室追踪定位 LCP、INP、CLS；测量先读取同仓库的 `skills/performance/references/MEASUREMENT.md`。它负责指标与测量证据，React 入口负责相关代码模式，[动效指导](visual-interaction.md#动效与交互)负责具体动画实现。仅有源码时给出待验证原因，修复后区分实验室复测与需积累访问量的真实用户指标。

## Tauri 与 Rust

<!-- skill: nodnarbnitram/claude-code-extensions@tauri-v2 -->
- **tauri-v2**：[原文](https://github.com/nodnarbnitram/claude-code-extensions/blob/main/plugins/cce-tauri/skills/tauri-v2/SKILL.md)，[技能页](https://skills.sh/nodnarbnitram/claude-code-extensions/tauri-v2)。Tauri v2 的配置、命令注册、`invoke`/事件/Channel、共享状态、capabilities、插件、打包、签名与更新；按问题读取同目录 `references/`。仅用于 v2，权限范围、IPC 类型和平台支持结合[官方文档](https://v2.tauri.app/)核对；锁与参数类型按实际并发和生命周期选择。前端用 React 指导，Rust 逻辑用下方语言指导；更新与分发只在对应任务中使用。

<!-- skill: apollographql/skills@rust-best-practices -->
- **rust-best-practices**：[原文](https://github.com/apollographql/skills/blob/main/skills/rust-best-practices/SKILL.md)，[技能页](https://skills.sh/apollographql/skills/rust-best-practices)。按问题读取所有权与借用、Clippy、性能、错误、测试、泛型、类型状态或文档章节。测试组织、断言数量、lint 严格度和依赖选择沿用项目标准；示例中的复制、移动与迭代器用法按类型语义判断并编译验证。

<!-- skill: wshobson/agents@rust-async-patterns -->
- **rust-async-patterns**：[原文](https://github.com/wshobson/agents/blob/main/plugins/systems-programming/skills/rust-async-patterns/SKILL.md)，[技能页](https://skills.sh/wshobson/agents/rust-async-patterns)。Tokio 的任务、通道、流、取消与异步错误；详细模式见 `references/details.md`。仅在 Rust 异步问题需要时追加，Tauri 中沿用现有运行时与命令模型。

## Go 与 Gin

以下专项来自 [samber/cc-skills-golang](https://github.com/samber/cc-skills-golang)。按问题读取单项；关联引用只为当前缺口追加。Gin 的路由、中间件、绑定与响应 API 结合项目版本和[官方文档](https://gin-gonic.com/docs/)使用，Go 专项负责其语言与运行基础。

<!-- skill: samber/cc-skills-golang@golang-code-style -->
- **golang-code-style**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-code-style/SKILL.md)。Go 声明、控制流、可读性与注释；服从现有格式和 lint 配置，工程纪律沿用 UB Mode 与 Ponytail。

<!-- skill: samber/cc-skills-golang@golang-error-handling -->
- **golang-error-handling**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-error-handling/SKILL.md)。错误包装、判定、传播与处理边界；业务错误对外映射沿用接口契约，日志关联见可观测性入口。

<!-- skill: samber/cc-skills-golang@golang-testing -->
- **golang-testing**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-testing/SKILL.md)。表驱动测试、子测试、Fixture、Mock、集成隔离、Fuzz、竞态和 goroutine 泄漏；补充 Go 实现方法，测试目标与投入由工程纪律和质量标准决定。已有测试命名、build tags 与测试框架优先沿用，`gotests` 等工具按需使用。

<!-- skill: samber/cc-skills-golang@golang-concurrency -->
- **golang-concurrency**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-concurrency/SKILL.md)。goroutine 生命周期、channel 所有权、同步、worker pool、`errgroup` 与 `singleflight`；并发正确性由本项负责，取消和超时契约按需引用下一项。

<!-- skill: samber/cc-skills-golang@golang-context -->
- **golang-context**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-context/SKILL.md)。跨 API 边界的 context 传播、取消、超时、deadline 与请求值；用于需要设计或排查这些契约的任务。

<!-- skill: samber/cc-skills-golang@golang-performance -->
- **golang-performance**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-performance/SKILL.md)。按已测量瓶颈选择分配、CPU、内存布局、GC、池化、缓存和热点优化；测量方法需要时读同仓库 `skills/golang-benchmark/SKILL.md`。故障复现与根因验证沿用[调试指导](development.md#代码评审与调试)，比较基准时使用可比环境并避免资源竞争。

<!-- skill: samber/cc-skills-golang@golang-security -->
- **golang-security**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-security/SKILL.md)。当前 Go 变更涉及输入、认证、文件、网络、加密或密钥时，检查对应注入、SSRF、路径、Cookie、日志隐私等风险；安全审计按任务范围使用，扫描器接入由[Go CI](quality-and-ci.md#上游指导)负责。

<!-- skill: samber/cc-skills-golang@golang-database -->
- **golang-database**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-database/SKILL.md)。Go 调用侧的参数化查询、扫描与 NULL、资源关闭、事务、连接池、批处理和 context。沿用已有 ORM 或驱动；MySQL 表、索引、查询计划与迁移 SQL 由下方 mysql 入口负责，示例占位符按实际驱动适配。

<!-- skill: samber/cc-skills-golang@golang-observability -->
- **golang-observability**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-observability/SKILL.md)。日志、指标、链路、profiling、告警与仪表盘，按当前运行问题读取相应 `references/`。沿用已有日志库与监控系统，根据运行风险和成本选择信号；营销事件、漏斗和归因由[analytics](acquisition.md#转化追踪与营销任务)负责，业务事件定义共用同一来源。

Go 流水线只在[质量指标与自动检查](quality-and-ci.md#上游指导)维护；它执行既定标准，以上专项提供实现及解释方法。

## MySQL

<!-- skill: planetscale/database-skills@mysql -->
- **mysql**：[原文](https://github.com/planetscale/database-skills/blob/main/skills/mysql/SKILL.md)，[技能页](https://skills.sh/planetscale/database-skills/mysql)。MySQL/InnoDB 的表设计、索引、查询计划、事务、锁、复制、连接与迁移；按问题读取其引用，结合数据规模、读写形态和 `EXPLAIN` 等证据验证。托管方式、字符集/排序规则、主键、时间类型和数据模型沿用项目需求与兼容性约束，上游默认推荐用于比较选项。Go 的调用和资源管理见 golang-database。

## React Native

<!-- skill: vercel-labs/agent-skills@vercel-react-native-skills -->
- **vercel-react-native-skills**：[原文](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-native-skills/SKILL.md)，[技能页](https://skills.sh/vercel-labs/agent-skills/vercel-react-native-skills)。移动端主要实现入口：列表、动画、导航、图片、状态、渲染和原生依赖；按需读取 `rules/`。Expo、FlashList、图片库、动画库和导航器按现有项目适配，React Web 规则仅在独立 Web 代码确有需要时引用。

<!-- skill: callstackincubator/agent-skills@react-native-best-practices -->
- **react-native-best-practices**：[原文](https://github.com/callstackincubator/agent-skills/blob/main/skills/react-native-best-practices/SKILL.md)，[技能页](https://skills.sh/callstackincubator/agent-skills/react-native-best-practices)。性能诊断专项：已出现或需测量的启动时间、JS/原生线程、内存、包体积和持续掉帧。按测量结果读取对应引用，普通组件、列表与动画实现由 Vercel 入口负责，避免并行套用两套通用规则。

<!-- skill: callstackincubator/agent-skills@upgrading-react-native -->
- **upgrading-react-native**：[原文](https://github.com/callstackincubator/agent-skills/blob/main/skills/upgrading-react-native/SKILL.md)，[技能页](https://skills.sh/callstackincubator/agent-skills/upgrading-react-native)。仅用于版本升级：模板 diff、依赖、CocoaPods、Gradle、原生 API 与 Expo SDK 兼容；目标版本由任务确定，区分 iOS/Android 实际构建与运行结果。

## 容器构建

<!-- skill: github/awesome-copilot@multi-stage-dockerfile -->
- **multi-stage-dockerfile**：[原文](https://github.com/github/awesome-copilot/blob/main/skills/multi-stage-dockerfile/SKILL.md)，[技能页](https://skills.sh/github/awesome-copilot/multi-stage-dockerfile)。适用于 Go、Next.js 等容器交付：区分依赖、构建和运行阶段，控制缓存、运行权限与镜像内容。基础镜像、glibc/musl、CGO 和目标架构根据运行依赖选择；CI 的构建/发布步骤见[质量与自动化入口](quality-and-ci.md)。
