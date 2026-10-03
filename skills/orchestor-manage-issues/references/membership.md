# Membership and identifier examples

```bash
orc projects list --workspace WORKSPACE_ID --fields id,projectKey,name --format json
orc projects milestones list PROJECT_KEY --workspace WORKSPACE_ID --fields id,name,project_id --format json
orc projects milestones issues update PROJECT_KEY MILESTONE_ID ISSUE_ID --workspace WORKSPACE_ID --format json
orc issues list --workspace WORKSPACE_ID --milestone-id MILESTONE_ID --query ISSUE_ID --fields id,identifier,title,project_id,state --format json
```

Only run the relationship write when milestone assignment is requested and IDs
have been resolved. On a CLI version without the exact leaf, report the supported
upgrade requirement. A parent help page with exit code zero is not proof that
milestone assignment is implemented.

**Incorrect:** pass the displayed issue number as an internal UUID everywhere,
or use a project UUID where the command expects projectKey.

**Correct:** keep id, identifier, project_id, and projectKey as separate fields.
Resolve only missing identifiers and use the API's returned values.
