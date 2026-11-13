# Development references

Find existing open-source products, concrete implementations, and local environment samples. For implementation, debugging, and verification methods, use [development and quality](../development.md); retain the project's technology choices and quality baseline when reusing code.

## OpenAlternative

<!-- resource: https://openalternative.co/ -->
- [Catalog](https://openalternative.co/): open-source products discoverable by purpose, category, and license, with links to project sites and source repositories.
- Use it to locate potential foundations or comparable products, then inspect the actual repository's capabilities, maintenance, license, dependencies, and total cost. Catalog inclusion is a discovery signal, not a guarantee of fitness or implementation quality.

## Gin Examples

<!-- resource: https://github.com/gin-gonic/examples -->
- [Official examples](https://github.com/gin-gonic/examples): source for concrete Gin use cases and runnable samples.
- Select the example relevant to an existing Go/Gin project and read its files, dependency versions, and startup requirements. Use [Go and Gin guidance](../technology-stack.md#go-and-gin) for implementation decisions and verify reused behavior in the target project.

## Docker Awesome Compose

<!-- resource: https://github.com/docker/awesome-compose -->
- [Official sample collection](https://github.com/docker/awesome-compose): local multi-service Compose setups, including applications, proxies, and databases.
- Use a concrete sample's configuration and source to understand service wiring, health checks, and persistent volumes. Upstream limits these samples to local development and states they must not be deployed to production. Inspect actual image names, versions, and configuration against the project's stack; production setup follows [deployment and release](../deployment.md).
