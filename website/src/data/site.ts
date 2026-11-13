export type Locale = 'en' | 'zh-CN';
export type PageName = 'home' | 'getting-started' | 'guides' | 'build-log';

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

export function href(locale: Locale, page = '', hash = '') {
  return `${PROJECT.base}${locale === 'en' ? '' : 'zh-CN/'}${page ? page.replace(/^\/+|\/+$/g, '') + '/' : ''}${hash ? '#' + hash : ''}`;
}

export function source(locale: Locale, file = 'SKILL.md') {
  return `${PROJECT.repository}/blob/main/${locale === 'en' ? '' : 'i18n/zh-CN/'}skills/solo-vibe-coding/${file}`;
}

const en = {
  nav: { 'getting-started': 'Get started', guides: 'Task guides', 'build-log': 'Build log', github: 'GitHub' },
  skip: 'Skip to content',
  switchLanguage: '切换到中文',
  language: '中文',
  copy: 'Copy', copied: 'Copied', copyFailed: 'Select and copy the text',
  terminal: 'Terminal', installationCommand: 'Installation command',
  footer: 'A small, open-source tool for the work of making a product.',
  footerLicense: 'Original content: MIT. Upstream resources keep their own terms.',
  footerSource: 'Source & contributions',
  footerTop: 'Back to top',
  hero: {
    context: 'An open-source Agent Skill for independent developers',
    title: 'Build, ship, and grow your product.',
    description: 'You have a product direction. Bring the right guidance to the task in front of you: scope, design, code, architecture, deployment, or growth.',
    primary: 'Start building',
    secondary: 'Explore the source',
    note: 'One skill. Enter at any task.',
    panelTitle: 'What are you working on?',
    panelNote: 'Choose a task to see how to ask.',
    promptLabel: 'Try this prompt',
    guidance: 'Relevant guidance',
    output: 'Expected deliverables',
    browse: 'Read the task guides',
  },
  home: {
    introTitle: 'Your product needs more than code.',
    introText: 'A feature starts with a decision and ends with something people can use. Solo Vibe Coding helps your coding agent find specialist guidance for each part of that work.',
    principles: [
      { title: 'Begin where you are.', text: 'Scope a feature, review a change, or improve a landing page. Each topic works on its own; combine them when the task needs it.' },
      { title: 'Give quality a place to start.', text: 'For engineering work, define quality criteria and automated checks early. Reuse the project’s existing standards and tools.' },
      { title: 'Keep what you learn.', text: 'Reuse existing work and maintain shared project knowledge so the next task starts with the facts, constraints, and decisions already in place.' },
    ],
    howTitle: 'A little structure. A practical next step.',
    howText: 'Installed in your coding agent, used inside your own project.',
    steps: [
      { title: 'Bring a real task', text: 'Describe the result you want and include the project’s existing context.' },
      { title: 'Use the relevant guidance', text: 'The agent reads selected upstream instructions and the references needed for the task.' },
      { title: 'Review what was delivered', text: 'Check the actual files, results, and verification. Keep durable project knowledge with the project.' },
    ],
    installTitle: 'Your next task is a good place to start.',
    installText: 'Run this in your product project with Node.js 22.20+ and npm. Choose your coding agent when prompted.',
    installLink: 'Installation & first task',
    logTitle: 'Making it in public.',
    logText: 'Follow the decisions, experiments, and finished work behind this project. This website is our first public build.',
    logLink: 'Open the build log',
    faqTitle: 'A few things to know.',
    faq: [
      { question: 'Who is this for?', answer: 'Independent developers who already have a clear product direction and use a coding agent that supports Agent Skills. You can enter through a single task; it does not explore startup ideas.' },
      { question: 'What does the skill actually do?', answer: 'It selects and combines specialist guidance for your current task. Your coding agent reads the selected upstream instructions and works within the tools, permissions, and project constraints available to it.' },
      { question: 'What do I need to run it?', answer: 'An Agent Skills-compatible coding agent that can read local files and fetch remote text. Browsers, CLIs, accounts, renderers, and API credentials depend on the task.' },
      { question: 'Is it free and open source?', answer: 'Original project content is available under the MIT license. Linked instructions, software, assets, and services retain their own licenses, access conditions, and possible costs.' },
      { question: 'Do I need to install the upstream skills?', answer: 'No. The agent reads selected upstream instructions and their necessary references on demand. Actual execution still depends on the available tools and your authorization.' },
    ],
  },
  getting: {
    title: 'From install to your first useful task.',
    description: 'Install Solo Vibe Coding, check what your agent needs, and try a scoped first task in your own project.',
    intro: 'Start inside a product project you already have. Bring a small, concrete task and let the agent use the project’s existing conventions.',
    beforeTitle: 'What you need',
    before: ['A coding agent that supports the Agent Skills format.', 'Access to local project files and remote text.', 'Node.js 22.20+ and npm for the installation command.', 'Any tools, accounts, or credentials required by your chosen task.'],
    installTitle: 'Install in your project',
    installText: 'Run the command from your product project. Follow the prompts to select your agent. Installation is project-local by default; add -g to install for use across projects.',
    firstTitle: 'Try a focused first task',
    firstText: 'Select the skill through your coding agent’s supported interface. If it supports explicit $skill-name invocation, try this:',
    firstPrompt: 'Use $solo-vibe-coding to turn this feedback into a scoped feature spec:\nusers want to export their saved items as CSV.\nFollow this project’s existing conventions.',
    reviewTitle: 'Review the result together',
    reviewText: 'For this example, look for a clear feature scope, acceptance criteria, relevant constraints, and open questions. These describe the expected deliverable, not a prerecorded agent result.',
    manualTitle: 'Other installation options',
    manualText: 'You can also clone the repository and copy the complete skills/solo-vibe-coding/ directory into your agent’s documented skill location. Keep references, metadata, and the license together, then follow the host’s reload instructions.',
    boundariesTitle: 'Tools and boundaries',
    boundariesText: 'Upstream instructions are read on demand. A guide is not a browser, a deployment account, or an API credential. The agent should explain unavailable sources or tools and distinguish completed work from remaining gaps.',
    next: 'Find a prompt for your task',
    format: 'Agent Skills specification',
    cli: 'Skills CLI installation reference',
  },
  guides: {
    title: 'A way in for the task in front of you.',
    description: 'Explore six Solo Vibe Coding task guides with copyable prompts, relevant guidance, and expected deliverables.',
    intro: 'Pick a task independently or combine topics. These examples show what to ask and what to review; the agent’s actual work depends on your project and available tools.',
    prompt: 'Example prompt',
    guidance: 'Guidance to draw on',
    output: 'Expected deliverables',
    source: 'Read the source guide',
    qualityTitle: 'Two useful foundations across tasks',
    qualityText: 'Technology guidance covers React, Next.js, Tauri/Rust, Go/Gin, MySQL, and React Native. Engineering tasks also use the project’s quality criteria and automated checks.',
    qualityLink: 'Quality criteria & automated checks',
    technologyLink: 'Technology guidance',
    knowledgeTitle: 'The project keeps the context',
    knowledgeText: 'Reuse the project’s conventions for specifications, architecture, decisions, and testing. Record stable knowledge alongside the work so future tasks have a reliable starting point.',
    knowledgeLink: 'Project knowledge conventions',
  },
  log: {
    title: 'Notes from the work.',
    description: 'Follow the public development of Solo Vibe Coding through real decisions, practical experiments, and verifiable results.',
    intro: 'What we are making, why we chose it, and what we can show. Written from the work as it happens.',
    read: 'Read the entry',
    all: 'All build notes',
    author: 'Written by',
    related: 'Try the skill',
    status: 'First public build',
  },
  notFound: {
    title: '404 — This page took a different path.',
    description: 'Find your way back to Solo Vibe Coding and its task guides.',
    text: 'The page may have moved, or the address may be incomplete.',
    home: 'Back to the homepage',
  },
};

