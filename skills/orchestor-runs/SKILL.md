---
name: orchestor-runs
description: "Operate Orchestor prompt runs, batches, onboarding observations, and measurement configuration. Use to collect requested AI answers, inspect execution state, cancel a run, or configure channels and locale."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Work with measurement runs

Keep configuration, accepted execution, terminal execution, and available results
separate. Confirm workspace, prompt IDs, channel, locale, persona, and the user's
collection scope before a credit-consuming operation.

1. Inspect `orc runs create --help`, current eligible channels, limits, and quota.
2. Submit the requested bounded run or batch once; retain its ID.
3. Inspect that ID until terminal or the requested wait bound. A timeout is not
   proof of failure; do not submit duplicates to repair an uncertain status.
4. Fetch results using the run/batch result operation and report failures or
   partial completion explicitly. Pass answer IDs to `orchestor-answers`.
5. For configuration writes, read back the resource and preserve unrelated values.

Reviewed onboarding coordinates multiple resources and can start a first batch.
Use it when onboarding is requested; it is not a read-only brand lookup.

- [Reviewed onboarding](references/onboarding.md)
- [Run lifecycle](references/run-lifecycle.md)
- [Batches](references/batches.md)
- [Measurement configuration](references/measurement-configuration.md)
- [CLI operations](references/commands.md)
