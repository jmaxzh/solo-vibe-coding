# 首页预览验收与访问方式

完整中英文首页已在隔离工作树实现，未合并、未推送、未发布。Astro、GitHub Pages、Actions 及生产部署配置保留。

## 打开预览

- 预览与截图对照：<http://127.0.0.1:8767/>。可选择中文/英文、1440px桌面/390px手机，在嵌入页中滚动与操作，并查看全部截图。
- 中文官网：<http://127.0.0.1:4321/solo-vibe-coding/zh-CN/>。
- 英文官网：<http://127.0.0.1:4321/solo-vibe-coding/>。
- 分支：`website/nova-homepage`；基线：`6d7410c`。
- 源码：`/Users/zhangjin/rich-workspace/my-dev-skills-homepage/website/`。原工作区 `main` 中两份 Skill 未提交修改保留。

预览服务停下后，在官网目录执行：

```sh
cd /Users/zhangjin/rich-workspace/my-dev-skills-homepage/website
npm ci
npm run build
npm run preview -- --port 4321
```

截图对照页另在终端运行：

```sh
python3 -m http.server 8767 --bind 127.0.0.1 --directory /Users/zhangjin/rich-workspace/my-dev-skills-homepage/docs/research/website/2026-11-14-nova-homepage
```

本机地址用于当前电脑。390px模式是响应式浏览器预览，不代表已在实体手机访问。以上命令不执行生产发布。

## 截图

截图先等待字体就绪和图片解码，使用减少动态效果以固定画面；主要信息在普通动效模式同样即时可读。桌面为1440×1000，手机为390×844，全页截图保留相同宽度与页面完整高度。

| 视口 | 中文首屏 | 中文全页 | 英文首屏 | 英文全页 | 原版/改版首屏 |
| --- | --- | --- | --- | --- | --- |
| 1440px | [打开](screenshots/after-zh-CN-desktop-hero.png) | [打开](screenshots/after-zh-CN-desktop-full.png) | [打开](screenshots/after-en-desktop-hero.png) | [打开](screenshots/after-en-desktop-full.png) | [左原版，右改版](screenshots/comparison-desktop.png) |
| 390px | [打开](screenshots/after-zh-CN-mobile-hero.png) | [打开](screenshots/after-zh-CN-mobile-full.png) | [打开](screenshots/after-en-mobile-hero.png) | [打开](screenshots/after-en-mobile-full.png) | [左原版，右改版](screenshots/comparison-mobile.png) |

## 四项验收

| 类别 | 结果 | 证据与边界 |
| --- | --- | --- |
| 审美 | 指定方向已完成，经制作检查与独立视觉审阅 | 渐变、居中标题、宽幅示意、字阶、留白、圆角与细边框形成完整画面；审美属于评审判断 |
| 产品理解 | 定位、额外方法、使用关系与开始步骤已表达 | 清楚区分用户自己的助手、Skill 指导、交付目标与示意；没有真实用户理解测试，不宣称使用效果得到验证 |
| 操作 | 已覆盖路径通过 | 四任务、主次按钮、刷新/语言切换、安装/需求复制、来源、真实案例/起始项目 ZIP、报价校验/下载、文章、FAQ 键盘、无脚本和减少动画 |
| 工程 | 本地检查通过 | validate、42项桌面/手机浏览器测试、40项响应式任务检查、28项内页前后对比；未运行生产部署 |

## 工程记录

- Node.js `v26.7.0`，使用锁文件 `npm ci`；依赖与配置没有变更。
- `npm run validate`：Astro 检查0错误/0警告/0提示，构建17个HTML页面；全部本地链接、资源、锚点、双语元数据、canonical、结构化数据、sitemap和体积预算通过。日志见 [validate.log](validate.log)。
- `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --workers=4`：42项通过。使用本机 Google Chrome `157.0.8103.51`，手机为 Chromium 的 iPhone 13 配置模拟；CI配置仍安装既有Playwright Chromium。本次没有声称已运行 Actions。日志见 [e2e.log](e2e.log)。
- `audit.mjs`：320/390/768/1024/1440px × 双语 × 四任务，共40项无横向溢出，选定示意正常；双语 × 两视口 × 七类内页共28项，正文、链接、元素几何、字号、颜色及圆角与基线相等。预览 origin 4321/4322归一为相同站内路径后比较，外链保持原样。浏览器 pageerror 为0，数据见 [audit.json](audit.json)。
- 预览对照页返回HTTP200；内嵌任务切换、390px模式与英文切换实际操作成功，无页面脚本错误。
- `git diff --check` 通过。公共global.css、package/lock、Astro配置、Actions、共享outcomes数据及Skill目录没有修改。

## 独立审查与未验证项

按AGENTS.md使用新上下文只读审查，先独立判断，再对照差异评估。审查确认的可访问名称与可见文字不一致问题已修复，并增加双语任务名称检查；截图延迟加载与内页比较的预览origin问题已更正。最终结论见 [independent-review.md](independent-review.md)。

页面比原版更长，设计参考需要展开，首页与内页暂保留不同视觉；具体成本见 [差异评估](change-evaluation.md)。没有真实用户测试、实际首次安装观察、实体手机或全面辅助技术测试，不把工程通过当作产品理解、转化或任务效果证明。
