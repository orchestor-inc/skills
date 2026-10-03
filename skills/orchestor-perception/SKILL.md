---
name: orchestor-perception
description: "Analyze Orchestor brand perception and attribute rankings from saved answer text, or import explicitly requested quoted attribute observations. Use for brand associations, qualitative comparisons, and exact-evidence annotation. Preserves SHA-256 digests and UTF-16 offsets; attribute mention is not automatically positive sentiment, product truth, or causal attribution."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Analyze attributed brand characteristics

Ground each attributed characteristic in the exact saved text. Do not replace
source evidence with a plausible summary.

## When to apply

Use for “what do AI answers associate with us?”, “compare perceived strengths”,
“show quotes behind this attribute”, or an explicit observation-import request.
For ordinary mention share use `orchestor-reports`, `orchestor-answers`, and `orchestor-sources` if available.

## Priority rules

| Priority | Rule | Reference |
| --- | --- | --- |
| Critical | Preserve exact source text, digest, and UTF-16 offsets | [Quoted evidence](references/quoted-evidence.md) |
| Critical | Import only requested, valid observations | [Import semantics](references/import.md) |
| High | Keep attributes, sentiment, and factual claims distinct | [Interpretation](references/interpretation.md) |

## Quick start

```bash
orc perception text list --help
orc perception text list --workspace WORKSPACE_ID --brand-id BRAND_ID --limit 20 --format json
orc reports perception get --help
```

Read bounded evidence pages. An empty page may still have a next_cursor; continue
using the same filters and limits when the task needs more evidence.

## Procedure

1. Fix brand, prompt/topic, platform, and period scope.
2. Read the relevant report and its saved text evidence.
3. Record answer ID, digest, segment identity, offsets, and exact quote.
4. Separate what the answer attributes to a brand from your interpretation.
5. If import was requested, validate the body against current help and schema,
   preserve a stable idempotency key, and submit only those observations.
6. Read back the resulting report or import receipt; state missing coverage.

## Return

An attribute comparison with quoted evidence, answer IDs, scope, and limits. For
imports, include the receipt and affected brands. Do not imply raw answers were
rewritten or that every brand's annotations were replaced.

See [command families](references/commands.md).
