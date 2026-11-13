# 形式化验证情景走查

本记录保留更新后的 Skill 对五个开发请求的只读推演。走查代理使用新上下文，只获得技能包、情景输入和指定上游缓存，没有获得维护差异、自评或预期答案。代码与日志均为情景资料；走查未修改项目、运行验证器或执行检查。

## 输入

以下是五个相互独立的只读请求。代码与日志为情景输入，并非本仓库执行记录。

### 1 修改页面文案

用户请求：只把落地页副标题从“管理你的任务”改成“让下一步更清楚”。项目已有格式、构建和链接检查，均可本地运行。请说明这次需要采用什么验证方法，以及是否需要补充验证基础设施；不要实际改文件或运行命令。

### 2 后台作业执行

用户请求：我们准备发布下面这个 Go worker。之前的模型检查通过了，你能审查现在的发布依据是否足够吗？业务要求是同一作业任一时刻最多有一个执行者。请只给判断及依据。

实现的仓库接口中，Claim 在数据库事务内判断作业是否未完成且租约已过期，并原子地记录 owner 与 expires；MarkDone 校验 owner。doWork 在事务外执行，可能运行 12 分钟。

```go
func Process(id, worker string) {
    ok := repo.Claim(id, worker, time.Now().Add(5*time.Minute))
    if !ok { return }
    doWork(id)
    repo.MarkDone(id, worker)
}
```

现存设计模型与结果：

```tla
VARIABLE busy, active
Init == /\ busy = FALSE /\ active = 0
Start == /\ ~busy /\ busy' = TRUE /\ active' = 1
Finish == /\ busy /\ busy' = FALSE /\ active' = 0
Next == Start \/ Finish
AtMostOne == active <= 1
```

```text
verified_model_commit=a17
current_code_commit=b28
invariant=AtMostOne
complete=true
states=3
violations=0
```

### 3 新增状态写入路径

用户请求：我们的已验证作业状态机只记录了 Process 和 MarkDone，最近把 Process 重命名成 RunJob，还增加了 RecoverExpired，后者可把 running 改成 ready。昨天只重新执行了旧模型，结果仍通过。这次需要如何处理验证和项目文档？请只给处理意见，保留现有 Makefile、功能 spec 和测试说明，不创建第二套约定。

### 4 字符串性质测试

用户请求：下面的测试通过了 1000 个生成样例。发布说明能写“已证明任意输入都正确”吗？如果需要改写，给出准确表述。

```ts
const normalize = (s: string) => s.trim().toLowerCase();
fc.assert(fc.property(fc.string(), s =>
  normalize(normalize(s)) === normalize(s)
), { numRuns: 1000 });
```

### 5 检查命令正常退出

用户请求：项目规定这项关键性质验证通过才能发布。现有检查包装器返回码是 0，摘要如下。能否将该检查标记为通过？请说明处理方式。

```json
{"exit_code":0,"status":"unknown","stop_reason":"time_limit","exploration_complete":false,"violations_found":0}
```

## 实际回复

以下均为只读判断；代码和日志仅作为情景输入，我未改文件或运行检查。

1. **修改页面文案**

   采用「开发与质量」和「质量指标与自动检查」。核对差异仅包含指定副标题替换，沿用现有格式、构建和链接检查，按项目既定规则验证即可；若文案长度影响排版，再查看实际页面。现有本地设施足够，无需增加测试框架、CI 或形式化验证设施。本次未执行这些检查。

2. **后台作业执行**

   采用「形式化验证」及 `maintain-formal-verification-skill`。发布依据不足，给定实现存在违反业务要求的可行执行序列：A 领取租约后运行超过 5 分钟，B 在租约过期后成功领取，此时 A、B 同时执行 `doWork`。`MarkDone` 的 owner 校验无法停止 A 已经开始的工作。

   现有模型通过 `busy` 直接排除了这种重叠，没有描述租约过期、重新领取和事务外执行。`complete=true`、零违反仅支持这个模型的结论；日志对应 a17，也未提供其与 b28 实现同步的证据，不能据此证明当前实现满足要求。

3. **新增状态写入路径**

   采用「形式化验证」、维护上游及「项目知识库规范」。从最后确认同步的版本复核受保护代码：将 `Process` 的映射更新为 `RunJob`，并纳入 `RecoverExpired` 对共享状态的写入、实际原子步骤及相关交错。除非业务要求有明确变更依据，保留原性质。

   更新模型或 harness 后复跑，确认检查能捕获相关缺陷，恢复临时缺陷后再复跑；发现反例时逐步对照真实代码，区分模型漂移与实现缺陷。完成这些工作前，不推进同步提交记录。继续使用原 Makefile 入口，在现有功能 spec 更新行为、性质和假设，在现有测试说明维护覆盖映射、命令、界限及复跑条件，不建立第二套文档或验证约定。昨天重跑旧模型不足以确认验证仍有效。

4. **字符串性质测试**

   采用「开发与质量」的性质测试指导及 `property-based-testing`，继续使用已有 fast-check。不能写“已证明任意输入都正确”。若题给运行记录属实，可写：

   > 使用 fast-check 对本次配置生成的 1000 个字符串样例检查了 `normalize(normalize(s)) === normalize(s)`，未发现幂等性反例。这是抽样测试结果，不是对所有输入或全部功能要求的正确性证明。

5. **检查命令正常退出**

   采用「质量指标与自动检查」和「形式化验证」。不能标记通过：结果是 `unknown`，因超时停止且探索未完成；零反例只表示已探索部分未发现违反，退出码 0 不能覆盖这一事实。应标记为尚不能判定，发布前置条件仍未满足。

   在既有检查入口修正包装器，让未知、超时和未完成返回非零状态；核查资源限制与耗时后复跑。若调整范围或界限，需明确披露并确认仍满足原发布要求，不能把缩小后的检查直接视为原要求已通过。

## 读取范围

读取中文技能包的 SKILL.md，以及 development.md、quality-and-ci.md、formal-verification.md、project-knowledge.md、guidance-access.md 和适用仓库指令。上游实际读取 maintain-formal-verification-skill、property-based-testing 及其 libraries.md；固定版本分别为 Cursor `6e359ce0aba9e927914d8a940510aa2ef66a8f23`、Trail of Bits `149d7b21f4067765b82e67029730b42d228ef4b4`。

性质测试的 reviewing.md 不在本次可读缓存中；第 4 项依据已读入口与本地指导给出，没有宣称完成完整上游评审。走查仅支持当前代理对这些情景的理解，不能替代真实工具执行、修改前对照或工程效果与成本验证。
