English | [日本語](README.ja.md)

# Orchestor Agent Skills

Skills for using Orchestor's CLI resources to investigate AI visibility and act
on evidence. Resource skills own command contracts and resource lifecycles.
Parent workflows combine them for a customer's task. Edit ordinary `SKILL.md`
files, try them on real work, and improve them from the results.

## Install

```bash
npx skills@latest add orchestor-inc/skills
```

Select the skills and agents you use. To install one resource skill:

```bash
npx skills@latest add orchestor-inc/skills --skill orchestor-prompts
```

For Claude Code, the [Orchestor Plugin](https://github.com/orchestor-inc/orchestor-plugin)
also distributes these skills through the native plugin installer. Choose one
route for the same skills to avoid duplicate instructions. The Plugin is not
claimed to be listed in Anthropic's official marketplace.

Installation does not authenticate Orchestor. Follow the [CLI guide](https://orchestor.io/docs/cli)
and check `orc status`. CLI and MCP authentication are separate.

## Resource skills

Use these directly for resource operations or compose them in a parent workflow.
One resource skill may cover closely related resources with a shared lifecycle;
there is no one-command-per-skill rule.

| Skill | Responsibility |
| --- | --- |
| [orchestor-cli](skills/orchestor-cli/SKILL.md) | Operate the Orchestor CLI |
| [orchestor-brands](skills/orchestor-brands/SKILL.md) | Work with brands and domains |
| [orchestor-prompts](skills/orchestor-prompts/SKILL.md) | Work with prompts and their context |
| [orchestor-runs](skills/orchestor-runs/SKILL.md) | Work with measurement runs |
| [orchestor-reports](skills/orchestor-reports/SKILL.md) | Work with aggregate reports |
| [orchestor-answers](skills/orchestor-answers/SKILL.md) | Work with saved answers |
| [orchestor-sources](skills/orchestor-sources/SKILL.md) | Work with sources and citations |
| [orchestor-research](skills/orchestor-research/SKILL.md) | Research public sources with Orchestor |
| [orchestor-agentic-web](skills/orchestor-agentic-web/SKILL.md) | Evaluate an agent-facing website |
| [orchestor-perception](skills/orchestor-perception/SKILL.md) | Analyze attributed brand characteristics |
| [orchestor-shopping](skills/orchestor-shopping/SKILL.md) | Analyze products and AI shopping evidence |
| [orchestor-workspace](skills/orchestor-workspace/SKILL.md) | Organize an Orchestor workspace |
| [orchestor-manage-issues](skills/orchestor-manage-issues/SKILL.md) | Manage Orchestor Issues |
| [orchestor-integrations](skills/orchestor-integrations/SKILL.md) | Connect agents and external services |

## Workflows and analysis rules

| Skill | Responsibility |
| --- | --- |
| [orchestor](skills/orchestor/SKILL.md) | Select the relevant resource or workflow |
| [orchestor-aeo-workflows](skills/orchestor-aeo-workflows/SKILL.md) | Compose a baseline, period audit, citation investigation, or content cycle |
| [orchestor-aeo-best-practices](skills/orchestor-aeo-best-practices/SKILL.md) | Review scope, evidence, metrics, and attribution |

For example, a citation investigation can use reports → answers → sources →
public research. Add an Issue only when requested. Prompt configuration and new
measurement are separate operations, not automatic steps in an analysis.

## Create and improve workflows

Use an existing skill-authoring tool, such as Anthropic's
[skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator):

```bash
npx skills@latest add anthropics/skills --skill skill-creator
```

Then ask your agent:

> Use skill-creator to turn our completed citation investigation into a reusable
> workflow using the installed Orchestor resource skills. Keep the CLI contracts
> in the resource skills. Use the corrections from this run, and try the result
> on another example before deciding what to change next.

[Composition example](skills/orchestor-aeo-workflows/references/composition.md)
shows resource inputs and outputs. It is a starting point, not a new workflow
runtime or a claim that every customer needs the same sequence.

Skills are standard editable files. Use your normal editor, agent, and Git
workflow. To propose an upstream improvement, open a pull request with the
request that failed, the change, and what happened when you tried it again.
Remove customer data and credentials from examples.

Use `npx skills@latest update` to apply upstream updates. Review local changes before updating;
this repository does not implement automatic merging of local edits. Native
Plugin updates use the client's plugin update command.

## Coverage and releases

[Coverage](COVERAGE.md) records the audited CLI catalog. It is a routing audit,
not a live availability guarantee. Read the installed command's `--help` before
using it. The CLI's bundled skills follow a pinned commit; publishing this repo
does not publish a new CLI binary.

The existing discovery workflow publishes standard skill archives and an index.
[Benchmark decisions](BENCHMARK.md) identify the upstream mechanisms.

## License

[MIT](LICENSE). Third-party discovery tooling attribution remains in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
