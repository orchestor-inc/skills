---
title: Separate observed change from causal attribution
impact: HIGH
impactDescription: Avoids recommendations stated as proven effects
---

[English](avoid-causal-claims.md) | 日本語

## 観測された変化と因果的帰属を分離する

実証された効果として記載される推奨事項を回避します。

**誤った例:** 次のレポートで増加したことを理由に、ページの編集が引用率の上昇を引き起こしたと主張すること。

**正しい例:** 観測された前後の差異ともっともらしい交絡因子を報告すること。介入とフォローアップの測定を仮説検定として記述すること。

プラットフォームやモデルの変更、プロンプトの構成比、ソースの更新、およびサンプリングのばらつきによって結果が変わる可能性があります。同一コホートの反復は比較の精度を向上させますが、それ単体で因果関係を確立するものではありません。

参照: [Orchestor CLI](https://orchestor.io/docs/cli) および関連するエンドポイントの最新のヘルプ/スキーマ。影響度ラベルは正確性またはデータリスクを表すものであり、ビジネス改善に関する定量化された主張ではありません。

<!-- translation-source-sha256: 47119807c14df4c51e2f7c9bfbf14273d82d967a66c645d51b221c68f759ed56 -->
