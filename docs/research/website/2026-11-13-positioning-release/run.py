"""Execute the pre-registered paired task; raw private CLI events stay in temp storage."""
from pathlib import Path
import concurrent.futures
import datetime
import hashlib
import json
import os
import shutil
import signal
import subprocess
import tempfile
import time

ARCHIVE = Path(__file__).resolve().parent
REPOSITORY = ARCHIVE.parents[3]
REGISTRATION = json.loads((ARCHIVE / 'registration.json').read_text())
TASKS = [
    '给这个收藏工具加一个“导出收藏”按钮，把收藏下载成CSV，包含标题、网址、分类和备注。我会在Windows上用Excel直接打开，中文不要乱码，备注里的逗号、引号和换行也要保留。手机上要能操作。保留现有新增、删除、搜索、分类筛选和已保存的数据。继续用现在的技术与样式，不增加账号或付费服务。请完成修改，告诉我怎么使用。',
    '现在我希望“导出收藏”只下载当前搜索与分类筛选后看到的收藏。没有匹配内容时请清楚提示，不要导出其他收藏。清除筛选以后还能导出全部。保留已有使用方式和已保存的数据。请完成修改，告诉我怎么使用。',
]
LABELS = {
    'saved-data': '已有收藏数据必须仍然可见',
    'download-encoding': '下载的CSV需要满足Windows Excel直接打开时中文不乱码的要求',
    'csv-fields-and-special-characters': 'CSV必须保留全部收藏的四个字段及中文、逗号、引号和换行',
    'add-and-reload': '新增收藏后重新打开仍应存在',
    'search': '搜索后应只显示匹配收藏',
    'category-filter': '分类筛选仍应可用',
    'delete': '删除收藏后重新打开也应保持删除',
    'mobile-layout-and-export': '390px手机宽度不能横向溢出，而且仍能导出当前应导出的全部记录',
    'no-script-errors': '操作过程中不能出现脚本异常',
    'filtered-export': '搜索和分类同时生效时，导出只能包含交集内可见的收藏',
    'search-only-export': '只使用搜索时，下载内容只能包含搜索匹配的收藏',
    'category-only-export': '只使用分类筛选时，下载内容只能包含该分类的收藏',
    'empty-filter': '无匹配时需清楚提示，不能下载其他收藏',
    'clear-filter-export': '清除搜索和分类后应恢复导出全部收藏',
}


def now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()


def sanitize(text, experiment_root):
    return text.replace(str(experiment_root), 'EXPERIMENT').replace(str(REPOSITORY), 'REPOSITORY').replace(str(Path.home()), 'USER_HOME')


