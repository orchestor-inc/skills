---
name: orchestor-tag
description: "Use this skill when: 「tag 作成」「tag 一覧」「tag 削除」「tag の color 変更」; 「prompt に tag 一括設定」"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-tag.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
allowed-tools:
  - Read
  - Bash(orc tags *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-tag.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Organize prompts with tags

Use this skill to create or update tags and classify monitoring questions. Read [shared rules](../orchestor-shared/SKILL.md).

## Procedure

1. List workspace tags with the current `orc tags` commands. Reuse an existing tag when its meaning matches.
2. Inspect leaf help before creating or updating a tag; use the supported name and color values.
3. Prompt associations belong to the prompt commands. Read `orc prompts --help` and inspect the current tag set before replacing it. Preserve tags outside the requested change.
4. Re-read the tag or prompt to verify the result. Do not delete a tag merely because it is absent from one prompt.

## Return

Tag IDs/names, affected prompt IDs, and the resulting classification. See [prompt management](../orchestor-prompt/SKILL.md) for lifecycle or monitoring changes.
