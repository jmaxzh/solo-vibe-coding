import type { Locale } from './site';

export interface TaskExample {
  id: string;
  label: string;
  title: string;
  summary: string;
  prompt: string;
  output: string;
  checks: string[];
}

export interface TaskGroup {
  id: string;
  label: string;
  summary: string;
  tasks: string[];
}

export const TASK_GROUPS: Record<Locale, TaskGroup[]> = {
  en: [
    { id: 'requirements-clarification', label: 'Requirements clarification', summary: 'Turn a product direction or feedback into a clear scope, user journey and acceptance criteria.', tasks: ['clarify'] },
    { id: 'visual-interaction', label: 'Visual design and interaction', summary: 'Work from viewable references to real interfaces, motion, social images and product videos.', tasks: ['design', 'visual-assets', 'product-video'] },
    { id: 'project-initialization', label: 'Project initialization', summary: 'Start or take over a project, run its local services and establish appropriate automated checks.', tasks: ['initialize'] },
    { id: 'technical-delivery', label: 'Technical planning, implementation and acceptance', summary: 'Research and design a solution, build or repair it, then check the running result and simplify the code.', tasks: ['plan', 'requirements', 'architecture', 'development', 'review'] },
    { id: 'production-release', label: 'Production deployment and release', summary: 'Prepare production configuration, publish within your authorisation, verify the live result and plan recovery.', tasks: ['deployment'] },
    { id: 'acquisition-conversion', label: 'Acquisition and conversion', summary: 'Explain real product value, prepare channel-specific content and find friction in the path to first use.', tasks: ['growth'] },
  ],
  'zh-CN': [
    { id: 'requirements-clarification', label: '需求澄清', summary: '把已有产品方向或反馈，整理成明确的范围、用户旅程和验收条件。', tasks: ['clarify'] },
    { id: 'visual-interaction', label: '视觉与交互', summary: '从可查看的参考出发，制作真实界面、动效、自媒体图片和产品视频。', tasks: ['design', 'visual-assets', 'product-video'] },
    { id: 'project-initialization', label: '项目初始化', summary: '新建或接手项目，跑通本地环境与依赖服务，建立适当的自动检查。', tasks: ['initialize'] },
    { id: 'technical-delivery', label: '技术方案、实施与验收', summary: '调研并设计方案，实现功能或修复问题，验收运行结果，再精简代码。', tasks: ['plan', 'requirements', 'architecture', 'development', 'review'] },
    { id: 'production-release', label: '生产部署与发布', summary: '准备生产配置，在授权内发布，核验线上结果，并准备恢复方法。', tasks: ['deployment'] },
    { id: 'acquisition-conversion', label: '获客与转化', summary: '讲清真实产品价值，准备适合渠道的内容，找出首次使用路径中的阻力。', tasks: ['growth'] },
  ],
};

