import type { Locale } from './site';

export interface Outcome {
  id: 'growth' | 'design' | 'requirements' | 'deployment';
  label: string;
  goal: string;
  pain: string;
  situation: string;
  help: { title: string; text: string }[];
  deliverables: string[];
  previewTitle: string;
  previewText: string;
  checks: string[];
  prompt: string;
}

export const OUTCOMES: Record<Locale, Outcome[]> = {
  en: [
    {
      id: 'growth', label: 'A website that explains the value',
      goal: 'Give my existing product a website that makes people want to try it.',
      pain: 'Three redesigns. Still hard to explain why it matters.',
      situation: 'The features are listed. The page looks finished. But a newcomer still cannot tell what it would help them do. You are left deciding what to say, which example to show, and what to change next.',
      help: [
        { title: 'Find the reason to care', text: 'Use positioning guidance to connect a specific audience, the problem they face, and what they can achieve with the product.' },
        { title: 'Make the value visible', text: 'Choose a representative task and real evidence. Write the message and arrange the page around what the visitor needs to understand.' },
        { title: 'Make the page work', text: 'Choose a visual direction, implement it in your existing project, and check the mobile layout and path to getting started.' },
      ],
      deliverables: ['A clear opening message', 'A demonstration that explains the use', 'A website for desktop and mobile'],
      previewTitle: 'A clear reason to try your product.',
      previewText: 'Who it helps. Where they get stuck. What they can do with it.',
      checks: ['Can a newcomer explain what the product helps them do?', 'Can they find a relevant example and a clear way to start?'],
      prompt: 'Use $solo-vibe-coding to improve the website for my existing product.\nProduct and intended users: [add the details or point to the project].\nThe problem now: people can see the features, but not why they would use it.\nHelp me identify the concrete user problem, choose a representative demonstration, and turn them into copy and a website that works on desktop and mobile. Use real capabilities and evidence.\nReuse the project and suitable existing work. Explain important choices, then build a version I can open and try. Tell me what you checked and what still needs validation.',
    },
    {
      id: 'design', label: 'An interface worth showing',
      goal: 'Make my working product look considered and feel easy to use.',
      pain: '“Make it look better” keeps producing another template.',
      situation: 'The colours and corners change, but the page still feels wrong. You can tell something is off without knowing how to explain the layout, type or interaction it needs.',
      help: [
        { title: 'Give the design a direction', text: 'Start from the product, its users and concrete references. Turn “better” into decisions about composition, type, density and interaction.' },
        { title: 'Apply it to your product', text: 'Keep the existing brand, stack and useful components. Improve the actual screens rather than stopping at a concept image.' },
        { title: 'Try the real experience', text: 'Check the main action, mobile layout, keyboard use and relevant empty or error states.' },
      ],
      deliverables: ['A coherent visual direction', 'Implemented, usable screens', 'Desktop and mobile previews'],
      previewTitle: 'The important action is easy to find.',
      previewText: 'A clear hierarchy. Room for real content. Feedback when it matters.',
      checks: ['Is the main action easy to find and complete?', 'Do the actual content and important states work on a phone?'],
      prompt: 'Use $solo-vibe-coding to redesign this existing interface.\nPage and intended users: [add a link, file or description].\nIt works, but it feels generic, and asking for a better-looking version has not helped.\nUse concrete references to propose a visual direction suited to the product. Explain the important layout and interaction choices. Keep the existing brand and technology unless a change has a clear reason.\nImplement a version I can open and try. Check desktop, mobile and the main interaction states, and tell me what remains unverified.',
    },
    {
      id: 'requirements', label: 'A first version people can use',
      goal: 'Ship a useful first version of the product I already have in mind.',
      pain: 'Lots of pieces built. Still no complete way to use them.',
      situation: 'The feature list keeps growing. Basic building blocks are written from scratch, while users still cannot finish the one thing the product is for. You do not know which foundations already exist or what can wait.',
      help: [
        { title: 'Finish one useful journey', text: 'Work out what a user must be able to complete. Separate the first usable version from the features that can come later.' },
        { title: 'Start from a suitable foundation', text: 'Look at existing code and mature open-source options. Consider fit, maintenance, licensing and total cost before building missing pieces.' },
        { title: 'Check the whole task', text: 'Set appropriate quality checks and verify the core journey, including relevant failure cases.' },
      ],
      deliverables: ['A focused first-release scope', 'A suitable foundation and reasons', 'A working core user journey'],
      previewTitle: 'One complete task, end to end.',
      previewText: 'Submit something. Get the result. Save it for later.',
      checks: ['Can a user finish the core task from beginning to end?', 'Are the setup, limitations and checks clear?'],
      prompt: 'Use $solo-vibe-coding to build the first usable version of this product.\nProduct direction: [what it is, who it helps, and the task they need to finish].\nExisting project and constraints: [add what you have].\nHelp me define one complete core user journey and decide what can wait. Assess suitable existing code or mature open-source foundations before building from scratch.\nExplain choices that affect behaviour, cost or access and ask me to confirm them. Establish appropriate checks, then deliver a version I can open and try, with setup steps and clear verification results.',
    },
    {
      id: 'deployment', label: 'A release others can actually use',
      goal: 'Publish my working product and give people a link they can use.',
      pain: 'It runs on my machine. Is it ready for someone else?',
      situation: 'A successful build leaves questions unanswered: will the public link load, will the important operations work, and what happens if this release goes wrong?',
      help: [
        { title: 'Use the right release setup', text: 'Reuse the hosting and workflow already in place. Fill configuration gaps and explain costs and who will be able to access the result.' },
        { title: 'Check the actual release', text: 'Open the published address and exercise the important user path. Separate a successful build from a checked live result.' },
        { title: 'Leave a way to continue', text: 'Report what was released, what was verified and what remains. Keep the deployment and rollback instructions with the project.' },
      ],
      deliverables: ['A published address', 'Checks on the live user journey', 'Release and rollback instructions'],
      previewTitle: 'A release you know how to check.',
      previewText: 'The public address. The essential actions. A way back if needed.',
      checks: ['Can the intended people open the link and finish the main task?', 'Do you know what was checked and how to recover?'],
      prompt: 'Use $solo-vibe-coding to help publish this existing product.\nProject, current hosting and intended users: [add the details].\nInspect and reuse the existing deployment setup. Ask me to confirm costs and access choices before acting.\nPrepare the release and a practical rollback path. Publish within the permissions I give you, then open the actual public address and check the important user journey.\nReport the release, live address, checks and remaining gaps. Keep the instructions in the project.',
    },
  ],
  'zh-CN': [
    {
      id: 'growth', label: '把产品价值讲清楚',
      goal: '给已有产品做个官网，让合适的人愿意试。',
      pain: '官网改了三版，还是说不清为什么值得用。',
      situation: '功能介绍写了不少，页面看起来也完成了。别人看完，还是不知道它能帮自己做什么。该抓哪个痛点、选哪个案例、第一屏讲什么，又得你来判断。',
      help: [
        { title: '找到用户在意的事', text: '结合营销定位方法，明确给谁用、他们卡在哪里，以及用了产品能做成什么。' },
        { title: '把价值变得看得见', text: '选择能体现用途的任务和真实证据，再组织文案、案例和页面顺序。' },
        { title: '落实成能用的页面', text: '确定视觉方向，在现有项目里实现，检查手机版和开始使用的路径。' },
      ],
      deliverables: ['讲清价值的首屏文案', '体现用途的演示案例', '电脑和手机都能用的官网'],
      previewTitle: '让人看懂，为什么值得试。',
      previewText: '给谁用。卡在哪里。用了能做成什么。',
      checks: ['第一次来的人，能不能说清产品帮自己做什么？', '能不能找到相关案例，以及明确的开始方式？'],
      prompt: '使用 $solo-vibe-coding，改善我已有产品的官网。\n产品和目标用户：[补充说明，或指向现有项目]。\n现在的问题：别人能看到功能，却看不出为什么值得用。\n请帮我找准具体的用户痛点，选择能体现用途的演示，再落实成文案和电脑、手机都能用的官网。只使用真实能力和证据。\n沿用现有项目和合适的成熟方案。说明重要选择，做出能打开试用的版本，告诉我实际检查了什么，还有什么需要验证。',
    },
    {
      id: 'design', label: '把界面做得像样',
      goal: '让已经能用的产品，看起来用心，操作起来顺手。',
      pain: '说了几遍“高级一点”，还是一股模板味。',
      situation: '颜色换了，圆角加了，页面还是不对劲。你看得出不好，却说不清该怎么改排版、字体和交互，最后又是一轮来回解释。',
      help: [
        { title: '把“好看”变成明确方向', text: '从产品、用户和具体参考出发，确定布局、字体、信息密度和交互上的选择。' },
        { title: '改到你的实际产品里', text: '保留已有品牌、技术和合适组件，直接改善实际页面，交付可操作的实现。' },
        { title: '把真实体验走一遍', text: '检查主要操作、手机布局、键盘使用，以及相关的空白和错误状态。' },
      ],
      deliverables: ['有依据的视觉方向', '已经实现的可用页面', '电脑与手机预览'],
      previewTitle: '重要的操作，一眼就能找到。',
      previewText: '层级清楚。内容放得下。操作有回应。',
      checks: ['主要操作是否容易找到，并且能完成？', '手机上能否容纳真实内容，处理重要状态？'],
      prompt: '使用 $solo-vibe-coding，重新设计这个已有界面。\n页面和目标用户：[补充链接、文件或说明]。\n现在能用，但看起来很普通，反复说“好看一点”也没有改善。\n请用具体参考提出适合产品的视觉方向，说明关键的布局和交互选择。保留已有品牌与技术；需要改变时说明理由。\n落实成能打开试用的版本，检查电脑、手机和主要交互状态，告诉我哪些还没有验证。',
    },
    {
      id: 'requirements', label: '做出可用的第一版',
      goal: '把已经想清楚的产品，先做出一版给人用。',
      pain: '功能做了一堆，用户还是走不完一个流程。',
      situation: '想做的功能越来越多，基础能力又从头写。核心任务迟迟没做完，你也不知道哪些可以用现成方案、哪些应该留到以后。',
      help: [
        { title: '先完成一条有用的流程', text: '梳理用户从开始到完成任务需要的步骤，划清第一版和后续功能。' },
        { title: '从合适的成熟基础开始', text: '先看现有代码和成熟开源方案，考虑适配、维护、许可和总成本，再补缺少的部分。' },
        { title: '确认整件事真的能完成', text: '建立适当检查，验证核心使用流程和相关的失败情况。' },
      ],
      deliverables: ['明确的第一版范围', '合适的基础方案与理由', '可以走完的核心使用流程'],
      previewTitle: '让用户完整做成一件事。',
      previewText: '提交内容。得到结果。保存下来。',
      checks: ['用户能否从头到尾完成核心任务？', '是否清楚怎么运行、有哪些限制、验证了什么？'],
      prompt: '使用 $solo-vibe-coding，帮我做出这个产品的第一个可用版本。\n产品方向：[做什么、给谁用、他们需要完成什么任务]。\n已有项目和约束：[补充现状]。\n请先梳理一条完整的核心使用流程，明确哪些功能可以以后做。优先评估现有代码和成熟开源方案，再实现缺少的部分。\n会影响用途、费用或访问范围的选择，说明后让我确认。建立适当检查，交付能打开试用的版本、运行方式和真实验证结果。',
    },
    {
      id: 'deployment', label: '发布给别人使用',
      goal: '把已经能用的产品，发给真正要用它的人。',
      pain: '本地能跑，交给别人之前心里还是没底。',
      situation: '构建通过了，但公开网址能不能打开、关键操作会不会出错、这次发布有问题该怎么退回，这些还没有答案。',
      help: [
        { title: '用适合项目的发布方式', text: '沿用现有托管与流程，补齐配置；涉及费用和访问范围时，把选择说明白。' },
        { title: '检查真正发布的版本', text: '打开公开地址，走一遍关键使用路径，分别说明构建和线上检查的结果。' },
        { title: '留下继续维护的依据', text: '交代发布版本、验证情况和遗留问题，把部署和回退方法保存在项目里。' },
      ],
      deliverables: ['别人能访问的网址', '线上关键路径的检查结果', '部署与回退说明'],
      previewTitle: '发出链接，也知道该怎么检查。',
      previewText: '公开网址。关键操作。必要时退回上一版。',
      checks: ['希望使用它的人，能否打开链接并完成主要操作？', '是否知道检查了什么，以及出了问题怎样恢复？'],
      prompt: '使用 $solo-vibe-coding，帮我发布这个已有产品。\n项目、现有托管和目标用户：[补充说明]。\n先检查并沿用已有部署方式，涉及费用和访问范围时让我确认。\n准备发布和可用的回退方案，在我授权的范围内执行。发布后打开实际公开地址，检查关键使用路径。\n交代发布版本、网址、检查结果和剩余问题，把操作说明保存在项目中。',
    },
  ],
};

