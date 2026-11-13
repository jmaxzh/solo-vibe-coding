# Production deployment and release

Use for production configuration, application packaging, deployment, release verification, and rollback. Read the existing deployment configuration, scripts, runbooks, and target-host information before choosing an approach. Use [quality criteria and automated checks](quality-and-ci.md) for project checks and CI execution.

For existing self-hosted services, images, Cloudflare templates, and monitoring dashboards, see [deployment and operations references](resources/deployment.md).

## Deployment targets

- **Frontend**: deploy all web frontends to Cloudflare. For new static sites and SPAs, prefer Workers Static Assets following current official guidance; retain existing Pages deployments during unrelated maintenance. For SSR and other frontend server-side rendering, verify the framework adapter, runtime compatibility, and dynamic-request costs. Keep business backend services on the VPS below. Native desktop and mobile packages follow their own distribution channels.
- **Backend**: deploy all backend services on a single VPS, including the backend application, databases, caches, message queues, and background workers actually used by the project. Adapt deployment strategies and resource allocation to this single-host topology and the project's cost constraints.

Prioritize Cloudflare's free tier and verify current [static asset billing and limits](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) and the pricing of services actually used before selecting a configuration. Distinguish static asset delivery from SSR/Worker invocations, builds, storage, and other metered services; assess the project's expected usage rather than assuming the entire deployment is free. In GitHub Actions, check and build on the [selected runner](quality-and-ci.md), then deploy to Cloudflare with a scoped API token supplied through CI secrets and the target account identified. Follow the chosen CLI's CI authentication guidance; keep credentials out of source and frontend bundles.

## Upstream guidance

### Cloudflare frontend

<!-- skill: cloudflare/skills@cloudflare -->
- **cloudflare**: [Source](https://github.com/cloudflare/skills/blob/main/skills/cloudflare/SKILL.md), [Skill page](https://skills.sh/cloudflare/skills/cloudflare). Official product-selection and tooling entry point. Read the relevant static asset, routing, domain, and environment guidance; limit product choices to frontend needs under the deployment targets above.

<!-- skill: cloudflare/skills@frameworks-on-cloudflare -->
- **frameworks-on-cloudflare**: [Source](https://github.com/cloudflare/skills/blob/main/skills/frameworks-on-cloudflare/SKILL.md), [Skill page](https://skills.sh/cloudflare/skills/frameworks-on-cloudflare). For framework setup, adaptation, and deployment, inspect rendering mode, adapter, and existing configuration, then read the matching framework guide. Follow its dedicated Next.js entry when applicable; preserve the project's framework choice and verify frontend rendering and access to VPS APIs.

<!-- skill: cloudflare/skills@wrangler -->
- **wrangler**: [Source](https://github.com/cloudflare/skills/blob/main/skills/wrangler/SKILL.md), [Skill page](https://skills.sh/cloudflare/skills/wrangler). For projects using Wrangler, follow the installed version's configuration, CI authentication, deployment, versioning, and rollback guidance.

<!-- skill: cloudflare/skills@cf-cli -->
- **cf-cli**: [Source](https://github.com/cloudflare/skills/blob/main/skills/cf-cli/SKILL.md), [Skill page](https://skills.sh/cloudflare/skills/cf-cli). For projects using Cloudflare CLI (`cf`), retrieve current commands and unattended CI authentication guidance. Choose the CLI through the official product/framework guidance and existing configuration; check release maturity and project compatibility before adoption or migration.

### VPS backend and release operations

<!-- skill: affaan-m/ecc@deployment-patterns -->
- **deployment-patterns**: [Source](https://github.com/affaan-m/ecc/blob/main/skills/deployment-patterns/SKILL.md), [Skill page](https://skills.sh/affaan-m/ecc/deployment-patterns). Production configuration and startup validation, multi-stage container builds, deployment strategies, health and readiness checks, release verification, and rollback. Read the original instructions on demand and adapt examples to the actual stack, deployment tools, and VPS capacity.

Choose the deployment strategy according to available resources and acceptable downtime. Preserve usable prior release artifacts and account for database migration compatibility when preparing rollback. Apply upstream staging verification as a pre-release check according to the project's existing verification process.

The existing ci-cd-and-automation entry handles pipeline execution; this reference handles production deployment decisions and operations. Maintain deployment configuration, operating instructions, and rollback commands according to the [project knowledge conventions](project-knowledge.md). Perform deployment and release actions within the user's authorization, reporting the actual target, release identifier, verification results, and rollback readiness.