const additional: Record<Locale, TaskExample[]> = {
  en: [
    {
      id: 'clarify', label: 'Clarify a requirement', title: 'Agree on what this change needs to do.',
      summary: 'Start with an established product direction, feedback or an unclear feature. This task ends with confirmed requirements.',
      prompt: `Use $solo-vibe-coding to clarify this requirement.
Product direction, users and feedback: [add the details].
Read the existing project context and confirmed decisions. Identify unresolved choices, walk through the user journey and important failure cases, and help me agree on scope and acceptance criteria.
Deliver a clear requirement in the project’s existing documentation format. Stop at requirements; do not implement it.`,
      output: 'Confirmed scope, a user journey, acceptance criteria and any remaining questions.',
      checks: ['Does the scope address the actual need?', 'Are important choices confirmed and expected outcomes clear?'],
    },
    {
      id: 'initialize', label: 'Set up a project', title: 'Get a new or inherited project ready for development.',
      summary: 'Use the existing setup first. Prepare only the environment, services and checks this project needs.',
      prompt: `Use $solo-vibe-coding to prepare this project for development.
Project, confirmed requirements and technology choices: [add the details].
Read the project instructions, setup docs, lockfiles and existing checks. Prepare the required local environment and services, preserve existing data, and verify one key application path.
Reuse or fill gaps in appropriate quality criteria and automated checks before feature work. Deliver repeatable setup, start, stop and check instructions, and report missing prerequisites. Do not add product features.`,
      output: 'A verified local setup and appropriate automated checks, with repeatable operating instructions.',
      checks: ['Can the documented steps start the project and required services?', 'Do the checks run, and are missing prerequisites explicit?'],
    },
    {
      id: 'plan', label: 'Plan a technical change', title: 'Choose and explain a workable technical approach.',
      summary: 'Use a confirmed requirement. You can request a plan on its own before authorising implementation.',
      prompt: `Use $solo-vibe-coding to design a technical plan for this confirmed requirement.
Requirement, acceptance criteria and project constraints: [add the details].
Start from the underlying problem and facts. Research existing project capabilities and mature solutions, evaluate the trade-offs, then design the selected approach.
Organise affected business domains by data structures, logic and control flow. Explain interfaces, failure cases and acceptance scenarios. State effort, risk, assumptions and unknowns for each independent work item.
Deliver the plan and recommendations only; do not implement or install anything.`,
      output: 'A sourced technical plan with reuse decisions, affected domains, implementation work and acceptance scenarios.',
      checks: ['Does the plan address the confirmed requirement and constraints?', 'Can you see what will change, what will be reused and how results will be checked?'],
    },
    {
      id: 'review', label: 'Review without editing', title: 'Find justified opportunities to simplify a change.',
      summary: 'Review the diff and connected code against the requirements and project conventions.',
      prompt: `Use $solo-vibe-coding to review this change without editing files.
Change and confirmed requirements: [add a diff, commit or scope].
Read the connected code, project rules, style configuration and existing checks. Look for unnecessary changes, duplication, over-engineering and departures from project conventions.
Report verified findings with locations, evidence and the smallest complete improvement. Separate project requirements from personal preferences and state what you did not verify. Do not refactor or publish comments.`,
      output: 'A read-only review with verified findings, concrete improvements and verification limits.',
      checks: ['Does each finding have a specific code location and evidence?', 'Would the proposed simplification preserve the required behaviour?'],
    },
    {
      id: 'visual-assets', label: 'Make covers and social images', title: 'Turn real product material into a consistent set of images.',
      summary: 'Start with a cover, carousel or poster reference. Keep the brand and adapt the composition to each channel.',
      prompt: `Use $solo-vibe-coding to make product covers and social image cards.
Audience, channels, dimensions and message: [add the details].
Use these real product screens and viewable visual references: [attach files or links]. If references are missing, help me find suitable ones before production.
Keep the brand and product facts, adapt composition and text density to each format, and check crops, dimensions and readability.
Deliver the final image files and the applicable editable source or generation parameters, with preview and file locations. Do not publish.`,
      output: 'Finished image files plus applicable editable source or generation parameters, with a preview and file locations.',
      checks: ['Are text, crops and dimensions right for the intended channels?', 'Are product facts accurate and the delivered files available?'],
    },
    {
      id: 'product-video', label: 'Make a product video', title: 'Show a real product task in a video people can watch.',
      summary: 'Use a playable reference and real product footage to guide the pacing, visual style and explanation.',
      prompt: `Use $solo-vibe-coding to make a short product demonstration video.
Audience, channel, length, aspect ratio and product task: [add the details].
Real product material and playable video reference: [attach files or links]. Help find a reference first if needed. Reuse the existing brand and any suitable video project.
Explain required tools, access and costs. Show actual capabilities, render the video, and check playback, audio sync, captions and opening and closing frames.
Deliver the playable exported file and editable project, with their locations. Report anything not rendered or verified. Do not publish.`,
      output: 'A playable exported video and editable project when the required tools and access are available; otherwise, an explicit delivery gap.',
      checks: ['Does the exported video play and show the actual product task?', 'Are captions, audio and framing correct, and is the editable project included?'],
    },
  ],
  'zh-CN': [
    {
      id: 'clarify', label: '澄清一项需求', title: '先确认这次修改到底要做成什么。',
      summary: '从明确的产品方向、反馈或尚不清楚的功能开始，这次交付到需求确认为止。',
      prompt: `使用 $solo-vibe-coding，帮我澄清这项需求。
产品方向、用户和反馈：[补充说明]。
先读已有项目背景与确认过的结论，找出尚未明确的选择，走通用户旅程和重要异常情况，和我确认范围与验收条件。
沿用项目已有文档格式交付清楚的需求。这次到需求确认为止，不进行实现。`,
      output: '确认的功能范围、用户旅程、验收条件和仍待解决的问题。',
      checks: ['范围是否解决了实际需求？', '重要选择是否得到确认，预期结果是否清楚？'],
    },
    {
      id: 'initialize', label: '准备项目环境', title: '让新项目或接手的项目具备开发条件。',
      summary: '优先沿用已有配置，只补齐项目实际需要的环境、服务与检查。',
      prompt: `使用 $solo-vibe-coding，为这个项目准备开发环境。
项目、已确认需求与技术选择：[补充说明]。
先读项目指令、环境说明、锁文件和已有检查，准备必要的本地环境与依赖服务，保留已有数据，验证一条关键应用路径。
在功能开发前，复用或补齐适当的质量指标和自动检查。交付可重复执行的搭建、启动、停止与检查方法，说明缺少的前置条件。这次不增加产品功能。`,
      output: '经过验证的本地环境、适当的自动检查，以及可重复执行的操作说明。',
      checks: ['能否按说明启动项目和必要服务？', '检查是否能运行，缺少的前置条件是否明确？'],
    },
    {
      id: 'plan', label: '只做技术方案', title: '选出并说明一套可实施的技术方案。',
      summary: '承接已经确认的需求，可以先单独完成方案，再决定是否实施。',
      prompt: `使用 $solo-vibe-coding，为这项已确认需求制定技术方案。
需求、验收条件和项目约束：[补充说明]。
从根本问题与基本事实出发，先调研项目已有能力和成熟方案，再评估取舍，展开选定方案。
按受影响的业务领域组织数据结构、逻辑与控制流程，说明接口、异常情况和验收场景。对每个独立工作项说明工作量、风险、假设与未知。
这次只交付方案与建议，不进行实现或安装。`,
      output: '包含来源、复用选择、受影响领域、实施工作项与验收场景的技术方案。',
      checks: ['方案是否满足已确认需求与项目约束？', '是否清楚要改什么、复用什么，以及如何验证结果？'],
    },
    {
      id: 'review', label: '只读代码评审', title: '找出有依据的代码精简与改进空间。',
      summary: '对照需求和项目约定，审查 diff 及关联代码。',
      prompt: `使用 $solo-vibe-coding，只读评审这次变更，不修改文件。
变更与已确认需求：[提供 diff、提交或范围]。
读取关联代码、项目规则、代码风格配置和已有检查，检查需求外改动、重复、过度设计与偏离项目约定的情况。
只报告经过核实的发现，给出位置、依据和最小完整改进方案，区分项目要求与个人偏好，说明未验证项。这次不重构，也不对外发布评论。`,
      output: '包含已核实发现、具体改进方案与验证范围的只读评审。',
      checks: ['每项发现是否都有具体位置与依据？', '建议的精简是否保留所需行为？'],
    },
    {
      id: 'visual-assets', label: '制作封面和图卡', title: '把真实产品素材做成风格一致的图片。',
      summary: '先取得封面、图卡或海报参考，再沿用品牌，按渠道调整构图。',
      prompt: `使用 $solo-vibe-coding，制作产品封面与自媒体图卡。
目标用户、渠道、尺寸与主要信息：[补充说明]。
真实产品画面与可查看的视觉参考：[附文件或链接]。缺少参考时，先帮我找到适合的案例再制作。
保持品牌和产品事实，按不同载体调整构图与文字密度，检查裁切、尺寸和可读性。
交付最终图片文件，以及适用的可编辑源文件或生成参数，说明预览与文件位置。这次不发布。`,
      output: '最终图片文件、适用的可编辑源文件或生成参数，以及预览和文件位置。',
      checks: ['文字、裁切和尺寸是否适合目标渠道？', '产品事实是否准确，交付的文件是否可以取得？'],
    },
    {
      id: 'product-video', label: '制作产品演示视频', title: '用能播放的视频展示一次真实产品操作。',
      summary: '用可播放的参考和真实产品画面，确定节奏、视觉风格与讲解方式。',
      prompt: `使用 $solo-vibe-coding，制作一段产品演示短视频。
目标用户、渠道、时长、画面比例与产品任务：[补充说明]。
真实产品素材与可播放的视频参考：[附文件或链接]。缺少参考时先帮我寻找，沿用品牌和适用的已有视频工程。
说明需要的工具、访问条件和费用。展示实际能力，渲染导出视频，检查播放、音画同步、字幕及首尾画面。
交付可播放的导出文件与可编辑工程，说明文件位置；没有渲染或验证的部分明确报告。这次不发布。`,
      output: '工具与访问条件具备时，交付可播放的导出视频和可编辑工程；否则明确交付缺口。',
      checks: ['导出视频能否播放，并展示真实产品操作？', '字幕、音频与画面是否正确，是否包含可编辑工程？'],
    },
  ],
};

