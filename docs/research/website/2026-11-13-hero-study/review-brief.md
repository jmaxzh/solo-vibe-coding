# 首页首屏样稿评审材料

## 请求与范围

用户指出当前官网“说的话 AI 味很浓，一点都不拟人，而且很僵硬”，视觉“普普通通，及格上下”。随后同意先制作“一版首屏文案和对应的视觉样稿”，判断表达与视觉方向后再扩展全站。

本轮制作双语首页首屏：自然、具体的作者口吻；沿用暖白、石墨黑和橙色；真实案例作为视觉主角；保留产品定义、实际证据和开始路径。交付可在浏览器直接打开的独立 HTML 样稿与桌面、手机截图，本轮不作为全站改版或已上线结果。

## 适用指令与版本

适用根 `AGENTS.md`。修改前基线：`c6a9c0b31c53a291b9e7ae785078c62a077076c1`；修改后为当前工作区。

查看原版：`git show <基线>:<文件>`。实际差异：`git diff <基线> -- docs/specs/website.md website/src/components/Home.astro website/src/components/CasePreview.astro website/src/data/site.ts website/src/data/positioning.ts website/tests/website.spec.ts`；新增组件为 `website/src/components/Hero.astro`，原版不存在，可用 `git diff --no-index -- /dev/null website/src/components/Hero.astro` 查看新增内容。研究档案和独立预览位于本目录。

工作区另有形式化验证候选调研及其索引改动，属于其他任务，不在本轮评审或提交范围。请按上述路径区分，不修改、撤销或归入本轮。

## 验证证据

- 基线与修改后均执行 `npm run validate`：类型、构建、17个HTML、内链、双语、元数据、结构化数据和体积检查通过。
- 最终 `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --workers=2`：26项通过，含双语、桌面、手机、无JS、axe、既有报价工具与案例、复制和语言切换。新增交互核对融入原有测试，没有删除验收。
- 独立 HTML 嵌入原始截图、字体与字体许可；320px宽、关闭JS时检查切换、方向键、无横向溢出及无外部请求。原始数据见 `screenshots.json`。
- 本目录 `screenshots/` 包含双语、1440px桌面及390px手机的两种状态。样稿为 `preview.zh-CN.html`、`preview.en.html`，链接进入现有公开案例与安装页。
- 基线JS为10.2KiB、完整网站487.3KiB；修改后JS仍为10.2KiB、完整网站506.1KiB。研究目录不参与网站构建或技能运行。

## 评审方式

使用新上下文，只读。先独立判断方案是否回应目标、范围是否合适，核对前后版本、实际差异、截图、双语含义、产品事实、证据边界、原有功能、无障碍与成本；之后再查看主代理自评。只读复核可使用现有产物、独立预览及检查命令，不修改、提交、推送或部署。

审美与语气的判断需给出具体依据；工程通过不代表目标用户更喜欢、理解更快或转化提高。这些效果尚未试用或测量。
