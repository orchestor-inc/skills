# Orchestor Agent Skills

Agent Skills for using Orchestor from Claude Code, Codex, Cursor, and other
compatible agents. Product knowledge is shared across clients: evidence analysis,
monitoring, public-source research, workspace operations, and AEO workflows.

## Available Skills

### [orchestor](skills/orchestor/SKILL.md)

Choose an Orchestor workflow.

**When to use:** Use Orchestor to understand how brands appear in AI answers and decide what to improve. Use when the user asks about AI visibility, AEO, GEO, LLMO, competitor citations, monitoring, public-source research, or agent-ready websites without naming a specific command. Routes to product workflows; not internal Orchestor infrastructure administration.

### [orchestor-cli](skills/orchestor-cli/SKILL.md)

Operate the Orchestor CLI.

**When to use:** Install and use the orc CLI, authenticate, select workspaces, request structured output, paginate, use stdin and dry-run, handle errors, and manage automation identities. Use for connection failures, CLI scripting, account usage or costs, and safe repeatable API-backed operations. Do not use internal operator commands or inspect credential files.

### [orchestor-visibility](skills/orchestor-visibility/SKILL.md)

Analyze brand visibility and citations.

**When to use:** Analyze saved AI answers, brand visibility, mention share, citations, sentiment, query fan-outs, search results, sources, bot traffic, and referrals in Orchestor. Use for competitor comparisons, visibility changes, citation gaps, source analysis, or monthly evidence. Do not start new measurements as part of a read-only analysis.

### [orchestor-monitoring](skills/orchestor-monitoring/SKILL.md)

Configure and run AI observations.

**When to use:** Configure Orchestor onboarding, brands, topics, prompts, personas, tags, measurement channels and locale; start, inspect, or cancel requested runs and batches. Use for adding monitoring questions, collecting fresh AI answers, reviewing onboarding configuration, or diagnosing run state. Distinguishes drafts, monitoring enablement, and credit-consuming execution.

### [orchestor-research](skills/orchestor-research/SKILL.md)

Research public sources with Orchestor.

**When to use:** Research public websites, search demand, SaaS products and reviews, companies, founders, communities, social posts, videos, and transcripts through Orchestor. Use for source discovery, competitor research, citation-source inspection, market research, keyword analysis, or web scrape/map/crawl/extract tasks. Choose a source-specific command and preserve provenance; not saved AI-answer reporting.

### [orchestor-agentic-web](skills/orchestor-agentic-web/SKILL.md)

Evaluate an agent-facing website.

**When to use:** Inspect agent readiness, crawlability, discovery, structured evidence checks, and public website journeys with Orchestor Agentic Web. Use for agent-readable site audits, scan reports, MCP endpoint checks, directory discovery, or verification of a changed site. Distinguish technical checks and journey evidence from AI brand visibility or ranking guarantees.

### [orchestor-perception](skills/orchestor-perception/SKILL.md)

Analyze attributed brand characteristics.

**When to use:** Analyze Orchestor brand perception and attribute rankings from saved answer text, or import explicitly requested quoted attribute observations. Use for brand associations, qualitative comparisons, and exact-evidence annotation. Preserves SHA-256 digests and UTF-16 offsets; attribute mention is not automatically positive sentiment, product truth, or causal attribution.

### [orchestor-shopping](skills/orchestor-shopping/SKILL.md)

Analyze products and AI shopping evidence.

**When to use:** Use Orchestor for product catalogs, product identity and attributes, competitors, product prompts and fan-outs, and shopping performance, demand, trend, or merchant reports. Use when the unit of analysis is a product or merchant rather than brand-level visibility. Keeps rendered appearances, rankings, demand signals, and purchases distinct.

### [orchestor-workspace](skills/orchestor-workspace/SKILL.md)

Organize an Orchestor workspace.

**When to use:** Manage Orchestor workspaces, membership, projects, milestones, initiatives, files, and saved views. Use for organizing customer work, workspace setup or access, storing requested artifacts, and locating project or milestone IDs. Preserves tenant boundaries and distinguishes task-project UUIDs from project keys; not infrastructure administration.

### [orchestor-manage-issues](skills/orchestor-manage-issues/SKILL.md)

Manage Orchestor Issues.

**When to use:** Create, find, update, classify, and organize tasks and Issues inside an Orchestor workspace, including project and milestone assignment. Use when a user asks to record an action from a workspace URL, a screen, or analysis evidence. Complete the requested record operation; do not substitute GitHub Issues or start implementation and deployment.

### [orchestor-integrations](skills/orchestor-integrations/SKILL.md)

Connect agents and external services.

**When to use:** Connect Claude Code, Codex, Cursor, or another supported client to Orchestor MCP; inspect provider connections, OAuth connect sessions, analytics properties, web streams, browser contexts, and integration state. Use for agent-native setup and connection troubleshooting. Preserves existing client settings and separates configuration, OAuth, workspace authorization, and successful data access.

### [orchestor-aeo-best-practices](skills/orchestor-aeo-best-practices/SKILL.md)

AEO analysis best practices.

**When to use:** Review or produce trustworthy AI visibility, citation, perception, competitor, and source analysis with Orchestor. Load before interpreting report differences, recommending AEO actions, or reviewing a draft analysis. Covers comparison cohorts, metric meaning, evidence, missing data, causality, workspace isolation, paid collection, and untrusted source text.

### [orchestor-aeo-workflows](skills/orchestor-aeo-workflows/SKILL.md)

Run an evidence-to-action AEO workflow.

**When to use:** Run an Orchestor baseline assessment, monthly audit, citation-gap investigation, or content improvement cycle across reports, saved answers, public research, and Issues. Use for multi-step AEO reviews or agency/client reporting. Separates read-only diagnosis, proposed action, requested execution, and follow-up measurement; no guaranteed ranking or citation uplift.

## Installation

This repository is private. Installation requires GitHub access to it.

```bash
npx skills add orchestor-inc/skills
```

Install just the skill relevant to your task:

```bash
npx skills add orchestor-inc/skills --skill orchestor-visibility
```

The [Orchestor Plugin](https://github.com/orchestor-inc/orchestor-plugin) imports
these same files and adds client integration. CLI bundles adopt a pinned revision
of this repository. Updating this repository does not update a released CLI.

## Usage

Describe the outcome to your agent, such as “compare our saved AI visibility for
September with August” or “review this website for agent readiness”. Skills load
instructions and references as needed. Installation does not authenticate the
CLI or MCP connection. Each skill works without mandatory sibling skills.

## Discovery index

The workflow builds the standard discovery index and archives, including each
skill's references. Run `npm ci` and `node scripts/build-discovery-index.mjs https://github.com/orchestor-inc/skills/releases/download/agent-skills` to
reproduce the artifacts.

## Skill Structure

```
skills/<skill-name>/
  SKILL.md
  references/
```

Edit these standard files directly. `SKILL.md` provides applicability, choices,
procedure, and output expectations. References contain exact contracts, examples,
and command discovery. Do not duplicate skill bodies in the product repository.

[Benchmark decisions](BENCHMARK.md) explain the upstream mechanisms used.
[Coverage](COVERAGE.md) maps the public CLI surface to skills and records limits.
Internal production operations, credentials, and infrastructure remain in the
operator repository. These customer skills can also supply product agents, but
this repository does not implement a built-in agent loader.

## License

UNLICENSED. See [LICENSE](LICENSE). Upstream distribution tooling attribution is
in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
