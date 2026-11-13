# Deployment and operations references

Find existing self-hosted applications, container images, Cloudflare project templates, and monitoring dashboards. Use them within the [deployment targets](../deployment.md#deployment-targets), checking the selected item's resource needs, access, license, and operating costs.

## Awesome Selfhosted

<!-- resource: https://awesome-selfhosted.net/ -->
- [Catalog](https://awesome-selfhosted.net/): categorized applications and network services that can run on your own servers, with source, language, and license information.
- Locate an existing service for the current need, then inspect its actual deployment files, maintenance, resource requirements, topology, and backup/restore procedures. Fit it to the project's single-VPS capacity and operating constraints.

## Docker Official Images

<!-- resource: https://hub.docker.com/u/library -->
- [Image catalog](https://hub.docker.com/u/library): official container images for databases, proxies, runtimes, and other building blocks.
- Select the actual repository, tag, and platform, then follow its configuration, persistence, update, and license requirements. Official-image status does not make every tag or deployment configuration appropriate for the project.

## Cloudflare Templates

<!-- resource: https://github.com/cloudflare/templates -->
- [Official project templates](https://github.com/cloudflare/templates): actual source and configuration for React/Vite, Next.js, and other Cloudflare projects.
- Inspect a specific template's files, adapter, runtime, and services. Reuse the frontend portions compatible with the project; templates that include Workers APIs or managed backend services still follow the existing Cloudflare-frontend and single-VPS-business-backend boundary. Verify the costs and limits of services actually selected.

## Grafana Dashboards

<!-- resource: https://grafana.com/grafana/dashboards/ -->
- [Dashboard catalog](https://grafana.com/grafana/dashboards/): existing monitoring panels for servers, databases, and applications; entries such as [Node Exporter Full](https://grafana.com/grafana/dashboards/1860-node-exporter-full/) provide import IDs and JSON.
- Inspect the specific dashboard, data source, exporter, metric names, and version requirements before downloading or importing. A preview image is a reference; report a usable dashboard only after obtaining and validating its configuration in the actual monitoring environment.
