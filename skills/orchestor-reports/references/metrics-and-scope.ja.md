[English](metrics-and-scope.md) | 日本語

# メトリクスの意味を保持する

| レポート | 代表的なメトリクス | 立証されない事項 |
| --- | --- | --- |
| visibility | visibility_rate, mention_count, share_of_voice, average_position | 引用、購入、または因果関係による改善 |
| citations | citation_count, citation_rate | ブランドの言及、または支持された製品品質 |
| sentiment | sentiment_score, mention_count | モデルの発言の事実としての真実性 |
| query-fanouts | fanout_count, citation_count | 生成されたすべての検索が引用になったこと |
| web-search-results | search_share, web_search_result_count | 返されたすべての結果が回答で使用されたこと |

エンドポイントでサポートされているメトリクス/ディメンションの組み合わせのみを使用してください。すべての場所ですべてのメトリクスを要求し、空のフィールドをゼロとして解釈しないでください。

**誤り:** 今週の全プラットフォームの visibility_rate と先月の単一プラットフォームの citation_rate を比較すること、または scope project で scope_id としてプロジェクト UUID を渡すこと。

**正しい対応:** メトリクス、母集団、フィルター、および期間の比較可能性を維持します。レポートコントラクトにおいて、scope `project` はアクティブなワークスペースを意味し、タスクプロジェクト ID ではありません。`brand`、`topic`、および `prompt` には対応する scope_id が必要です。project スコープはフィルターとして scope_id を使用しません。

`date_range` は UTC [start,end) の明示的な開始/終了境界、または期間のいずれも受け入れます。再現性を確保するために両方の境界を指定してください。空のオブジェクトは無効です。期間を伴う単一の境界は、その期間ウィンドウを使用します。どちらの選択肢をとったかを記録してください。

未知のフラットなフィルターキーは無視できます。文書化されているフィールドを使用し、返されたスコープを検証してください。タイプミスによって狭いクエリが生成されたと想定しないでください。ランキングや加重集計を解釈する際は、グループ化の軸を明示してください。

<!-- translation-source-sha256: ef2c1a0bb13c8f9fc3ee78a26986e4e8f0fab4282c71f89fdb9a5da7fa3a3f1e -->
