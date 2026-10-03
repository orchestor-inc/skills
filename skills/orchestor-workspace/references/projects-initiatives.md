# Projects, milestones, and initiatives

Issue project_id is a UUID. Milestone commands can take projectKey as a positional
identifier. Resolve that key from `projects list` or the project record; never
substitute the UUID merely because both identify the same project.

**Incorrect:** create a new project because a key lookup used the wrong identifier,
or assign an issue to a milestone without checking that the milestone belongs to
the specified project.

**Correct:** preserve the project UUID and projectKey separately. List the selected
project's milestones, match the provided milestone ID, then perform the requested
relationship change. If only names are supplied and multiple matches remain,
ask for that choice rather than guessing.

Initiative rollups and project rollups summarize their own scope. They do not
replace source issue evidence. Keep updates, comments, subscriptions, favorites,
and project associations distinct; an organization request does not authorize
posting comments or subscribing others.
