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
