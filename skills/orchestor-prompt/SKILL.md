---
name: orchestor-prompt
description: "Use this skill when: 「prompt 追加」「prompt 一覧」「prompt 編集」「prompt 削除」; 「prompt の monitoring を on/off」「persona 設定」「platforms 設定」; 「prompt suggestion 確認」「accept/reject」; 「prompt に tag 付け」"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-prompt.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
  - orchestor-topic
allowed-tools:
  - Read
  - Bash(orc prompts *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-prompt.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Manage monitoring questions

Use this skill to create, inspect, update, or organize prompts. Read [shared rules](../orchestor-shared/SKILL.md).

## Procedure

1. Resolve the workspace, exact question, and existing prompt ID. Inspect current prompts before creating duplicates.
2. Read `orc prompts --help` and the relevant leaf help. Use the current CLI schema for topic, personas, observation channels, country/language, schedule, and lifecycle status.
3. Preserve existing settings unless the user requests a change. Draft prompts are excluded from measurement; activation and scheduling are separate decisions.
4. For tags, inspect current associations before replacing the set. Read suggestions before accepting or rejecting them.
5. Read back the affected prompt and report its final configuration.

## Related tasks

- [Create one prompt](../orchestor-prompt-create/SKILL.md)
- [Organize topics](../orchestor-topic/SKILL.md) and [tags](../orchestor-tag/SKILL.md)
- [Run a measurement](../orchestor-prompt-run/SKILL.md) and [read saved answers](../orchestor-answer/SKILL.md)

Do not equate creating a prompt with collecting its first answer. A stored schedule does not alone prove that measurement is running.
