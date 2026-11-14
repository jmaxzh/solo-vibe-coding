# 玻璃折射候选验收

本轮基于ba342fd，分支website/prism-nocturne；视觉比较基准为用户认可的f2b27f3。只提交候选分支与草稿PR，未合并main、未发布正式GitHub Pages；GitHub状态见github-review.md。

## 直接预览

- [可操作图览与三版对照](http://127.0.0.1:8771/)
- [中文本地预览](http://127.0.0.1:4329/solo-vibe-coding/zh-CN/) / [English](http://127.0.0.1:4329/solo-vibe-coding/)
- [下载完整静态预览ZIP](prism-static-preview.zip)，内有独立README与许可。解压后在包含solo-vibe-coding的目录运行python3 -m http.server 8080 --bind 127.0.0.1，打开/solo-vibe-coding/zh-CN/或英文根路径，无需Node构建。包内48个dist文件哈希见preview-manifest.json。

本机服务停止后，在 /Users/zhangjin/rich-workspace/my-dev-skills-prism/website 运行npm ci、npm run build、npm run preview -- --port 4329；本档案目录可由python3 -m http.server 8771 --bind 127.0.0.1提供图览。对照基准4325和工程基线4327分别来自保留的旧工作树。

## 同视口画面

截图等待字体与图片解码，使用减少动画固定构图；正常动效另行测试。桌面1440×1000，手机390×844。

| 视口 | 中文首屏 | 中文全页 | 英文首屏 | 英文全页 | 与认可版 | 三版 |
| --- | --- | --- | --- | --- | --- | --- |
| 1440px | [打开](screenshots/zh-CN-desktop-hero.png) | [打开](screenshots/zh-CN-desktop-full.png) | [打开](screenshots/en-desktop-hero.png) | [打开](screenshots/en-desktop-full.png) | [左认可右候选](screenshots/comparison-desktop.png) | [认可/被否定/候选](screenshots/comparison-three-desktop.png) |
| 390px | [打开](screenshots/zh-CN-mobile-hero.png) | [打开](screenshots/zh-CN-mobile-full.png) | [打开](screenshots/en-mobile-hero.png) | [打开](screenshots/en-mobile-full.png) | [左认可右候选](screenshots/comparison-mobile.png) | [三版](screenshots/comparison-three-mobile.png) |

## 四维结果

| 维度 | 结果及边界 |
| --- | --- |
| 审美 | 独立审查认为全幅玻璃、前后遮挡与局部暗部已解除旧分栏保守问题，可作为有完成度候选；用户是否认可同等级仍待确认 |
| 产品理解 | 自己的助手+Skill定位、四任务、社区/示意/实测/功能边界保留；没有用户理解或转化研究 |
| 操作 | 54项测试通过，原用户路径/复制/下载/键盘/无JS及暂停偏好保留；新像素探针与命中检查支持背景型构图 |
| 工程 | validate通过、17页链接/语言/元数据/sitemap/预算通过；120布局、30控件、28内页比较通过；PR CI另行记录，不执行部署 |

## 最终本地证据

Node.js v26.7.0；既有锁文件npm ci，无依赖改变。Chrome157.0.8103.51及手机模拟。原Playwright配置保持不变，临时派生配置仅改为4329及本树绝对路径。命令为PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --config=/tmp/solo-prism-playwright.config.mjs --workers=4。最终54 passed (1.2m)，见e2e.log；Astro34文件0错误/0警告/0提示、构建17页、所有静态检查通过，见validate.log。

audit.json覆盖320/390/600/601/700/701/768/800/801/900/1000/1001/1024/1100/1440px × 双语 × 四任务，共120组无横向溢出。每宽度/语言检查动画控件中心真实命中且不与导航重叠，共30组。双语×两视口×七内页共28组，正文、归一origin后的链接、几何/字体/颜色/圆角均与工程基线相等，错误0。

背景型图文测试在14宽度测量真实渲染背景：保留文字暗部，临时隐藏前景字并等待生效，采样文字行范围背景，再恢复文字。标题对比阈值3，简介/注记/可见口号4.5；同时验证主入口中心命中，<=1000保留图文分离。指针fine的桌面另测左右位置，正常流手机测静态分离。抽样不代表完整无障碍认证；独立口号逐像素复核修后最低约5.326:1。

测试修正了样式渲染等待与屏幕边缘不足一像素行片段的采样边界，没有降低对比阈值或移除原任务断言。新真实位移检查替换了原先仅判断CSS变量非空的弱检查。Canvas用画面签名验证随动、暂停/离屏静止、恢复和减少动画。

完整预览ZIP另以阻止外网请求的浏览器验证中英1440/390、图片加载、任务刷新/语言/上手及报价CSV，见bundle-check.json；SHA256和文件哈希见preview-manifest.json。

独立审查、真实差异与素材提示分别见independent-review.md、change-evaluation.md和visual-assets.md。未进行实体设备、功耗、全面辅助设备或真实用户研究；不把测试通过等同于审美和使用效果。
