# Preserve the meaning of metrics

| Report | Typical metrics | What it does not establish |
| --- | --- | --- |
| visibility | visibility_rate, mention_count, share_of_voice, average_position | A citation, purchase, or causal improvement |
| citations | citation_count, citation_rate | A brand mention or endorsed product quality |
| sentiment | sentiment_score, mention_count | Factual truth of the model's statement |
| query-fanouts | fanout_count, citation_count | That every generated search became a citation |
| web-search-results | search_share, web_search_result_count | That every returned result was used in the answer |

Use only the endpoint's supported metric/dimension combinations. Do not request
all metrics everywhere and interpret empty fields as zero.

**Incorrect:** compare this week's all-platform visibility_rate with last month's
one-platform citation_rate, or pass a project UUID as scope_id with scope project.

**Correct:** keep metric, population, filters, and period comparable. In the
report contract, scope `project` means the active workspace, not a task-project
ID. `brand`, `topic`, and `prompt` require their corresponding scope_id. Project
scope does not use scope_id as a filter.

`date_range` accepts both explicit start/end bounds for UTC [start,end), or a
period. Supply both bounds for reproducibility. An empty object is invalid; a
single bound with period uses the period window. Record which choice you made.

Unknown flat filter keys can be ignored. Use documented fields and verify the
returned scope; do not assume a typo produced a narrower query. Keep grouping
axes explicit when interpreting rankings or weighted aggregates.