const zh: typeof en = {
  nav: { 'getting-started': '快速开始', guides: '任务指南', 'build-log': '构建日志', github: 'GitHub' },
  skip: '跳到正文', switchLanguage: 'Switch to English', language: 'EN',
  copy: '复制', copied: '已复制', copyFailed: '请选中文字后复制',
  terminal: '终端', installationCommand: '安装命令',
  footer: '为独立开发者的产品工作，添一份合适的指导。',
  footerLicense: '原创内容采用 MIT 许可，上游资源保留各自条款。',
  footerSource: '源码与贡献', footerTop: '回到顶部',
  hero: {
    context: '面向独立开发者的开源 Agent Skill',
    title: '构建、交付并发展你的产品。',
    description: '你已经有了产品方向。让眼前的任务用上合适的指导：需求、设计、开发、架构、部署，或增长。',
    primary: '开始使用', secondary: '查看源码', note: '一个 Skill，从当前任务进入。',
    panelTitle: '你现在想推进什么？', panelNote: '选择任务，看看可以怎样提问。',
    promptLabel: '试试这样提问', guidance: '相关指导', output: '预期交付', browse: '阅读任务指南',
  },
  home: {
    introTitle: '做成产品，需要的不止是代码。',
    introText: '一项功能，从一个决定开始，到用户真正用上结束。Solo Vibe Coding 帮助编程助手，为每一段工作找到对应的专业指导。',
    principles: [
      { title: '从你正在做的事开始。', text: '梳理功能范围、评审代码，或改善落地页。各类任务可以独立进入，也可以根据需要组合。' },
      { title: '让质量有一个起点。', text: '工程任务优先确定质量指标与自动检查，复用项目已有的标准和工具。' },
      { title: '把学到的留在项目里。', text: '复用既有工作，维护共用项目知识，让下一次任务沿用已确认的事实、约束与决策。' },
    ],
    howTitle: '给当前任务，一条清晰的路径。',
    howText: '安装在编程助手中，用在你自己的产品项目里。',
    steps: [
      { title: '带来一个实际任务', text: '说明想得到的结果，并提供项目已有的背景与约束。' },
      { title: '选用相关专业指导', text: '助手按需读取选中的上游原文与完成任务所需的参考。' },
      { title: '核对实际交付结果', text: '检查文件、成果与验证情况，将可复用的知识留在项目中。' },
    ],
    installTitle: '就从你的下一件事开始。',
    installText: '准备 Node.js 22.20+ 和 npm，在产品项目中执行，再按提示选择编程助手。',
    installLink: '安装与首次使用',
    logTitle: '把构建过程，公开出来。',
    logText: '记录这个项目的决定、尝试与实际成果。这个官网，就是我们的第一次公开构建。',
    logLink: '打开构建日志', faqTitle: '开始前，你可能想知道。',
    faq: [
      { question: '适合什么人使用？', answer: '已有明确产品方向，并使用支持 Agent Skills 的编程助手的独立开发者。可以只从一个具体任务进入；这个 Skill 不探索创业方向。' },
      { question: '这个 Skill 实际做什么？', answer: '为当前任务选择并组合专业指导。编程助手读取选中的上游原文，在可用工具、授权与项目约束内完成工作。' },
      { question: '需要准备哪些环境？', answer: '需要支持 Agent Skills、能够读取本地文件和远程文本的编程助手。浏览器、CLI、账号、渲染器与 API 凭据按具体任务提供。' },
      { question: '是否免费、开源？', answer: '项目原创内容采用 MIT 许可证。链接的指导、软件、素材与服务保留各自许可证、访问条件与可能的费用。' },
      { question: '需要另外安装上游技能吗？', answer: '不需要。助手按需读取选中的上游指导及必要引用；实际执行仍取决于可用工具和你的授权。' },
    ],
  },
  getting: {
    title: '从安装，到完成第一次任务。',
    description: '安装 Solo Vibe Coding，确认助手需要的环境，并在自己的产品项目中尝试一个范围明确的任务。',
    intro: '从一个已有的产品项目开始。带来一件具体的小事，让助手沿用项目现有规范推进。',
    beforeTitle: '准备这些条件',
    before: ['支持 Agent Skills 格式的编程助手。', '读取本地项目文件与远程文本的能力。', '执行安装命令所需的 Node.js 22.20+ 与 npm。', '所选任务需要的工具、账号与凭据。'],
    installTitle: '安装到产品项目',
    installText: '在产品项目中运行命令，并按提示选择编程助手。默认安装到当前项目；添加 -g 可以跨项目使用。',
    firstTitle: '尝试一个范围明确的任务',
    firstText: '通过编程助手支持的界面选择技能。支持 $技能名 显式调用的宿主，可以使用以下示例：',
    firstPrompt: '使用 $solo-vibe-coding，把这条反馈整理成范围明确的功能规格：\n用户希望将收藏条目导出为 CSV。\n沿用项目已有规范。',
    reviewTitle: '一起核对交付结果',
    reviewText: '在这个示例中，核对功能范围、验收标准、相关约束和待澄清问题。这里说明的是预期交付，不是预先录制的助手执行结果。',
    manualTitle: '其他安装方式',
    manualText: '也可以克隆仓库，将完整的 skills/solo-vibe-coding/ 目录复制到助手规定的技能位置，保留参考文件、元数据与许可证，再按宿主说明重载。',
    boundariesTitle: '工具与执行边界',
    boundariesText: '上游指导按需读取。实际执行需要对应的浏览器、部署账号或 API 凭据。来源或工具不可用时，助手应说明缺口，并区分已完成的工作与未完成项。',
    next: '找到适合当前任务的提示词', format: 'Agent Skills 格式规范', cli: 'Skills CLI 安装参考',
  },
  guides: {
    title: '从眼前的任务，找到入口。',
    description: '查看 Solo Vibe Coding 六类任务的调用示例、相关指导与预期交付，复制提示词后在自己的项目中使用。',
    intro: '可以独立选用某类指导，也可以按需组合。示例帮助你提问和验收；实际执行取决于项目情况与可用工具。',
    prompt: '调用示例', guidance: '选用的指导', output: '预期交付', source: '阅读指导原文',
    qualityTitle: '跨任务共用的两项基础',
    qualityText: '技术专项指导覆盖 React、Next.js、Tauri/Rust、Go/Gin、MySQL 与 React Native。工程任务还会结合项目的质量指标与自动检查。',
    qualityLink: '质量指标与自动检查', technologyLink: '技术专项指导',
    knowledgeTitle: '让项目保留上下文',
    knowledgeText: '沿用项目对需求、架构、决策与测试的知识规范。将稳定结论随工作一起维护，让未来任务有可靠的起点。',
    knowledgeLink: '项目知识库规范',
  },
  log: {
    title: '写在构建途中。',
    description: '通过真实决策、具体尝试与可核验的成果，了解 Solo Vibe Coding 如何公开构建和发展。',
    intro: '记录正在做什么、为什么这样选择，以及实际能展示的成果。随工作推进，持续留下依据。',
    read: '阅读这篇记录', all: '全部构建日志', author: '作者', related: '试用这个 Skill', status: '第一次公开构建',
  },
  notFound: {
    title: '404 — 这条路径暂时没有内容。',
    description: '返回 Solo Vibe Coding 首页，继续查看安装方式与任务指南。',
    text: '页面可能已经移动，或当前地址不完整。', home: '返回首页',
  },
};

