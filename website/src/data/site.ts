export type Locale = 'en' | 'zh-CN';
export type PageName = 'home' | 'getting-started' | 'guides';

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
};

export function href(locale: Locale, page = '', hash = '') {
  return `${PROJECT.base}${locale === 'en' ? '' : 'zh-CN/'}${page ? page.replace(/^\/+|\/+$/g, '') + '/' : ''}${hash ? '#' + hash : ''}`;
}

const en = {
  nav: { 'getting-started': 'Get started', guides: 'Task guides' },
  skip: 'Skip to content', switchLanguage: '切换到中文', language: '中文',
  copy: 'Copy', copied: 'Copied', copyFailed: 'Select and copy the text',
  terminal: 'Terminal', installationCommand: 'Installation command',
  footer: 'Specialist guidance for the product you are already building.',
  footerLicense: 'The skill is open source under MIT. Your coding assistant and other services have their own terms.',
  footerSource: 'GitHub', footerTop: 'Back to top',
  hero: {
    context: 'An open-source skill for your coding assistant',
    title: 'Give your assistant', accent: 'a product playbook.',
    description: 'Clarify requirements, design interfaces and visuals, set up a project, deliver a technical change, ship or reach users. Add relevant methods, references and checks to the coding assistant you know.',
    primary: 'Install and get started', secondary: 'Explore the delivery method',
    note: 'Works in your existing assistant · Free, open-source skill',
  },
  home: {
    faqTitle: 'Before you start.',
    faq: [
      { question: 'Do I need to know how to code?', answer: 'You can start by explaining what you want. The skill helps your coding assistant handle requirements, design, technical choices, implementation, and checks. You still need to set up a supported assistant and confirm the choices that matter to you.' },
      { question: 'What can I make with it?', answer: 'Start with a website, a small tool, or a feature in an existing project. It can also help improve a design, fix a problem, publish a result, or explain your product to other people.' },
      { question: 'I already have an agent. What does this add?', answer: 'You may know the goal without knowing which marketing, design or engineering methods to ask for. The skill gives your assistant task-specific guidance, relevant resources and shared rules for reuse, checks and project context. It works with the model you already use.' },
      { question: 'How is this different from a long prompt or several skills?', answer: 'A detailed prompt can express similar requirements. Solo Vibe Coding organizes task entry points, original guidance and resources in one install, with shared rules for quality and project context. You can use one task independently; you do not have to run every topic each time.' },
      { question: 'Will it always be faster or produce better code?', answer: 'We do not promise that. A capable agent may already do these things, and reading guidance takes time and tokens. Judge the result and the extra work for the task you actually need.' },
      { question: 'Where do I use the skill?', answer: 'In an AI coding assistant that supports Agent Skills and can work with your project files and the web. The getting-started guide includes Codex and Claude Code instructions.' },
      { question: 'Is it free?', answer: 'The skill itself is free and open source under MIT. Your coding assistant, hosting, APIs, or other services may have their own charges. Ask the assistant to explain any costs before choosing a service.' },
      { question: 'Will it build anything without my involvement?', answer: 'You describe the goal, try the result, and confirm important choices. Some tasks also need accounts, tools, or access that you provide. Start with a small version you can actually use and expand from there.' },
      { question: 'I already installed it. How do I update and check the version?', answer: 'Update the existing installation in its original project or global scope. The setup guide includes commands for this skill and a request that asks your assistant to check the actual files and source revision. A name in the skill list alone does not confirm which copy was read.', help: { section: 'updating', label: 'Update and verify your installation' } },
      { question: 'Can I ask for advice or a plan without implementation?', answer: 'Yes. Ask for requirements, research, a technical plan or a read-only review, and state where the task should stop. The assistant should deliver within that scope. The task guides include requests you can copy.' },
      { question: 'What if I do not have a visual reference?', answer: 'Ask the assistant to find viewable pages, screenshots or designs first; motion and video need playable examples. An approved page or component from your own project can also be a reference. Production starts once a suitable reference is available.' },
      { question: 'What if the assistant lacks a browser, device or another tool?', answer: 'It should explain which checks or deliverables are blocked, what it actually completed and what is needed to continue. It can deliver the work that remains possible, but key untested scenarios leave acceptance incomplete. Automated checks alone do not establish the real interaction result.' },
    ],
  },
  getting: {
    title: 'Install it. Bring your own project.',
    titleLines: ['Install it.', 'Bring your own project.'],
    description: 'Install Solo Vibe Coding and choose from six task areas, from requirements and project setup to engineering delivery, release and acquisition. Continue with a request for your own project.',
    intro: 'Add the skill to your assistant, then send a request for the task you want to finish. Your existing project is the starting point.',
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
    updateTitle: 'Already installed? Update the existing copy',
    updateText: 'Open the project where you use the skill. Keep the original source, agent targets, project or global scope, and copy or symlink installation method. Back up any local edits and compare them before an update that could overwrite them. Send this request to your assistant:',
    updatePrompt: `Please update only Solo Vibe Coding, keeping my existing installation scope and agent setup.
Locate the installed copies, resolve symlinks, and check the source, pinned revision, original agent targets, project or global scope, copy or symlink method, and local edits. Explain any conflict before overwriting changes.
For a CLI installation, repeat npx skills@latest add with the original source, --skill solo-vibe-coding and an explicit --agent list for the intended original agents. Retain -g for a global installation and --copy if the original used copies. Keep an intentionally pinned source unless I ask to change it. Do not substitute the assistant running this request for the original targets.
For manual copies, refresh the complete folders at their actual existing paths. Keep references, metadata and the license together.
Check every intended copy afterwards and report its path, what changed, what was already current and any failures. Then help me verify the copy my assistant will actually use.`,
    updateCommandsTitle: 'I prefer to update in the terminal',
    projectUpdateLabel: 'Only this skill in the current project',
    globalUpdateLabel: 'Only this skill in the global installation',
    updateCommandsNote: 'These commands refresh the official Codex installation described on this page and replace the target skill files. For Claude Code, change --agent codex to --agent claude-code. Retain --copy if it was used originally. For a different source or a pinned branch, tag or commit, reuse that original source instead.',
    updateCheck: 'Run npx skills@latest check to inspect tracked skills without updating them. It can report other installed skills too. An available update or local changes can produce a nonzero exit code; read the message before treating it as a command failure.',
    updateFallback: 'The generic skills update command selects agent targets automatically and may miss a separate copy used by another assistant. Use explicit original agent targets when refreshing an installation, then check each intended copy. For manual installations, refresh the full existing skill directory. With a pinned source, “up to date” means current for that source.',
    verifyTitle: 'Confirm which copy your assistant reads',
    verifyText: 'This project identifies skill content by its source revision, rather than a separate website version number. After updating, start a fresh conversation, select the skill and ask for a file-based check:',
    verifyPrompt: `Please verify the Solo Vibe Coding copy available in this project before doing product work.
Report the full path of the SKILL.md you actually read and its symlink target, if any. Check for other copies with the same name so we can select the intended one.
Compare the full installed package, including references, with its recorded source and branch, tag or commit. Report the source revision checked and any differences or checks you could not complete. Do not infer a content version from the skill name or installation success alone.
Keep this check read-only. Do not change skill files or start implementation.`,
    verifyRefresh: 'Codex detects file changes automatically; if the update is not listed, restart Codex. Claude Code watches local skill folders; if needed, use /reload-skills. A fresh conversation helps separate the newly selected files from instructions already loaded in an earlier conversation. If the source cannot be reached, report version verification as incomplete.',
    firstTitle: 'Choose the task you want to finish',
    gettingNav: 'Choose your task', gettingNote: 'Install the skill above, then choose a request and replace the brackets with your project details.', installFirst: 'Go to installation', checksTitle: 'Check the result yourself',
    firstText: 'Send this request in Codex, or select the installed skill in your assistant and use the same project description. In Claude Code, start with /solo-vibe-coding instead of the $ mention.',
    reviewTitle: 'Check the result for your task',
    reviewText: 'For requirements or a plan, review the scope, evidence and conclusions. For an implementation, ask how to open it and try it:',
    checks: ['Does it address the problem you started with?', 'For implementation work, open it and complete the main user journey.', 'For a page, try it on a phone too.', 'Find out what was actually checked and what still needs confirmation.'],
    continueTitle: 'Make it yours',
    continueText: 'Point to the gap between the result and your goal. Share a concrete screen or a failing action. Ask the assistant to continue in the same project and check the affected parts.',
    troubleTitle: 'Something got in the way?',
    troubleText: 'Paste the message below into your coding assistant, together with the error or a description of what you see.',
    troublePrompt: 'I am trying to use Solo Vibe Coding and I am stuck here:\n[Paste the message or describe what happened.]\nPlease check the cause and help me continue one step at a time. Explain what I need to do in plain language.',
    next: 'Find a request for another task',
    sources: 'Assistant setup help',
    codexDocs: 'Codex skills help', claudeDocs: 'Claude Code skills help', cliDocs: 'Skills CLI install and update reference',
  },
  guides: {
    title: 'What are you working on?',
    description: 'Explore six independent task areas: requirements, visuals and interaction, project setup, technical delivery, production release, and acquisition. Copy requests with concrete outputs and checks.',
    intro: 'Start from an established product direction and choose the task you need. Each area can be used independently, including requirements-only work, project setup, technical planning and read-only review. Copy a request and add your project context.',
    prompt: 'Send this to your assistant', output: 'What to ask it to deliver', confirm: 'What to check',
    next: 'Get set up and try your first task',
  },
  notFound: {
    title: '404 — Page not found.', description: 'Return to Solo Vibe Coding to find task guides and installation help.',
    text: 'The page may have moved, or the address may be incomplete.', home: 'Back to the homepage',
  },
};