def execute(project, prompt, log_directory, experiment_root, resume=None):
    command = ['codex', '-a', 'never', 'exec', '--json', '-m', REGISTRATION['model'], '-c', 'model_reasoning_effort="' + REGISTRATION['reasoning_effort'] + '"', '-s', 'workspace-write', '-c', 'sandbox_workspace_write.network_access=true']
    if resume:
        command += ['resume', resume]
    else:
        command += ['-C', str(project)]
    command += ['-']
    log_directory.mkdir(parents=True, exist_ok=True)
    started = now()
    started_clock = time.monotonic()
    with (log_directory / 'events.raw.jsonl').open('w') as stdout, (log_directory / 'stderr.raw.txt').open('w') as stderr:
        process = subprocess.Popen(command, cwd=project, stdin=subprocess.PIPE, stdout=stdout, stderr=stderr, text=True, start_new_session=True)
        try:
            process.communicate(prompt, timeout=REGISTRATION['per_attempt_seconds'])
            timed_out = False
        except subprocess.TimeoutExpired:
            timed_out = True
            os.killpg(process.pid, signal.SIGTERM)
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                os.killpg(process.pid, signal.SIGKILL)
                process.wait()
        finally:
            try:
                os.killpg(process.pid, signal.SIGTERM)
            except ProcessLookupError:
                pass
    events = []
    for line in (log_directory / 'events.raw.jsonl').read_text().splitlines():
        try:
            events.append(json.loads(line))
        except json.JSONDecodeError:
            pass
    thread = next((event['thread_id'] for event in events if event.get('type') == 'thread.started'), resume)
    trace = []
    final_messages = []
    usage = []
    for event in events:
        if event.get('type') == 'turn.completed':
            usage.append(event.get('usage', {}))
        item = event.get('item', {})
        if event.get('type') == 'item.completed' and item.get('type') == 'command_execution':
            output = item.get('aggregated_output', '')
            trace.append({'command': sanitize(item.get('command', ''), experiment_root), 'exit_code': item.get('exit_code'), 'output_sha256': hashlib.sha256(output.encode()).hexdigest(), 'output_bytes': len(output.encode())})
        if event.get('type') == 'item.completed' and item.get('type') == 'agent_message':
            final_messages.append(sanitize(item.get('text', ''), experiment_root))
    result = {'started_at': started, 'completed_at': now(), 'seconds': round(time.monotonic() - started_clock, 2), 'return_code': process.returncode, 'timed_out': timed_out, 'usage': usage, 'usage_available': bool(usage), 'commands': trace, 'messages': final_messages, 'errors': [sanitize(json.dumps(event, ensure_ascii=False), experiment_root) for event in events if event.get('type') in ['error', 'turn.failed']]}
    (log_directory / 'summary.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    return thread, result


def grade(project, round_number, output):
    output.parent.mkdir(parents=True, exist_ok=True)
    expected = ['saved-data', 'download-encoding', 'csv-fields-and-special-characters', 'add-and-reload', 'search', 'category-filter', 'delete', 'mobile-layout-and-export', 'no-script-errors']
    if round_number == 2:
        expected += ['search-only-export', 'category-only-export', 'filtered-export', 'empty-filter', 'clear-filter-export']
    report = {'checks': []}
    try:
        result = subprocess.run(['node', str(ARCHIVE / 'grade.mjs'), str(project), str(round_number), str(output)], cwd=REPOSITORY, capture_output=True, text=True, timeout=150)
        if output.exists():
            report = json.loads(output.read_text())
        if result.returncode or {item['id'] for item in report['checks']} != set(expected):
            report['infrastructure_error'] = result.stderr[-1500:] or 'The grader did not complete every expected check.'
    except (subprocess.TimeoutExpired, json.JSONDecodeError) as error:
        report['infrastructure_error'] = f'Grader infrastructure failure: {type(error).__name__}'
    completed = {item['id'] for item in report['checks']}
    report['checks'] += [{'id': name, 'passed': False, 'status': 'not-run'} for name in expected if name not in completed]
    report['total'] = len(expected)
    report['passed'] = sum(item['passed'] for item in report['checks'])
    output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    return report


def copy_snapshot(project, destination):
    shutil.copytree(project, destination, ignore=shutil.ignore_patterns('.git', '.agents', 'node_modules', '.DS_Store', '.cache', 'test-results', 'playwright-report', 'coverage', '.venv', '__pycache__'))


def run_subject(subject, project, experiment_root, preparation_seconds, execution_archive):
    treatment = subject.endswith('b')
    archive_subject = execution_archive / subject
    archive_subject.mkdir(parents=True, exist_ok=True)
    subject_summary = {'subject': subject, 'with_skill': treatment, 'preparation_seconds': preparation_seconds, 'rounds': []}
    for round_number, task in enumerate(TASKS, 1):
        stage_started = time.monotonic()
        prompt = ('使用 $solo-vibe-coding 完成下面的任务。\n' if treatment else '') + task
        round_directory = experiment_root / 'logs' / subject / f'round-{round_number}'
        round_archive = archive_subject / f'round-{round_number}'
        attempts = []
        thread = None
        for attempt in range(4):
            output_directory = round_directory / f'attempt-{attempt}'
            thread, result = execute(project, prompt, output_directory, experiment_root, resume=thread if attempt else None)
            validation = grade(project, round_number, output_directory / 'grade.json')
            attempt_archive = round_archive / f'attempt-{attempt}'
            attempt_archive.mkdir(parents=True, exist_ok=True)
            shutil.copy2(output_directory / 'summary.json', attempt_archive / 'agent.json')
            for file in output_directory.glob('*'):
                if file.name in ['grade.json', 'all-bookmarks.csv', 'filtered-bookmarks.csv', 'desktop.png', 'mobile.png']:
                    shutil.copy2(file, attempt_archive / file.name)
            attempts.append({'attempt': attempt, 'seconds': result['seconds'], 'return_code': result['return_code'], 'timed_out': result['timed_out'], 'usage': result['usage'], 'usage_available': result['usage_available'], 'passed': validation.get('passed'), 'total': validation.get('total'), 'failures': [item['id'] for item in validation.get('checks', []) if not item['passed']], 'infrastructure_error': validation.get('infrastructure_error')})
            print(json.dumps({'subject': subject, 'round': round_number, **attempts[-1]}, ensure_ascii=False), flush=True)
            if validation.get('infrastructure_error') or result['return_code'] != 0 or result['timed_out'] or validation.get('passed') == validation.get('total'):
                break
            failed = attempts[-1]['failures']
            feedback = '\n'.join('- ' + LABELS[item] for item in failed)
            if attempt == 0:
                prompt = '我实际试用后，以下行为没有通过，请修复并保留其他功能：\n' + feedback
            elif attempt == 1:
                prompt = '以下行为仍未通过：\n' + feedback + '\n请针对这些用户操作建立可重复检查，实际执行后修复原因。'
            else:
                hints = []
                if 'download-encoding' in failed: hints.append('CSV使用UTF-8 BOM。')
                if 'csv-fields-and-special-characters' in failed: hints.append('字段用双引号包围，内含双引号加倍，保留换行。')
                if any(item in failed for item in ['filtered-export', 'search-only-export', 'category-only-export', 'empty-filter', 'clear-filter-export']): hints.append('导出使用与界面相同的搜索和分类筛选结果。')
                if any(item in failed for item in ['saved-data', 'add-and-reload', 'delete']): hints.append('不得覆盖原localStorage数据。')
                if 'mobile-layout-and-export' in failed: hints.append('移动端避免固定最小宽度。')
                prompt = '以下行为仍未通过：\n' + feedback + '\n具体指导：' + ''.join(hints)
        copy_snapshot(project, round_archive / 'project')
        subject_summary['rounds'].append({'round': round_number, 'stage_total_seconds': round(time.monotonic() - stage_started, 2), 'attempts': attempts})
        (archive_subject / 'summary.json').write_text(json.dumps(subject_summary, ensure_ascii=False, indent=2) + '\n')
        if attempts[-1].get('infrastructure_error'):
            subject_summary['infrastructure_error'] = attempts[-1]['infrastructure_error']
            break
    return subject_summary


if __name__ == '__main__':
    experiment_root = Path(tempfile.mkdtemp(prefix='solo-vibe-paired-'))
    print(json.dumps({'experiment_directory': str(experiment_root)}), flush=True)
    execution_id = datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
    execution_archive = ARCHIVE / 'executions' / execution_id
    execution_archive.mkdir(parents=True)
    subjects = []
    for pair, ordering in enumerate([['a', 'b'], ['b', 'a'], ['a', 'b']], 1):
        for condition in ordering:
            subject = f'{pair:02d}-{condition}'
            project = experiment_root / subject
            shutil.copytree(ARCHIVE / 'seed', project)
            started = time.monotonic()
            if condition == 'b':
                shutil.copytree(REPOSITORY / 'skills/solo-vibe-coding', project / '.agents/skills/solo-vibe-coding')
            preparation_seconds = round(time.monotonic() - started, 6)
            subprocess.run(['git', '-c', 'init.defaultBranch=main', 'init', '-q'], cwd=project, check=True)
            subprocess.run(['git', 'add', '.'], cwd=project, check=True)
            subprocess.run(['git', '-c', 'core.hooksPath=/dev/null', '-c', 'user.name=Task experiment', '-c', 'user.email=experiment@example.invalid', 'commit', '-qm', 'Identical starting project'], cwd=project, check=True)
            subjects.append((subject, project, preparation_seconds))
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=REGISTRATION['max_parallel_attempts']) as pool:
        futures = {pool.submit(run_subject, subject, project, experiment_root, seconds, execution_archive): subject for subject, project, seconds in subjects}
        for future in concurrent.futures.as_completed(futures):
            try:
                results.append(future.result())
            except Exception as error:
                results.append({'subject': futures[future], 'infrastructure_error': sanitize(f'{type(error).__name__}: {error}', experiment_root)})
    data = {'execution_id': execution_id, 'completed_at': now(), 'registration_sha256': hashlib.sha256((ARCHIVE / 'registration.json').read_bytes()).hexdigest(), 'subjects': sorted(results, key=lambda item: item['subject'])}
    (execution_archive / 'results.json').write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    (ARCHIVE / 'results.json').write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({'completed': True, 'subjects': len(results)}), flush=True)
