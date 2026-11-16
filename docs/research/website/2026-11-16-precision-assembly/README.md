# 精密装配官网预览

新版以象牙白、炭黑与朱橙金属雕塑建立品牌印象。大字与向上展开的框架呼应，流程说明、真实记录与可操作报价功能分别呈现；中英文与内页共享视觉语言。

## 直接操作

[中文预览](http://127.0.0.1:4392/solo-vibe-coding/zh-CN/) · [English preview](http://127.0.0.1:4392/solo-vibe-coding/)

预览使用本机静态构建，没有发布到公共官网。重新启动时，在 `website/` 执行：

```sh
npm run build
npm run preview -- --port 4392
```

完整开发、检查和发布方法见 [官网 README](../../../../website/README.md)。

## 截图

| 语言 | 桌面首屏 | 桌面整页 | 手机首屏 | 手机整页 |
| --- | --- | --- | --- | --- |
| 中文 | [查看](screenshots/zh-CN-desktop-hero.png) | [查看](screenshots/zh-CN-desktop-full.png) | [查看](screenshots/zh-CN-mobile-hero.png) | [查看](screenshots/zh-CN-mobile-full.png) |
| English | [View](screenshots/en-desktop-hero.png) | [View](screenshots/en-desktop-full.png) | [View](screenshots/en-mobile-hero.png) | [View](screenshots/en-mobile-full.png) |

桌面1440×1000，手机390×844，截图时使用减少动态效果并等待图片与字体加载。另附去文案、去装饰、FAQ展开、报价错误和六种内页图览；详见 `screenshots/`。

## 依据与验收

- [原始任务](original-request.md)与[三组实际试排](directions.png)：从精密装配、展开书页、暗色光廊中选择精密装配；制作时未使用外部视觉参考。
- [实际差异、四项验收与成本](change-evaluation.md)和[验证记录](verification.md)：54项完整浏览器检查、8项最终视觉变动相关补测通过；最终发布目录1070.8KiB、JS 13.6KiB，没有新依赖。
- [原创素材与完整提示](visual-assets.md)：内置图像生成与背景分离，响应式透明WebP及分享图源文件。
- [独立只读审查](independent-review.md)：单独记录实际结论及证据边界。

包体比原版增加约221.5KiB，严格帕累托条件未满足。真实用户理解/转化、弱网性能和非Chrome实机未验证；未把工程检查当成产品效果证据。