const zh: typeof en = {
  nav: { 'getting-started': '开始使用', guides: '任务指南' },
  skip: '跳到正文', switchLanguage: 'Switch to English', language: 'EN',
  copy: '复制', copied: '已复制', copyFailed: '请选中文字后复制', terminal: '终端', installationCommand: '安装命令',
  footer: '让专业的设计、开发与推广做法，用到你的项目里。',
  footerLicense: 'Skill 采用 MIT 开源许可。编程助手与其他服务按各自条款提供。', footerSource: 'GitHub', footerTop: '回到顶部',
  hero: {
    context: '给编程助手的专业指导包 · 开源 Skill',
    title: '给你的编程助手，', accent: '一套做产品的专业方法。',
    description: '从需求澄清、视觉与交互、项目初始化，到技术交付、生产发布与获客转化，按当前任务补上方法、参考和检查。继续使用你熟悉的编程助手。',
    primary: '安装并开始使用', secondary: '了解交付方法', note: '在现有助手中使用 · Skill 免费开源',
  },
  home: {
    faqTitle: '你可能还想问',
    faq: [
      { question: '需要会写代码吗？', answer: '你可以先说明自己想做什么。这个 Skill 帮助编程助手处理需求、设计、技术选择、实现与检查。你仍需要准备支持的编程助手，并确认真正影响自己的选择。' },
      { question: '可以用它做什么？', answer: '可以从网站、小工具或现有项目的新功能开始，也可以改善界面、修复问题、把成果发布给别人使用，或把产品介绍清楚。' },
      { question: '已经有编程助手，为什么还要装这个 Skill？', answer: '你可能知道目标，却不清楚该采用哪些设计、工程或推广方法。Skill 按任务整理专业指导、可用资源和复用、检查、项目约定，让现有助手按需选用。' },
      { question: '和自己写提示词、装多个 Skill 有什么区别？', answer: '你也可以自己整理这些要求。Solo Vibe Coding 把任务分类、专业指导和参考资源放在一起，让助手按需查找；同时要求复用已有工作、检查结果，并留下后续修改需要的信息。' },
      { question: '装了就一定更快、代码一定更好吗？', answer: '不作这样的保证。能力强的 Agent 也可能已经做到这些，读取指导也需要时间与用量。应结合自己的任务，同时评估实际结果和增加的工作。' },
      { question: '这个 Skill 在哪里使用？', answer: '在支持 Agent Skills、能操作项目文件和访问网络的 AI 编程助手中使用。上手指南提供 Codex 和 Claude Code 的安装方式。' },
      { question: '免费吗？', answer: 'Skill 本身免费、开源，采用 MIT 许可。你使用的编程助手、托管平台、API 或其他服务可能单独收费。可以先让助手说明费用，再选择要使用的服务。' },
      { question: '装上以后，就完全不用我参与了吗？', answer: '你负责描述目标、试用成果，并确认重要选择。有些任务还需要你提供账号、工具或访问条件。适合从一版能实际使用的小成果开始，再逐步扩展。' },
      { question: '已经装过，怎样更新并确认用了新版？', answer: '沿用原来的项目级或全局安装范围更新。上手指南提供只更新本 Skill 的命令，以及让助手核对实际文件和来源版本的请求。技能列表里出现同名条目，还不能确认助手实际读了哪一份。', help: { section: 'updating', label: '更新并核对现有安装' } },
      { question: '可以只讨论需求或方案，不进行实现吗？', answer: '可以。明确要求这次只做需求澄清、调研、技术方案或只读评审，并说明交付到哪里结束。助手应在这个范围内完成任务；使用指南已有可复制的需求示例。' },
      { question: '没有视觉参考怎么办？', answer: '可以先让助手寻找能查看的页面、截图或设计稿；动效与视频需要可播放的案例。项目里已认可的页面或组件也可以作为参考。取得合适参考后再开始制作。' },
      { question: '缺少浏览器、设备或其他工具怎么办？', answer: '助手应说明哪些检查或交付被阻塞、实际完成了什么，以及继续所需的条件；先交付仍能完成的部分。关键场景没有执行时，验收仍未完成，不能仅凭自动检查推定实际交互已经通过。' },
    ],
  },
  getting: {
    title: '装好 Skill，继续做你的项目。',
    titleLines: ['装好 Skill，', '继续做你的项目。'],
    description: '在编程助手中安装 Solo Vibe Coding，从需求、视觉、项目初始化、技术交付、发布与获客六类任务中选择入口，带着需求示例继续做自己的项目。',
    intro: '先在编程助手里安装，再选择适合当前任务的需求示例。已有项目可以直接接着做。',
    beforeTitle: '打开你的编程助手',
    beforeText: '在你用来做项目的助手中打开一个项目文件夹。助手需要能修改文件并访问网络。下面的主路径以 Codex CLI 或 IDE 扩展为例。',
    noAssistant: '还没用过编程助手？按官方指南安装并打开 Codex CLI。',
    installTitle: '在当前项目安装 Skill',
    installText: '把下面这段话发给 Codex，让它帮你检查环境并安装。',
    setupPrompt: '请为当前项目安装适用于 Codex 的 Solo Vibe Coding。\n先检查是否有 Node.js 22.20+ 和 npm；如果缺少，请给我具体的准备步骤。\n然后执行：\nnpx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding --agent codex --yes\n告诉我安装是否成功，以及如何在当前助手中选择这个 Skill。',
    activation: '在 Codex CLI 或 IDE 扩展中，输入 $ 选择 solo-vibe-coding，也可以打开 /skills。如果列表里还没有新 Skill，重启 Codex 后打开同一个项目。',
    otherAssistant: '我使用 Claude Code 或其他助手',
    claudeText: 'Claude Code 用户在项目文件夹运行下方命令，再输入 /solo-vibe-coding 并接上自己的需求。其他助手可以用通用安装命令，按提示选择正在使用的助手。',
    manualTitle: '我希望自己在终端安装',
    manualText: '准备好 Node.js 22.20+ 和 npm，在项目文件夹运行下方命令。默认安装到当前项目，添加 -g 可以跨项目使用。',
    updateTitle: '已经装过？更新现有安装',
    updateText: '在使用 Skill 的项目中操作，沿用原来源、目标助手、项目级或全局范围，以及复制或符号链接的安装方式。修改过本地文件时，先备份并对比，再处理可能覆盖的更新。可以把这段话发给助手：',
    updatePrompt: `请只更新 Solo Vibe Coding，保留已有安装范围和编程助手配置。
先定位各安装目录并解析符号链接，检查来源、固定版本、原目标助手、项目级或全局范围、复制或链接方式，以及本地改动。覆盖已有改动前，先说明冲突。
CLI 安装按原来源重新执行 npx skills@latest add，指定 --skill solo-vibe-coding，并用 --agent 显式列出原本要使用的助手。全局安装保留 -g，原来使用复制方式时保留 --copy。来源固定了版本时，除非我要求改变，否则保持固定。不要把当前执行请求的助手当成原安装目标。
手动复制的版本，在实际原路径更新完整技能目录，保留 references、元数据和许可证。
完成后逐份核对预期使用的副本，报告路径、实际改动、已经是最新的部分与失败情况，再协助确认助手实际会使用的那一份。`,
    updateCommandsTitle: '我希望自己在终端更新',
    projectUpdateLabel: '只更新当前项目中的这个 Skill',
    globalUpdateLabel: '只更新全局安装中的这个 Skill',
    updateCommandsNote: '以下命令适用于按本页安装的官方 Codex 版本，会替换目标技能文件。Claude Code 将 --agent codex 改为 --agent claude-code；原来用了 --copy 时继续保留。来自其他来源或固定了分支、标签、提交时，沿用原来源。',
    updateCheck: 'npx skills@latest check 可以只检查安装记录而不更新，也可能列出其他已安装技能。有可用更新或本地改动时，命令可能以非零状态结束，先读提示再判断是否执行失败。',
    updateFallback: '通用 skills update 命令会自动选择目标助手，可能遗漏另一个助手使用的独立副本。定向更新时显式指定原目标助手，并逐份核对预期使用的副本。手动安装则在原路径更新完整目录。来源固定了版本时，“已是最新”只表示与该来源一致。',
    verifyTitle: '确认助手实际读取的那一份',
    verifyText: '本项目用来源版本识别技能内容，不另设官网版本号。更新后新开会话，重新选择技能，再让助手依据实际文件核对：',
    verifyPrompt: `请在开展产品任务前，只读核对这个项目可用的 Solo Vibe Coding。
报告你实际读取的 SKILL.md 完整路径；如果是符号链接，也报告目标位置。检查是否有其他同名副本，帮助我选中预期的那一份。
把包含 references 在内的完整安装包，与其记录的来源、分支、标签或提交进行比较，说明本次核对的来源版本、差异及无法完成的检查。不要仅凭技能名称或安装成功推断内容版本。
这次只读检查，不修改技能文件，也不开始实现。`,
    verifyRefresh: 'Codex 会自动检测文件变化；更新未显示时，可重启 Codex。Claude Code 会监测本地技能目录，必要时使用 /reload-skills。新开会话有助于将重新选择的文件与旧对话里已经加载的指导分开。无法访问来源时，应说明版本核对尚未完成。',
    firstTitle: '选择任务，发送需求',
    gettingNav: '选择当前任务', gettingNote: '先完成上方安装，再选择任务需求，把方括号换成自己的项目信息。', installFirst: '查看安装步骤', checksTitle: '拿到结果后，检查这些',
    firstText: '将这段需求发给 Codex；也可以先在正在使用的助手中选择已安装的 Skill，再发送相同的需求描述。Claude Code 用户把开头的 $ 调用改为 /solo-vibe-coding。',
    reviewTitle: '按任务检查交付结果',
    reviewText: '需求或方案任务，核对范围、依据与结论；涉及实现时，让助手说明怎样打开成果，再亲自试用：',
    checks: ['是否解决了你一开始提出的问题？', '实现任务要实际打开成果，走完主要使用路径。', '涉及页面时，也在手机上试一试。', '问清实际验证了什么，哪些还需要确认。'],
    continueTitle: '根据实际效果继续修改',
    continueText: '指出实际结果与目标之间还差什么，提供具体画面或失败操作。让助手结合项目继续修改，并检查受影响的部分。',
    troubleTitle: '卡在某一步了？',
    troubleText: '把下面这段话发给编程助手，并贴上报错或描述你看到的情况。',
    troublePrompt: '我正在使用 Solo Vibe Coding，卡在这里：\n[贴上提示信息，或描述实际发生了什么。]\n请帮我检查原因，一步步继续，用容易理解的话说明需要我做什么。',
    next: '看看其他任务的需求示例', sources: '编程助手使用帮助', codexDocs: 'Codex 技能使用帮助', claudeDocs: 'Claude Code 技能使用帮助', cliDocs: 'Skills CLI 安装与更新参考',
  },
  guides: {
    title: '你想做什么？',
    description: '按需求澄清、视觉与交互、项目初始化、技术方案实施与验收、生产部署与发布、获客与转化六个入口，查找可复制需求、交付目标和检查要点。',
    intro: '从已有明确产品方向出发，选择当前需要的任务。各入口可以独立使用，也可以只确认需求、准备环境、制定技术方案或只读评审。复制需求并补上项目情况，按对应目标检查结果。',
    prompt: '发给编程助手的需求', output: '这次要做成什么', confirm: '拿到结果后检查', next: '查看安装和使用步骤',
  },
  notFound: { title: '404 — 没有找到这个页面', description: '返回 Solo Vibe Coding 首页，查看任务指南和安装方法。', text: '地址可能有误，或者页面已经变更。', home: '返回首页' },
};

export const UI: Record<Locale, typeof en> = { en, 'zh-CN': zh };

export function pageMetadata(locale: Locale, page: PageName) {
  const ui = UI[locale];
  const titles: Record<PageName, string> = {
    home: `${PROJECT.name} — ${locale === 'en' ? 'Build your product with specialist guidance' : '做出你想要的产品，把卡住的地方往前推一步'}`,
    'getting-started': `${ui.nav['getting-started']} — ${PROJECT.name}`,
    guides: `${ui.nav.guides} — ${PROJECT.name}`,
  };
  const descriptions: Record<PageName, string> = {
    home: locale === 'en' ? 'One open-source skill for independent developers with a product direction: requirements, visuals, project setup, technical delivery, production release and acquisition, in your existing coding assistant.' : '为已有明确产品方向的独立开发者提供六个任务入口：需求澄清、视觉与交互、项目初始化、技术交付、生产发布、获客与转化。在现有编程助手中按需使用专业方法与参考。',
    'getting-started': ui.getting.description, guides: ui.guides.description,
  };
  return { title: titles[page], description: descriptions[page] };
}
