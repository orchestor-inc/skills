---
name: orchestor-reports
description: "Orchestor の visibility、sentiment、citation、fan-out、search-result、bot、および referral レポートを読み取ります。明示的なコホートと時間範囲を指定した集計比較に使用します。"
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

[English](SKILL.md) | 日本語

# 集計レポートの操作

レポートは保存された観測結果を集約します。比較を行う前に、ワークスペース、ブランド、またはその他のスコープ、プロンプトの所属、プラットフォーム/モデル、国、ペルソナ、および期間を確定してください。

```bash
orc reports visibility get --help
orc reports visibility get --workspace WORKSPACE_ID --scope brand --scope-id BRAND_ID --date-range '{"period":"30d"}' --metrics visibility_rate,share_of_voice,average_position --format json
```

1. 記録されたスコープの下で要求されたレポートを読み取ります。
2. 前後比較には明示的な UTC 境界と一致するコホートを使用し、変更されたカバレッジ、分母、および欠落している観測結果を確認してください。
3. メトリクス名、値、スコープ、および制限事項を返します。visibility のみから因果関係、収益、または将来のパフォーマンスを推論しないでください。
4. 親タスクが根本的なエビデンスを必要とする場合は、関連するスコープを `orchestor-answers` および `orchestor-sources` に渡します。`--include-examples` は現在のレポートコントラクトにおいて破棄された互換性フィールドです。回答は個別に取得してください。

レポート要求によって新しい測定が承認されることはありません。Perception レポートおよび shopping レポートは、それらのオブジェクトが対象である場合、特化したリソーススキルを使用します。

- [メトリクスとスコープ](references/metrics-and-scope.ja.md)
- [トラフィックの解釈](references/traffic.ja.md)
- [CLI 操作](references/commands.ja.md)

<!-- translation-source-sha256: d57799209367db7c2ff242bbf05eb2f5d7c1767db24d1b8eb6dd4aca13ff47a1 -->
