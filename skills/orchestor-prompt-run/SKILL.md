---
name: orchestor-prompt-run
description: "Use this skill when: 「promptを実行」「ChatGPTで叩く」「AI応答を新しく観測」; 「prompt runの状態確認」「answer_idを待つ」"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-prompt-run.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
  - orchestor-prompt
  - orchestor-answer
allowed-tools:
  - Read
  - Bash(orc runs *)
  - Bash(orc answers *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-prompt-run.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Collect a new AI answer

Use this skill when the user requests a fresh observation or asks to check an existing run. Read [shared rules](../orchestor-shared/SKILL.md).

## Procedure

1. Resolve the prompt ID, brand, provider, and locale from existing configuration and the user's request. Read `orc runs create --help` for the current supported inputs.
2. Start only the requested measurement and retain the returned run ID. For an explicit retry, reuse the same idempotency key with the exact same request.
3. Read the run with `orc runs get RUN_ID --workspace WORKSPACE_ID --format json`. Poll with a bounded interval; stop on terminal failure or timeout and report the last known state.
4. When an `answer_id` is returned, retrieve it with `orc answers get ANSWER_ID --workspace WORKSPACE_ID --format json`.

Do not create a second run because the first is still pending. Multiple prompts or providers may consume additional credits and require an explicitly requested scope. Do not assume a batch command exists.

## Return

The run ID, status, provider/locale when returned, and answer ID with evidence. A queued run is not a completed observation.
