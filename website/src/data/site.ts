export type Locale = 'en' | 'zh-CN';
export type PageName = 'home' | 'getting-started' | 'guides' | 'examples' | 'case-study' | 'build-log';

export const PROJECT = {
  name: 'Solo Vibe Coding',
  repository: 'https://github.com/jmaxzh/solo-vibe-coding',
  origin: 'https://jmaxzh.github.io',
  base: '/solo-vibe-coding/',
  install: 'npx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding',
  author: 'jmaxzh',
  authorURL: 'https://github.com/jmaxzh',
  license: 'https://github.com/jmaxzh/solo-vibe-coding/blob/main/LICENSE',
};

export const PAGE_PATHS: Record<PageName, string> = {
  home: '', 'getting-started': 'getting-started', guides: 'guides',
  examples: 'examples/quote-calculator', 'case-study': 'case-study/bookmark-export', 'build-log': 'build-log',
};

export function href(locale: Locale, page = '', hash = '') {
  return `${PROJECT.base}${locale === 'en' ? '' : 'zh-CN/'}${page ? page.replace(/^\/+|\/+$/g, '') + '/' : ''}${hash ? '#' + hash : ''}`;
}

export const FIRST_PROMPT: Record<Locale, string> = {
  en: 'Use $solo-vibe-coding to make a project quote calculator.\nI want to enter hours, an hourly rate, extra costs, and a reserve percentage, then see the total update. It should work on my phone and let me download a breakdown.\nRecommend a suitable approach. Ask me about choices that affect what it does, costs, or who can access it.\nBuild a first version I can open and try. Check the calculations and invalid inputs, tell me how to open it, and help me make changes.',
  'zh-CN': '使用 $solo-vibe-coding，帮我做一个项目报价小工具。\n我想输入工时、单价、额外费用和预留比例，就能看到总额更新。手机上也能用，还能下载报价明细。\n请推荐合适的做法。会影响用途、费用或公开范围的选择，用我能理解的方式让我确认。\n先做出一版能打开试用的成果，实际检查计算和错误输入，告诉我怎么打开，再陪我继续修改。',
};

