---
name: orchestor-runs
description: "Orchestor のプロンプトラン、バッチ、オンボーディングの観測、および測定設定を操作します。要求された AI 回答の収集、実行状態の検査、ランのキャンセル、またはチャネルとロケールの設定に使用します。"
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

[English](SKILL.md) | 日本語

# 測定ランの操作

設定、受付済みの実行、終端状態の実行、および利用可能な結果を区別して管理してください。クレジットを消費する操作の前に、ワークスペース、プロンプト ID、チャネル、ロケール、ペルソナ、およびユーザーの収集スコープを確認してください。

1. `orc runs create --help`、現在の対象チャネル、制限、およびクォータを検査します。
2. 要求された境界付きのランまたはバッチを 1 回送信し、その ID を保持します。
3. 終端状態または要求された待機制限に達するまでその ID を検査します。タイムアウトは失敗の証明ではありません。不確実なステータスを修復するために重複して送信しないでください。
4. ラン/バッチ結果操作を使用して結果を取得し、失敗または部分的な完了を明示的に報告します。回答 ID を `orchestor-answers` に渡します。
5. 設定の書き込みについては、リソースを再度読み取り、無関係な値を保持します。

Reviewed オンボーディングは複数のリソースを調整し、最初のバッチを開始できます。オンボーディングが要求された場合に使用してください。これは読み取り専用のブランド検索ではありません。

- [Reviewed オンボーディング](references/onboarding.ja.md)
- [ランのライフサイクル](references/run-lifecycle.ja.md)
- [バッチ](references/batches.ja.md)
- [測定設定](references/measurement-configuration.ja.md)
- [CLI 操作](references/commands.ja.md)

<!-- translation-source-sha256: 49baca2c4c17b2baacf7bd04d0e98183f18f3271f43ffe62028ad1b3a854df35 -->
