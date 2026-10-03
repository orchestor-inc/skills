# Agent Skills

A collection of skills for AI agents working with Orchestor. Skills are packaged
instructions that extend agent capabilities for AI visibility research, brand
monitoring, and evidence-based improvements.

Skills follow the [Agent Skills](https://agentskills.io/) format.

## Available Skills

### orchestor

Orchestor.

**When to use:** 「AI 検索最適化」「GEO」「LLMO」「AEO」と言われた時; 「自社 visibility 確認」「ChatGPT で引用される?」「Perplexity 結果」; 「citation 改善」「prompt 追加」「intervention 計画」; 顧客が AI search 最適化 workflow を回したい時の最初の入口

[Read the skill](skills/orchestor/SKILL.md)

### orchestor-account

Inspect account access and usage.

**When to use:** 「auth 確認」「API key 動作確認」; 「使用量 / cost確認」「persona一覧」

[Read the skill](skills/orchestor-account/SKILL.md)

### orchestor-answer

Inspect saved AI answers.

**When to use:** 「過去 answer 一覧」「特定 answer 取得」「answer export」; 「citation snapshot」「保存済みAI応答を確認」

[Read the skill](skills/orchestor-answer/SKILL.md)

### orchestor-brand

Manage brands and competitors.

**When to use:** 「brand 追加」「自社 brand 登録」「競合 brand 追加」; 「監視 brand 一覧」「ブランド一覧を編集」「ブランドプロフィールを更新」; 「ブランドの監視を有効/無効にする」

[Read the skill](skills/orchestor-brand/SKILL.md)

### orchestor-build-mcp-integration

Connect an agent to Orchestor MCP.

**When to use:** 「Orchestor MCP を agent runtime に組み込みたい」; 「Claude Code / Cursor / Codex で Orchestor を呼びたい」; 「server.json 設定」「MCP integration」

[Read the skill](skills/orchestor-build-mcp-integration/SKILL.md)

### orchestor-domain

Manage tracked domains.

**When to use:** 「domain 登録」「domain 一覧」「domain 削除」; 「domain verify」「DNS 認証」

[Read the skill](skills/orchestor-domain/SKILL.md)

### orchestor-manage-issues

Orchestor Issue管理.

**When to use:** Orchestor（オーケストラ）製品内のタスク・Issueを起票、検索、更新し、プロジェクトやマイルストーンへ所属させる。ワークスペースのURL・サイドバー・画面の指摘からタスク登録を頼まれた時に使う。GitHub IssueやCodexチャットの作成には使わない。

[Read the skill](skills/orchestor-manage-issues/SKILL.md)

### orchestor-prompt

Manage monitoring questions.

**When to use:** 「prompt 追加」「prompt 一覧」「prompt 編集」「prompt 削除」; 「prompt の monitoring を on/off」「persona 設定」「platforms 設定」; 「prompt suggestion 確認」「accept/reject」; 「prompt に tag 付け」

[Read the skill](skills/orchestor-prompt/SKILL.md)

### orchestor-prompt-create

Create a monitoring prompt.

**When to use:** 「prompt 追加」「prompt 登録」; 「この query を追跡」

[Read the skill](skills/orchestor-prompt-create/SKILL.md)

### orchestor-prompt-run

Collect a new AI answer.

**When to use:** 「promptを実行」「ChatGPTで叩く」「AI応答を新しく観測」; 「prompt runの状態確認」「answer_idを待つ」

[Read the skill](skills/orchestor-prompt-run/SKILL.md)

### orchestor-report

Analyze AI visibility and citations.

**When to use:** 「visibility 確認」「mention rate」「share of voice」「average position」; 「citation 集計」「source domain 別 breakdown」「self-citation」; 「sentiment 分析」「sentiment time series」; 「query fanout 集計」; 「bot traffic」「AI crawler 確認」「referral click」

[Read the skill](skills/orchestor-report/SKILL.md)

### orchestor-report-visibility

Compare brand visibility.

**When to use:** 「visibility 確認」「mention rate」「share of voice」; 「自社 vs 競合の SoV」「ブランド露出推移」

[Read the skill](skills/orchestor-report-visibility/SKILL.md)

### orchestor-shared

Shared setup and evidence rules.

**When to use:** 全 orchestor-* skill から read される共通基盤。直接 trigger しない (referenced only)

[Read the skill](skills/orchestor-shared/SKILL.md)

### orchestor-status

Check the Orchestor connection.

**When to use:** 「認証状態・ワークスペース・接続確認」; 「Orchestor に接続できない」「CLI の設定確認」

[Read the skill](skills/orchestor-status/SKILL.md)

### orchestor-tag

Organize prompts with tags.

**When to use:** 「tag 作成」「tag 一覧」「tag 削除」「tag の color 変更」; 「prompt に tag 一括設定」

[Read the skill](skills/orchestor-tag/SKILL.md)

### orchestor-topic

Organize monitoring topics.

**When to use:** 「topic 追加」「topic 一覧」「topic 削除」; 「topic suggestion 確認」「accept/reject suggestion」

[Read the skill](skills/orchestor-topic/SKILL.md)

## Installation

```bash
npx skills add orchestor-inc/skills
```

Choose your agent and install the collection, including `orchestor-shared`.
For a single workflow, include its linked companion skills:

```bash
npx skills add orchestor-inc/skills --skill orchestor-shared orchestor-report-visibility orchestor-report orchestor-answer
```

Add `--global` for user-wide installation. While this repository is private,
installation requires Git access to `orchestor-inc/skills`.

Install and authenticate the [Orchestor CLI](https://orchestor.io/docs/cli), then
verify the intended workspace:

```bash
orc --version
orc status
```

Skills do not authenticate the CLI or grant workspace access. Check the installed
command's `--help` for current arguments.

## Usage

Describe what you want to do. Your agent can use the relevant skill automatically:

```text
Compare our brand's visibility with competitors for the last 30 days.
Find prompts where competitors are cited and we are not. Recommend three improvements.
Add this monitoring question as a draft. Do not start a measurement yet.
```

Each workflow returns its scope, evidence, and limitations. Skills do not guarantee
visibility or citation improvements. Read `orchestor-shared` for connection and
safe-write guidance before using a task skill.

## Discovery index

The Agent Skills Discovery workflow builds a discovery index and per-skill
artifacts from the committed skill files. On pushes to main, it attaches them
to a GitHub Release. Releases retain this repository's visibility.

Build the same artifacts locally with:

```bash
npm ci --ignore-scripts
node scripts/build-discovery-index.mjs https://example.com/skills
```

## Skill Structure

Each skill contains:

- `SKILL.md` — Instructions for the agent, with a name and activation description.
- Optional `scripts/` — Executable helpers when the workflow needs them.
- Optional `references/` — Supporting material loaded on demand.

This collection currently uses `SKILL.md` files. Shared instructions are in
`skills/orchestor-shared/SKILL.md`. See [AGENTS.md](AGENTS.md) for authoring guidance.

## License

Orchestor skill content is UNLICENSED. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
for the MIT-licensed Vercel discovery implementation and authoring guidance.