const en = {
  nav: { 'getting-started': 'Get started', guides: 'Ways to use it', examples: 'Try an example', 'case-study': 'A real task', 'build-log': 'Updates', github: 'GitHub' },
  skip: 'Skip to content', switchLanguage: '切换到中文', language: '中文',
  copy: 'Copy', copied: 'Copied', copyFailed: 'Select and copy the text',
  terminal: 'Terminal', installationCommand: 'Installation command',
  footer: 'For the things you want to build, improve and put out into the world.',
  footerLicense: 'The skill is open source under MIT. Your coding assistant and other services have their own terms.',
  footerSource: 'GitHub', footerTop: 'Back to top',
  hero: {
    context: 'An open-source skill for your coding assistant',
    title: 'Build it sooner.', accent: 'Make it worth sharing.',
    description: 'From a working app to a real release and your first users. Put specialist guidance and suitable foundations into the assistant you already use, and work through the part you are stuck on.',
    primary: 'Add it to my assistant', secondary: 'Find my task',
    note: 'Free and open source. Work in your own project.',
  },
  home: {
    installTitle: 'Start with the task in front of you.',
    installText: 'Bring your project, what you want to achieve and where you are stuck. Add the skill, then use a starting request that fits the task.',
    installLink: 'Add it to my assistant',
    faqTitle: 'Before you start.',
    faq: [
      { question: 'Do I need to know how to code?', answer: 'You can start by explaining what you want. The skill helps your coding assistant handle requirements, design, technical choices, implementation, and checks. You still need to set up a supported assistant and confirm the choices that matter to you.' },
      { question: 'What can I make with it?', answer: 'Start with a website, a small tool, or a feature in an existing project. It can also help improve a design, fix a problem, publish a result, or explain your product to other people.' },
      { question: 'I already have an agent. What does this add?', answer: 'You may know the goal without knowing which marketing, design or engineering methods to ask for. The skill gives your assistant task-specific guidance, relevant resources and shared rules for reuse, checks and project context. It works with the model you already use.' },
      { question: 'How is this different from a long prompt or several skills?', answer: 'A detailed prompt can express similar requirements. Solo Vibe Coding organizes task entry points, original guidance and resources in one install, with shared rules for quality and project context. You can use one task independently; you do not have to run every topic each time.' },
      { question: 'Will it always be faster or produce better code?', answer: 'We do not promise that. A capable agent may already do these things, and reading guidance takes time and tokens. Judge the task, the result and the extra work together. The case study reports this small comparison and its limits.' },
      { question: 'Where do I use the skill?', answer: 'In an AI coding assistant that supports Agent Skills and can work with your project files and the web. The getting-started guide includes Codex and Claude Code instructions. The example on this website runs directly in your browser.' },
      { question: 'Is it free?', answer: 'The skill itself is free and open source under MIT. Your coding assistant, hosting, APIs, or other services may have their own charges. Ask the assistant to explain any costs before choosing a service.' },
      { question: 'Will it build anything without my involvement?', answer: 'You describe the goal, try the result, and confirm important choices. Some tasks also need accounts, tools, or access that you provide. Start with a small version you can actually use and expand from there.' },
    ],
  },
  getting: {
    title: 'Start with your own project.',
    description: 'Add Solo Vibe Coding to your coding assistant and start a repair, mobile redesign, release or first-user task in your own project.',
    intro: 'Fix a bug, redesign a mobile app, get a demo live or prepare a first launch. Install the skill, then choose a request that fits what you actually want to do.',
    beforeTitle: 'Open your coding assistant',
    beforeText: 'Open a project folder in the assistant you use to make things. It needs to be able to edit files and access the web. The main path below uses Codex CLI or the IDE extension.',
    noAssistant: 'New to coding assistants? Install and open Codex CLI with the official guide.',
    installTitle: 'Add the skill to this project',
    installText: 'Send the following message to Codex. It asks the assistant to check the setup and install the skill for you.',
    setupPrompt: 'Please add Solo Vibe Coding to this project for Codex.\nCheck that Node.js 22.20+ and npm are available. If something is missing, give me the steps to prepare it.\nThen run:\nnpx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding --agent codex --yes\nTell me whether installation succeeded and how to select the skill.',
    activation: 'In Codex CLI or the IDE extension, type $ to select solo-vibe-coding, or open /skills. If the new skill is not listed, restart Codex and open the same project.',
    otherAssistant: 'I use Claude Code or another assistant',
    claudeText: 'For Claude Code, run the command below in the project folder. Then enter /solo-vibe-coding followed by your request. For another assistant, use the general installation command and choose your assistant when prompted.',
    manualTitle: 'I prefer to install in the terminal',
    manualText: 'In your project folder, use Node.js 22.20+ and npm to run this command. Installation is for this project by default; add -g for use across projects.',
    firstTitle: 'Choose the task you want to finish',
    firstText: 'Send this request in Codex, or select the installed skill in your assistant and use the same project description. In Claude Code, start with /solo-vibe-coding instead of the $ mention.',
    reviewTitle: 'Open the result and try it',
    reviewText: 'Ask how to open the result, then check the basics for the task you chose:',
    checks: ['Does it address the problem you started with?', 'Open it and complete the main user journey.', 'For a page, try it on a phone too.', 'Find out what was actually checked and what still needs confirmation.'],
    continueTitle: 'Make it yours',
    continueText: 'Point to the gap between the result and your goal. Share a concrete screen or a failing action. Ask the assistant to continue in the same project and check the affected parts.',
    troubleTitle: 'Something got in the way?',
    troubleText: 'Paste the message below into your coding assistant, together with the error or a description of what you see.',
    troublePrompt: 'I am trying to use Solo Vibe Coding and I am stuck here:\n[Paste the message or describe what happened.]\nPlease check the cause and help me continue one step at a time. Explain what I need to do in plain language.',
    next: 'Find a request for another task',
    sources: 'Assistant setup help',
    codexDocs: 'Codex skills help', claudeDocs: 'Claude Code skills help',
  },
  guides: {
    title: 'What would you like to make happen?',
    description: 'Find a starting request for a new website or tool, a feature, a design improvement, a fix, publishing, or sharing your product.',
    intro: 'Pick a goal that sounds like yours. Copy the request and add your own details. You can ask the assistant to work out the steps and recommend an approach.',
    prompt: 'Copy into your coding assistant', output: 'What to ask for first', confirm: 'What you can confirm',
    next: 'Get set up and try your first task',
  },
  example: {
    title: 'Try a working quote calculator.',
    description: 'Try a working quote calculator with editable hours, rates, costs, reserve, and spreadsheet export. This illustrates a possible result; the separate case study examines the skill in use.',
    intro: '“I want a small tool that calculates a project quote and works on my phone.” Here is a working example. Change the values, then download the breakdown.',
    promptTitle: 'Want your own version?',
    promptText: 'Add Solo Vibe Coding to your coding assistant, then send this request. Replace the details with what you need.',
    howTitle: 'What you can check yourself',
    checks: ['Changing an input changes the estimate.', 'Invalid or missing values show a clear message.', 'The layout works on a phone.', 'The downloaded breakdown opens in a spreadsheet.'],
    next: 'Make your own with the walkthrough',
    explanation: 'The example calculates in your browser. Its values are not sent to a server. To make your own tool, use the skill in your coding assistant.',
  },
  calculator: {
    title: 'Project quote', hours: 'Hours', rate: 'Rate per hour', extras: 'Extra costs', reserve: 'Reserve (%)',
    total: 'Estimated total', base: 'Work + extra costs', reserveAmount: 'Reserve',
    formula: 'Hours × rate + extra costs, then add the reserve.',
    download: 'Download breakdown', filename: 'project-quote.csv', invalid: 'Enter valid values of zero or more. Reserve must be between 0 and 100%.',
    noJS: 'Enable JavaScript to change the values. The starting example and calculation are shown here.',
    success: 'Breakdown downloaded.', currency: 'USD', defaultRate: 50,
    messages: { missing: 'Enter a value for {field}.', range: '{field} must be between {min} and {max}.', precision: '{field} supports up to two decimal places.' },
    csv: ['Item', 'Value', 'Currency', 'Hours', 'Rate per hour', 'Extra costs', 'Reserve (%)', 'Subtotal', 'Reserve amount', 'Total'],
  },
  log: {
    title: 'More things you can try.',
    description: 'See new Solo Vibe Coding examples and improvements, what you can use, and how to get started with your own project.',
    intro: 'New examples, useful improvements, and ways to put them to work.',
    read: 'See what you can try', all: 'All updates', author: 'By', related: 'Make your first thing', status: 'Available to try',
  },
  notFound: {
    title: '404 — This page took a different path.', description: 'Find your way back to Solo Vibe Coding and its examples.',
    text: 'The page may have moved, or the address may be incomplete.', home: 'Back to the homepage',
  },
};

