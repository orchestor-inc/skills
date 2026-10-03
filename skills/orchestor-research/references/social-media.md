# Social, advertising, video, and transcript evidence

Supported command families include LinkedIn, X, Reddit, YouTube, TikTok, and
Meta Ads. Their capabilities differ; inspect the exact leaf instead of assuming
all support search, comments, transcripts, or analytics in the same way.

Use search/list to discover IDs, then get selected posts, profiles, videos, or
comments. A profile URL, numeric company ID, account handle, and post ID are not
interchangeable. LinkedIn current-company filters require numeric company IDs,
not company names or URLs; query remains required for people search.

**Incorrect:** enrich every returned LinkedIn row “just in case”, identify someone
from an ambiguous name match, or present a video summary without a transcript.

**Correct:** bound rows, select the relevant records, and request optional profile
enrichment only when needed. The current LinkedIn include=profile option can add
up to four provider credits per returned row. Preserve returned attribution and
mark unavailable transcripts or comments as unavailable.

Separate original posts from comments/replies, advertisements from organic
mentions, and provider metrics from causal claims. Public posts can contain
personal data; return only what the user's task needs and do not infer sensitive
or hidden personal attributes. No outreach or message sending is part of research.

[Exact command catalog](commands-social.md).
