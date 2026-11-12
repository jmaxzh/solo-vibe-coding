# Production deployment and release

Use for production configuration, application packaging, deployment, release verification, and rollback. Read the existing deployment configuration, scripts, runbooks, and target-host information before choosing an approach. Use [quality criteria and automated checks](quality-and-ci.md) for project checks and CI execution.

## Deployment constraint

Deploy all backend services on a single VPS, including the backend application, databases, caches, message queues, and background workers actually used by the project. Adapt deployment strategies and resource allocation to this single-host topology and the project's cost constraints.

## Upstream guidance

<!-- skill: affaan-m/ecc@deployment-patterns -->
- **deployment-patterns**: [Source](https://github.com/affaan-m/ecc/blob/main/skills/deployment-patterns/SKILL.md), [Skill page](https://skills.sh/affaan-m/ecc/deployment-patterns). Production configuration and startup validation, multi-stage container builds, deployment strategies, health and readiness checks, release verification, and rollback. Read the original instructions on demand and adapt examples to the actual stack, deployment tools, and VPS capacity.

Choose the deployment strategy according to available resources and acceptable downtime. Preserve usable prior release artifacts and account for database migration compatibility when preparing rollback. Apply upstream staging verification as a pre-release check according to the project's existing verification process.

The existing ci-cd-and-automation entry handles pipeline execution; this reference handles production deployment decisions and operations. Maintain deployment configuration, operating instructions, and rollback commands according to the [project knowledge conventions](project-knowledge.md). Perform deployment and release actions within the user's authorization, reporting the actual target, release identifier, verification results, and rollback readiness.
