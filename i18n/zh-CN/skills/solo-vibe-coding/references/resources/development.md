# 开发参考

寻找现成开源产品、具体实现与本地环境示例。实现、排障与验证方法使用[开发与质量](../development.md)；复用代码时沿用项目的技术选择与质量基线。

## OpenAlternative

<!-- resource: https://openalternative.co/ -->
- [目录](https://openalternative.co/)：按用途、类别和许可证发现开源产品，提供项目网站与源码仓库入口。
- 用它定位潜在基座或同类产品，再查看实际仓库的能力、维护情况、许可证、依赖与总体成本。目录收录是发现线索，不保证适配性或实现质量。

## Gin Examples

<!-- resource: https://github.com/gin-gonic/examples -->
- [官方示例](https://github.com/gin-gonic/examples)：Gin 具体使用场景与可运行示例的源码。
- 为已有 Go/Gin 项目选择相关示例，读取实际文件、依赖版本与启动条件。实现决策结合 [Go 与 Gin 指导](../technology-stack.md#go-与-gin)，在目标项目中验证复用的行为。

## Docker Awesome Compose

<!-- resource: https://github.com/docker/awesome-compose -->
- [官方示例集](https://github.com/docker/awesome-compose)：应用、代理、数据库等本地多服务 Compose 组合。
- 通过具体示例的配置与源码理解服务连接、健康检查和持久数据卷。上游将这些示例限定于本地开发，并明确不能部署到生产。实际镜像名称、版本和配置需对照项目技术栈核对；生产配置使用[部署与发布](../deployment.md)。
