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

    def test_complete_suite_core_and_document_skill_pairs(self):
        combinations = [validate.SKILLS, validate.CORE_SKILLS]
        combinations += [{name, "sdlc-instr-doc-design"}
                         for name in sorted(validate.DOCUMENT_DEPENDENTS)]
        for names in combinations:
            with self.subTest(names=names):
                container = self.install(names)
                self.assertEqual(validate.installation_errors(container), [])
                shutil.rmtree(container)

    def test_missing_dependency_is_reported(self):
        for name in sorted(validate.DOCUMENT_DEPENDENTS):
            with self.subTest(name=name):
                container = self.install({name})
                errors = validate.installation_errors(container)
                self.assertEqual(len(errors), 1)
                self.assertIn(f"{name} document work requires sdlc-instr-doc-design", errors[0])
                self.assertIn("pause dependent work", errors[0])
                shutil.rmtree(container)

    def test_all_missing_dependencies_are_reported(self):
        errors = validate.installation_errors(self.install(validate.DOCUMENT_DEPENDENTS))
        self.assertEqual(len(errors), len(validate.DOCUMENT_DEPENDENTS))
        for name in validate.DOCUMENT_DEPENDENTS:
            self.assertTrue(any(error.startswith(f"{name} document work requires ")
                                for error in errors))

    def test_specialists_install_independently(self):
        for name in validate.SKILLS - validate.DOCUMENT_DEPENDENTS:
            with self.subTest(name=name):
                container = self.install({name})
                self.assertEqual(validate.installation_errors(container), [])
                shutil.rmtree(container)

    def test_package_links_cannot_escape_installation(self):
        container = self.install({"sdlc-instr-doc-design"})
        guide = container / "sdlc-instr-doc-design/SKILL.md"
        guide.write_text(guide.read_text() + "\n[unavailable](../outside.md)\n")
        self.assertTrue(any("escapes skill" in e for e in validate.installation_errors(container)))

    def test_source_contract(self):
        self.assertEqual(validate.validate(ROOT), [])

    def test_manifest_drift_and_missing_asset_fail_validation(self):
        fixture = self.work / "source"
        shutil.copytree(ROOT, fixture, ignore=shutil.ignore_patterns(".git", "dist", "__pycache__"))
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
