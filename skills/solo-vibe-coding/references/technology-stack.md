# Technology-specific guidance

Use for implementation, framework usage, performance, security, data access, and operations after technology choices are established. Default choices are in [architecture and technical design](architecture.md#default-technology-stack), engineering discipline and verification in [development and quality](development.md), and standards/check entry points in [quality criteria and automated checks](quality-and-ci.md). Read the specialist and necessary references for the current problem.

## Responsibilities and adaptation

- User requirements, existing project choices, quality standards, and knowledge conventions jointly define task boundaries; specialists supplement technology-specific methods. Adapt upstream frameworks, ORMs, logging libraries, hosts, directories, coverage targets, and fixed procedures to those conventions. Technology examples do not justify migration or additional dependencies.
- Check dependency manifests, lockfiles, and runtime versions first. For APIs, caching, permissions, builds, or platform differences, apply examples using target-version official documentation and actual verification. Combine intersecting topics through references; the primary entries below own overlapping concerns.
- Upstream review suggestions apply within the current implementation scope; formal reviews use the existing [code-review entry point](development.md#code-review-and-debugging). Use models, subagents, CLIs, services, and tool dependencies according to host capabilities and task authorization; state actual execution scope when capabilities are missing.

| Current problem | Primary entry |
| --- | --- |
| React Web loading, waterfalls, bundle size, rendering performance | vercel-react-best-practices |
| React component interfaces, composition, state boundaries | vercel-composition-patterns |
| Next.js App Router, RSC, routing, data, caching | nextjs-app-router-patterns; reference React performance rules as needed |
| Measuring and diagnosing Web LCP, INP, CLS | core-web-vitals |
| Tauri configuration, IPC, permissions, packaging, updates | tauri-v2 |
| Rust ownership, errors, types, language practices | rust-best-practices; rust-async-patterns for Tokio |
| Go implementation, tests, concurrency, performance, security, data access, observability | Corresponding specialists under Go and Gin |
| Go GitHub Actions | [Go CI under quality criteria and automated checks](quality-and-ci.md#upstream-guidance) |
| MySQL schema, indexes, SQL, locks, migrations, operations | mysql; golang-database for the Go caller side |
| React Native implementation, lists, navigation, interaction | vercel-react-native-skills |
| React Native startup, memory, native threads, sustained frame drops | react-native-best-practices |
| React Native version and native-project upgrades | upgrading-react-native |
| Container images, build stages, runtime images | multi-stage-dockerfile |

For visual direction, component motion, and accessibility, see [visual design and interaction](visual-interaction.md); for Web testing and browser operations, see [development and quality](development.md#testing-and-verification).

## React and Next.js

<!-- skill: vercel-labs/agent-skills@vercel-react-best-practices -->
- **vercel-react-best-practices**: [Source](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/SKILL.md), [Skill page](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices). React Web and Next.js performance rules. Select `rules/` files according to waterfalls, bundle size, server, data-fetching, or rendering issues. React Native uses the mobile entries below; apply only suitable client-side rules to Tauri's React frontend.

<!-- skill: vercel-labs/agent-skills@vercel-composition-patterns -->
- **vercel-composition-patterns**: [Source](https://github.com/vercel-labs/agent-skills/blob/main/skills/composition-patterns/SKILL.md), [Skill page](https://skills.sh/vercel-labs/agent-skills/vercel-composition-patterns). Handle proliferating boolean props, compound components, providers, lifted state, and reusable component interfaces; owns component-level composition only. Cross-module structure belongs to [architecture guidance](architecture.md); use React 19 APIs according to the project version.

<!-- skill: wshobson/agents@nextjs-app-router-patterns -->
- **nextjs-app-router-patterns**: [Source](https://github.com/wshobson/agents/blob/main/plugins/frontend-mobile-development/skills/nextjs-app-router-patterns/SKILL.md), [Skill page](https://skills.sh/wshobson/agents/nextjs-app-router-patterns). Next.js App Router RSC, streaming, parallel/intercepting routes, Server Actions, Route Handlers, metadata, and data caching; read `references/details.md` for detailed implementation as needed. Check async parameters, cache defaults, and invalidation APIs against the existing Next.js version; Pages Router projects retain their router. Business APIs already owned by Go + Gin keep that ownership; Next.js examples do not change service boundaries.

<!-- skill: addyosmani/web-quality-skills@core-web-vitals -->
- **core-web-vitals**: [Source](https://github.com/addyosmani/web-quality-skills/blob/main/skills/core-web-vitals/SKILL.md), [Skill page](https://skills.sh/addyosmani/web-quality-skills/core-web-vitals). Diagnose LCP, INP, and CLS through real-user data and lab traces; before measurement, read `skills/performance/references/MEASUREMENT.md` in the same repository. This entry owns metrics and measurement evidence, the React entry owns related code patterns, and [motion guidance](visual-interaction.md#motion-and-interaction) owns concrete animation implementation. With source alone, identify causes awaiting validation; after fixes, distinguish lab retests from real-user metrics that require accumulated traffic.

## Tauri and Rust

<!-- skill: nodnarbnitram/claude-code-extensions@tauri-v2 -->
- **tauri-v2**: [Source](https://github.com/nodnarbnitram/claude-code-extensions/blob/main/plugins/cce-tauri/skills/tauri-v2/SKILL.md), [Skill page](https://skills.sh/nodnarbnitram/claude-code-extensions/tauri-v2). Tauri v2 configuration, command registration, `invoke`/events/Channel, shared state, capabilities, plugins, packaging, signing, and updates; read same-directory `references/` according to the problem. Applies only to v2; check permission scope, IPC types, and platform support against [official documentation](https://v2.tauri.app/). Choose locks and parameter types by actual concurrency and lifecycle. Use React guidance for frontend and Rust guidance below for Rust logic; updates and distribution apply only to corresponding tasks.

<!-- skill: apollographql/skills@rust-best-practices -->
- **rust-best-practices**: [Source](https://github.com/apollographql/skills/blob/main/skills/rust-best-practices/SKILL.md), [Skill page](https://skills.sh/apollographql/skills/rust-best-practices). Read relevant ownership/borrowing, Clippy, performance, error, test, generic, typestate, or documentation sections. Retain project standards for test organization, assertion counts, lint strictness, and dependencies; judge copying, moving, and iteration examples by type semantics and verify through compilation.

<!-- skill: wshobson/agents@rust-async-patterns -->
- **rust-async-patterns**: [Source](https://github.com/wshobson/agents/blob/main/plugins/systems-programming/skills/rust-async-patterns/SKILL.md), [Skill page](https://skills.sh/wshobson/agents/rust-async-patterns). Tokio tasks, channels, streams, cancellation, and async errors; detailed patterns are in `references/details.md`. Add only when Rust async problems require it, retaining Tauri's existing runtime and command model.

## Go and Gin

For existing Gin implementation samples, see [Gin Examples](resources/development.md#gin-examples).

The following specialists come from [samber/cc-skills-golang](https://github.com/samber/cc-skills-golang). Read individual skills according to the problem, adding related references only for the current gap. Apply Gin routing, middleware, binding, and response APIs using the project version and [official documentation](https://gin-gonic.com/docs/); Go specialists own language and runtime foundations.

<!-- skill: samber/cc-skills-golang@golang-code-style -->
- **golang-code-style**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-code-style/SKILL.md). Go declarations, control flow, readability, and comments; follow existing formatting and lint configuration, retaining UB Mode and Ponytail for engineering discipline.

<!-- skill: samber/cc-skills-golang@golang-error-handling -->
- **golang-error-handling**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-error-handling/SKILL.md). Error wrapping, inspection, propagation, and handling boundaries; retain interface contracts for external business-error mapping. See observability for log correlation.

<!-- skill: samber/cc-skills-golang@golang-testing -->
- **golang-testing**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-testing/SKILL.md). Table-driven tests, subtests, fixtures, mocks, integration isolation, fuzzing, races, and goroutine leaks. Supplements Go implementation methods; engineering discipline and quality standards determine test goals and investment. Prioritize existing test naming, build tags, and frameworks; use tools such as `gotests` as needed.

<!-- skill: samber/cc-skills-golang@golang-concurrency -->
- **golang-concurrency**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-concurrency/SKILL.md). Goroutine lifecycles, channel ownership, synchronization, worker pools, `errgroup`, and `singleflight`. This entry owns concurrency correctness; reference the following entry for cancellation and timeout contracts as needed.

<!-- skill: samber/cc-skills-golang@golang-context -->
- **golang-context**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-context/SKILL.md). Context propagation across API boundaries, cancellation, timeouts, deadlines, and request values; use for tasks designing or troubleshooting those contracts.

<!-- skill: samber/cc-skills-golang@golang-performance -->
- **golang-performance**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-performance/SKILL.md). Select allocation, CPU, memory-layout, GC, pooling, caching, and hotspot optimizations by measured bottlenecks; read same-repository `skills/golang-benchmark/SKILL.md` when measurement methods are needed. Follow [debugging guidance](development.md#code-review-and-debugging) for fault reproduction and root-cause verification. Compare benchmarks in comparable environments and avoid resource contention.

<!-- skill: samber/cc-skills-golang@golang-security -->
- **golang-security**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-security/SKILL.md). When the current Go change involves input, authentication, files, networking, cryptography, or secrets, check corresponding injection, SSRF, path, cookie, and log-privacy risks. Apply security audits within the task scope; [Go CI](quality-and-ci.md#upstream-guidance) owns scanner integration.

<!-- skill: samber/cc-skills-golang@golang-database -->
- **golang-database**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-database/SKILL.md). Go-side parameterized queries, scanning and NULL, resource closure, transactions, connection pools, batching, and context. Retain existing ORM or driver; the mysql entry below owns MySQL schema, indexes, query plans, and migration SQL. Adapt example placeholders to the actual driver.

<!-- skill: samber/cc-skills-golang@golang-observability -->
- **golang-observability**: [Source](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-observability/SKILL.md). Logs, metrics, traces, profiling, alerts, and dashboards; read relevant `references/` for the current operational issue. Retain existing logging libraries and monitoring systems, choosing signals by runtime risk and cost. [analytics](acquisition.md#conversion-tracking-and-marketing-tasks) owns marketing events, funnels, and attribution; business-event definitions share one source.

Maintain Go pipelines only in [quality criteria and automated checks](quality-and-ci.md#upstream-guidance); pipelines execute established standards, while the specialists above provide implementation and explanation methods.

## MySQL

For existing application schemas, see [DrawSQL Templates](resources/architecture.md#drawsql-templates).

<!-- skill: planetscale/database-skills@mysql -->
- **mysql**: [Source](https://github.com/planetscale/database-skills/blob/main/skills/mysql/SKILL.md), [Skill page](https://skills.sh/planetscale/database-skills/mysql). MySQL/InnoDB schema design, indexes, query plans, transactions, locks, replication, connections, and migrations; read references according to the problem and verify using data scale, read/write patterns, and evidence such as `EXPLAIN`. Retain project needs and compatibility constraints for hosting, charset/collation, primary keys, time types, and data models; use upstream defaults to compare options. See golang-database for Go calls and resource management.

## React Native

<!-- skill: vercel-labs/agent-skills@vercel-react-native-skills -->
- **vercel-react-native-skills**: [Source](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-native-skills/SKILL.md), [Skill page](https://skills.sh/vercel-labs/agent-skills/vercel-react-native-skills). Primary mobile implementation entry: lists, animations, navigation, images, state, rendering, and native dependencies; read `rules/` as needed. Adapt Expo, FlashList, image libraries, animation libraries, and navigators to the existing project. Reference React Web rules only when separate Web code actually needs them.

<!-- skill: callstackincubator/agent-skills@react-native-best-practices -->
- **react-native-best-practices**: [Source](https://github.com/callstackincubator/agent-skills/blob/main/skills/react-native-best-practices/SKILL.md), [Skill page](https://skills.sh/callstackincubator/agent-skills/react-native-best-practices). Specialist performance diagnosis for observed or measurable startup time, JS/native threads, memory, bundle size, and sustained frame drops. Read corresponding references according to measurements; the Vercel entry owns ordinary component, list, and animation implementation, avoiding simultaneous application of two generic rule sets.

<!-- skill: callstackincubator/agent-skills@upgrading-react-native -->
- **upgrading-react-native**: [Source](https://github.com/callstackincubator/agent-skills/blob/main/skills/upgrading-react-native/SKILL.md), [Skill page](https://skills.sh/callstackincubator/agent-skills/upgrading-react-native). Version upgrades only: template diffs, dependencies, CocoaPods, Gradle, native APIs, and Expo SDK compatibility. The task determines the target version; distinguish actual iOS/Android build and runtime results.

## Container builds

<!-- skill: github/awesome-copilot@multi-stage-dockerfile -->
- **multi-stage-dockerfile**: [Source](https://github.com/github/awesome-copilot/blob/main/skills/multi-stage-dockerfile/SKILL.md), [Skill page](https://skills.sh/github/awesome-copilot/multi-stage-dockerfile). For container delivery of Go, Next.js, and other projects: separate dependency, build, and runtime stages, controlling cache, runtime permissions, and image contents. Choose base images, glibc/musl, CGO, and target architecture according to runtime dependencies. For CI build/release steps, see the [quality and automation entry](quality-and-ci.md).
