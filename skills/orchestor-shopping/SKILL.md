---
name: orchestor-shopping
description: "Use Orchestor for product catalogs, product identity and attributes, competitors, product prompts and fan-outs, and shopping performance, demand, trend, or merchant reports. Use when the unit of analysis is a product or merchant rather than brand-level visibility. Keeps rendered appearances, rankings, demand signals, and purchases distinct."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Analyze products and AI shopping evidence

Resolve the product before comparing shopping evidence. A name match alone is
not enough to establish product or variant identity.

## When to apply

Use for “which products appear?”, “compare product competitors”, “inspect shopping
demand”, “analyze merchants”, or an explicitly requested product catalog update.

## Procedure

1. Confirm workspace, product IDs or URLs, market, and period.
2. Inspect existing product records before extracting or creating another record.
   Use [product identity](references/product-identity.md) for matching.
3. Choose the report that answers the question; use [report selection](references/reports.md).
4. Retrieve a bounded result and inspect supporting product/merchant evidence.
5. Separate observed appearances and position from inferred demand or conversion.
6. For a requested catalog change, prepare only those fields and read it back.
   Extraction from a page produces evidence/candidates, not automatically verified facts.

## Quick start

```bash
orc products list --workspace WORKSPACE_ID --limit 20 --format json
orc products extract --help
orc reports shopping-performance get --help
```

## Return

Product/variant and merchant identity, report type, period and scope, returned
metrics and evidence, plus missing coverage. Do not claim sales, revenue, inventory,
or price freshness when the returned data does not establish them.

## References

- [Product identity](references/product-identity.md)
- [Reports](references/reports.md)
- [Command families](references/commands.md)
