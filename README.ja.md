[English](README.md) | 日本語

# Orchestor Agent Skills

AI 可視性 を調査し、エビデンスに基づいて行動するために Orchestor の CLI リソースを使用するスキル群です。リソーススキルはコマンドコントラクトとリソースライフサイクルを管理します。親ワークフローは、顧客のタスクのためにそれらを組み合わせます。通常の `SKILL.md` ファイルを編集し、実際の作業で試し、その結果から改善してください。

## インストール

```bash
npx skills@latest add orchestor-inc/skills
```

使用するスキルとエージェントを選択してください。1 つのリソーススキルをインストールするには:

```bash
npx skills@latest add orchestor-inc/skills --skill orchestor-prompts
```

Claude Code 向けには、[Orchestor Plugin](https://github.com/orchestor-inc/orchestor-plugin) もネイティブのプラグインインストーラーを通じてこれらのスキルを配信します。指示の重複を避けるため、同じスキルには 1 つのルートを選択してください。本 Plugin が Anthropic の公式マーケットプレイスに掲載されているとは主張されていません。

インストールを行っても Orchestor の認証は行われません。[CLI guide](https://orchestor.io/docs/cli) に従い、`orc status` を確認してください。CLI と MCP の認証は別々です。

## リソーススキル

リソース操作にこれらを直接使用するか、親ワークフローでこれらを構成してください。1 つのリソーススキルが、共有ライフサイクルを持つ密接に関連したリソースをカバーする場合があります。1 コマンドにつき 1 スキルというルールはありません。

| スキル | 役割 |
| --- | --- |
| [orchestor-cli](skills/orchestor-cli/SKILL.ja.md) | Orchestor CLI を操作する |
| [orchestor-brands](skills/orchestor-brands/SKILL.ja.md) | ブランドおよびドメインを操作する |
| [orchestor-prompts](skills/orchestor-prompts/SKILL.ja.md) | プロンプトとそのコンテキストを操作する |
| [orchestor-runs](skills/orchestor-runs/SKILL.ja.md) | 測定実行を操作する |
| [orchestor-reports](skills/orchestor-reports/SKILL.ja.md) | 集計レポートを操作する |
| [orchestor-answers](skills/orchestor-answers/SKILL.ja.md) | 保存された回答を操作する |
| [orchestor-sources](skills/orchestor-sources/SKILL.ja.md) | ソースと引用を操作する |
| [orchestor-research](skills/orchestor-research/SKILL.ja.md) | Orchestor で公開ソースを調査する |
| [orchestor-agentic-web](skills/orchestor-agentic-web/SKILL.ja.md) | エージェント向けウェブサイトを評価する |
| [orchestor-perception](skills/orchestor-perception/SKILL.ja.md) | 属性付けされたブランド特性を分析する |
| [orchestor-shopping](skills/orchestor-shopping/SKILL.ja.md) | 製品および AI ショッピングのエビデンスを分析する |
| [orchestor-workspace](skills/orchestor-workspace/SKILL.ja.md) | Orchestor ワークスペースを整理する |
| [orchestor-manage-issues](skills/orchestor-manage-issues/SKILL.ja.md) | Orchestor Issues を管理する |
| [orchestor-integrations](skills/orchestor-integrations/SKILL.ja.md) | エージェントと外部サービスを接続する |

## ワークフローと分析ルール

| スキル | 役割 |
| --- | --- |
| [orchestor](skills/orchestor/SKILL.ja.md) | 関連するリソースまたはワークフローを選択する |
| [orchestor-aeo-workflows](skills/orchestor-aeo-workflows/SKILL.ja.md) | ベースライン、期間監査、引用調査、またはコンテンツサイクルを構成する |
| [orchestor-aeo-best-practices](skills/orchestor-aeo-best-practices/SKILL.ja.md) | スコープ、根拠、メトリクス、および属性付与を確認する |

たとえば、引用調査では reports → answers → sources → public research を使用できます。Issue の追加は要求された場合にのみ行ってください。プロンプト設定と新規測定は個別の操作であり、分析における自動的なステップではありません。

## ワークフローの作成と改善

Anthropic の [skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) など、既存のスキル作成ツールを使用します:

```bash
npx skills@latest add anthropics/skills --skill skill-creator
```

次に、エージェントに次のように依頼します:

> インストール済みの Orchestor リソーススキルを使用して、完了した引用調査を再利用可能なワークフローへと skill-creator で変換してください。CLI コントラクトはリソーススキル内に保持してください。今回の実行による修正内容を使用し、次に何を変更するかを決定する前に、別の例で結果を試してください。

[Composition example](skills/orchestor-aeo-workflows/references/composition.ja.md) はリソースの入力と出力を示しています。これは出発点であり、新しいワークフローランタイムや、すべての顧客が同じシーケンスを必要とするという主張ではありません。

スキルは標準の編集可能なファイルです。普段のエディタ、エージェント、および Git ワークフローを使用してください。アップストリームへの改善を提案するには、失敗したリクエスト、変更内容、および再試行時に発生した内容を記載してプルリクエストを開いてください。例からは顧客データと認証情報を削除してください。

アップストリームの更新を適用するには `npx skills@latest update` を使用してください。更新する前にローカルの変更を確認してください。このリポジトリはローカル編集の自動マージを実装していません。ネイティブ Plugin の更新には、クライアントのプラグイン更新コマンドを使用します。

## カバレッジとリリース

[Coverage](COVERAGE.md) は監査済みの CLI カタログを記録しています。これはルーティングの監査であり、ライブでの可用性保証ではありません。使用する前に、インストールされたコマンドの `--help` を読んでください。CLI のバンドルスキルは固定されたコミットに従っています。このリポジトリを公開しても新しい CLI バイナリは公開されません。

既存のディスカバリーワークフローは、標準のスキルアーカイブとインデックスを公開します。[Benchmark decisions](BENCHMARK.md) はアップストリームのメカニズムを特定します。

## ライセンス

[MIT](LICENSE)。サードパーティのディスカバリーツールの帰属表示は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) に残されています。

<!-- translation-source-sha256: d5a7ea8816967eb3d613ff24d45a7cc803cc9a1287618d769daa95c67c0c547b -->
