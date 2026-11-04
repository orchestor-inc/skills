---
title: Compare the same cohort before interpreting change
impact: CRITICAL
impactDescription: Prevents mismatched populations from appearing as an improvement
---

[English](compare-same-cohort.md) | 日本語

## 変化を解釈する前に同一コホートを比較する

不一致な母集団が見かけ上の改善として現れるのを防ぎます。

**誤り:** 過去 30 日間の全プラットフォーム平均を、1 週間・単一プラットフォームの値と比較し、その差分を改善（アップリフト）と呼ぶ。

**正しい方法:** ブランドセット、プロンプトセット、プラットフォーム / モデル、国、ペルソナ、およびメトリクスを固定します。期間比較には明示的な UTC の開始 / 終了境界を使用し、欠落している観測データを開示します。

ローリングウィンドウはリクエスト間で移動します。現在の設定変更によって過去のエビデンスが書き換えられることはありません。差分を解釈する前に、コホートと境界を記録してください。

参考: [Orchestor CLI](https://orchestor.io/docs/cli) および該当エンドポイントの現在のヘルプ / スキーマ。影響度ラベルは正確性やデータリスクを説明するものであり、ビジネス上の改善を定量的に主張するものではありません。

<!-- translation-source-sha256: 3dd57c485813defea45259250dbd95efee6cd2d783f38a28f73425dd447c46f2 -->
