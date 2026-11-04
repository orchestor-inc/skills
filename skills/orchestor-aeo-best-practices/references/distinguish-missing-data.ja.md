---
title: Treat missing coverage as unknown
impact: HIGH
impactDescription: Avoids false absence and zero-performance claims
---

[English](distinguish-missing-data.md) | 日本語

## 欠落したカバレッジは不明として扱う

誤った不在やパフォーマンスゼロという主張を防ぎます。

**誤り:** 最初のページが空であることや、プロバイダーの期間が利用できないことを、視認性（visibility）がゼロであると解釈する。

**正しい方法:** ページネーション、フィルター、接続状態、取得結果、および分母を確認します。カバレッジが不完全なままである場合は、その旨を明記します。

空のページであっても継続カーソルが含まれている場合があります。サポートされていないメトリクス、収集の失敗、および実際に観測されたゼロは、それぞれ異なる状態です。

参考: [Orchestor CLI](https://orchestor.io/docs/cli) および該当エンドポイントの現在のヘルプ / スキーマ。影響度ラベルは正確性やデータリスクを説明するものであり、ビジネス上の改善を定量的に主張するものではありません。

<!-- translation-source-sha256: 9d78f9b7702e66e851835ce30f4888b5701e78c44455eb877bbcc8535e8c9155 -->
