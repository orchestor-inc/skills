English | [日本語](README.ja.md)

# Orchestor Agent Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Agent skills for [Orchestor](https://www.orchestor.io), the AI creative platform.
Give Claude Code, Cursor, Codex and other coding agents the know-how to generate
images, video and speech through the `orc` CLI or the Orchestor MCP server.

## Install

```bash
npx skills@latest add orchestor-inc/skills --skill orchestor-creative
```

Choose your agents when prompted, or name them:

```bash
npx skills@latest add orchestor-inc/skills --skill orchestor-creative --agent claude-code cursor codex
```

For Claude Code, the [Orchestor plugin](https://github.com/orchestor-inc/orchestor-plugin)
ships the same skills with the MCP connection. Pick one route so the same skill
is not installed twice.

Installing a skill does not sign you in. Connect the CLI or MCP first:

```bash
curl -fsSL https://orchestor.io/install | sh
orc auth login
```

Or add the MCP server, for example in Claude Code:

```bash
claude mcp add --transport http orchestor https://mcp.orchestor.io/mcp
```

## Usage

Ask your agent in plain language:

> Generate a product shot of a white sneaker on a concrete floor with gpt-image-2 and give me the URL.

> Make a 5-second video of waves at dawn with seedance-2.5. Tell me the job ID while it renders.

> Read this script aloud with a calm Japanese voice and return the audio file.

The agent picks a model from the catalog, submits the job, waits for it and
returns the output URL.

## Skills

| Skill | What it does |
| --- | --- |
| [orchestor-creative](skills/orchestor-creative/SKILL.md) | Generate images, video and speech, choose models, and track generation jobs |

### Earlier workspace skills

The other skills in this repository (`orchestor-cli`, `orchestor-brands`,
`orchestor-prompts`, `orchestor-runs`, `orchestor-reports`, `orchestor-answers`,
`orchestor-sources`, `orchestor-research`, `orchestor-agentic-web`,
`orchestor-perception`, `orchestor-shopping`, `orchestor-workspace`,
`orchestor-manage-issues`, `orchestor-integrations`, `orchestor`,
`orchestor-aeo-workflows` and `orchestor-aeo-best-practices`) cover Orchestor's
earlier analysis commands. They stay here for existing installs and are not
part of the creative workflow.

## Update

```bash
npx skills@latest update
```

Review local edits before updating; local changes are not merged automatically.

## Contributing

Skills are plain `SKILL.md` files. Open a pull request with the request that
failed, the change, and what happened when you tried it again. Every English
file has a Japanese `.ja.md` translation; `node scripts/check-localization.mjs`
checks that they match. Remove customer data and credentials from examples.

## Documentation

- [CLI reference](https://www.orchestor.io/docs/en/cli)
- [MCP setup](https://www.orchestor.io/docs/en/mcp)
- [Models](https://www.orchestor.io/docs/en/models)

## License

[MIT](LICENSE). Third-party discovery tooling attribution is in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
