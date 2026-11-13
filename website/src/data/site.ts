export type Locale = 'en' | 'zh-CN';
export type PageName = 'home' | 'getting-started' | 'guides' | 'examples' | 'build-log';

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
  examples: 'examples/quote-calculator', 'build-log': 'build-log',
};

export function href(locale: Locale, page = '', hash = '') {
  return `${PROJECT.base}${locale === 'en' ? '' : 'zh-CN/'}${page ? page.replace(/^\/+|\/+$/g, '') + '/' : ''}${hash ? '#' + hash : ''}`;
}

export const FIRST_PROMPT: Record<Locale, string> = {
  en: 'Use $solo-vibe-coding to make a project quote calculator.\nI want to enter hours, an hourly rate, extra costs, and a reserve percentage, then see the total update. It should work on my phone and let me download a breakdown.\nRecommend a suitable approach. Ask me about choices that affect what it does, costs, or who can access it.\nBuild a first version I can open and try. Check the calculations and invalid inputs, tell me how to open it, and help me make changes.',
  'zh-CN': '使用 $solo-vibe-coding，帮我做一个项目报价小工具。\n我想输入工时、单价、额外费用和预留比例，就能看到总额更新。手机上也能用，还能下载报价明细。\n请推荐合适的做法。会影响用途、费用或公开范围的选择，用我能理解的方式让我确认。\n先做出一版能打开试用的成果，实际检查计算和错误输入，告诉我怎么打开，再陪我继续修改。',
};

