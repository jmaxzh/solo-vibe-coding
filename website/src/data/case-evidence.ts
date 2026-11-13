import type { Locale } from './site';

type Text = Record<Locale, string>;
type Finding = { title: Text; fact: Text; relevance: Text };
type Result = { label: Text; baseline: Text; withSkill: Text };

// Public case facts are copied from reviewed evidence. The website has no runtime dependency on research archives.
export const CASE_EVIDENCE: {
  available: boolean; date: string; agent: string; cohort: string; summary: Text;
  findings: Finding[]; results: Result[]; cost: Text; pilot: Text; scope: Text;
  guidanceSources: { label: string; url: string }[];
} = {
  "guidanceSources": [
    {
      "label": "Ponytail",
      "url": "https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/skills/ponytail/SKILL.md"
    },
    {
      "label": "Ponytail Review",
      "url": "https://github.com/DietrichGebert/ponytail/blob/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/skills/ponytail-review/SKILL.md"
    },
    {
      "label": "UB Mode",
      "url": "https://github.com/unclebob/ub-mode/blob/3da62bf3fcfd2034de41f30d920d2739e566171f/SKILL.md"
    }
  ],
  "available": true,
  "date": "2026-11-13",
  "agent": "Codex CLI 0.167.0-alpha.4.1 · gpt-6.1-sol · max",
  "cohort": "20261113T080111644441Z",
  "summary": {
    "en": "Across three paired samples, both groups passed both changes on their first attempts, with no extra professional prompts. The skill group used original guidance and project agreements, but spent more time and reported more tokens here. This case shows the methods in use; it does not demonstrate a speed or output-quality advantage.",
    "zh-CN": "3个配对中，两组都首次通过两轮任务，无需额外专业补救提示。Skill组实际使用专业指导与项目约定，但这次用时和报告用量更高。案例展示方法怎样进入工作，没有证明速度或成果质量领先。"
  },
  "findings": [
    {
      "title": {
        "en": "Read the relevant original guidance.",
        "zh-CN": "按任务读取相关原始指导。"
      },
      "fact": {
        "en": "In the first change, the skill group read the development, quality, remote-reading and project-context instructions, then fetched Ponytail and UB Mode from their original repositories.",
        "zh-CN": "第一轮，Skill 组读取开发、质量、原文读取和项目约定指导，再从原始仓库读取 Ponytail 与 UB Mode。"
      },
      "relevance": {
        "en": "The task entry point supplied a concrete way to find and combine guidance; the user had not selected these methods.",
        "zh-CN": "任务入口提供了具体的方法选择与组合方式，用户没有逐项指定这些方法。"
      }
    },
    {
      "title": {
        "en": "Fit the change to the existing project.",
        "zh-CN": "把新功能接入已有项目。"
      },
      "fact": {
        "en": "It kept the HTML, CSS, JavaScript and browser-storage approach. CSV export used browser capabilities, with no additional application dependency, account or service.",
        "zh-CN": "保留 HTML、CSS、JavaScript 和浏览器存储，导出使用浏览器能力，没有新增应用依赖、账号或服务。"
      },
      "relevance": {
        "en": "The existing tool and saved data stayed useful. The direct-agent group also preserved these behaviours.",
        "zh-CN": "已有工具和数据继续可用；直接使用 Agent 的组也保留了这些行为。"
      }
    },
    {
      "title": {
        "en": "Leave repeatable checks with the project.",
        "zh-CN": "把可重复检查留在项目里。"
      },
      "fact": {
        "en": "The skill group retained Node tests and explicit quality agreements, including which browser, phone and Excel behaviours still needed separate verification.",
        "zh-CN": "Skill 组保留了 Node 检查与明确的质量约定，并说明哪些浏览器、手机和 Excel 行为仍需另外验收。"
      },
      "relevance": {
        "en": "You can rerun the project checks later and see the limits. A test count alone is not a quality comparison.",
        "zh-CN": "后续可以重复运行项目检查，也能知道验证范围；检查条数本身不作为质量比较。"
      }
    },
    {
      "title": {
        "en": "Continue from the project files.",
        "zh-CN": "新会话从项目文件接着做。"
      },
      "fact": {
        "en": "The second session read the project README, quality agreements and existing tests before changing filtered export, then updated the same material.",
        "zh-CN": "第二轮新会话先读项目说明、质量约定和已有检查，再修改筛选导出，并继续更新同一套材料。"
      },
      "relevance": {
        "en": "No earlier chat was provided. The project carried these agreements into the next change.",
        "zh-CN": "没有提供上一轮聊天，项目本身承接了这些约定。"
      }
    }
  ],
  "results": [
    {
      "label": {
        "en": "First change · 3 paired samples",
        "zh-CN": "第一次修改 · 3个配对"
      },
      "baseline": {
        "en": "3 / 3 samples passed all 9 checks",
        "zh-CN": "3 / 3 样本通过全部9项检查"
      },
      "withSkill": {
        "en": "3 / 3 samples passed all 9 checks",
        "zh-CN": "3 / 3 样本通过全部9项检查"
      }
    },
    {
      "label": {
        "en": "Fresh-session change · 3 paired samples",
        "zh-CN": "新会话修改 · 3个配对"
      },
      "baseline": {
        "en": "3 / 3 samples passed all 14 checks",
        "zh-CN": "3 / 3 样本通过全部14项检查"
      },
      "withSkill": {
        "en": "3 / 3 samples passed all 14 checks",
        "zh-CN": "3 / 3 样本通过全部14项检查"
      }
    },
    {
      "label": {
        "en": "Extra professional prompts sent",
        "zh-CN": "额外发送的专业补救提示"
      },
      "baseline": {
        "en": "0 across the 6 rounds",
        "zh-CN": "6轮合计0次"
      },
      "withSkill": {
        "en": "0 across the 6 rounds",
        "zh-CN": "6轮合计0次"
      }
    }
  ],
  "cost": {
    "en": "For the corrected batch, median agent execution per two-round project was 7m49s directly and 11m12s with the skill, excluding external grading and preparation. Across all 6 sessions per condition, reported input/output tokens were 1,176,500/56,360 and 3,022,258/76,994. Input includes 1,024,128 and 2,791,168 cached tokens respectively. Local skill-copy preparation took under a second; this is not npm-install timing. These are reported units, not monetary charges.",
    "zh-CN": "修订批次中，每个两轮项目的Agent执行时间中位数分别为7分49秒和11分12秒，不含外部验收及准备。各条件6次会话的报告输入/输出用量合计分别为1,176,500/56,360和3,022,258/76,994 token；输入分别含1,024,128和2,791,168缓存。本地复制Skill准备不足1秒，不代表npm安装时间。这些报告单位不等于实际费用。"
  },
  "pilot": {
    "en": "An earlier batch hit shared browser-sandbox and npm-cache permission failures. Both first-round runs reached the 480s cap; their partial outputs passed 9/9 and 6/9 checks. One later direct-agent round completed and other work was interrupted. The pilot is retained separately, with at least 21m37s of recorded agent time plus interrupted work and missing usage. It is not treated as a normal-environment performance result.",
    "zh-CN": "此前一批遇到共同浏览器沙箱与 npm 缓存权限故障，两个首轮均达到 480 秒上限，截断产物分别通过 9/9 和 6/9。随后直接 Agent 的一轮完成，其他执行被中断。先导另行保留，已记录 Agent 时间至少 21 分 37 秒，另有中断工作与缺失用量，不作为正常环境的性能结果。"
  },
  "scope": {
    "en": "The corrected batch used 3 paired samples, each with two changes. Both groups were told that sandboxed Chrome could not launch, Node was available, npm used a project-local cache and an external checker would inspect browser behaviour. Rules were recorded before the corrected batch. Every second round started a fresh conversation; shared user defaults remained the same. AB/BA describes submission order, not a guarantee of actual start order. Screenshots and the guidance observations above come from the skill-enabled project in pair 01, selected by number; the table includes all corrected samples.",
    "zh-CN": "修订批次包含3个配对，各做两轮修改。两组均被告知沙箱内Chrome无法启动、Node可用、npm使用各自项目内缓存，浏览器行为由外部统一验收；规则在本批次前写定。第二轮均新开会话，共同用户默认设置保持一致。AB/BA表示提交顺序，不保证实际启动顺序。截图和上面的指导观察固定来自第1配对启用Skill的项目，比较表统计全部修订样本。"
  }
};
