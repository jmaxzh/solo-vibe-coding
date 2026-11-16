# 首次认可官网恢复发布

用户授权恢复第一次认可的金属深空光环版，并提交、推送和部署GitHub Pages。

- 原版本：f2b27f3c3202bf3a8df6096dfca8e0145893189f。
- 回退提交：7c066452b21cf2ec2db254dfea492773fef0ae69，以新提交记录，原历史保留。
- 官网树SHA：35273ab2b9046a8a6bb76cb8beded0b98964db41，与原版本逐文件一致。
- 已快进合入主工作区并推送main与website/restore-first-approved。
- [Actions 43849072447](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43849072447)的检查与Pages部署均成功，CI50项通过（1.6分钟）。[actions.json](actions.json)记录源码SHA一致。
- Pages deployment 7821479756为success，源码SHA一致，见[pages-deployment.json](pages-deployment.json)。
- [中文版](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/?v=7c06645)与[英文版](https://jmaxzh.github.io/solo-vibe-coding/?v=7c06645)已实际核验。

[公开检查](production-check.json)覆盖中英桌面与手机四组：光环素材加载、原版标题与主题、任务刷新与语言切换、所选任务进入上手页、真实案例图片、报价1955.00与带BOM的CSV、起始项目ZIP通过；10个内页和2个sitemap请求均返回200；中英文报价页另经实际操作核验，页面错误及失败资源为空。生产截图保存于screenshots/。

公开核验工具首次在语言切换后的即时读取遇到脚本尚未就绪，增加加载及选中状态等待后完整通过，原断言保留，网站源码不改。官网发布配置、Skill及两份原有用户修改均保留。

后续归档仅限docs/research，运行官网继续保持上述树SHA，无须再次部署。既有50项测试和逐像素一致性证明版本恢复，不产生新的用户研究或性能结论。

四组[线上静态截图对照](public-visual-checks.json)的平均通道绝对差均小于0.086（8位通道），不宣称线上逐像素完全相同；本地四组对照为零差异。源码目录仍与原版完全一致。域名根[robots状态](robots-status.json)为404。
