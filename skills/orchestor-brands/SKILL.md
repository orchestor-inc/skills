---
name: orchestor-brands
description: "Read and maintain Orchestor brands, competitors, and tracked domains. Use to resolve brand IDs, review suggestions, update brand facts, or inspect domain ownership."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Work with brands and domains

Resolve the workspace and read existing records before changing identity. Brand
names, tracked domains, cited domains, and competitor IDs are different objects.

1. Inspect `orc brands list --help` and list the workspace's brands.
2. Resolve the intended ID from confirmed name and website. Preserve unrelated
   fields and read the leaf command's schema before an update.
3. Treat generated suggestions as unverified candidates. Accept only requested
   changes and read back the resulting record.
4. Inspect domain verification separately; a domain record does not prove
   ownership, measurement coverage, or that answers exist.

Return resolved IDs, confirmed facts, changes, and unresolved identity questions.
A parent workflow can pass the brand ID into prompts, reports, or perception.
Do not start measurement as a side effect of resolving a brand.

- [Identity and updates](references/brand-identity.md)
- [CLI operations](references/commands.md)
