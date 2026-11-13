import type { Locale } from './site';

export interface Outcome {
  id: 'development' | 'design' | 'deployment' | 'growth';
  label: string;
  goal: string;
  pain: string;
  situation: string;
  help: { title: string; text: string }[];
  deliverables: string[];
  previewTitle: string;
  previewText: string;
  artAlt: string;
  source: { label: string; url: string };
  checks: string[];
  prompt: string;
}

export const OUTCOMES: Record<Locale, Outcome[]> = {
  en: [
    {
      id: 'development', label: 'Break out of the bug loop',
      goal: 'Fix the video call without breaking the features that already work.',
      pain: 'One bug fixed. Another working feature broken.',
      situation: 'A Cursor user reported a real loop: fixing the guest’s black screen kept breaking working background blur and video processing. Each new repair brought another regression.',
      help: [
        { title: 'Make the problem repeatable', text: 'Reproduce the failing call and identify the related media and state boundaries before changing the code.' },
        { title: 'Keep the repair focused', text: 'Use debugging and architecture guidance to fix the cause while preserving the existing project and working behaviour.' },
        { title: 'Check what must keep working', text: 'Recheck the guest picture, background effects and core call flow. Leave the checks with the project for the next change.' },
      ],
      deliverables: ['A reproducible repair', 'Existing call features preserved', 'Repeatable regression checks'],
      previewTitle: 'Fix the problem. Keep the good parts.',
      previewText: 'Guest video · Background blur · The whole call',
      artAlt: 'A chrome video camera with an orange glass lens and a reconnected blue link, illustrating a focused repair.',
      source: { label: 'Cursor community · a video-call regression', url: 'https://forum.cursor.com/t/major-regression-loop-in-next-js-webrtc-state-management-context-loss-issues/153452' },
      checks: ['Can a guest see the video and switch background effects?', 'Do the original call features still work, and can you repeat the checks?'],
      prompt: 'Use $solo-vibe-coding to fix this existing video-call application.\nProblem: [describe the failing action, expected result, actual result and any errors].\nWorking features to preserve: [for example guest video, background blur and recording].\nReproduce the problem, identify the cause and the affected module boundaries, then make a focused repair. Reuse the project’s existing implementation and checks.\nDeliver a version I can open and try. Verify the original failure and the related features, tell me what remains unverified, and leave useful regression checks with the project.',
    },
    {
      id: 'design', label: 'Lose the AI-template look',
      goal: 'Turn a working mobile app into something worth putting out into the world.',
      pain: 'The app works. The interface still looks like a template.',
      situation: 'A developer finished a mobile app with Claude Code, but disliked the generic UI. Repeated redesign requests and reference screenshots mostly produced colour changes instead of a considered design.',
      help: [
        { title: 'Give “better” a direction', text: 'Use concrete references to decide the visual hierarchy, type, spacing and interaction that suit the app and its users.' },
        { title: 'Carry it across the actual screens', text: 'Keep the existing functions and technology. Apply one coherent visual system to the real app rather than stopping at a concept.' },
        { title: 'Try it with real content', text: 'Check the main action, small screens, long content and relevant empty, loading and error states.' },
      ],
      deliverables: ['A coherent visual direction', 'Implemented core screens', 'Mobile interaction checks'],
      previewTitle: 'An app that feels designed.',
      previewText: 'A clear hierarchy · Consistent components · Useful feedback',
      artAlt: 'A cobalt glass phone with tactile orange and lime controls, illustrating a carefully designed mobile interface.',
      source: { label: 'r/vibecoding · a mobile UI request', url: 'https://www.reddit.com/r/vibecoding/comments/1t3fg6l/vibe_coded_app_ui_help/' },
      checks: ['Is the main action easy to find and complete?', 'Do the real content and important states work on a phone?'],
      prompt: 'Use $solo-vibe-coding to redesign this existing mobile interface.\nApp, users and main action: [add the details].\nThe functions work, but the UI feels generic. Repeated requests to make it look better have mostly changed the colours.\nUse concrete references to propose a suitable visual direction and apply it to the actual core screens. Keep the existing functions, brand and technology unless a change has a clear reason.\nDeliver a version I can open and try. Check real content, small screens and important interaction states, and explain what remains unverified.',
    },
    {
      id: 'deployment', label: 'Get the demo properly live',
      goal: 'Take an almost-finished web app all the way to something people can use.',
      pain: 'The demo is ready. The last step keeps moving.',
      situation: 'A UI/UX designer with no coding background described getting stuck between the generated app, database, login, environment variables and deployment. A good-looking demo never became a complete live application.',
      help: [
        { title: 'Choose a foundation that fits', text: 'Assess mature options against the actual project, costs and access needs. Connect the missing pieces instead of repeatedly starting over.' },
        { title: 'Finish one complete user journey', text: 'Connect login and data, clarify access boundaries, and check the important path from the user’s first action to a saved result.' },
        { title: 'Verify the public release', text: 'Publish within your authorisation, open the actual address, check the main task, and leave practical deployment and rollback instructions.' },
      ],
      deliverables: ['Connected login and data', 'A checked public user journey', 'Release and recovery instructions'],
      previewTitle: 'Ready for someone else to use.',
      previewText: 'Log in · Save a result · Open the real link',
      artAlt: 'A lime glass key through a chrome browser arch beside a blue database, illustrating an app ready for real use.',
      source: { label: 'r/AskVibecoders · getting a full app live', url: 'https://www.reddit.com/r/AskVibecoders/comments/1wyowet/how_do_you_actually_go_from_vibe_coding_to_a/' },
      checks: ['Can the intended user log in, save a result and find it again?', 'Does the public address work, and do you know what was checked and how to recover?'],
      prompt: 'Use $solo-vibe-coding to finish and publish this existing web app.\nProject, intended users and current setup: [add the details].\nThe interface exists, but login, database, configuration or deployment are not connected reliably yet.\nAssess suitable mature foundations and reuse the existing work. Explain choices that affect cost or access and ask me to confirm them. Finish and check one complete user journey, including the necessary access boundaries.\nPrepare a practical release and rollback path. Publish within my authorisation, open the actual public address and report the checks and remaining gaps.',
    },
    {
      id: 'growth', label: 'Reach the first real users',
      goal: 'Get a finished product in front of people who might actually use it.',
      pain: 'Months of building. Still no one trying it.',
      situation: 'The founder of Inslytic reported having a live SDK, dashboard and onboarding, but no users. Social posts, personal outreach and a free beta had not shown whether the problem was reach, positioning or demand.',
      help: [
        { title: 'Find the point of friction', text: 'Use public customer signals and the existing product journey to distinguish a reach problem from an unclear message, a difficult first use or weak demand.' },
        { title: 'Make the use easy to understand', text: 'Choose a specific audience and task. Turn real capabilities into a clear message, a relevant demonstration and a usable entry point.' },
        { title: 'Put one launch into practice', text: 'Prepare channel-appropriate content and a small outreach plan, with observable feedback to guide the next change. You control publication.' },
      ],
      deliverables: ['A clear audience and use', 'A demonstration and trial entry', 'A first launch with feedback to observe'],
      previewTitle: 'Give the right people a reason to try.',
      previewText: 'A specific need · A visible result · A clear way in',
      artAlt: 'An orange ceramic paper plane flying through blue and lime glass rings, illustrating a product reaching its first users.',
      source: { label: 'r/vibecoding · the first-user problem', url: 'https://www.reddit.com/r/vibecoding/comments/1sh4kge/ive_been_building_a_product_for_months_and_i_cant/' },
      checks: ['Can the intended user understand the use and complete the first try?', 'Can you observe whether people are missing the message, the entry point or a reason to use it?'],
      prompt: 'Use $solo-vibe-coding to help this existing product reach its first users.\nProduct, intended users, current website and previous promotion: [add the details].\nUse available evidence to distinguish reach, positioning, first-use friction and weak demand. Do not assume that adding more features will solve it.\nHelp me choose a specific user task, create a demonstration from actual capabilities, improve the message and trial entry, and prepare content suited to a relevant channel.\nExplain what feedback to observe. Show me the materials before any publication or outreach, and do not promise a user count or revenue outcome.',
    },
  ],
  'zh-CN': [
    {
      id: 'development', label: '修好反复的 Bug',
      goal: '修好视频通话，原来好用的功能也继续好用。',
      pain: '修好一个 Bug，又弄坏一个原来的功能。',
      situation: '一位 Cursor 用户遇到这样的循环：修复访客黑屏时，助手反复破坏已经正常工作的背景虚化和视频处理。新的修复，又带来了新的问题。',
      help: [
        { title: '先让问题能重现', text: '复现失败的通话操作，弄清相关媒体流和状态边界，再开始修改。' },
        { title: '把修复控制在必要范围', text: '结合排错与架构指导找到原因，沿用现有实现，保留已经正常工作的行为。' },
        { title: '把该保留的功能再走一遍', text: '检查访客画面、背景效果和核心通话流程，把可重复的检查留给下一次修改。' },
      ],
      deliverables: ['能复现、能核对的修复', '继续正常工作的原有功能', '可以重复执行的回归检查'],
      previewTitle: '问题修好，好用的也留下。',
      previewText: '访客画面 · 背景虚化 · 完整通话',
      artAlt: '橙色玻璃镜头的镀铬相机与重新连接的蓝色环，象征修复视频功能并保留原有流程。',
      source: { label: 'Cursor 社区 · 视频功能回归问题', url: 'https://forum.cursor.com/t/major-regression-loop-in-next-js-webrtc-state-management-context-loss-issues/153452' },
      checks: ['访客能否看到画面，并正常切换背景效果？', '原有通话功能是否仍然正常，检查能否再次执行？'],
      prompt: '使用 $solo-vibe-coding，修好这个已有视频通话应用。\n问题：[失败的操作、预期结果、实际结果和报错]。\n要保留的功能：[例如访客画面、背景虚化、录制]。\n先复现问题，定位原因和受影响的模块边界，再做必要的修复。沿用项目已有实现与检查。\n交付能打开试用的版本，验证原来的失败操作和相关功能，说明未验证项，把有用的回归检查留在项目里。',
    },
    {
      id: 'design', label: '甩掉界面的 AI 味',
      goal: '把已经能用的移动 App，做到愿意拿出去给人看。',
      pain: '功能都做好了，界面还是一股模板味。',
      situation: '一位开发者用 Claude Code 做完移动 App，却不满意普通的界面。反复要求重设计、提供参考截图，得到的仍主要是换颜色。',
      help: [
        { title: '把“好看”变成明确方向', text: '用具体参考确定适合产品与用户的视觉层级、字体、间距和交互选择。' },
        { title: '改到实际的核心页面', text: '保留现有功能和技术，让同一套视觉规范贯穿真实页面，落实成可操作的实现。' },
        { title: '用真实内容试一遍', text: '检查主要操作、小屏幕、长内容，以及相关的空白、加载和错误状态。' },
      ],
      deliverables: ['明确、统一的视觉方向', '已经实现的核心页面', '真实手机交互的检查结果'],
      previewTitle: '一眼看得出，是认真做的。',
      previewText: '清楚的层级 · 一致的组件 · 恰当的反馈',
      artAlt: '蓝色玻璃手机上排列橙色、青柠色实体控件，象征经过认真设计的移动界面。',
      source: { label: 'r/vibecoding · 移动 App 界面求助', url: 'https://www.reddit.com/r/vibecoding/comments/1t3fg6l/vibe_coded_app_ui_help/' },
      checks: ['主要操作是否容易找到，并且能完成？', '手机上能否容纳真实内容，处理重要状态？'],
      prompt: '使用 $solo-vibe-coding，重新设计这个已有移动界面。\nApp、目标用户和主要操作：[补充说明]。\n功能已经能用，但界面普通，反复说“好看一点”主要只改变了颜色。\n请用具体参考提出合适的视觉方向，并落实到真实的核心页面。保留现有功能、品牌与技术；需要改变时说明理由。\n交付能打开试用的版本，检查真实内容、小屏幕和重要交互状态，说明哪些还没有验证。',
    },
    {
      id: 'deployment', label: '把 Demo 真正上线',
      goal: '把差最后一步的 Web App，交给别人真正使用。',
      pain: 'Demo 都做好了，最后一步却一直做不完。',
      situation: '一位没有编程基础的 UI/UX 设计师，反复卡在应用、数据库、登录、环境变量和部署之间。界面能生成，却迟迟没能成为完整的线上应用。',
      help: [
        { title: '选适合项目的成熟基础', text: '结合现有项目、费用和访问需求评估方案，接通缺少的部分。' },
        { title: '走完一条真实使用流程', text: '接好登录与数据，明确访问边界，检查从第一次操作到保存结果的完整过程。' },
        { title: '核对真正发布的版本', text: '按你的授权发布，打开实际网址检查主要任务，留下部署与回退方法。' },
      ],
      deliverables: ['接通的登录与数据', '实际核验过的线上使用流程', '发布与恢复的操作说明'],
      previewTitle: '这次，真的可以交给别人用。',
      previewText: '登录账号 · 保存结果 · 打开真实网址',
      artAlt: '青柠色玻璃钥匙穿过镀铬浏览器拱门，旁边是蓝色数据库，象征接通并交付应用。',
      source: { label: 'r/AskVibecoders · 完整应用上线求助', url: 'https://www.reddit.com/r/AskVibecoders/comments/1wyowet/how_do_you_actually_go_from_vibe_coding_to_a/' },
      checks: ['目标用户能否登录、保存结果，再次打开时找到数据？', '公开网址是否可用，是否知道验证了什么、出问题怎样恢复？'],
      prompt: '使用 $solo-vibe-coding，帮我完成并发布这个已有 Web App。\n项目、目标用户与当前配置：[补充说明]。\n界面已经有了，但登录、数据库、运行配置或部署还没有可靠接通。\n评估合适的成熟基础，沿用已有工作。涉及费用或访问范围的选择，说明后让我确认。接通并检查一条完整用户流程，以及必要的访问边界。\n准备可用的发布和回退方案，在我的授权内执行。打开真实公开网址检查，交代验证结果和剩余问题。',
    },
    {
      id: 'growth', label: '找到第一批用户',
      goal: '把已经做好的产品，带到真正可能使用它的人面前。',
      pain: '产品做了几个月，却连第一批用户都没有。',
      situation: 'Inslytic 的创始人发帖时，SDK、控制台和引导流程都已上线，但仍没有用户。社交发布、人脉联系和免费测试，都没让他分清问题出在触达、定位还是需求。',
      help: [
        { title: '先弄清卡在哪一步', text: '结合公开用户信号和现有使用路径，区分没人看到、介绍不清、首次使用困难，还是需求本身较弱。' },
        { title: '让合适的人看懂用途', text: '选择具体用户和任务，把真实能力变成清楚的表达、相关的演示和可用的试用入口。' },
        { title: '把第一轮推广准备好', text: '准备适合渠道的内容和小范围触达计划，明确要观察的反馈。发布由你决定。' },
      ],
      deliverables: ['具体的用户与用途', '看得懂的演示和试用入口', '能执行、能观察反馈的首轮推广'],
      previewTitle: '给合适的人，一个值得试的理由。',
      previewText: '具体需求 · 可见成果 · 清楚入口',
      artAlt: '橙色纸飞机沿镀铬轨迹穿过蓝色和青柠色玻璃环，象征把产品带到第一批用户面前。',
      source: { label: 'r/vibecoding · 第一批用户的难题', url: 'https://www.reddit.com/r/vibecoding/comments/1sh4kge/ive_been_building_a_product_for_months_and_i_cant/' },
      checks: ['目标用户能否看懂用途，并顺利完成第一次试用？', '能否观察到问题出在表达、入口，还是缺少使用理由？'],
      prompt: '使用 $solo-vibe-coding，帮这个已有产品触达第一批用户。\n产品、目标用户、当前官网和已经尝试的推广：[补充说明]。\n结合实际证据，区分触达、定位、首次使用困难和需求较弱等问题，不默认继续加功能。\n选择具体用户任务，基于真实能力制作演示，改善表达和试用入口，准备适合相关渠道的内容。\n说明应观察什么反馈。在任何发布或对外触达前，先把材料给我审阅；不承诺用户数量或收入。',
    },
  ],
};