const implementation: Record<Locale, TaskExample[]> = {
  en: [
    {
      id: 'requirements', label: 'Build a first version', title: 'Build the first usable version of your product.',
      summary: 'Start from an established product direction and one complete user journey.',
      prompt: 'Use $solo-vibe-coding to build the first usable version of this product.\nProduct direction, users and core task: [add the details].\nRead the project context, assess suitable existing work and agree on scope and acceptance criteria. Explain choices that affect cost or access and ask me to confirm them.\nDeliver a version I can open and try, verify the main journey and report any remaining gaps.',
      output: 'A usable first version, operating instructions and the actual verification results.',
      checks: ['Can the intended user complete the core task?', 'Are the operating instructions and unverified areas clear?'],
    },
    {
      id: 'architecture', label: 'Implement a feature', title: 'Fit a confirmed feature into your existing project.',
      summary: 'Use the existing structure and preserve the behaviour outside this change.',
      prompt: 'Use $solo-vibe-coding to implement this confirmed feature.\nRequirement, acceptance criteria and project constraints: [add the details].\nInspect the connected code and existing checks, compare suitable approaches and implement the smallest complete change.\nVerify the new user journey and affected existing behaviour. Explain how to use it and report unverified work.',
      output: 'An integrated feature with usage instructions and relevant checks.',
      checks: ['Does the feature meet the confirmed requirement?', 'Do the affected existing functions still work?'],
    },
    {
      id: 'design', label: 'Improve an interface', title: 'Improve the hierarchy and interaction of an existing page.',
      summary: 'Use a viewable reference and retain the project’s brand, functions and technology.',
      prompt: 'Use $solo-vibe-coding to improve this page.\nPage, intended users, main action and viewable reference: [add the details].\nIf a suitable reference is missing, help find one first. Improve hierarchy, readability and interaction while retaining the existing brand, functions and technology.\nDeliver a working page and compare it with the reference. Check desktop, mobile and important interaction states, and report any gaps.',
      output: 'An implemented page with a preview and responsive and interaction checks.',
      checks: ['Can users find and complete the main action?', 'Are real content and important states usable on desktop and mobile?'],
    },
    {
      id: 'development', label: 'Investigate and fix a problem', title: 'Reproduce a problem and verify the repair.',
      summary: 'Describe the failing action and expected outcome, then check the cause and affected behaviour.',
      prompt: 'Use $solo-vibe-coding to fix this problem.\nSteps, expected result, actual result and error messages: [add the details].\nReproduce the failure, locate the cause and make a focused repair using the project’s existing implementation and checks.\nDeliver a version I can open and try. Verify the failing action and affected existing functions, and report what remains unverified.',
      output: 'A focused repair with repeatable verification and a clear delivery status.',
      checks: ['Does the original failing action now work?', 'Do related functions still work, and can the checks be repeated?'],
    },
    {
      id: 'deployment', label: 'Release a project', title: 'Publish a working project for its intended audience.',
      summary: 'Prepare the production configuration, verify the live result and document recovery.',
      prompt: 'Use $solo-vibe-coding to release this project.\nProject, target environment, intended audience and publication authorisation: [add the details].\nReuse the existing deployment setup. Check production configuration and required access, explain costs and confirm important release choices.\nPublish within my authorisation, verify the actual address and main user journey, and provide release and recovery instructions. Report missing access or unexecuted checks.',
      output: 'A verified release and recovery instructions when the required access is available.',
      checks: ['Can the intended audience use the actual published version?', 'Are release checks, access boundaries and recovery steps clear?'],
    },
    {
      id: 'growth', label: 'Improve product communication', title: 'Explain real product value and make the next action clear.',
      summary: 'Review the message and first-use journey for a defined audience.',
      prompt: 'Use $solo-vibe-coding to improve this product’s communication and conversion path.\nProduct, audience, current material and observable feedback: [add the details].\nUse real capabilities and evidence to identify unclear messages or difficult first-use steps. Recommend focused changes and prepare suitable copy or channel content.\nExplain what feedback to observe and show me the material before publication. Do not publish or contact anyone in this task.',
      output: 'Evidence-based recommendations, usable content and a feedback observation plan.',
      checks: ['Can the intended audience understand the use and next action?', 'Are claims supported and the proposed feedback observable?'],
    },
  ],
  'zh-CN': [
    {
      id: 'requirements', label: '制作产品首版', title: '做出产品的第一个可用版本。',
      summary: '承接已有产品方向，先完成一条完整用户流程。',
      prompt: '使用 $solo-vibe-coding，做出这个产品的第一个可用版本。\n产品方向、用户与核心任务：[补充说明]。\n先读项目背景，评估适用的已有工作，确认范围与验收条件。说明影响费用或访问范围的选择，并让我确认。\n交付能打开试用的版本，验证主要流程，说明使用方法和剩余缺口。',
      output: '可用首版、操作说明和实际验证结果。',
      checks: ['目标用户能否完成核心任务？', '操作方法和未验证范围是否清楚？'],
    },
    {
      id: 'architecture', label: '实现一项功能', title: '把已确认的功能接入现有项目。',
      summary: '沿用项目结构，保留本次修改范围之外的行为。',
      prompt: '使用 $solo-vibe-coding，实现这项已确认的功能。\n需求、验收条件和项目约束：[补充说明]。\n查看关联代码与已有检查，比较适用方案，完成最小且完整的修改。\n验证新增用户流程及受影响的原有行为，说明怎样使用，以及哪些部分还没有验证。',
      output: '接入现有项目的功能、使用方法和相关检查。',
      checks: ['功能是否满足已确认需求？', '受影响的原有功能是否仍然正常？'],
    },
    {
      id: 'design', label: '改善界面', title: '改善已有页面的层级与交互。',
      summary: '从可查看的参考出发，沿用品牌、功能和技术。',
      prompt: '使用 $solo-vibe-coding，改善这个页面。\n页面、目标用户、主要操作和可查看的参考：[补充说明]。\n缺少合适参考时，先协助寻找。改善层级、可读性与交互，沿用已有品牌、功能和技术。\n交付可操作页面，对照参考检查电脑、手机和重要交互状态，说明剩余缺口。',
      output: '已实现的页面、预览，以及响应式与交互检查。',
      checks: ['用户能否找到并完成主要操作？', '电脑和手机上的真实内容与重要状态是否可用？'],
    },
    {
      id: 'development', label: '排查并修复问题', title: '重现问题，核验修复结果。',
      summary: '说明失败操作与预期结果，检查原因和受影响的行为。',
      prompt: '使用 $solo-vibe-coding，修复这个问题。\n操作步骤、预期结果、实际结果和报错：[补充说明]。\n先重现失败，定位原因，沿用已有实现与检查，完成必要的修复。\n交付能打开试用的版本，验证原失败操作和受影响的原有功能，说明未验证项。',
      output: '范围明确的修复、可重复验证的方法和清楚的交付状态。',
      checks: ['原来失败的操作是否已经正常？', '相关功能是否正常，检查能否重复执行？'],
    },
    {
      id: 'deployment', label: '发布项目', title: '把可用项目发布给目标用户。',
      summary: '准备生产配置，核验线上结果，并留下恢复方法。',
      prompt: '使用 $solo-vibe-coding，发布这个项目。\n项目、目标环境、使用人群与发布授权：[补充说明]。\n复用已有部署配置，检查生产配置与必要权限，说明费用，并确认重要发布选择。\n在授权内发布，核验实际网址和主要用户流程，交付发布与恢复说明；缺少的权限或没有执行的检查要明确报告。',
      output: '权限具备时交付核验过的发布版本，以及恢复说明。',
      checks: ['目标用户能否使用实际发布的版本？', '发布检查、访问边界和恢复步骤是否清楚？'],
    },
    {
      id: 'growth', label: '改善产品表达', title: '讲清真实价值，让下一步操作明确。',
      summary: '围绕明确用户，检查产品表达和首次使用路径。',
      prompt: '使用 $solo-vibe-coding，改善这个产品的表达与转化路径。\n产品、目标用户、现有材料和可观察反馈：[补充说明]。\n根据真实能力和证据，找出表达不清或首次使用困难的环节，提出聚焦的改进，准备合适的文案或渠道内容。\n说明应观察的反馈，先把材料给我审阅。这次不发布，也不联系他人。',
      output: '有依据的建议、可用内容和反馈观察方法。',
      checks: ['目标用户能否看懂用途和下一步操作？', '表述是否有依据，建议观察的反馈是否可以取得？'],
    },
  ],
};

export const TASKS: Record<Locale, TaskExample[]> = {
  en: [...implementation.en, ...additional.en],
  'zh-CN': [...implementation['zh-CN'], ...additional['zh-CN']],
};
