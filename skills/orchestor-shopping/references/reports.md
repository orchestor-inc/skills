# Pick the shopping report

| Question | Report family |
| --- | --- |
| How often and where does the product appear? | shopping-performance |
| What demand signals are represented? | shopping-demand |
| How does the series change over time? | shopping-trend |
| Which merchants appear? | merchants |

Read each leaf's supported metrics/dimensions. Shopping metrics include
rendered_visibility, appearances, average_position, and win_rate where supported.
They are not interchangeable with brand mention metrics.

**Incorrect:** call an appearance a purchase, sum averages across incompatible
groups, or compare a merchant listing with a product-family aggregate.

**Correct:** preserve product identity, period, channels, country, prompt cohort,
and returned denominator. Inspect supporting evidence and explain missing data.
A demand signal is not observed sales; source coverage and collection time matter.
