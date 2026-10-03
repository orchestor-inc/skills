---
name: orchestor
description: "Use Orchestor to understand how brands appear in AI answers and decide what to improve. Use when the user asks about AI visibility, AEO, GEO, LLMO, competitor citations, monitoring, public-source research, or agent-ready websites without naming a specific command. Routes to product workflows; not internal Orchestor infrastructure administration."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Choose an Orchestor workflow

Start with the user's outcome. Choose the smallest workflow below, then load the
relevant skill if it is installed. Sibling skills are optional: use the linked
product documentation when a skill is unavailable.

## Before choosing a workflow

1. Identify whether the user wants to read evidence, change configuration, or
   collect a new observation. Reading a report does not authorize a new run.
2. Identify the workspace, brand or website, comparison scope, and time period.
   Reuse known IDs. Ask only for an identifier or decision that cannot be resolved.
3. Inspect `orc status` for CLI work or the client's exposed MCP tools for MCP
   work. These are separate authenticated connections. Never infer access from
   the fact that this skill is installed.

## What are you trying to do?

| User goal | Skill | Deciding question |
| --- | --- | --- |
| Connect, select a workspace, script CLI calls, or diagnose errors | `orchestor-cli` | Is this connection or command execution, rather than analysis? |
| Resolve a brand, competitor, or tracked domain | `orchestor-brands` | Which identity does the task refer to? |
| Configure prompts, topics, tags, or personas | `orchestor-prompts` | What should be measured? |
| Run observations or inspect measurement state | `orchestor-runs` | Was collection requested, and what is its state? |
| Read aggregate metrics | `orchestor-reports` | Which scope and cohort are comparable? |
| Inspect saved answer text | `orchestor-answers` | Which answer supports the claim? |
| Inspect source URLs, domains, or citation gaps | `orchestor-sources` | Which source record needs investigation? |
| Research a website, keyword, market, company, or public source | `orchestor-research` | Is the evidence external to saved AI answers? |
| Check whether agents can read and navigate a website | `orchestor-agentic-web` | Is this a technical site check or journey rather than brand visibility? |
| Analyze which attributes are attributed to a brand | `orchestor-perception` | Do we need exact quoted evidence and attribute comparisons? |
| Analyze products, shopping appearances, demand, or merchants | `orchestor-shopping` | Is the object a product rather than a brand-level mention? |
| Manage workspace membership, projects, files, or saved views | `orchestor-workspace` | Is this organization and access within a workspace? |
| Create, update, or assign an Orchestor Issue | `orchestor-manage-issues` | Is a durable task record explicitly requested? |
| Connect MCP or a provider, or configure service access | `orchestor-integrations` | Are we adding or inspecting a connection? |
| Review the validity of an AEO analysis | `orchestor-aeo-best-practices` | Are comparison quality, evidence, or attribution at issue? |
| Run a baseline, monthly audit, citation-gap review, or content cycle | `orchestor-aeo-workflows` | Does the goal span several of the workflows above? |

## Compose only what the outcome requires

For “why did visibility fall?”, start with saved reports and answers. Use public
research only after identifying a source to inspect. Propose monitoring changes
separately; do not silently run measurements, publish content, or contact sources.

For “set up our brand”, prefer the reviewed onboarding flow. Brand facts,
competitors, prompts, execution channels, and locale must be checked before
measurement. A configured brand is not proof that observations exist.

For “create a task from this”, use the Issue workflow and return the created ID.
Do not expand a task-record request into implementation or deployment.

## Return

State the selected workflow, scope, result, evidence, and the next decision.
Keep observations, interpretations, and proposals separate. Use the user's
language; preserve exact command, metric, and identifier names.

## References

- [Product relationships](references/product-model.md)
- [CLI](https://orchestor.io/docs/cli)
- [MCP](https://orchestor.io/docs/mcp)
- [Agent setup](https://orchestor.io/docs/agent-setup)
