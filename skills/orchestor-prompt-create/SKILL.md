---
name: orchestor-prompt-create
description: "Use this skill when: 「prompt 追加」「prompt 登録」; 「この query を追跡」"
metadata:
  source: apps/cli/skill-scaffold/sources/helper/orchestor-prompt-create.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
  - orchestor-prompt
allowed-tools:
  - Read
  - Bash(orc prompts *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/helper/orchestor-prompt-create.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Create a monitoring prompt

Use this skill when the user wants to track a specific question in AI answers. Read [shared rules](../orchestor-shared/SKILL.md) and [prompt management](../orchestor-prompt/SKILL.md).

## Procedure

1. Confirm the exact question, workspace, country/language, desired observation channels, and whether the prompt should remain a draft or become active.
2. List existing prompts to avoid duplicates. Resolve a topic from workspace data if one is requested; do not invent IDs.
3. Read `orc prompts create --help`. Build the request from the current schema. `--topic-id` selects a topic; `--persona-ids` references existing personas. Do not substitute a free-form persona string.
4. Preview the request, then create the prompt within the user's requested scope.

```bash
orc prompts create --workspace WORKSPACE_ID --text "Which AEO tools support a small marketing team?" --country-code JP --language-code ja --platforms chatgpt-ui --status draft --dry-run
```

Replace `WORKSPACE_ID` with the selected workspace. Remove `--dry-run` only to perform the requested creation. Read back the returned prompt ID. Do not activate monitoring or run a measurement just because the prompt was created.

## Return

The prompt ID, text, topic if assigned, observation channels, country/language, and lifecycle status. Explain any unresolved configuration.
