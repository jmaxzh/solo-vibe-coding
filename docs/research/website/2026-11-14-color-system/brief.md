# 官网配色优化：需求与验证材料

## 原始需求与范围

用户原话：「整体的官网配色不太满意，需要再优化一下。我希望是那种有质感、极客感的官网配色。你要结合 UI 和 UX 体验以及配色艺术设计的专业知识，去帮我，去优化这个官网配色。」

本轮实施对象为现有官网。沿用已确认的结构、自然中文与英文、四个外部痛点案例、素材来源和证据边界；覆盖首页及内页，检查操作和阅读体验。此前已授权提交、推送并发布 GitHub Pages。Skill 本身的行为不在本轮范围，工作区两份 Skill 文件已有修改须原样保留且不提交。

修改前基线：`158043b`；其中网站源代码最后变更为 `25d8205`。完整修改前源文件位于临时目录 `/tmp/solo-vibe-color-release/before/website/`，实际差异位于 `/tmp/solo-vibe-color-release/change.diff`。持久的修改前截图见相邻 `2026-11-14-stock-experience/screenshots/`；与该网站源代码对应，后续基线提交仅追加发布记录。

## 专业依据

- [Radix：色阶与界面角色](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)：将底色、表面、交互背景、边界、实色与文字分开设置；参考角色划分，未引入依赖或照搬色阶。
- [WCAG 2.2：文字对比度](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)：普通文字4.5:1、大字3:1；禁用、装饰及图片内附带内容按适用范围区分。
- [WCAG 2.2：非文字对比度](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)：辨认控件和状态所需的图形、边界与焦点至少3:1。
- [Impeccable 配色指导](https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/reference/colorize.md)：按用途分配强调色、检查实际状态与浏览器表面。会话读取版本4.9.1，配套检查引擎0.1.24；使用现有项目上下文做局部调整，未改变已批准的版式与内容。

## 检查材料

- `validate.log`：Astro检查、构建、内链/锚点/语言/元数据/结构化数据和体积验证。
- `e2e.log`：现有38项浏览器测试，涵盖双语、桌面/手机、无脚本、键盘、计算下载、任务连续性、动画与可检测无障碍问题。
- `layout-audit.json`：50条页面和场景布局/素材检查记录；无横向溢出、可见素材均成功加载、没有运行时外部请求。截图采集覆盖全部17页及四类任务，两种屏宽与双语；本目录保留代表截图，其余当前会话图在临时目录的`qa/`中。
- `color-audit.json`：Chrome实际计算样式与26种状态的对比度记录；普通文字最低6.18:1，所测必要边界和焦点最低4.10:1；禁用控件单独记录，不纳入强制阈值。渐变按两个端点取最差值。审计方法脚本留存于`audit-color.mjs`，只作研究证据，不作为产品运行依赖。
- `screenshots/`：首页/内页/手机/案例，以及红绿色觉异常和全色盲模拟下的错误说明、选中与键盘焦点。模拟只提供辅助检查，不代表实际用户研究。
- `preservation.json`：内容数据、浏览器脚本、素材、许可、设备原样式、依赖及现有测试的前后逐文件一致性。
- `detector.json`：Impeccable完成一次静态检查，报告一条`side-tab`警告。命中旧案例引文的`border-left: 2px solid var(--line)`；该属性在修改前即存在，当前为中性灰引用边线，需结合实际页面与本轮范围判断，不能称引擎零告警。

工程检查与主观审美满意度、阅读舒适度及安装转化效果分开判断；尚无用户试用、不同实体显示器与环境光测试。
