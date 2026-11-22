import { OUTCOMES } from './outcomes';
import { SCENARIOS, type Locale } from './site';

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

function tasksFor(locale: Locale): TaskExample[] {
  const existing = SCENARIOS[locale].map((scenario) => {
    const outcome = OUTCOMES[locale].find((item) => item.id === scenario.id);
    return {
      id: scenario.id, label: scenario.label,
      title: outcome?.goal ?? scenario.title,
      summary: outcome?.pain ?? scenario.summary,
      prompt: outcome?.prompt ?? scenario.prompt,
      output: outcome ? outcome.deliverables.join(locale === 'en' ? '; ' : '；') : scenario.output,
      checks: outcome?.checks ?? [scenario.confirm],
    };
  });
  return [...existing, ...additional[locale]];
}

export const TASKS: Record<Locale, TaskExample[]> = { en: tasksFor('en'), 'zh-CN': tasksFor('zh-CN') };
