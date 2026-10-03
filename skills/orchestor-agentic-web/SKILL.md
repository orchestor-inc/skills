---
name: orchestor-agentic-web
description: "Inspect agent readiness, crawlability, discovery, structured evidence checks, and public website journeys with Orchestor Agentic Web. Use for agent-readable site audits, scan reports, MCP endpoint checks, directory discovery, or verification of a changed site. Distinguish technical checks and journey evidence from AI brand visibility or ranking guarantees."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Evaluate an agent-facing website

Use technical observations to explain what an agent can discover, read, or do on
a public website. A scan score is not proof of AEO performance or conversion.

## Before you start

Confirm the target public domain and whether the user requests a stored report,
a new scan, verification, or a browser journey. The workspace and connection must
be known. New scans/journeys can perform network work; prefer existing evidence
when it satisfies the question.

## Choose the operation

| Task | Reference |
| --- | --- |
| Inspect existing reports or start a scan | [Scans](references/scans.md) |
| Recheck a failed requirement | [Evidence and verification](references/verification.md) |
| Test a reading or UI task | [Journeys](references/journeys.md) |
| Discover sites, inspect public evidence, or manage visibility | [Directory and publication](references/directory.md) |

## Quick start

```bash
orc agentic-web scans create --help
orc agentic-web sites reports list --help
orc agentic-web checks list --help
```

Inspect supported fields and URL constraints before constructing the request.
Use [command families](references/commands.md) to find the matching read or write.

## Procedure

1. Resolve the exact site and requested outcome.
2. Read a relevant stored report when available; record its observation time.
3. If a fresh scan is required, choose browser evidence only when needed and use
   supported public URLs. Keep an explicit MCP endpoint separate from the site URL.
4. Retrieve the report and inspect failed checks with their evidence.
5. Propose the smallest site change supported by that evidence. Do not edit or
   publish the site unless requested.
6. After a requested change, verify the same check or journey and compare evidence.

## Return

Site, report/scan/journey ID, observation time, relevant checks, supporting URLs,
limitations, and prioritized remedies. Distinguish passing a check, passing a
journey, and actual business outcomes.
