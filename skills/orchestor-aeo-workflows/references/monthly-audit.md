# Monthly or period audit

Use explicit UTC period bounds and a fixed comparison cohort. Record changes in
prompt membership, platform/model coverage, locale, or collection volume before
interpreting differences.

1. Read the current and previous period reports with the same dimensions/metrics.
2. Identify the largest relevant changes, then inspect saved answer/source evidence.
3. Separate a population change from a change within the comparable population.
4. Review existing action records if the user asked about progress; do not claim
   an action caused a change solely because its date preceded it.
5. Return the table, evidence, uncertainty, and proposed next priorities.

**Incorrect:** run every prompt again at month end merely to produce a report.

**Correct:** use saved evidence. Offer a bounded follow-up measurement only where
it would answer an unresolved question and the user requests it. Sending the
report or creating Issues is separate from preparing the report.
