---
title: Keep customer workspaces isolated
impact: CRITICAL
impactDescription: Protects customer data and interpretation scope
---

[English](preserve-workspace-boundaries.md) | 日本語

## 顧客ワークスペースの隔離を維持する

顧客データと解釈スコープを保護します。

**誤り:** タスクプロジェクトの名前が似ているという理由で、2 つのクライアントの回答を統合する。

**正しい方法:** 正確なワークスペースを特定し、一貫してそれを渡します。承認された集計が明示的に要求されない限り、クライアントごとのエビデンスと出力を分けて管理します。

プロジェクトは組織単位であり、ワークスペースのアクセス境界の代わりにはなりません。拒否された顧客リクエストを回避するためにオペレーターの認証情報を使用することは絶対に避けてください。

参考: [Orchestor CLI](https://orchestor.io/docs/cli) および該当エンドポイントの現在のヘルプ / スキーマ。影響度ラベルは正確性やデータリスクを説明するものであり、ビジネス上の改善を定量的に主張するものではありません。

<!-- translation-source-sha256: 7eff16c5faccf0da794c5d2fb89c2aac26feff79605dbd00953d744cc9d43467 -->
