---
name: orchestor-topic
description: "Use this skill when: 「topic 追加」「topic 一覧」「topic 削除」; 「topic suggestion 確認」「accept/reject suggestion」"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-topic.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
  - orchestor-brand
allowed-tools:
  - Read
  - Bash(orc topics *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-topic.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Organize monitoring topics

Use this skill to group monitoring questions into themes or review topic suggestions. Read [shared rules](../orchestor-shared/SKILL.md).

## Procedure

1. Confirm the workspace and theme; list existing topics before creating another.
2. Read `orc topics --help` and the appropriate leaf help. Resolve any requested brand association from existing workspace data.
3. Inspect a suggestion before accepting or rejecting it. Do not accept an entire set without a matching user request.
4. Preserve unrelated topic fields and verify changes by reading the topic ID.

## Return

Topic ID, name, brand association when present, and changes made. Explain which [prompts](../orchestor-prompt/SKILL.md) belong to the theme. Topic creation alone does not start measurement.
