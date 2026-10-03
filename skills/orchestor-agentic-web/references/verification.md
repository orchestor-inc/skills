# Evidence-driven checks

Read the exact failed check and its evidence before proposing a fix. A missing
file, failed request, inaccessible rendering, and unsupported check have different
causes. Avoid assuming one failure explains the entire site.

**Incorrect:** claim a changed robots file improves brand visibility, or mark the
whole audit fixed because one check now passes.

**Correct:** rerun the affected check and retain before/after evidence. Describe
what the technical change enables and which broader effects remain unmeasured.

Check feedback records disagreement or context; it is not itself a successful
verification. Use feedback creation only when the user asked to record it.
Attestation/JWKS endpoints expose verification material; do not describe a fetched
attestation as cryptographically verified unless signature verification was done.
