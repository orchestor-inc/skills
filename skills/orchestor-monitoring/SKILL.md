---
name: orchestor-monitoring
description: "Configure Orchestor onboarding, brands, topics, prompts, personas, tags, measurement channels and locale; start, inspect, or cancel requested runs and batches. Use for adding monitoring questions, collecting fresh AI answers, reviewing onboarding configuration, or diagnosing run state. Distinguishes drafts, monitoring enablement, and credit-consuming execution."
license: UNLICENSED
metadata:
  author: orchestor
  version: "0.2.0"
---

# Configure and run AI observations

Separate configuration from collection. A request to add a question does not
implicitly request a paid run or recurring monitoring.

## When to apply

Use for “monitor this question”, “set up this website”, “run these prompts”,
“choose a persona or channel”, and “what happened to this batch?”.

## Choose the workflow

| Need | Read first |
| --- | --- |
| Start from a website | [Reviewed onboarding](references/onboarding.md) |
| Create or edit monitoring questions | [Prompts and personas](references/prompts-personas.md) |
| Run one saved prompt | [Run lifecycle](references/run-lifecycle.md) |
| Run a bounded set of prompts/channels | [Batches](references/batches.md) |
| Change workspace channel/language/location defaults | [Measurement configuration](references/measurement-configuration.md) |

## Preflight

Confirm the workspace, requested prompts, eligible channels, locale/persona, and
whether collection is authorized. Inspect CLI connection state or MCP tool schemas.
Never substitute a direct model API for a requested consumer-surface measurement.

## Quick start

```bash
orc prompts list --workspace WORKSPACE_ID --limit 20 --format json
orc channels list --workspace WORKSPACE_ID --format json
orc runs create --help
```

Read-only inspection comes first. A draft or archived prompt is not a runnable
target in the current run contract. An active or disabled prompt may be manually
runnable; “disabled” does not mean “delete” or necessarily prohibit a one-off run.

## Procedure

1. Read the existing prompt/configuration and resolve exact IDs.
2. Prepare only the requested changes. Keep draft creation, monitoring enablement,
   and execution separate in both the request and the explanation.
3. For a measurement, use an eligible channel from the current catalog and a
   bounded prompt/channel set. Read current limits and quota information when needed.
4. Submit once, retain the run/batch ID, and inspect that resource until terminal
   or until the agreed wait bound. A wait timeout is not proof of job failure.
5. Retrieve results separately when the run or batch contract requires it.
6. Read back configuration writes and return their IDs and state.

## Return

Configured resource IDs or run/batch IDs; channel, locale, persona and prompt
scope; status; available answer IDs; failed or unfinished items. Do not summarize
an accepted or partially completed batch as fully measured.

Use [command families](references/commands.md) for exact operation discovery.