const zh: typeof en = {
  nav: { 'getting-started': '怎么开始', guides: '使用场景', examples: '实际示例', 'case-study': '真实任务', 'build-log': '最新更新', github: 'GitHub' },
  skip: '跳到正文', switchLanguage: 'Switch to English', language: 'EN',
  copy: '复制', copied: '已复制', copyFailed: '请选中文字后复制', terminal: '终端', installationCommand: '安装命令',
  footer: '把想做的东西做出来，也把卡住的地方往前推一步。',
  footerLicense: 'Skill 采用 MIT 开源许可。编程助手与其他服务按各自条款提供。', footerSource: 'GitHub', footerTop: '回到顶部',
  hero: {
    context: '一个给编程助手用的开源 Skill',
    title: '快点做出来，', accent: '也做得像样。',
    description: '从能用的 App，到真正上线，再到第一批用户。给你常用的编程助手加上成熟做法和现成参考，把卡住的这一段做完。',
    primary: '加到我的编程助手', secondary: '找找我的场景', note: '免费开源，在你自己的项目里使用。',
  },
  home: {
    installTitle: '从你现在卡住的那件事开始。',
    installText: '带上已有项目、想达到的结果和眼前的问题。装好 Skill，选一段贴近自己情况的需求，接着往前做。',
    installLink: '加到我的编程助手', faqTitle: '开始之前，你可能还想知道。',
    faq: [
      { question: '需要会写代码吗？', answer: '你可以先说明自己想做什么。这个 Skill 帮助编程助手处理需求、设计、技术选择、实现与检查。你仍需要准备支持的编程助手，并确认真正影响自己的选择。' },
      { question: '可以用它做什么？', answer: '可以从网站、小工具或现有项目的新功能开始，也可以改善界面、修复问题、把成果发布给别人使用，或把产品介绍清楚。' },
      { question: '已经有 Agent，加这个 Skill 多了什么？', answer: '你知道要什么，未必知道该要求助手用哪些营销、设计或工程方法。Skill 把任务接到相关专业指导和现成资源，并提供复用、检查和保留项目背景的共同要求，交给你已有的模型执行。' },
      { question: '和一段长提示词、自己装多个 Skill 有何不同？', answer: '足够详细的提示词也能表达类似要求。Solo Vibe Coding 把任务入口、原始指导与资源整理到一次安装中，并共用质量和项目约定。各类任务可以独立进入，按需要选用。' },
      { question: '装了就一定更快、代码一定更好吗？', answer: '不作这样的保证。能力强的 Agent 也可能已经做到这些，读取指导也需要时间与用量。应把实际任务结果和增加的工作一起考虑。案例会说明这次小规模比较的结果与范围。' },
      { question: '这个 Skill 在哪里使用？', answer: '在支持 Agent Skills、能操作项目文件和访问网络的 AI 编程助手中使用。上手指南提供 Codex 和 Claude Code 的安装方式。网站上的报价示例可以直接在浏览器试用。' },
      { question: '免费吗？', answer: 'Skill 本身免费、开源，采用 MIT 许可。你使用的编程助手、托管平台、API 或其他服务可能单独收费。可以先让助手说明费用，再选择要使用的服务。' },
      { question: '装上以后，就完全不用我参与了吗？', answer: '你负责描述目标、试用成果，并确认重要选择。有些任务还需要你提供账号、工具或访问条件。适合从一版能实际使用的小成果开始，再逐步扩展。' },
    ],
  },
  getting: {
    title: '从你自己的项目开始。',
    description: '在编程助手中安装 Solo Vibe Coding，从修复、移动界面、上线和首轮推广中选择任务，继续做自己的项目。',
    intro: '修好一个 Bug、改善 App 界面、把 Demo 上线，或准备首轮推广。装好 Skill，选一段贴近自己情况的需求，继续做手边的项目。',
    beforeTitle: '打开你的编程助手',
    beforeText: '在你用来做项目的助手中打开一个项目文件夹。助手需要能修改文件并访问网络。下面的主路径以 Codex CLI 或 IDE 扩展为例。',
    noAssistant: '还没用过编程助手？按官方指南安装并打开 Codex CLI。',
    installTitle: '给当前项目加上 Skill',
    installText: '把下面这段话发给 Codex，让它帮你检查环境并安装。',
    setupPrompt: '请为当前项目安装适用于 Codex 的 Solo Vibe Coding。\n先检查是否有 Node.js 22.20+ 和 npm；如果缺少，请给我具体的准备步骤。\n然后执行：\nnpx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding --agent codex --yes\n告诉我安装是否成功，以及如何在当前助手中选择这个 Skill。',
    activation: '在 Codex CLI 或 IDE 扩展中，输入 $ 选择 solo-vibe-coding，也可以打开 /skills。如果列表里还没有新 Skill，重启 Codex 后打开同一个项目。',
    otherAssistant: '我使用 Claude Code 或其他助手',
    claudeText: 'Claude Code 用户在项目文件夹运行下方命令，再输入 /solo-vibe-coding 并接上自己的需求。其他助手可以用通用安装命令，按提示选择正在使用的助手。',
    manualTitle: '我希望自己在终端安装',
    manualText: '准备好 Node.js 22.20+ 和 npm，在项目文件夹运行下方命令。默认安装到当前项目，添加 -g 可以跨项目使用。',
    firstTitle: '选一件你现在想完成的事',
    firstText: '将这段需求发给 Codex；也可以先在正在使用的助手中选择已安装的 Skill，再发送相同的需求描述。Claude Code 用户把开头的 $ 调用改为 /solo-vibe-coding。',
    reviewTitle: '打开成果，自己试一试',
    reviewText: '让助手告诉你怎样打开成果。根据刚才选的任务，确认这些基本问题：',
    checks: ['是否解决了你一开始提出的问题？', '实际打开，走完主要使用路径。', '涉及页面时，也在手机上试一试。', '问清实际验证了什么，哪些还需要确认。'],
    continueTitle: '继续改成你的样子',
    continueText: '指出实际结果与目标之间还差什么，提供具体画面或失败操作。让助手结合项目继续修改，并检查受影响的部分。',
    troubleTitle: '卡在某一步了？',
    troubleText: '把下面这段话发给编程助手，并贴上报错或描述你看到的情况。',
    troublePrompt: '我正在使用 Solo Vibe Coding，卡在这里：\n[贴上提示信息，或描述实际发生了什么。]\n请帮我检查原因，一步步继续，用容易理解的话说明需要我做什么。',
    next: '看看其他任务的需求示例', sources: '编程助手使用帮助', codexDocs: 'Codex 技能使用帮助', claudeDocs: 'Claude Code 技能使用帮助',
  },
  guides: {
    title: '你现在，想做成哪件事？',
    description: '从做一个新网站或工具、增加功能、改善设计、修复问题、发布分享或介绍产品中，找到适合自己的需求示例。',
    intro: '找一个接近自己目标的场景，复制需求并补上自己的情况。可以让助手帮助梳理步骤、推荐做法。',
    prompt: '复制到编程助手中', output: '先拿到什么', confirm: '你可以确认什么', next: '安装并开始第一件事',
  },
  example: {
    title: '先试试这个报价小工具。',
    description: '试用报价计算器，修改工时、单价、费用与预留比例并下载明细。它用于体验一种成果；另一个真实任务案例展示 Skill 的实际使用。',
    intro: '“我想做个能计算项目报价的小工具，手机上也能用。”这是一个已经能操作的示例。改改数字，再下载一份明细。',
    promptTitle: '也想做一个自己的版本？',
    promptText: '在编程助手中加入 Solo Vibe Coding，再发送这段需求。可以把内容换成你自己的用途。',
    howTitle: '这些效果，你可以自己确认',
    checks: ['改动数字后，报价会跟着更新。', '漏填或填入不合理数字时，会有清楚的提示。', '手机上也能完整操作。', '下载的明细能用表格软件打开。'],
    next: '跟着步骤，做出你的版本',
    explanation: '示例在你的浏览器中计算，不会把填写的数据发到服务器。制作自己的工具，需要在编程助手中使用 Skill。',
  },
  calculator: {
    title: '项目报价', hours: '预计工时', rate: '每小时单价', extras: '额外费用', reserve: '预留比例（%）',
    total: '估算总额', base: '工时费用＋额外费用', reserveAmount: '预留金额', formula: '工时 × 单价，加上额外费用，再计算预留金额。',
    download: '下载报价明细', filename: '项目报价.csv', invalid: '请填写范围内不小于 0 的有效数字，预留比例为 0–100%。',
    noJS: '启用 JavaScript 后可以修改数字。这里保留了初始示例和计算方式。', success: '明细已下载。', currency: 'CNY', defaultRate: 300,
    messages: { missing: '请填写{field}。', range: '{field}需要在 {min}–{max} 之间。', precision: '{field}最多保留两位小数。' },
    csv: ['项目', '数值', '币种', '预计工时', '每小时单价', '额外费用', '预留比例（%）', '小计', '预留金额', '总额'],
  },
  log: {
    title: '又有一些东西，可以试试了。',
    description: '看看 Solo Vibe Coding 新增了哪些可试用示例、有哪些改进，以及怎样用到自己的项目中。',
    intro: '新的示例、具体的改进，以及你可以怎样使用。',
    read: '看看可以试什么', all: '全部更新', author: '作者', related: '做出你的第一版', status: '可以试用',
  },
  notFound: { title: '404 — 这条路径暂时没有内容。', description: '返回 Solo Vibe Coding 首页，继续查看示例和使用方式。', text: '页面可能已经移动，或当前地址不完整。', home: '返回首页' },
};

