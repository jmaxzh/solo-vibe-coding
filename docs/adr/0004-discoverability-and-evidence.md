# ADR 0004：以可抓取正文和可核验事实支持 SEO 与 GEO

- 状态：已采用
- 日期：2026-11-13
- 对应决策：D15–D19

## 结论

正文预渲染为 HTML，配合独立元数据、语言关系、sitemap 和与可见内容一致的结构化数据。GEO 以定义、任务示例、来源、作者与真实日期为基础；效果以发布后的实际数据判断。

## 背景与取舍

网站承接项目搜索与生成式回答场景。Google 官方说明其 AI 搜索功能沿用 SEO 基础，没有额外的特殊结构化数据或 AI 文本文件要求。Bing 建议通过清晰标题、具体示例、证据和及时更新提高内容的准确可引用性。

因此首版优先完整且可独立阅读的页面，不为了富结果生成未验证的评分或评价。结构化数据使用 WebSite、WebPage、BlogPosting 和开源 CreativeWork，反映 Skill 的实际形式。FAQ 对读者可用，但不承诺获得 FAQ 富结果。

默认地址位于 GitHub 用户域名的项目子目录。协议仅从域名根目录读取 robots.txt；在项目目录创建同名文件无法控制该域名的抓取。sitemap 使用完整项目网址，并通过站长工具提交。域名根规则在发布时实际核对。

## 观察与后果

首版不引入浏览器分析 SDK，减少运行时依赖和数据收集。Google Search Console 可观察收录与搜索表现；Bing AI Performance 可在其支持场景和数据范围内观察引用。平台验证需要账号操作，排名与引用需要观察期。

静态内容验证不能证明收录、排名、AI 推荐或实际安装量。安装命令复制只是一种浏览器行为，若未来需要统计，应另行定义事件、隐私条件和解释边界。

## 依据

- [Google SEO 指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google AI 搜索功能](https://developers.google.com/search/docs/appearance/ai-features)
- [robots.txt 位置与作用范围](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)
- [Bing AI Performance 与内容建议](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/)
