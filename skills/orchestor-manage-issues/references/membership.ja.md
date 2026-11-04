[English](membership.md) | 日本語

# メンバーシップと識別子の例

```bash
orc projects list --workspace WORKSPACE_ID --fields id,projectKey,name --format json
orc projects milestones list PROJECT_KEY --workspace WORKSPACE_ID --fields id,name,project_id --format json
orc projects milestones issues update PROJECT_KEY MILESTONE_ID ISSUE_ID --workspace WORKSPACE_ID --format json
orc issues list --workspace WORKSPACE_ID --milestone-id MILESTONE_ID --query ISSUE_ID --fields id,identifier,title,project_id,state --format json
```

マイルストーンの割り当てが要求され、ID が解決されている場合にのみ、リレーションシップの書き込みを実行してください。正確な末端コマンドが存在しない CLI バージョンでは、サポートされているアップグレード要件を報告してください。終了コードが 0 である親ヘルプページは、マイルストーンの割り当てが実装されていることの証明にはなりません。

**誤り:** 表示されている Issue 番号をあらゆる場所で内部 UUID として渡したり、コマンドが projectKey を想定している場所でプロジェクトの UUID を使用したりすること。

**正しい対応:** id、identifier、project_id、および projectKey は別々のフィールドとして保持してください。不足している識別子のみを解決し、API から返された値を使用してください。

<!-- translation-source-sha256: f8e7a5ccdead3f47751204b97d1a1211341d04f14b4c5ecdd0f2d098976a55f7 -->
