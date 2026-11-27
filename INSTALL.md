English | [日本語](INSTALL.ja.md)

# Install Orchestor Skills

These skills ship in this repo:

- **`orchestor-generate`** — image and video generation, model selection, and generation jobs
- **`orchestor-video-edit`** — upscale, background removal, captions, reframe, lip sync, talking avatars, motion control
- **`orchestor-audio`** — text to speech, voice change, transcription
- **`orchestor-product-photoshoot`** — product images from a product photo in 7 modes

They chain: `orchestor-product-photoshoot` and `orchestor-generate` make the
media, `orchestor-audio` makes the voice, and `orchestor-video-edit` finishes the video.

## Prerequisites

Install the Orchestor CLI and sign in:

```bash
curl -fsSL https://orchestor.io/install | sh
orc auth login
```

For scripts and CI, set `ORCHESTOR_API_KEY` from your secret manager instead.

Or connect your agent to the hosted MCP server and sign in with OAuth. For
Claude Code:

```bash
claude mcp add --transport http orchestor https://mcp.orchestor.io/mcp
```

Codex, Cursor and OpenCode: see [MCP setup](https://www.orchestor.io/docs/en/mcp).

## Option 1 — `npx skills` (recommended, cross-agent)

Works with Claude Code, Cursor, Codex, and any agent that picks up
`~/.<agent>/skills/<name>/SKILL.md`. Requires Node.js.

```bash
npx skills@latest add orchestor-inc/skills
```

Installs all four skills. The `skills` CLI detects the host agent and writes each
skill to the right path. To choose agents and skills explicitly:

```bash
npx skills@latest add orchestor-inc/skills --skill orchestor-generate --agent claude-code cursor codex
```

## Option 2 — Claude Code plugin

Claude Code only. Installs the same skills with the hosted MCP connection:

```bash
claude plugin marketplace add orchestor-inc/orchestor-plugin
claude plugin install orchestor@orchestor
```

Use one option, not both, so each skill is installed once.

## Option 3 — Copy the files

```bash
git clone --depth 1 https://github.com/orchestor-inc/skills.git
cp -r skills/skills/orchestor-generate ~/.claude/skills/
```

## Verify

In your agent, ask:

> "List the Orchestor image models available to my workspace."

The agent should invoke `orchestor-generate` and run
`orc creative image models list --json`. Generation itself needs a workspace
with creative credits.

## Updating

| Method | Update command |
|---|---|
| `npx skills` | `npx skills@latest update` |
| Claude Code plugin | `claude plugin update orchestor@orchestor` |
| Copied files | `git pull`, then copy again |