const en = {
  stageTitle: 'Find your way past the stuck part.',
  stageDescription: 'Four familiar problems. Pick the one that sounds like yours.',
  selector: 'Choose what you want to work on',
  goal: 'What you want', help: 'The judgments your assistant can bring to the task',
  deliverables: 'The result to work towards', preview: 'Illustration of the intended result',
  start: 'Start with this task', source: 'Read the original discussion',
  mechanismTitle: 'Your goal. A better starting point.',
  mechanismText: 'You do not need to assemble every specialist method yourself. Give your assistant the task and project. The skill connects relevant guidance, existing resources and ways to check the work.',
  mechanisms: [
    { title: 'Find the approach', text: 'Relevant professional methods and concrete references, selected for the task you actually have.' },
    { title: 'Build on what fits', text: 'Your existing project and suitable mature foundations. Custom work goes where it adds something.' },
    { title: 'Check the result', text: 'Useful checks and honest delivery status, with enough project context to continue the next change.' },
  ],
  skillSource: 'Explore the skill’s guidance',
  evidenceTitle: 'Real questions. Familiar frustrations.',
  evidenceText: 'These scenarios are drawn from public community discussions. The artwork illustrates the task; it is not a screenshot or a claim that the original author used this skill.',
  allTasks: 'More ways to move your project forward',
  gettingNav: 'Choose your first task', gettingNote: 'Install the skill above, then send the request for your task. Replace the brackets with your project details.',
  installFirst: 'Go to installation', checksTitle: 'Check the result yourself',
};
const zh: typeof en = {
  stageTitle: '找到你卡住的那一步。',
  stageDescription: '四个熟悉的难题，选一个接近你眼前的事。',
  selector: '选择你现在想做的事',
  goal: '你想做什么', help: 'Skill 帮助手补上这些判断',
  deliverables: '一起做成这样的结果', preview: '交付目标示意',
  start: '从这个任务开始', source: '查看原始讨论',
  mechanismTitle: '目标你来定，做法有好起点。',
  mechanismText: '不必先把每个领域的方法都拼好。带上任务和项目，Skill 帮助手接上相关指导、现成资源，以及检查成果的办法。',
  mechanisms: [
    { title: '找到合适的做法', text: '按眼前的任务选专业方法，找具体参考，把模糊的要求变成有依据的选择。' },
    { title: '用好现成的基础', text: '沿用你的项目和合适的成熟方案，把定制工作放在真正有价值的地方。' },
    { title: '知道做到了哪一步', text: '用适当检查核对结果，交代真实状态，保留下一次修改需要的项目背景。' },
  ],
  skillSource: '看看 Skill 里有哪些指导',
  evidenceTitle: '这些难题，社区里也在问。',
  evidenceText: '场景来自公开社区讨论。插画用于说明任务，未将原帖作者当作 Skill 用户，也不代表其问题已由这个 Skill 解决。',
  allTasks: '这些事，也可以接着做',
  gettingNav: '选择你的第一个任务', gettingNote: '先完成上方安装，再发送与你任务对应的需求。把方括号换成自己的项目信息。',
  installFirst: '前往安装步骤', checksTitle: '拿到成果后，自己确认',
};
export const OUTCOME_UI: Record<Locale, typeof en> = { en, 'zh-CN': zh };
