"""Checks for supported installed combinations and distribution boundaries."""
from pathlib import Path
import json
import shutil
import sys
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import validate


class DistributionTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.work = Path(self.temp.name)

    def install(self, names):
        container = self.work / "installed"
        container.mkdir()
        for name in names:
            shutil.copytree(ROOT / "skills" / name, container / name)
        return container

    def test_complete_suite_and_required_skill_combinations(self):
        combinations = [validate.skill_names(ROOT / "skills")]
        combinations += [{name} | validate.SKILL_DEPENDENCIES[name]
                         for name in sorted(validate.SKILL_DEPENDENCIES)]
        for names in combinations:
            with self.subTest(names=names):
                container = self.install(names)
                self.assertEqual(validate.installation_errors(container), [])
                shutil.rmtree(container)

    def test_missing_dependency_is_reported(self):
        for name, dependencies in validate.SKILL_DEPENDENCIES.items():
            with self.subTest(name=name):
                container = self.install({name})
                errors = validate.installation_errors(container)
                self.assertEqual(len(errors), len(dependencies))
                for required in dependencies:
                    self.assertTrue(any(f"{name} artifact work requires {required};" in e
                                        and "pause dependent work" in e for e in errors))
                shutil.rmtree(container)

    def test_all_missing_dependencies_are_reported(self):
        errors = validate.installation_errors(self.install(validate.SKILL_DEPENDENCIES))
        self.assertEqual(len(errors), sum(map(len, validate.SKILL_DEPENDENCIES.values())))
        for name, dependencies in validate.SKILL_DEPENDENCIES.items():
            for required in dependencies:
                self.assertTrue(any(error.startswith(f"{name} artifact work requires {required};")
                                    for error in errors))

    def test_other_optimization_skill_does_not_satisfy_dependency(self):
        optimization_skills = set().union(*validate.SKILL_DEPENDENCIES.values())
        for name, dependencies in validate.SKILL_DEPENDENCIES.items():
            for required in dependencies:
                with self.subTest(name=name, missing=required):
                    container = self.install({name} | (optimization_skills - {required}))
                    errors = validate.installation_errors(container)
                    self.assertEqual(len(errors), 1)
                    self.assertIn(f"requires {required};", errors[0])
                    shutil.rmtree(container)

    def test_specialists_install_independently(self):
        for name in validate.skill_names(ROOT / "skills") - validate.SKILL_DEPENDENCIES.keys():
            with self.subTest(name=name):
                container = self.install({name})
                self.assertEqual(validate.installation_errors(container), [])
                shutil.rmtree(container)

    def test_package_links_cannot_escape_installation(self):
        container = self.install({"sdlc-document-optimization"})
        guide = container / "sdlc-document-optimization/SKILL.md"
        guide.write_text(guide.read_text() + "\n[unavailable](../outside.md)\n")
        self.assertTrue(any("escapes skill" in e for e in validate.installation_errors(container)))

    def test_source_contract(self):
        self.assertEqual(validate.validate(ROOT), [])

    def source_fixture(self):
        fixture = self.work / "source"
        shutil.copytree(ROOT, fixture, ignore=shutil.ignore_patterns(".git", "dist", "__pycache__"))
        return fixture

    def test_new_skill_needs_no_inventory_update(self):
        fixture = self.source_fixture()
        skill = fixture / "skills/example-skill"
        skill.mkdir()
        (skill / "SKILL.md").write_text(
            "---\nname: example-skill\ndescription: Example skill.\nlicense: MIT\n---\n\n# Example\n")
        shutil.copyfile(fixture / "LICENSE", skill / "LICENSE")
        translated = fixture / "translations/zh-CN/skills/example-skill/SKILL.zh-CN.md"
        translated.parent.mkdir(parents=True)
        translated.write_text("[English](../../../../skills/example-skill/SKILL.md)\n")
        self.assertIn("example-skill", validate.skill_names(fixture / "skills"))
        self.assertEqual(validate.validate(fixture), [])
        self.assertEqual(validate.installation_errors(fixture / "skills"), [])

    def test_missing_translation_and_source_link_are_rejected(self):
        fixture = self.source_fixture()
        translated = fixture / "translations/zh-CN/README.md"
        original = translated.read_text()
        translated.unlink()
        self.assertTrue(any("missing maintenance translation" in e
                            for e in validate.validate(fixture)))
        translated.write_text(original.replace("[English](../../README.md)", "English"))
        self.assertIn(f"{translated}: missing English source link", validate.validate(fixture))
        translated.write_text(original + "\n[broken](missing.md)\n")
        self.assertIn(f"{translated}: missing link: missing.md", validate.validate(fixture))

    def test_translation_discovery_and_code_boundaries(self):
        fixture = self.source_fixture()
        translations = fixture / "translations/zh-CN"
        (translations / "AGENTS.md").write_text("Unexpected entry\n")
        (translations / "SKILL.md").write_text("Unexpected skill\n")
        (translations / "script.py").write_text("pass\n")
        errors = validate.validate(fixture)
        for name in ("AGENTS.md", "SKILL.md"):
            self.assertIn(f"{translations / name}: translated auto-loaded entry requires .zh-CN.md suffix",
                          errors)
        self.assertIn("discoverable SKILL.md outside the English skill inventory", errors)
        self.assertIn(f"{translations / 'script.py'}: translations must contain documentation only", errors)

    def test_manifest_drift_and_missing_asset_fail_validation(self):
        fixture = self.source_fixture()
        manifest = fixture / ".claude-plugin/plugin.json"
        data = json.loads(manifest.read_text())
        data["version"] = "9.9.9"
        manifest.write_text(json.dumps(data))
        (fixture / "assets/icon.png").unlink()
        errors = validate.validate(fixture)
        self.assertIn("plugin manifest mismatch: version", errors)
        self.assertIn("Codex composerIcon: expected a bundled asset", errors)



if __name__ == "__main__":
    unittest.main()
