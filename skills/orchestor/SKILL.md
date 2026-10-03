---
name: orchestor
description: "Use this skill when: 「AI 検索最適化」「GEO」「LLMO」「AEO」と言われた時; 「自社 visibility 確認」「ChatGPT で引用される?」「Perplexity 結果」; 「citation 改善」「prompt 追加」「intervention 計画」; 顧客が AI search 最適化 workflow を回したい時の最初の入口"
metadata:
  source: apps/cli/skill-scaffold/sources/umbrella/orchestor.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
  - orchestor-brand
  - orchestor-topic
  - orchestor-prompt
  - orchestor-tag
  - orchestor-domain
  - orchestor-prompt-run
  - orchestor-answer
  - orchestor-report
  - orchestor-manage-issues
  - orchestor-account
allowed-tools:
  - Read
  - Bash(orc *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/umbrella/orchestor.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Orchestor

Investigate how a brand appears in AI answers and turn evidence into prioritized improvements.
Use this skill for an AEO baseline, a competitor comparison, a citation investigation, or a recurring visibility review.

## Before starting

Read [shared setup and evidence rules](../orchestor-shared/SKILL.md). Confirm the workspace, brand, question, and time period. Start with saved observations; do not create paid runs just to answer a question that existing data can resolve.

## Choose a workflow

| User request | Skills to read | Deliverable |
| --- | --- | --- |
| Set up a brand and its competitors | [brands](../orchestor-brand/SKILL.md), [topics](../orchestor-topic/SKILL.md), [prompts](../orchestor-prompt/SKILL.md) | Confirmed IDs, monitoring questions, and configuration |
| Compare visibility | [visibility](../orchestor-report-visibility/SKILL.md), [answers](../orchestor-answer/SKILL.md) | Comparable metrics with answer-level evidence |
| Explain a citation gap | [reports](../orchestor-report/SKILL.md), [answers](../orchestor-answer/SKILL.md) | Cited sources, missing coverage, and ranked recommendations |
| Collect a new answer | [runs](../orchestor-prompt-run/SKILL.md) | Run status and the saved answer ID |
| Track an agreed improvement | [issues](../orchestor-manage-issues/SKILL.md) | Created or updated Orchestor Issue and its identifier |

## Investigation

1. Confirm the brand and relevant prompts from current workspace data.
2. Retrieve the requested report with a fixed period and matching platform, model, country, and prompt scope.
3. Read the saved answers behind the difference. Separate brand mentions from source citations.
4. Explain what the evidence shows, what remains unknown, and which action to take next.
5. Create an Issue or start a new measurement only when it is part of the user's request.

## Return

Include scope and dates, key findings, answer IDs or source URLs, and prioritized actions with supporting evidence. Distinguish observations from hypotheses. Never promise that publishing an edit will cause an AI provider to cite it.