export const UI: Record<Locale, typeof en> = { en, 'zh-CN': zh };

export type Task = {
  id: string; label: string; title: string; summary: string; prompt: string;
  guidance: string; deliverables: string[]; reference: string;
};

export const TASKS: Record<Locale, Task[]> = {
  en: [
    { id: 'requirements', label: 'Scope', title: 'Turn feedback into a focused spec.', summary: 'Make the problem, scope, and acceptance criteria clear before implementation.', prompt: 'Use $solo-vibe-coding to turn this feedback into a scoped feature spec:\nusers want to export saved items as CSV.\nFollow this project’s conventions.', guidance: 'Requirements and communication', deliverables: ['Feature scope', 'Acceptance criteria', 'Open questions'], reference: 'requirements' },
    { id: 'design', label: 'Design', title: 'Give the interface a clear direction.', summary: 'Shape visual hierarchy, interaction, motion, and assets around what people need to do.', prompt: 'Use $solo-vibe-coding to improve our landing page’s message and visual design.\nKeep our existing brand and technology stack.', guidance: 'Visual design and interaction + acquisition and conversion', deliverables: ['Page hierarchy', 'Visual and interaction choices', 'Usable page assets'], reference: 'visual-interaction' },
    { id: 'development', label: 'Code', title: 'Review a change for concrete bugs.', summary: 'Implement, troubleshoot, or review code with the project’s quality checks.', prompt: 'Use $solo-vibe-coding to review this change for concrete bugs and report findings.\nFollow the repository’s quality standards.', guidance: 'Development and quality', deliverables: ['Actionable findings', 'Affected code locations', 'Verification evidence'], reference: 'development' },
    { id: 'architecture', label: 'Architecture', title: 'Choose boundaries that fit the project.', summary: 'Make technical choices, data boundaries, and tradeoffs explicit.', prompt: 'Use $solo-vibe-coding to compare two storage options for this feature.\nUse our existing stack and constraints. Record the architecture decision.', guidance: 'Architecture and technical design', deliverables: ['Option comparison', 'Module and data boundaries', 'Decision record'], reference: 'architecture' },
    { id: 'deployment', label: 'Deploy', title: 'Take a checked build into production.', summary: 'Prepare configuration, release checks, and rollback for the deployment target.', prompt: 'Use $solo-vibe-coding to prepare this frontend for release.\nCheck the existing deployment target, verify the build, and document rollback.', guidance: 'Production deployment and release + quality checks', deliverables: ['Deployment configuration', 'Release verification', 'Rollback instructions'], reference: 'deployment' },
    { id: 'growth', label: 'Growth', title: 'Tell the story of what you shipped.', summary: 'Work on positioning, landing pages, distribution, and building in public.', prompt: 'Use $solo-vibe-coding to draft a build-in-public update from this actual change.\nExplain what changed and link to the result. Use only verified facts.', guidance: 'Acquisition and conversion', deliverables: ['A grounded message', 'A channel-ready draft', 'Links to actual work'], reference: 'acquisition' },
  ],
  'zh-CN': [
    { id: 'requirements', label: '需求', title: '把反馈，整理成明确的功能规格。', summary: '实现之前，先讲清问题、范围与验收标准。', prompt: '使用 $solo-vibe-coding，把这条反馈整理成范围明确的功能规格：\n用户希望将收藏条目导出为 CSV。\n沿用项目已有规范。', guidance: '需求与沟通', deliverables: ['功能范围', '验收标准', '待澄清问题'], reference: 'requirements' },
    { id: 'design', label: '设计', title: '给界面，一个清晰的方向。', summary: '围绕用户要完成的事，组织视觉层级、交互、动效与素材。', prompt: '使用 $solo-vibe-coding，改善落地页的价值表达与视觉设计。\n沿用已有品牌和技术栈。', guidance: '视觉与交互＋获客与转化', deliverables: ['页面信息层级', '视觉与交互方案', '可使用的页面素材'], reference: 'visual-interaction' },
    { id: 'development', label: '开发', title: '检查变更中的明确问题。', summary: '结合项目质量检查，完成实现、排错或代码评审。', prompt: '使用 $solo-vibe-coding，评审这次变更中的明确 bug 并报告发现。\n遵循仓库现有的质量标准。', guidance: '开发与质量', deliverables: ['可行动的问题', '受影响的代码位置', '验证依据'], reference: 'development' },
    { id: 'architecture', label: '架构', title: '选出适合当前项目的边界。', summary: '明确技术选择、数据边界与实际取舍。', prompt: '使用 $solo-vibe-coding，比较这个功能的两种存储方案。\n沿用已有技术栈与约束，并记录架构决策。', guidance: '架构与技术设计', deliverables: ['方案比较', '模块与数据边界', '决策记录'], reference: 'architecture' },
    { id: 'deployment', label: '部署', title: '让验证过的构建，走向生产。', summary: '为实际部署目标准备配置、发布检查与回退方式。', prompt: '使用 $solo-vibe-coding，为这个前端准备发布。\n核对已有部署目标、验证构建，并记录回退方式。', guidance: '生产部署与发布＋质量检查', deliverables: ['部署配置', '发布验证', '回退说明'], reference: 'deployment' },
    { id: 'growth', label: '增长', title: '把已经交付的事，讲给人听。', summary: '完善定位、落地页、内容分发与公开构建。', prompt: '使用 $solo-vibe-coding，根据这次真实变更起草一则公开构建动态。\n说明改变了什么，并链接到成果。只使用已核实的事实。', guidance: '获客与转化', deliverables: ['有依据的价值表达', '适合渠道的内容草稿', '指向真实成果的链接'], reference: 'acquisition' },
  ],
};

export function pageMetadata(locale: Locale, page: PageName) {
  const ui = UI[locale];
  const titles = { home: `${PROJECT.name} — ${locale === 'en' ? 'An Agent Skill for independent developers' : '独立开发者的 Agent Skill'}`, 'getting-started': `${ui.nav['getting-started']} — ${PROJECT.name}`, guides: `${ui.nav.guides} — ${PROJECT.name}`, 'build-log': `${ui.nav['build-log']} — ${PROJECT.name}` };
  const descriptions = { home: locale === 'en' ? 'Build, ship, and grow your product with one open-source Agent Skill. Get task-specific guidance for scope, design, code, architecture, deployment, and growth.' : '面向已有产品方向的独立开发者的开源 Agent Skill。按任务选择需求、设计、开发、架构、部署与增长指导，构建、交付并发展你的产品。', 'getting-started': ui.getting.description, guides: ui.guides.description, 'build-log': ui.log.description };
  return { title: titles[page], description: descriptions[page] };
}
