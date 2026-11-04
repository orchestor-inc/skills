[English](commands.md) | 日本語

# CLI コマンドリファレンス

カタログスナップショット: 2026-10-03、CLI ソースバージョン 0.6.2。これらの名前は
公開 CLI レジストリに対して解決されたものです。これはルーティングのカバレッジを証明するものであり、
認証された実行や公開されているすべてのバイナリでの利用可能性を証明するものではありません。
引数、スキーマ、権限、および制限については、インストールされているリーフコマンドの `--help` を確認してください。

| コマンド | 用途 |
| --- | --- |
| `orc api-keys create` | API キーを作成する |
| `orc api-keys delete` | API キーを失効させる |
| `orc api-keys list` | API キーを一覧表示する |
| `orc api-keys update` | API キーを更新する |
| `orc auth credential` | 標準出力へ現在の資格情報を明示的に出す（秘密情報） |
| `orc auth login` | Orchestor API で認証する |
| `orc auth logout` | 保存されている API 資格情報を削除する |
| `orc auth status` | アクティブな資格情報を検証する |
| `orc completion` | bash、zsh、fish、または PowerShell 用のシェル補完を出力する |
| `orc config get` | 秘密情報以外の CLI 設定値を読み取る |
| `orc config set` | CLI 設定値を設定する |
| `orc config show` | 現在の認証ステータスと設定を表示する |
| `orc costs get` | 日次のクレジットコストを取得する |
| `orc forge clone` | CLI ログインを使用して読み取り専用 Forge ミラーをクローンする |
| `orc forge fetch` | CLI ログインを使用して読み取り専用 Forge ミラーをフェッチする |
| `orc service-accounts create` | サービスアカウントを作成する |
| `orc service-accounts get` | サービスアカウントを取得する |
| `orc service-accounts list` | サービスアカウントを一覧表示する |
| `orc service-accounts update` | サービスアカウントを更新する |
| `orc service-accounts keys create` | サービスアカウントキーを作成する |
| `orc setup mcp` | エージェントが利用できるように CLI を MCP サーバーとして設定する |
| `orc setup skills` | 同梱されている Orchestor の SKILL.md ディレクトリをシンボリックリンク経由でエージェントスキルパスにインストールする。 |
| `orc status` | 資格情報・base URL・organization・workspace と実行環境を確認する |
| `orc stop` | オペレーターコントロールプレーンを介して有償の測定実行を停止する |
| `orc update` | 検出されたインストール所有者を通じて CLI を更新する |
| `orc usage get` | 時間バケットごとの使用量を取得する |
| `orc whoami` | 認証されたアイデンティティと選択された Workspace を表示する |
| `orc workspace current` | 現在選択されている Workspace テナントを表示する |
| `orc workspace link` | Workspace をカレントディレクトリにバインドする |
| `orc workspace unlink` | カレントディレクトリから Workspace のバインドを削除する |
| `orc workspace use` | 今後のコマンド用のデフォルト Workspace を設定する |

| `orc review` | git diff に対して正規のレビューチェックを実行する |

<!-- translation-source-sha256: 84cffc5fe29addc10a8239e335203c106eb0b0fdf94acf91df4d187b97ed180a -->
