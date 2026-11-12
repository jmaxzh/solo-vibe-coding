# 生产部署与发布

用于生产配置、应用打包、部署、发布验证和回滚。选择方案前，先读取已有部署配置、脚本、操作文档及目标主机信息。项目检查与 CI 执行使用[质量指标与自动检查](quality-and-ci.md)。

## 部署目标

- **前端**：所有 Web 前端部署到 Cloudflare。新静态站点与 SPA 按当前官方指导优先使用 Workers Static Assets；维护无关功能时保留已有 Pages 部署。SSR 等前端服务端渲染需核对框架适配器、运行时兼容性和动态请求成本。业务后端服务仍部署在下述 VPS。原生桌面与移动应用安装包按各自分发渠道发布。
- **后端**：所有后端服务部署在同一台 VPS，包括项目实际使用的后端应用、数据库、缓存、消息队列和后台任务。部署策略与资源分配适配这一单机拓扑及项目成本约束。

优先使用 Cloudflare 免费层，选定配置前核对当前[静态资源计费与限制](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)及实际使用服务的价格。区分静态资源分发、SSR/Worker 调用、构建、存储和其他计量服务，按项目预期用量评估，不假定整套部署免费。使用 GitHub Actions 时，在[选定的 Runner](quality-and-ci.md) 上检查与构建，再使用通过 CI Secrets 提供的限定权限 API Token 部署到明确的 Cloudflare 目标账号。认证遵循所选 CLI 的 CI 指导；凭据不进入源码与前端产物。

## 上游指导

### Cloudflare 前端

<!-- skill: cloudflare/skills@cloudflare -->
- **cloudflare**：[原文](https://github.com/cloudflare/skills/blob/main/skills/cloudflare/SKILL.md)，[技能页](https://skills.sh/cloudflare/skills/cloudflare)。官方产品选择与工具入口。按需读取静态资源、路由、域名和环境指导；产品选择限定于上述部署目标下的前端需求。

<!-- skill: cloudflare/skills@frameworks-on-cloudflare -->
- **frameworks-on-cloudflare**：[原文](https://github.com/cloudflare/skills/blob/main/skills/frameworks-on-cloudflare/SKILL.md)，[技能页](https://skills.sh/cloudflare/skills/frameworks-on-cloudflare)。用于框架初始化、适配与部署，先识别渲染模式、适配器及已有配置，再读取对应框架指导。Next.js 按其专用入口处理；保留项目框架选择，验证前端渲染及对 VPS API 的访问。

<!-- skill: cloudflare/skills@wrangler -->
- **wrangler**：[原文](https://github.com/cloudflare/skills/blob/main/skills/wrangler/SKILL.md)，[技能页](https://skills.sh/cloudflare/skills/wrangler)。使用 Wrangler 的项目按已安装版本读取配置、CI 认证、部署、版本管理与回滚指导。

<!-- skill: cloudflare/skills@cf-cli -->
- **cf-cli**：[原文](https://github.com/cloudflare/skills/blob/main/skills/cf-cli/SKILL.md)，[技能页](https://skills.sh/cloudflare/skills/cf-cli)。使用 Cloudflare CLI（`cf`）的项目读取当前命令与 CI 非交互认证指导。CLI 选择遵循官方产品或框架指导及已有配置；采用或迁移前核对发布成熟度与项目兼容性。

### VPS 后端与发布操作

<!-- skill: affaan-m/ecc@deployment-patterns -->
- **deployment-patterns**：[原文](https://github.com/affaan-m/ecc/blob/main/skills/deployment-patterns/SKILL.md)，[技能页](https://skills.sh/affaan-m/ecc/deployment-patterns)。覆盖生产配置与启动校验、多阶段容器构建、部署策略、健康与就绪检查、发布验证和回滚。按需读取原始指导，示例适配实际技术栈、部署工具和 VPS 容量。

按可用资源与可接受停机时间选择部署策略。保留可用的上一版本产物，准备回滚时考虑数据库迁移兼容性。上游的测试环境验证按项目既有验证流程作为发布前检查使用。

已有 ci-cd-and-automation 入口负责流水线执行，本参考负责生产部署决策与操作。部署配置、操作说明和回滚命令按[项目知识库规范](project-knowledge.md)维护。在用户授权范围内执行部署与发布，如实报告目标环境、版本标识、验证结果和回滚准备情况。
