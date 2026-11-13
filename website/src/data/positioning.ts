import type { Locale } from './site';

const en = {
  why: 'What the skill adds',
  methodsLabel: 'A reusable set of instructions',
  methods: [
    { title: 'Choose relevant professional guidance.', need: 'You know the goal. You may not know which methods to ask for.', detail: 'The skill routes the task to relevant guidance and existing examples. Your agent reads the original instructions it needs, instead of asking you to assemble a set of skills first.' },
    { title: 'Build on what fits your project.', need: 'You want a suitable approach, with reasons you can understand.', detail: 'The instructions prioritize your existing product, style, technology and code, then suitable mature foundations. New work fills the gaps; costs, compatibility and licences are part of the choice.' },
    { title: 'Decide how to check the work.', need: 'A finished-looking page does not tell you everything you need to know.', detail: 'For engineering tasks, the skill calls for appropriate quality criteria and repeatable checks. Delivery should say what actually ran, what passed and what remains unverified.' },
    { title: 'Leave the next change a starting point.', need: 'Your project should have more to go on than an old chat.', detail: 'Keep useful requirements, decisions and ways to check the project in the project itself. Later tasks can reuse these agreements and continue the same documents.' },
  ],
  source: 'Read the skill’s instructions',
  sourceNote: 'These are the instructions the skill provides. What an agent actually does depends on the task, tools and model.',
  preview: {
    label: 'An actual two-round task', project: 'Link Shelf', first: 'Add export', second: 'Change it again',
    secondDetail: 'A fresh session. The same project.',
    selector: 'Choose a change to see the actual result', requestLabel: 'The request, in a few words',
    requestFirst: 'Add export. Keep what already works.', requestSecond: 'Now export only the bookmarks I’ve filtered.',
    resultFirst: 'CSV export added', resultSecond: 'Export the filtered bookmarks',
    imageAlt: 'Detail of the actual Chinese bookmark tool after adding CSV export, showing the export button, search and saved bookmarks.',
    imageTwoAlt: 'Detail of the actual second change: search and category filters select one bookmark, and export follows that selection.',
    caption: 'Actual output with the skill enabled. The full case includes both groups, costs and limits.',
    open: 'See how it went',
  },
  evidenceTitle: 'See the guidance enter an actual task.',
  evidenceText: 'In this bookmark task, the skill group read original professional guidance and carried its checks and project agreements into a new session. The complete case also reports what the agent did directly, and the extra time and usage.',
  exampleTitle: 'Want to try a finished result?',
  exampleText: 'The quote calculator is a working example you can use in your browser. It illustrates a possible result; it is not a comparison of the skill and a general agent.',
  exampleLink: 'Try the quote calculator',
};
const zh: typeof en = {
  why: '多带来什么',
  methodsLabel: '一套可以重复使用的工作要求',
  methods: [
    { title: '按任务，找到相关专业指导。', need: '你知道想做什么，未必知道该提出哪些专业要求。', detail: 'Skill 把任务连接到相关指导和现成案例，Agent 按需读取原始方法。你可以从目标进入，减少自己先拼接一组 Skill 的工作。' },
    { title: '结合你的项目，选合适的做法。', need: '你需要有理由、适合自己情况的建议。', detail: '指导优先保留已有产品、风格、技术与代码，再考虑合适的成熟基础，用新实现填补缺口。费用、兼容和许可都是选择的一部分。' },
    { title: '先明确，怎样确认做好了。', need: '页面看起来完成了，还需要知道关键操作是否可靠。', detail: '工程任务要求适当的质量标准与可重复检查。交付时说明实际执行了什么、通过了什么，还有哪些没有验证。' },
    { title: '给下一次修改，留下可用的起点。', need: '项目继续往前走，需要有旧聊天之外的依据。', detail: '把有用的要求、重要选择和检查方法保存在项目中。后续任务可以沿用这些约定，继续更新同一套相关文档。' },
  ],
  source: '查看 Skill 的工作要求',
  sourceNote: '这里说明 Skill 提供的指导。实际执行仍取决于当前任务、工具和模型。',
  preview: {
    label: '一次真实的两轮任务', project: '拾页 / 网页收藏', first: '先加个导出', second: '再改一个地方',
    secondDetail: '换个会话，接着同一个项目做。',
    selector: '切换两次修改，查看实际成果', requestLabel: '这次想做什么 · 需求摘要',
    requestFirst: '加个导出，原来的功能要保留。', requestSecond: '再改一下：只导出我筛选出来的收藏。',
    resultFirst: '现在可以导出 CSV 了', resultSecond: '只导出筛选出来的收藏',
    imageAlt: '第一轮实际收藏工具的局部画面，显示新增的导出按钮、搜索与已有收藏。',
    imageTwoAlt: '第二轮实际工具的局部画面，搜索和分类筛选出一条收藏，导出范围随筛选变化。',
    caption: '画面来自启用 Skill 的实际项目。完整案例也列出了另一组结果、成本与限制。',
    open: '看看这次做得怎么样',
  },
  evidenceTitle: '看看一套指导，怎样进入真实的修改。',
  evidenceText: '这次收藏工具任务里，Skill 组读取原始专业指导，并在新会话中继续使用项目检查与约定。完整案例同时列出了直接使用 Agent 的结果，以及增加的时间与用量。',
  exampleTitle: '也可以直接试试一个成品。',
  exampleText: '报价计算器可以在浏览器里直接使用，帮助理解一种可能的成果。它不作为 Skill 与普通 Agent 的对照证据。',
  exampleLink: '试用报价计算器',
};
export const POSITIONING: Record<Locale, typeof en> = { en, 'zh-CN': zh };
