# 深色分栏首页验收

完整中英文首页已在 `website/new-template` 实现，基线为 `725ffb4`。源码位于 `/Users/zhangjin/rich-workspace/my-dev-skills-template/website/`。发布状态另由 GitHub Pages 发布记录说明。

## 预览与截图

- [预览与新旧截图对照](http://127.0.0.1:8768/)
- [中文预览](http://127.0.0.1:4323/solo-vibe-coding/zh-CN/) / [English](http://127.0.0.1:4323/solo-vibe-coding/)
- `screenshots/zh-CN-*-hero.png`、`*-full.png` 为1440×1000桌面和390×844手机首屏/全页；英文使用`en-*`。
- `screenshots/comparison-desktop.png`、`comparison-mobile.png`：左侧上一版，右侧新分栏版，相同视口。图片先等待字体和图片解码，使用减少动画固定画面。

预览服务停止后：

```sh
cd /Users/zhangjin/rich-workspace/my-dev-skills-template/website
npm ci
npm run build
npm run preview -- --port 4323
```

对照页使用：

```sh
python3 -m http.server 8768 --bind 127.0.0.1 --directory /Users/zhangjin/rich-workspace/my-dev-skills-template/docs/research/website/2026-11-14-dark-template
```

## 四项验收

| 项目 | 结果与边界 |
| --- | --- |
| 审美 | 分栏、深色与青绿强调形成新的完整画面；经独立视觉审阅，用户偏好未确认 |
| 产品理解 | 具体需求、原助手+Skill、任务方法与交付检查目标保留；示意、来源、实测、功能示例界限保留；无真实新手理解测试 |
| 操作 | 原42项浏览器测试通过，覆盖四任务/刷新/语言/上手/复制/来源/案例ZIP/报价CSV/文章/FAQ键盘/无脚本/减少动画 |
| 工程 | Astro0错误/0警告/0提示、17页构建与产物验证通过；40项响应式任务与触控尺寸检查、28项内页对比通过 |

## 证据

- `npm run validate`：[validate.log](validate.log)。全站内链、锚点、资源、双语元数据、canonical、结构化数据、sitemap和体积预算通过。
- 现有 `npm run test:e2e` 的42项原测试及断言未修改。本地使用 `PLAYWRIGHT_CHANNEL=chrome`，Chrome `157.0.8103.51`；因为4321保留旧预览，用临时派生配置仅调整端口为4323及测试绝对目录。实际命令：`PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --config=/tmp/solo-template-playwright.config.mjs --workers=4`。日志见 [e2e.log](e2e.log)。CI继续使用原配置和Playwright Chromium。
- [audit.json](audit.json)：320/390/768/1024/1440px × 双语 × 四任务，共40项，无横向溢出；可见按钮、主行动、任务标签及语言入口尺寸至少44px。双语×两视口×七内页共28项，正文、归一站内origin后的链接、几何、字号、颜色和圆角与原版相等；页面脚本错误0。
- 独立审查另检查11个断点、双语四任务、键盘与可访问树。修复复制触控区和英文窄屏图注后复核，详见 [independent-review.md](independent-review.md)。
- 核对 `git diff 725ffb4`：Skill、内容数据、公共样式、交互脚本、测试、依赖、Astro/Actions/路由未变；首页Logo与主题由首页条件限定。

工程通过不证明审美、理解或实际使用效果更好。没有真实用户测试、实体手机或完整辅助技术体验；首页与内页的明暗差异和字号取舍见 [差异评估](change-evaluation.md)。
