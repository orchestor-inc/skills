---
name: orchestor-manage-issues
description: "Use this skill when: Orchestor（オーケストラ）製品内のタスク・Issueを起票、検索、更新し、プロジェクトやマイルストーンへ所属させる。ワークスペースのURL・サイドバー・画面の指摘からタスク登録を頼まれた時に使う。GitHub IssueやCodexチャットの作成には使わない。"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-manage-issues.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-01T00:00:00.000Z
allowed-tools:
  - Read
  - Bash(orc *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-manage-issues.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Orchestor Issue管理

公式CLI `orc` で製品内のIssueを扱う。起票依頼は登録まで進める。実装依頼へ拡大しない。
APIの項目定義・認証・通信・再試行はCLIが所有し、このスキルは依頼の解釈、所属、完了確認を所有する。

## CLIへの入口

- まず `command -v orc`。正式なコマンド名は `orc`。`orchestor` や `oa` の有無で判断しない。
- 未導入なら公開パッケージ `npx --yes --package @orchestor-inc/cli orc`。
- 接続先・認証・workspaceが未確認なら `orc status` を一度だけ確認する。保存された接続先を使い、URLの見た目だけでAPI URLを書き換えない。対象環境と一致しない場合は書き込まない。
- 通常の起票でブラウザ、コネクタ探索、ソースコード検索、全コマンド一覧は不要。未知の操作だけ leaf の `--help` を一度読む。
- leaf helpが親namespaceの一覧へ戻る場合は未対応版。成功終了コードだけで対応済みと判断しない。マイルストーン指定があるなら作成前に所属付けの対応を確認する。未対応なら公式CLIの更新が必要だと伝える。

## 所属を確定する

URL `/w/<workspace>/issues?project_id=<UUID>&milestone_id=<UUID>` があれば3つをそのまま使う。DOM Path全体を転記する必要はない。

- `--workspace` は全呼び出しで明示する。
- Issueの `project_id` はUUID。milestone操作の `<key>` は **projectKey**。同一視しない。
- projectKeyが未確定の時だけ `orc projects list --workspace <workspace> --fields id,projectKey,name` から対象UUIDを照合する。
- milestone指定があれば `orc projects milestones list <key> --workspace <workspace> --fields id,name,project_id` でID・名称・所属を照合する。
- 名前だけなら候補を絞り、一意に決まらなければその選択だけ尋ねる。指定されていない所属は作らない。

`--fields` の複数項目抽出は対応版で使う。leaf helpが「--field の別名」だけの旧版なら、`--format json` をパイプして必要な項目だけ取り出し、長い本文を会話へ返さない。例:

```sh
orc projects list --workspace <workspace> --format json | python3 -c 'import json,sys; print(json.dumps([{k:p.get(k) for k in ("id","projectKey","name")} for p in json.load(sys.stdin)["data"]],ensure_ascii=False))'
```

## 起票

1. `orc issues create --help` で利用中の版の入力を確認する。必要なら同じ所属とタイトル語で `issues list --query` を絞り、重複を確認する。
2. UTF-8 JSONファイルに `title`, `classification`, `description` と指定された `project_id` を書く。本文は「現状・期待する変更・完了条件・参照元」を短く記す。classificationは `owned|earned|community`。製品自身の改善は `owned`。未指定の優先度・担当・期限は補わない。
3. 以下で作成し、返された `id` と `identifier` を保持する。`--stdin` を使い、本文をシェル文字列へ埋め込まない。不確かな入力は先に同じ引数へ `--dry-run` を付ける。

```sh
orc issues create --workspace <workspace> --idempotency-key <unique-key> --stdin --format json < issue.json
```

4. milestoneが指定された場合だけ、作成済みIssueを割り当てる。

```sh
orc projects milestones issues update <projectKey> <milestone-id> <issue-id> --workspace <workspace> --format json
orc issues list --workspace <workspace> --milestone-id <milestone-id> --query <issue-id> --fields id,identifier,title,project_id,state
```

成功応答が曖昧なら同じidempotency keyと同じ本文で再試行する。所属付けだけ失敗した場合は作成し直さず、返されたIssue IDから再開する。認証・権限エラーは盲目的に再試行しない。

確認後はIssue番号・タイトル・所属を返す。起票だけの依頼で実装やリリースを開始しない。

## 検索・更新

- `issues list` は workspaceに加えて project/milestone/query を絞る。`--query` は内部ID・タイトル・本文を検索するため、表示番号だけの検索で不在と判断しない。
- 既知のIDは `orc issues get <id>`。返された表示番号を内部IDと混同しない。
- `orc issues update <id> --help` の後、依頼された項目だけ送る。省略は保持、nullは解除。
- 一覧の本文を読む必要がなければ `--fields id,identifier,title,state,project_id`。詳細は選んだIssueだけ取得する。
