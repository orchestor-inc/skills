# Benchmark decisions

## Reference

[higgsfield-ai/skills at 2700040](https://github.com/higgsfield-ai/skills/tree/27000402070db19d958789d05b3b52b6f4718d7c)
is the reference for this repository's layout, skill units and writing:

- Top-level `README.md`, `INSTALL.md` and `COOKBOOK.md`.
- One skill per workflow, named `<brand>-<workflow>`, each with `SKILL.md` and optional `references/`.
- `SKILL.md` frontmatter with `version`, `name`, a `description` that lists "Use when" phrases and "NOT for" routes, `argument-hint` and `allowed-tools`.
- A Step 0 bootstrap (install the CLI, ask the user to sign in), UX rules, a workflow, and troubleshooting.

## Differences

- Skills live under `skills/` because the discovery workflow and the plugin sync read that path.
- Every English file has a Japanese `.ja.md` translation, checked by `scripts/check-localization.mjs`.
- Orchestor has no backend prompt enhancer for product photography, so `orchestor-product-photoshoot` carries its mode templates in the skill.
- Higgsfield skills for features Orchestor does not offer (Soul ID, brand kits, websites, marketplace cards, faceless video, YouTube thumbnails) have no Orchestor counterpart.

Existing distribution mechanisms are unchanged: [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278)
discovery archives (attribution in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)) and skills.sh installation.
