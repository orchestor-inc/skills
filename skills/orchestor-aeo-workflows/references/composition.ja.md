[English](composition.md) | 日本語

# リソーススキルからワークフローを構成する

実際のリクエストと、完了した実行からの修正事項を活用してください。リソースコマンドとフィールド契約はリソーススキル内に保持します。親は目標、リソースの順序、ステップ間で渡される入力、および完成した成果物を定義します。

## サイテーション調査の例

| ステップ | リソーススキル | 入力 | 次のステップへの出力 |
| --- | --- | --- | --- |
| アイデンティティの解決 | orchestor-brands | ワークスペースと確認済みのブランド／Web サイト | ブランドおよび競合の ID |
| エビデンスの比較 | orchestor-reports | ID、期間、およびコホート | レポートのスコープと関連する差異 |
| 回答の検査 | orchestor-answers | そのスコープでサポートされているフィルタ | 回答 ID、パッセージ、および引用された URL |
| ソースの検査 | orchestor-sources | ソース ID／URL および比較スコープ | 観測されたソースのギャップと不確実性 |
| 関連ページの読み取り | orchestor-research | 特定の公開 URL | 出所情報付きのページエビデンス |
| アクションの記録（要求された場合） | orchestor-manage-issues | エビデンスと提案された変更 | 作成された Issue ID |

これらの出力は概念的な受け渡しであり、新しい JSON スキーマではありません。サポートされているフィルタを選択するには、現在の CLI ヘルプを参照してください。レポートが回答 ID を返さない場合もあります。観測結果の欠落がある場合は、黙って `orchestor-runs` をトリガーするのではなく、明示的なギャップとして出力してください。

簡潔な親では次のように記述できます:

```markdown
---
name: client-citation-review
description: Review saved citation evidence for a client's chosen questions and prepare a short improvement brief.
---

# Client citation review

Confirm workspace, brand, competitors, period, and target questions from existing
context. Read the installed Orchestor brands, reports, answers, and sources
skills as needed. Use public research only for relevant cited pages.

Return the observed gap, exact supporting answers and URLs, one bounded change,
and what remains uncertain. Do not collect fresh measurements, publish content,
or contact a publisher unless the user requested that action.

If a resource skill is unavailable, identify it and use the current public CLI
help or documentation for that operation; do not invent fields or commands.
```

実際の作業で必要な場合は、出力、比較ロジック、または対象読者を変更してください。現実的なリクエストで親を試し、成果物を検査してください。失敗の原因となっている最小限の指示を修正し、別のケースを試してください。

要求に応じて実行されるタスクにはスキルを使用してください。タスク全体に適用される場合にのみ、永続的なプロジェクト規約をクライアントの既存のネイティブなプロジェクト指示ファイルに記述してください。第 2 のルールエンジンを導入したり、ワークフロー全体を常に読み込まれる指示ファイルにコピーしたりしないでください。

<!-- translation-source-sha256: 3d9087e8d36b9662db130b52e58c9c551ab00b7976f002d30301c1cfb56bc037 -->