const en = {
  nav: { 'getting-started': 'Get started', guides: 'Ways to use it', examples: 'Try an example', 'build-log': 'Updates', github: 'GitHub' },
  skip: 'Skip to content', switchLanguage: '切换到中文', language: '中文',
  copy: 'Copy', copied: 'Copied', copyFailed: 'Select and copy the text',
  terminal: 'Terminal', installationCommand: 'Installation command',
  footer: 'Your ideas deserve a working first version.',
  footerLicense: 'The skill is open source under MIT. Your coding assistant and other services have their own terms.',
  footerSource: 'GitHub', footerTop: 'Back to top',
  hero: {
    context: 'A skill for the AI coding assistant you already use',
    title: 'Make the thing you have in mind.',
    description: 'Add Solo Vibe Coding to your AI coding assistant. Turn your idea for a website, tool, or feature into a first version you can open, try, and keep improving.',
    primary: 'Make your first thing', secondary: 'Try the finished example',
    note: 'Start with your goal. Work toward something you can use.',
    request: '“I want a simple tool to estimate a project quote.”',
    example: 'A working example. Change the numbers and try it.',
  },
  home: {
    introTitle: 'You bring the idea. Get help with the rest.',
    introText: 'You do not need to know every part of building a product. Add this skill to your AI coding assistant and start with the result you want.',
    principles: [
      { title: 'Know what to do next.', text: 'Describe what you want. The assistant helps turn it into a manageable first version and recommends how to get there.' },
      { title: 'See it working.', text: 'Ask for something you can open and try, with checks for the parts that matter to your task.' },
      { title: 'Keep making it yours.', text: 'Explain what you want to change. Your project keeps its context and important choices so you can continue from there.' },
    ],
    howTitle: 'From “I wish I had…” to a first version.',
    howText: 'The work happens in your coding assistant, inside your own project.',
    steps: [
      { title: 'Say what you want to make', text: 'A website, a small tool, or a new feature. Use your own words and describe who it is for.' },
      { title: 'Work through the important choices', text: 'The assistant recommends an approach. You confirm the choices that affect the result, cost, or access.' },
      { title: 'Open it, try it, and ask for changes', text: 'Get a first version and instructions to use it. Check what matters to you, then keep improving it.' },
    ],
    installTitle: 'Start with one small thing you want to make.',
    installText: 'Follow a short setup guide, then copy a complete request into your coding assistant. You can begin with the quote calculator or bring your own idea.',
    installLink: 'Walk me through it',
    faqTitle: 'Before you start.',
    faq: [
      { question: 'Do I need to know how to code?', answer: 'You can start by explaining what you want. The skill helps your coding assistant handle requirements, design, technical choices, implementation, and checks. You still need to set up a supported assistant and confirm the choices that matter to you.' },
      { question: 'What can I make with it?', answer: 'Start with a website, a small tool, or a feature in an existing project. It can also help improve a design, fix a problem, publish a result, or explain your product to other people.' },
      { question: 'How does this help beyond a normal AI chat?', answer: 'It gives your coding assistant reusable guidance for the work around your request: deciding what to build first, choosing an approach, implementing, checking, and keeping the project context. The assistant can select what is relevant to your goal.' },
      { question: 'Where do I use the skill?', answer: 'In an AI coding assistant that supports Agent Skills and can work with your project files and the web. The getting-started guide includes Codex and Claude Code instructions. The example on this website runs directly in your browser.' },
      { question: 'Is it free?', answer: 'The skill itself is free and open source under MIT. Your coding assistant, hosting, APIs, or other services may have their own charges. Ask the assistant to explain any costs before choosing a service.' },
      { question: 'Will it build anything without my involvement?', answer: 'You describe the goal, try the result, and confirm important choices. Some tasks also need accounts, tools, or access that you provide. Start with a small version you can actually use and expand from there.' },
    ],
  },
  getting: {
    title: 'Make your first working version.',
    description: 'Set up Solo Vibe Coding in your AI coding assistant, copy a complete request, and work toward a first tool you can open and try.',
    intro: 'This walkthrough uses a quote calculator as a small first project. You can also replace it with something you want to make.',
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
    firstTitle: 'Describe a complete first task',
    firstText: 'Send this request in Codex, or select the installed skill in your assistant and use the same project description. In Claude Code, start with /solo-vibe-coding instead of the $ mention.',
    reviewTitle: 'Open the result and try it',
    reviewText: 'Ask the assistant how to open the version it made. You can check these things without needing to review its code:',
    checks: ['Change the hours or rate and see whether the total changes.', 'Try an empty or negative input and check that you get a helpful message.', 'Open the result on your phone, or ask the assistant to show a mobile preview.', 'Download the breakdown and open it in a spreadsheet.'],
    continueTitle: 'Make it yours',
    continueText: 'Try: “Use my brand colours”, “Add a project name”, or “Help me share this with someone”. Explain the change you want and ask the assistant to recommend the next step.',
    troubleTitle: 'Something got in the way?',
    troubleText: 'Paste the message below into your coding assistant, together with the error or a description of what you see.',
    troublePrompt: 'I am trying to use Solo Vibe Coding and I am stuck here:\n[Paste the message or describe what happened.]\nPlease check the cause and help me continue one step at a time. Explain what I need to do in plain language.',
    next: 'Try the example before making yours',
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
    description: 'Try a working quote calculator with editable hours, rates, costs, reserve, and spreadsheet export. Copy the request to make your own with Solo Vibe Coding.',
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
  nav: { 'getting-started': '怎么开始', guides: '使用场景', examples: '实际示例', 'build-log': '最新更新', github: 'GitHub' },
  skip: '跳到正文', switchLanguage: 'Switch to English', language: 'EN',
  copy: '复制', copied: '已复制', copyFailed: '请选中文字后复制', terminal: '终端', installationCommand: '安装命令',
  footer: '让你想做的东西，有一个能用的开始。',
  footerLicense: 'Skill 采用 MIT 开源许可。编程助手与其他服务按各自条款提供。', footerSource: 'GitHub', footerTop: '回到顶部',
  hero: {
    context: '给你正在用的 AI 编程助手，加一个 Skill',
    title: '把你想做的，变成能用的。',
    description: '在你使用的 AI 编程助手中，加入 Solo Vibe Coding，把想做的网站、小工具或功能，推进成可以打开、试用和继续修改的第一版。',
    primary: '做出你的第一版', secondary: '先试试这个成品', note: '从你的目标开始，一步步做出能用的东西。',
    request: '“我想做一个能估算项目报价的小工具。”', example: '这是一个能用的示例。改改数字，试试看。',
  },
  home: {
    introTitle: '带着想法来，剩下的一起推进。',
    introText: '你不必先懂产品开发的每个环节。在 AI 编程助手中加入这个 Skill，从自己想要的结果开始。',
    principles: [
      { title: '知道下一步该做什么。', text: '说清想做的东西，助手帮助收敛第一版范围，并推荐合适的实现路径。' },
      { title: '看到它真的能用。', text: '让助手交付可以打开试用的版本，并针对当前任务做好必要检查。' },
      { title: '接着改成你想要的样子。', text: '继续描述你想改什么。项目保留背景和重要选择，让后续工作接着推进。' },
    ],
    howTitle: '从“我想要一个”，到能打开的第一版。',
    howText: '实际制作在你的编程助手中进行，成果留在自己的项目里。',
    steps: [
      { title: '说清你想做什么', text: '一个网站、小工具，或现有项目的新功能。用自己的话说明用途，以及给谁使用。' },
      { title: '确认真正影响你的选择', text: '助手推荐实现方式。会影响效果、费用或公开范围的选择，由你在理解之后确认。' },
      { title: '打开试试，再继续改', text: '拿到第一版和使用方法，检查自己关心的功能，再继续提出修改。' },
    ],
    installTitle: '先做一件你真正想做的小事。',
    installText: '跟着简短的安装步骤，把一段完整需求发给编程助手。可以先做这个报价工具，也可以换成你自己的想法。',
    installLink: '带我开始', faqTitle: '开始前，你可能想知道。',
    faq: [
      { question: '需要会写代码吗？', answer: '你可以先说明自己想做什么。这个 Skill 帮助编程助手处理需求、设计、技术选择、实现与检查。你仍需要准备支持的编程助手，并确认真正影响自己的选择。' },
      { question: '可以用它做什么？', answer: '可以从网站、小工具或现有项目的新功能开始，也可以改善界面、修复问题、把成果发布给别人使用，或把产品介绍清楚。' },
      { question: '和平时直接问 AI 有什么区别？', answer: '它为编程助手补充可复用的专业做法，帮助处理需求背后的工作：先做什么、选择合适方案、实现、检查，以及保留项目上下文。助手根据你的目标选用相关指导。' },
      { question: '这个 Skill 在哪里使用？', answer: '在支持 Agent Skills、能操作项目文件和访问网络的 AI 编程助手中使用。上手指南提供 Codex 和 Claude Code 的安装方式。网站上的报价示例可以直接在浏览器试用。' },
      { question: '免费吗？', answer: 'Skill 本身免费、开源，采用 MIT 许可。你使用的编程助手、托管平台、API 或其他服务可能单独收费。可以先让助手说明费用，再选择要使用的服务。' },
      { question: '装上以后，就完全不用我参与了吗？', answer: '你负责描述目标、试用成果，并确认重要选择。有些任务还需要你提供账号、工具或访问条件。适合从一版能实际使用的小成果开始，再逐步扩展。' },
    ],
  },
  getting: {
    title: '做出你的第一个可用版本。',
    description: '在 AI 编程助手中安装 Solo Vibe Coding，复制一段完整需求，做出可以打开、试用和继续修改的第一个小工具。',
    intro: '这条路径用报价计算器作为一个小起点。你也可以把需求换成自己真正想做的东西。',
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
    firstTitle: '说出一件完整的事',
    firstText: '将这段需求发给 Codex；也可以先在正在使用的助手中选择已安装的 Skill，再发送相同的需求描述。Claude Code 用户把开头的 $ 调用改为 /solo-vibe-coding。',
    reviewTitle: '打开成果，自己试一试',
    reviewText: '让助手告诉你怎样打开它做出的版本。下面这些事，不需要审查代码也能确认：',
    checks: ['修改工时或单价，看看总额是否跟着变化。', '试试空值或负数，看看是否有清楚的提示。', '在手机上打开，或让助手展示手机预览。', '下载报价明细，用表格软件打开。'],
    continueTitle: '继续改成你的样子',
    continueText: '可以接着说：“换成我的品牌颜色”“加一个项目名称”“帮我发给别人使用”。说明你想要的改变，让助手推荐下一步。',
    troubleTitle: '卡在某一步了？',
    troubleText: '把下面这段话发给编程助手，并贴上报错或描述你看到的情况。',
    troublePrompt: '我正在使用 Solo Vibe Coding，卡在这里：\n[贴上提示信息，或描述实际发生了什么。]\n请帮我检查原因，一步步继续，用容易理解的话说明需要我做什么。',
    next: '先试试示例，再做自己的版本', sources: '编程助手使用帮助', codexDocs: 'Codex 技能使用帮助', claudeDocs: 'Claude Code 技能使用帮助',
  },
  guides: {
    title: '你现在，想做成哪件事？',
    description: '从做一个新网站或工具、增加功能、改善设计、修复问题、发布分享或介绍产品中，找到适合自己的需求示例。',
    intro: '找一个接近自己目标的场景，复制需求并补上自己的情况。可以让助手帮助梳理步骤、推荐做法。',
    prompt: '复制到编程助手中', output: '先拿到什么', confirm: '你可以确认什么', next: '安装并开始第一件事',
  },
  example: {
    title: '先试试这个报价小工具。',
    description: '试用能修改工时、单价、费用与预留比例的报价计算器，下载表格明细，再把完整需求发给编程助手，做出自己的版本。',
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
    { id: 'requirements', label: 'Make something new', title: 'A website or a small tool you wish existed.', summary: 'Start with what it should do and who will use it. Ask the assistant to recommend a small first version.', prompt: FIRST_PROMPT.en, output: 'A first version you can open and try, with instructions to run it.', confirm: 'Does it do the thing you wanted? Is it clear how to use it?' },
    { id: 'architecture', label: 'Add a feature', title: 'Make your existing tool do one more useful thing.', summary: 'Describe the behaviour you want. The assistant can inspect the project and recommend how to fit it in.', prompt: 'Use $solo-vibe-coding to add a download button to my quote tool.\nI want a spreadsheet-friendly breakdown of the current numbers. Keep the existing look.\nRecommend an approach, build it, and check the downloaded values.', output: 'A working feature in your existing project.', confirm: 'Can you complete the new action, and do the old functions still work?' },
    { id: 'design', label: 'Improve the look', title: 'Make your page easier to understand and use.', summary: 'Show the page and explain the impression or experience you want.', prompt: 'Use $solo-vibe-coding to improve this page for the people who use it.\nMake the main action easier to find and the mobile layout easier to read.\nKeep the brand. Give me a version I can preview and compare.', output: 'An updated page you can preview on desktop and mobile.', confirm: 'Can you find the main action and read the important information?' },
    { id: 'development', label: 'Fix a problem', title: 'Get something that broke working again.', summary: 'Describe what you expected, what happened, and any error message. Let the assistant help investigate.', prompt: 'Use $solo-vibe-coding to fix this problem:\n[What I expected, what actually happened, and any message.]\nFind the cause, make the fix, and check that the original action works again.', output: 'A fix with a way to repeat and check the action.', confirm: 'Can you now do what failed before?' },
    { id: 'deployment', label: 'Share it with people', title: 'Give someone a link they can actually open.', summary: 'Explain who should be able to use the result and whether it should be public.', prompt: 'Use $solo-vibe-coding to help me share this website with other people.\nRecommend a suitable way to publish it and explain any costs.\nConfirm who can access it before publishing, then check the live address.', output: 'A published result and a checked link, when accounts and access are ready.', confirm: 'Can the intended people open the link and use the result?' },
    { id: 'growth', label: 'Explain your product', title: 'Help the right people see what they can do with it.', summary: 'Describe who it is for and show what actually works.', prompt: 'Use $solo-vibe-coding to improve this product page for its intended users.\nExplain what they can achieve, show actual examples, and give them a clear way to start.\nUse only capabilities and results we can show.', output: 'A user-focused page or message with concrete examples.', confirm: 'Would someone new understand what they can do and how to begin?' },
  ],
  'zh-CN': [
    { id: 'requirements', label: '做一个新东西', title: '一个你一直想要的网站或小工具。', summary: '说明它要做什么、给谁用，让助手推荐一个适合先做出来的小版本。', prompt: FIRST_PROMPT['zh-CN'], output: '可以打开试用的第一版，以及具体使用方法。', confirm: '它是否做到了你想要的事？你是否知道怎样使用？' },
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
    home: `${PROJECT.name} — ${locale === 'en' ? 'Turn your idea into something you can use' : '把想法做成能用的东西'}`,
    'getting-started': `${ui.nav['getting-started']} — ${PROJECT.name}`,
    guides: `${ui.nav.guides} — ${PROJECT.name}`,
    examples: `${locale === 'en' ? 'Try the quote calculator' : '试用报价计算器'} — ${PROJECT.name}`,
    'build-log': `${ui.nav['build-log']} — ${PROJECT.name}`,
  };
  const descriptions: Record<PageName, string> = {
    home: locale === 'en' ? 'Turn a clear idea into a working website, tool, or feature with Solo Vibe Coding, an open-source skill for your AI coding assistant. Try an example and get started.' : '有想做的东西，但不懂每个技术环节？在 AI 编程助手中加入 Solo Vibe Coding，从自己的目标开始，做出可用的网站、小工具或功能。先试用真实示例，再开始第一版。',
    'getting-started': ui.getting.description, guides: ui.guides.description, examples: ui.example.description, 'build-log': ui.log.description,
  };
  return { title: titles[page], description: descriptions[page] };
}
