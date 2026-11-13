from pathlib import Path
import importlib.util
import json
import shutil
import subprocess
import tempfile
from unittest.mock import patch

archive = Path(__file__).resolve().parent
control = Path(tempfile.mkdtemp(prefix='solo-vibe-grader-control-'))
implementation = '''
const exportControl=document.createElement('button');exportControl.type='button';exportControl.textContent='导出收藏';document.querySelector('.section-title').append(exportControl);
exportControl.addEventListener('click',()=>{const text=document.querySelector('#search').value.trim().toLowerCase();const category=document.querySelector('#filter').value;const selected=bookmarks.filter(item=>(!category||item.category===category)&&`${item.title} ${item.note}`.toLowerCase().includes(text));if(!selected.length)return;const rows=[['标题','网址','分类','备注'],...selected.map(item=>[item.title,item.url,item.category,item.note])];const csv='\\ufeff'+rows.map(row=>row.map(value=>'"'+String(value).replaceAll('"','""')+'"').join(',')).join('\\r\\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='bookmarks.csv';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
'''
cases = [
    ('missing-feature', '', 1, {'download-encoding', 'csv-fields-and-special-characters', 'mobile-layout-and-export'}),
    ('valid', implementation, 2, set()),
    ('ignores-category', implementation.replace('(!category||item.category===category)', 'true'), 2, {'category-only-export', 'filtered-export'}),
    ('missing-bom', implementation.replace("'\\ufeff'+", "''+"), 1, {'download-encoding'}),
    ('broken-escaping', implementation.replace("String(value).replaceAll('\"','\"\"')", 'String(value)'), 1, {'csv-fields-and-special-characters'}),
]
results = {}
for name, extra, round_number, expected_failures in cases:
    project = control / name / 'project'
    shutil.copytree(archive / 'seed', project)
    with (project / 'app.js').open('a') as file:
        file.write(extra)
    output = project.parent / 'grade.json'
    process = subprocess.run(['node', str(archive / 'grade.mjs'), str(project), str(round_number), str(output)], capture_output=True, text=True, timeout=150)
    assert process.returncode == 0, process.stderr
    report = json.loads(output.read_text())
    failures = {check['id'] for check in report['checks'] if not check['passed']}
    assert expected_failures <= failures, (name, failures)
    if not expected_failures:
        assert not failures, failures
    results[name] = report
    print(json.dumps({'control': name, 'passed': report['passed'], 'total': report['total'], 'failures': sorted(failures)}, ensure_ascii=False), flush=True)

spec = importlib.util.spec_from_file_location('benchmark_runner', archive / 'run.py')
runner = importlib.util.module_from_spec(spec)
spec.loader.exec_module(runner)
faults = {}
for name, effect in [('missing-report', subprocess.CompletedProcess([], 0, '', '')), ('timeout', subprocess.TimeoutExpired([], 150))]:
    output = control / f'{name}.json'
    with patch.object(runner.subprocess, 'run', side_effect=effect if isinstance(effect, Exception) else None, return_value=effect):
        report = runner.grade(control, 2, output)
    assert report['total'] == 14 and report['passed'] == 0 and report.get('infrastructure_error')
    assert all(item.get('status') == 'not-run' for item in report['checks'])
    faults[name] = report
results['infrastructure_faults'] = faults
(archive / 'grader-control.json').write_text(json.dumps(results, ensure_ascii=False, indent=2) + '\n')
