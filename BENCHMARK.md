# Benchmark decisions

## Distribution and authoring mechanisms

- [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278): standard skills directories and discovery archives. Existing third-party notices retain attribution.
- [Supabase Agent Skills](https://github.com/supabase/agent-skills/tree/c9be0e931b7930f7d02126d04774d904c381e7d7): concise entrypoints with focused references and incorrect/correct examples.
- [Cloudflare Skills](https://github.com/cloudflare/skills/tree/41e0d19858946d18af9ee2c2feebbe2e11d829ff): capability routing and specialized skills with documentation fallback.
- [Matt Pocock's installation guidance](https://github.com/mattpocock/skills/blob/d81f3a183412e71a5b1e84ca21bc1a35eea03a60/.agents/install-block.md#L25-L57): skills.sh for skill files and a native Claude Plugin; choose one route for the same content. Orchestor's Plugin is not listed in the official marketplace, so its native marketplace-add step is still needed.
- [Anthropic skill-creator](https://github.com/anthropics/skills/blob/0a64e398ec6bb34a494f0c347e8ccae53a862f8e/skills/skill-creator/SKILL.md#L8-L26): draft, try realistic requests, inspect feedback, revise. We direct users to that existing tool rather than ship an Orchestor-specific authoring runtime.

## Orchestor boundaries

Resource skills own CLI contracts and lifecycles. Parents combine them for a task.
This replaces the broad visibility/monitoring entries with brands, prompts, runs,
reports, answers, and sources. Closely related resources may share one skill;
there is no requirement to create one skill per command or exactly 17 skills.

These boundaries are an Orchestor application of the mechanisms, not a claim that
one publisher has validated this exact taxonomy. Customer work and corrections
determine future boundaries and parent workflows.

Use ordinary Markdown, Git, skills.sh, and native Plugin updates. No custom local
edit merger, dependency loader, rules engine, or skill lifecycle service is added.
Task instructions belong in Skills; persistent project conventions use the
agent client's existing native project-instruction surface.

## Evidence and limits

[COVERAGE.md](COVERAGE.md) routes 457 public source-catalog entries. CLI help and
packaging can be checked without live customer data. No paid collection or
customer writes are part of this distribution change. The composition example
is a starting point, not evidence of improved AEO results or repeated customer use.

## English default and Japanese sidecars

English remains the default installed instruction set. Japanese uses `SKILL.ja.md`
and `*.ja.md` supporting documents; these are not additional discoverable skills.
Both languages retain the same commands, code, identifiers and authorization boundaries.
Japanese documents record the SHA-256 of their English source so changed source text
requires a translation refresh. The plugin receives both languages through its existing
commit-pinned, per-file hash sync. Native command and agent translations live under
`docs/ja/` to avoid registering extra commands or agents.

Mechanisms used:

- [Graphify language links and sidecar documents](https://github.com/Graphify-Labs/graphify/blob/0a8cd4e1e342235fe53e881fb5d591bf0460071f/docs/translations/README.zh-TW.md#L9-L14).
- [Lingo source/target locales and preserved keys](https://github.com/lingodotdev/lingo.dev/blob/28435298ec34473cc689f5ac9609be01c8653d0b/packages/cli/src/cli/cmd/run/_types.ts#L21-L35). This distribution uses static Markdown, not a translation runtime.
- [Matt's versioned plugin distribution from canonical skills](https://github.com/mattpocock/skills/blob/49dd158d1076134a641b33efb035946536778336/.agents/adr/0002-ship-as-a-claude-code-plugin.md#L1-L53).
- [Superpowers native manifest validation](https://github.com/obra/superpowers/blob/bb92a77741419a4ab5f06e711a283343f1ada0c3/tests/antigravity/test-plugin-manifest.sh#L65-L107).
- [Claude Code skill discovery and supporting files](https://code.claude.com/docs/en/skills): retain the canonical `SKILL.md`, name, and description contract.