export const UI: Record<Locale, typeof en> = { en, 'zh-CN': zh };

export type Scenario = { id: string; label: string; title: string; summary: string; prompt: string; output: string; confirm: string; };
export const SCENARIOS: Record<Locale, Scenario[]> = {
  en: [
    { id: 'requirements', label: 'Make something new', title: 'A website or a small tool you wish existed.', summary: 'Start with what it should do and who will use it. Ask the assistant to recommend a small first version.', prompt: 'Use $solo-vibe-coding to build the first usable version of this product.\nProduct direction, users and core task: [add the details].\nAssess suitable existing work and mature foundations, define one complete user journey and appropriate checks, then deliver a version I can open and try. Explain choices that affect cost or access and ask me to confirm them.', output: 'A first version you can open and try, with instructions to run it.', confirm: 'Does it do the thing you wanted? Is it clear how to use it?' },
    { id: 'architecture', label: 'Add a feature', title: 'Make your existing tool do one more useful thing.', summary: 'Describe the behaviour you want. The assistant can inspect the project and recommend how to fit it in.', prompt: 'Use $solo-vibe-coding to add a download button to my quote tool.\nI want a spreadsheet-friendly breakdown of the current numbers. Keep the existing look.\nRecommend an approach, build it, and check the downloaded values.', output: 'A working feature in your existing project.', confirm: 'Can you complete the new action, and do the old functions still work?' },
    { id: 'design', label: 'Improve the look', title: 'Make your page easier to understand and use.', summary: 'Show the page and explain the impression or experience you want.', prompt: 'Use $solo-vibe-coding to improve this page for the people who use it.\nMake the main action easier to find and the mobile layout easier to read.\nKeep the brand. Give me a version I can preview and compare.', output: 'An updated page you can preview on desktop and mobile.', confirm: 'Can you find the main action and read the important information?' },
    { id: 'development', label: 'Fix a problem', title: 'Get something that broke working again.', summary: 'Describe what you expected, what happened, and any error message. Let the assistant help investigate.', prompt: 'Use $solo-vibe-coding to fix this problem:\n[What I expected, what actually happened, and any message.]\nFind the cause, make the fix, and check that the original action works again.', output: 'A fix with a way to repeat and check the action.', confirm: 'Can you now do what failed before?' },
    { id: 'deployment', label: 'Share it with people', title: 'Give someone a link they can actually open.', summary: 'Explain who should be able to use the result and whether it should be public.', prompt: 'Use $solo-vibe-coding to help me share this website with other people.\nRecommend a suitable way to publish it and explain any costs.\nConfirm who can access it before publishing, then check the live address.', output: 'A published result and a checked link, when accounts and access are ready.', confirm: 'Can the intended people open the link and use the result?' },
    { id: 'growth', label: 'Explain your product', title: 'Help the right people see what they can do with it.', summary: 'Describe who it is for and show what actually works.', prompt: 'Use $solo-vibe-coding to improve this product page for its intended users.\nExplain what they can achieve, show actual examples, and give them a clear way to start.\nUse only capabilities and results we can show.', output: 'A user-focused page or message with concrete examples.', confirm: 'Would someone new understand what they can do and how to begin?' },
  ],
  'zh-CN': [
    { id: 'requirements', label: '做一个新东西', title: '一个你一直想要的网站或小工具。', summary: '说明它要做什么、给谁用，让助手推荐一个适合先做出来的小版本。', prompt: '使用 $solo-vibe-coding，做出这个产品的第一个可用版本。\n产品方向、用户与核心任务：[补充说明]。\n评估合适的已有工作与成熟基础，明确一条完整使用流程和适当检查，再交付能打开试用的版本。涉及费用或访问范围的选择，说明后让我确认。', output: '可以打开试用的第一版，以及具体使用方法。', confirm: '它是否做到了你想要的事？你是否知道怎样使用？' },
    { id: 'architecture', label: '加一个功能', title: '让已有的工具，多做一件有用的事。', summary: '描述想增加的行为，助手查看项目情况，推荐合适的接入方式。', prompt: '使用 $solo-vibe-coding，给我的报价工具加一个下载按钮。\n我希望把当前数字下载成表格软件能打开的明细，保留现有外观。\n请推荐做法、完成实现，并核对下载的数值。', output: '已经接入现有项目、可以实际操作的新功能。', confirm: '新操作是否能完成？原来的功能是否仍然能用？' },
    { id: 'design', label: '改善外观和体验', title: '让页面更容易看懂，也更好用。', summary: '提供现有页面，说明你希望用户感受到什么、完成什么。', prompt: '使用 $solo-vibe-coding，为实际使用它的人改善这个页面。\n让主要操作更容易找到，手机上也能清楚阅读。\n保留品牌，给我一版能预览和对比的结果。', output: '可以在电脑和手机预览的更新页面。', confirm: '主要操作是否好找？重要内容是否容易阅读？' },
    { id: 'development', label: '修好一个问题', title: '让原本出错的地方，重新正常工作。', summary: '说明原本希望发生什么、实际发生什么，附上报错信息，让助手协助排查。', prompt: '使用 $solo-vibe-coding，帮我修好这个问题：\n[我原本想做什么、实际发生什么，以及提示信息。]\n请查明原因、完成修复，并实际确认原来的操作能正常进行。', output: '完成修复，并能重复原操作进行确认。', confirm: '之前失败的那件事，现在能不能完成？' },
    { id: 'deployment', label: '发给别人使用', title: '拿到一个别人真正能打开的链接。', summary: '说明希望谁能使用，以及是否需要公开。', prompt: '使用 $solo-vibe-coding，帮我把这个网站发给别人使用。\n请推荐适合的发布方式，并说明可能的费用。\n发布前让我确认谁可以访问，发布后实际检查网址是否可用。', output: '在账号和权限准备好后，得到发布成果与核验过的链接。', confirm: '希望使用它的人，能不能打开链接并完成操作？' },
    { id: 'growth', label: '把产品介绍清楚', title: '让合适的人知道，自己可以用它做什么。', summary: '说明目标用户，提供已经能工作的成果。', prompt: '使用 $solo-vibe-coding，为实际用户改善这个产品介绍页。\n说清他们能做成什么，展示真实示例，提供明确的开始方式。\n只使用能展示的能力与成果。', output: '围绕用户用途、有具体示例的页面或介绍内容。', confirm: '第一次来的人，能不能看懂用途并知道怎样开始？' },
  ],
};

