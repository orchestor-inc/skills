[English](commands.md) | 日本語

# CLI コマンドリファレンス

カタログスナップショット: 2026-10-03、CLI ソースバージョン 0.6.2。これらの名前は公開 CLI レジストリに対して解決されました。これはルーティングのカバレッジを証明するものであり、認証された実行や公開されたすべてのバイナリでの利用可能性を証明するものではありません。引数、スキーマ、パーミッション、および制限については、インストールされているリーフコマンドの `--help` を参照してください。

| コマンド | 目的 |
| --- | --- |
| `orc channels list` | ワークスペースのモデルチャネルを一覧表示する |
| `orc init` | 認証情報を初期化する。--website を指定すると、オンボーディングと最初の観測バッチを完了する |
| `orc observations create` | オンボーディング抽出を開始または再開する |
| `orc observations get` | 現在のオンボーディング抽出ステータスを取得する |
| `orc observations configurations confirm` | オンボーディングリソースを確定し、最初の観測バッチを開始する |
| `orc observations configurations get` | 生成されたオンボーディングレビュー用リソースを取得する |
| `orc regions list` | サポートされているリージョンカタログを一覧表示する |
| `orc runs cancel` | Prompt Run をキャンセルする |
| `orc runs create` | Prompt Run を作成する |
| `orc runs get` | Prompt Run を取得する |
| `orc runs list` | Prompt Run を一覧表示する |
| `orc runs results get` | Prompt Run の結果を取得する |
| `orc runs batches cancel` | prompt run バッチをキャンセルする |
| `orc runs batches create` | prompt run バッチを作成する（ASYNC） |
| `orc runs batches delete` | prompt run バッチを削除する |
| `orc runs batches get` | prompt run バッチを取得する（ステータスポーリング） |
| `orc runs batches list` | prompt run バッチを一覧表示する |
| `orc runs batches results get` | 完了した prompt run バッチの結果を取得する |
| `orc workspaces measurement-configurations get` | ワークスペースの測定構成を取得する |
| `orc workspaces measurement-configurations update` | ワークスペースの測定構成を更新する |
| `orc workspaces measurement-configurations revisions list` | 追記限定の測定構成リビジョンを一覧表示する |
| `orc workspaces measurement-targets get` | ワークスペースの測定リージョン、言語、および許容量を取得する |
| `orc workspaces measurement-targets update` | ワークスペースの測定リージョンと言語を更新する |
| `orc workspaces quotas get` | ワークスペースのクォータを取得する |
| `orc workspaces setup get` | 永続的なオンボーディングジャーニーのチェックポイントを取得する |

<!-- translation-source-sha256: 9f46cae908d7a77faa049d7d77a67c8c8acc1b5dc470f8f726d8d13fcf5a1b27 -->
