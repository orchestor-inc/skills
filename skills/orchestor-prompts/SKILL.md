---
name: orchestor-prompts
description: "Read and maintain Orchestor prompts, topics, tags, personas, and suggestions. Use to build or revise a measurement question set, inspect prompt state, or organize customer intent."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Work with prompts and their context

Separate the question set from executing it. Reuse the user's business context:
customer, product, decision stage, market, and relevant competitors. Do not create
arbitrary prompt volume or mix branded and non-branded results without labeling.

1. Read current prompt/topic/persona IDs and the intended workspace.
2. Draft or edit only the requested questions and context. Discover exact fields
   with `orc prompts create --help` or the requested leaf's help.
3. Review generated suggestions before accepting them. Preserve user edits.
4. Distinguish draft creation, enabling recurring monitoring, disabling, and
   deleting. A request for a draft does not authorize enablement or paid execution.
5. Read back changed resources and return IDs, state, and context.

Pass existing runnable prompt IDs to `orchestor-runs` only when collection is
requested. A disabled prompt can still be manually runnable under the current
contract; inspect state rather than equating disabled with deleted.

- [Prompts, personas, topics and tags](references/prompts-personas.md)
- [CLI operations](references/commands.md)
