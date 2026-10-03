---
title: Keep mentions, citations, search results, and visits distinct
impact: CRITICAL
impactDescription: Prevents a proxy metric from being reported as the requested outcome
---

## Keep mentions, citations, search results, and visits distinct

Prevents a proxy metric from being reported as the requested outcome.

**Incorrect:** Use citation_count as mention share of voice, or count every search result as a citation.

**Correct:** Report the endpoint’s actual metric and denominator. Link aggregates to saved answers, cited URLs, or traffic evidence as appropriate.

A mention is not a citation; a retrieved search URL is not necessarily adopted; a referral is not proof of causality. Use each report only for the event it measures.

Reference: [Orchestor CLI](https://orchestor.io/docs/cli) and the relevant
endpoint's current help/schema. The impact label describes correctness or data
risk; it is not a quantified claim of business improvement.
