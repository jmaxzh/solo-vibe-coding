# 素材获取与来源

本次使用可取得并允许公开源码或成品分发的既有素材，不生成新插画或手绘设备。正式素材及组件归属、固定来源版本、转换说明与原许可见 `website/public/licenses/visual-assets.txt`，该许可文件随网站发布，运行不依赖本档案。

| 选项 | 核实结果 | 本次处理 |
| --- | --- | --- |
| LS.graphics MacBook / iPhone | 官方页声明带水印免费、订阅去水印。正常编辑器中的 Embed 和 Export 均触发登录。账号后的免费上传、导出参数与最终 URL 未验证 | 不使用目录 CDN 预览图或视频替代成品；未购买、未注册 |
| Aceternity Compare / Terminal | 官方可下载组件源码，但许可禁止再分发源文件，未确认本公开仓库源文件分发可用 | 不提交其源码；改用 MIT 实现及适配 |
| Devices.css | MIT，原作者 MacBook Pro 和 iPhone 14 Pro 成品样式 | 选取原始基础规则与两款设备规则，原声明随源码与产物保留 |
| Inspira UI Compare / Magic UI Terminal | MIT，源码已取得，Inspira README 说明获 Aceternity 设计改编许可 | 适配 Astro 与原生控件；不新增 Vue、React、Motion 运行时 |
| Impeccable / Jitsi | 原仓库 Apache-2.0、图像已公开提供 | 调整尺寸和格式，保留归属与原许可，标明参考性质 |
| shadcn/ui | MIT，使用官方 demo 的浏览器截图 | 保留模板数据说明，内容不冒充 Skill 的收入或用户结果 |

LS 条款：https://www.ls.graphics/terms-of-service

LS 指定素材：https://www.ls.graphics/assets/macbook-pro-112 、https://www.ls.graphics/assets/iphone-18-pro-in-hand-97

Aceternity 条款：https://ui.aceternity.com/licence

Inspira 归属与权限：https://github.com/unovue/inspira-ui/blob/eec920b047589058b4b02ba64deb614869e7237a/README.md

登录门槛截图保存在本目录 `ls-embed-login.png` 与 `ls-export-login.png`。未对第三方登录或付费边界作绕过。
