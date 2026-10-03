---
name: orchestor-aeo-workflows
description: "Run an Orchestor baseline assessment, monthly audit, citation-gap investigation, or content improvement cycle across reports, saved answers, public research, and Issues. Use for multi-step AEO reviews or agency/client reporting. Separates read-only diagnosis, proposed action, requested execution, and follow-up measurement; no guaranteed ranking or citation uplift."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Run an evidence-to-action AEO workflow

Keep each workflow bounded by the user's goal and workspace. The default analysis
uses existing evidence. New collection, record creation, content publication, and
outreach are separate actions and require the corresponding request.

## Select a workflow

| Goal | Reference | Completion evidence |
| --- | --- | --- |
| Establish the first credible baseline | [Baseline](references/baseline.md) | Defined scope, available observations, evidence-backed priorities |
| Review a month or reporting period | [Monthly audit](references/monthly-audit.md) | Comparable period tables, source evidence, limitations |
| Investigate competitors being cited instead | [Citation gap](references/citation-gap.md) | Prompt/source gap and an evidence-backed next action |
| Improve a piece of content and evaluate it | [Content cycle](references/content-cycle.md) | Proposed change, approval boundary, and follow-up design |
| Adapt reporting to a client or internal team | [Audience](references/audience.md) | The same evidence presented for the recipient's decision |

## Compose resource operations

Use `orchestor-brands` for identity, `orchestor-prompts` for the question set,
`orchestor-runs` for requested collection, `orchestor-reports` for aggregates,
`orchestor-answers` for saved answer evidence, and `orchestor-sources` for source
records. Load only needed skills. Public pages use `orchestor-research`; requested
action records use `orchestor-manage-issues`.

The [composition example](references/composition.md) shows inputs and outputs.
Resource skills own exact CLI contracts. This parent owns the task sequence and
result, not duplicate command implementations. Missing sibling skills can be
resolved through current public CLI help or documentation.

## Shared preflight

Confirm the connection, workspace, brand/competitors, existing prompts, period,
and requested output. Use current CLI help or MCP schemas. Do not use internal
company skills, unpublished operator commands, or private repository paths as
required steps in a customer workflow.

## Evidence-to-action loop

1. **Observe:** inspect the existing evidence and its coverage.
2. **Understand:** compare the same cohort and inspect the answers/sources.
3. **Prioritize:** identify a few actions with explicit evidence and uncertainty.
4. **Act when requested:** create a task, edit content, or start bounded collection
   only within the user's requested scope and available product capabilities.
5. **Re-observe when requested:** use a comparable cohort and report differences
   without asserting causality the evidence cannot establish.

## Return

A short decision-ready report: scope, observations, evidence links/IDs, recommended
actions, and the next checkpoint. Mark missing coverage and unfinished operations.
For an agency, keep every client's scope and data separate.

If installed, `orchestor-aeo-best-practices` supplies deeper review rules. The
references here are sufficient to execute the workflow without sibling skills.