const en = {
  stageTitle: 'Start where you are stuck.',
  selector: 'Choose what you want to work on',
  goal: 'What you want', help: 'How the skill helps your assistant',
  deliverables: 'What to ask it to deliver', preview: 'Illustration of the intended result',
  start: 'Start with this task',
  mechanismTitle: 'You know the goal. Let your assistant work out the approach.',
  mechanismText: 'The skill connects your task to relevant professional guidance and ready-made resources. Your assistant applies them to your project; you describe the goal, try the result and decide the important tradeoffs.',
  mechanisms: [
    { title: 'Find a useful starting point', text: 'Your assistant selects guidance for the current task, reads the original methods, and looks for relevant examples. You can start with what you want to achieve.' },
    { title: 'Use what already fits', text: 'Keep your project, brand and technology. Assess suitable existing work and mature foundations before spending time on custom implementation.' },
    { title: 'Know what you are getting', text: 'Set appropriate checks, report what actually ran, and leave useful requirements and decisions in the project for the next change.' },
  ],
  source: 'See the skill’s instructions',
  evidenceTitle: 'See what has actually been built.',
  evidenceText: 'Try a working output or inspect an execution record. Each shows a different part of the work.',
  exampleTitle: 'Open a working quote calculator', exampleText: 'Change the numbers and download a breakdown. A small working example, rather than evidence of a speed advantage.', exampleLink: 'Try the calculator',
  caseTitle: 'Read a two-round execution record', caseText: 'A bookmark export task, followed by a change in a new session. Both groups finished; the skill group used more time and tokens. The record shows the guidance used, the checks and the limits.', caseLink: 'Open the complete record',
  allTasks: 'Other things you can work on',
  gettingNav: 'Choose your first task', gettingNote: 'Install the skill above, then send the request for your task. Replace the brackets with your project details.',
  installFirst: 'Go to installation', checksTitle: 'Check the result yourself',
};
const zh: typeof en = {
  stageTitle: '从你卡住的地方开始。',
  selector: '选择你现在想做的事',
  goal: '你想做什么', help: 'Skill 帮助手补上这些判断',
  deliverables: '这次希望拿到', preview: '交付目标示意',
  start: '从这个任务开始',
  mechanismTitle: '目标你来定，做法让助手有据可依。',
  mechanismText: 'Skill 把当前任务接到相关专业指导和现成资源，让助手用到你的项目里。你描述目标、试用成果，确认真正影响自己的选择。',
  mechanisms: [
    { title: '找到合适的起点', text: '助手按任务选择指导，读取原始方法，寻找相关案例。你可以直接从想完成的事开始。' },
    { title: '用好已经有的东西', text: '沿用你的项目、品牌和技术，优先评估合适的已有实现和成熟基础，再花精力补缺少的部分。' },
    { title: '知道交付到了哪一步', text: '建立适当检查，说明实际执行与验证情况，把有用的要求和重要选择留在项目里，方便继续修改。' },
  ],
  source: '查看 Skill 的具体指导',
  evidenceTitle: '已经做过的，打开看看。',
  evidenceText: '一个能操作的成果，一份能核对的执行记录。各自说明一部分事实。',
  exampleTitle: '打开一个可用的报价计算器', exampleText: '修改数字，下载报价明细。它是一个小型功能示例，可以直接试用。', exampleLink: '试用计算器',
  caseTitle: '查看一份两轮任务的执行记录', caseText: '给收藏工具加导出，再换会话追加修改。两组都完成了，Skill 组花了更多时间和用量。记录保留了采用的指导、检查与比较范围。', caseLink: '查看完整记录',
  allTasks: '这些事，也可以接着做',
  gettingNav: '选择你的第一个任务', gettingNote: '先完成上方安装，再发送与你任务对应的需求。把方括号换成自己的项目信息。',
  installFirst: '前往安装步骤', checksTitle: '拿到成果后，自己确认',
};
export const OUTCOME_UI: Record<Locale, typeof en> = { en, 'zh-CN': zh };
