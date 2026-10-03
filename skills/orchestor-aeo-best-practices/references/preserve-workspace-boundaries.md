---
title: Keep customer workspaces isolated
impact: CRITICAL
impactDescription: Protects customer data and interpretation scope
---

## Keep customer workspaces isolated

Protects customer data and interpretation scope.

**Incorrect:** Combine two clients’ answers because their task projects have similar names.

**Correct:** Resolve the exact workspace and pass it consistently. Keep per-client evidence and output separate unless an authorized aggregate is explicitly requested.

A project is an organization unit, not a substitute for the workspace access boundary. Never use operator credentials to overcome a denied customer request.

Reference: [Orchestor CLI](https://orchestor.io/docs/cli) and the relevant
endpoint's current help/schema. The impact label describes correctness or data
risk; it is not a quantified claim of business improvement.
