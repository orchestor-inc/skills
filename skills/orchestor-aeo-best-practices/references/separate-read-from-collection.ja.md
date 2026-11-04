---
title: Separate analysis from paid collection and changes
impact: CRITICAL
impactDescription: Keeps actions within the requested scope and cost
---

[English](separate-read-from-collection.md) | 日本語

## 分析を有償の収集および変更から分離する

アクションを要求されたスコープとコストの範囲内に維持します。

**誤り:** 読み取り専用の質問に回答している最中に、新規の実行を開始したり、モニタリングを有効化したり、レポートを公開したりする。

**正しい方法:** まず既存のエビデンスを使用します。新しい収集や書き込みは、要求された場合のみ、限定されたプロンプト / チャネルスコープおよび検証済みの結果を伴って実行します。

下書きプロンプトの作成、モニタリングの有効化、手動実行、バッチ処理、および公開には、それぞれ異なる影響があります。プロバイダーの読み取りにもコストが発生する場合があるため、必要なエンリッチメントのみをリクエストしてください。

参考: [Orchestor CLI](https://orchestor.io/docs/cli) および該当エンドポイントの現在のヘルプ / スキーマ。影響度ラベルは正確性やデータリスクを説明するものであり、ビジネス上の改善を定量的に主張するものではありません。

<!-- translation-source-sha256: 8e1e5f358990f82ac1f725e8231f78a1588faa38f8cefc90cd10d6c07cf63882 -->