export function pageMetadata(locale: Locale, page: PageName) {
  const ui = UI[locale];
  const titles: Record<PageName, string> = {
    home: `${PROJECT.name} — ${locale === 'en' ? 'Build your product with specialist guidance' : '做出你想要的产品，把卡住的地方往前推一步'}`,
    'getting-started': `${ui.nav['getting-started']} — ${PROJECT.name}`,
    guides: `${ui.nav.guides} — ${PROJECT.name}`,
    examples: `${locale === 'en' ? 'Try the quote calculator' : '试用报价计算器'} — ${PROJECT.name}`,
    'case-study': `${locale === 'en' ? 'A bookmark tool, two changes' : '给收藏工具加导出，再接着改一次'} — ${PROJECT.name}`,
    'build-log': `${ui.nav['build-log']} — ${PROJECT.name}`,
  };
  const descriptions: Record<PageName, string> = {
    home: locale === 'en' ? 'Break out of a bug loop, redesign a generic mobile app, get a demo live or reach your first users. One open-source skill brings relevant professional guidance to the assistant you already use.' : '修 Bug 总在兜圈、App 一股模板味、Demo 迟迟上不了线、做好的产品找不到用户？给编程助手加上 Solo Vibe Coding，按任务用上专业做法和现成参考。',
    'getting-started': ui.getting.description, guides: ui.guides.description, examples: ui.example.description, 'build-log': ui.log.description,
    'case-study': locale === 'en' ? 'Follow a real bookmark export task and a fresh-session change. See how Solo Vibe Coding was used, what was checked, and the limits of the comparison.' : '查看一次收藏导出和新会话追加修改的真实任务：Solo Vibe Coding 实际用了哪些指导、验证了什么，以及这次对照能说明和不能说明什么。',
  };
  return { title: titles[page], description: descriptions[page] };
}
