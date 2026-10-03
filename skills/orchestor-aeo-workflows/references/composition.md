# Compose a workflow from resource skills

Use the actual request and the corrections from a completed run. Keep resource
commands and field contracts in the resource skills. A parent defines the goal,
resource order, inputs passed between steps, and the finished artifact.

## Citation investigation example

| Step | Resource skill | Input | Output for the next step |
| --- | --- | --- | --- |
| Resolve identity | orchestor-brands | Workspace and confirmed brand/website | Brand and competitor IDs |
| Compare evidence | orchestor-reports | IDs, period and cohort | Report scope and relevant differences |
| Inspect answers | orchestor-answers | Supported filters for that scope | Answer IDs, passages and cited URLs |
| Inspect sources | orchestor-sources | Source IDs/URLs and comparison scope | Observed source gaps and uncertainty |
| Read relevant pages | orchestor-research | Specific public URLs | Page evidence with provenance |
| Record an action, if requested | orchestor-manage-issues | Evidence and proposed change | Created Issue ID |

These outputs are conceptual handoffs, not a new JSON schema. Read current CLI
help to choose supported filters; a report may not return answer IDs. Missing
observations should produce a stated gap, not silently trigger `orchestor-runs`.

A short parent can say:

```markdown
---
name: client-citation-review
description: Review saved citation evidence for a client's chosen questions and prepare a short improvement brief.
---

# Client citation review

Confirm workspace, brand, competitors, period, and target questions from existing
context. Read the installed Orchestor brands, reports, answers, and sources
skills as needed. Use public research only for relevant cited pages.

Return the observed gap, exact supporting answers and URLs, one bounded change,
and what remains uncertain. Do not collect fresh measurements, publish content,
or contact a publisher unless the user requested that action.

If a resource skill is unavailable, identify it and use the current public CLI
help or documentation for that operation; do not invent fields or commands.
```

Change the output, comparison logic, or audience when the actual work calls for
it. Try the parent on a realistic request and inspect the artifact. Correct the
smallest instruction responsible for a failure, then try a different case.

Use a skill for a task that runs when requested. Put a persistent project
convention in the client's existing native project-instruction file only when
it applies across tasks. Do not install a second rules engine or copy the whole
workflow into always-loaded instructions.
