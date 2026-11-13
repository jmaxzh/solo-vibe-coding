# 部署与运行参考

寻找现成自托管应用、容器镜像、Cloudflare 工程模板与监控面板。按[部署目标](../deployment.md#部署目标)取用，核对选中条目的资源需求、访问条件、许可证和运行成本。

## Awesome Selfhosted

<!-- resource: https://awesome-selfhosted.net/ -->
- [目录](https://awesome-selfhosted.net/)：按用途分类的可自托管应用与网络服务，提供源码、实现语言和许可证信息。
- 为当前需求定位现成服务，再查看其实际部署文件、维护情况、资源需求、拓扑与备份恢复方法。按项目单台 VPS 的容量和运行约束适配。

## Docker Official Images

<!-- resource: https://hub.docker.com/u/library -->
- [镜像目录](https://hub.docker.com/u/library)：数据库、代理、运行时等基础组件的官方容器镜像。
- 选择实际仓库、标签和平台，再遵循其配置、持久化、升级与许可证要求。官方镜像标识不代表每个标签或部署配置都适合当前项目。

## Cloudflare Templates

<!-- resource: https://github.com/cloudflare/templates -->
- [官方工程模板](https://github.com/cloudflare/templates)：React/Vite、Next.js 等 Cloudflare 工程的实际源码与配置。
- 查看具体模板的文件、适配器、运行时与所用服务。复用适合项目的前端部分；包含 Workers API 或托管后端服务的模板仍服从现有的 Cloudflare 前端与单台 VPS 业务后端边界。核对实际选用服务的费用与限制。

## Grafana Dashboards

<!-- resource: https://grafana.com/grafana/dashboards/ -->
- [面板目录](https://grafana.com/grafana/dashboards/)：服务器、数据库和应用的现成监控面板；[Node Exporter Full](https://grafana.com/grafana/dashboards/1860-node-exporter-full/)等条目提供导入 ID 与 JSON。
- 下载或导入前查看具体面板、数据源、Exporter、指标名及版本要求。预览图可作参考；取得配置并在实际监控环境验证后，才能报告可用面板已交付。
