---
title: Keep mentions, citations, search results, and visits distinct
impact: CRITICAL
impactDescription: Prevents a proxy metric from being reported as the requested outcome
---

[English](preserve-metric-meaning.md) | 日本語

## メンション、サイテーション、検索結果、訪問を明確に区別する

代替（プロキシ）メトリクスが要求された成果として報告されるのを防ぎます。

**誤り:** citation_count をメンションのシェア・オブ・ボイスとして使用したり、すべての検索結果をサイテーションとしてカウントしたりする。

**正しい方法:** エンドポイントの実際のメトリクスと分母を報告します。必要に応じて、集計値を保存された回答、引用された URL、またはトラフィックのエビデンスに関連付けます。

メンションはサイテーションではありません。取得された検索 URL が必ずしも採用されているとは限りません。リファラルは因果関係の証明にはなりません。各レポートはそれが測定している事象に対してのみ使用してください。

参考: [Orchestor CLI](https://orchestor.io/docs/cli) および該当エンドポイントの現在のヘルプ / スキーマ。影響度ラベルは正確性やデータリスクを説明するものであり、ビジネス上の改善を定量的に主張するものではありません。

<!-- translation-source-sha256: 61f2a02e9f47f2ca6fcef62df5a56e3f90c7ad2c1a219e573d96cb49de11d24f -->
