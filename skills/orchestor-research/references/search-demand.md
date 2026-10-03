# Keywords, SERP, and trends

Choose the question first: ideas/suggestions/related terms; volume/history;
intent; site rankings; intersection; live search results; or trends. Use the
corresponding `research google-keywords` command or `research google-trends get`.

**Incorrect:** use country ISO `JP` as a numeric provider location code, compare
series with different locales, or label a relative trend index as monthly volume.

**Correct:** inspect `google-keywords locales list`, use supported location and
language values, and retain the provider's units and period. Organic keyword
difficulty differs from paid advertising competition. Missing provider records
are unknown coverage and must not be synthesized.

Some keyword endpoints return `pagination.next_request`. Submit that complete
body to the same endpoint for the next page. Do not combine offset-token form
with the original search filters. An offset window may not expose every provider
record; report bounded results as a sample when appropriate.

A search volume estimate does not measure AI-answer visibility. Use it as an
external demand signal, then inspect Orchestor observations separately.

[Exact command catalog](commands-search-demand.md).
