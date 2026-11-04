---
name: orchestor-manage-issues
description: "プロジェクトやマイルストーンの割り当てを含め、Orchestor ワークスペース内のタスクや Issue の作成、検索、更新、分類、および整理を行います。ユーザーからワークスペースの URL、画面、または分析エビデンスからのアクションの記録を求められた場合に使用します。要求された記録操作を完了してください。GitHub Issues で代用したり、実装やデプロイを開始したりしないでください。"
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

[English](SKILL.md) | 日本語

# Orchestor Issue の管理

このスキルは、リクエストの解釈、メンバーシップの解決、および保存されたレコードの検証を担当します。CLI は認証、リクエストの形式、およびトランスポートを担当します。

## 適用する場面

Orchestor 製品の Issue に対して使用します。GitHub の issue、Codex のチャット、プロジェクト、および Orchestor の Issue はそれぞれ異なるオブジェクトです。意図された製品オブジェクトをリクエストから解決できない場合にのみ確認を行ってください。

## 事前確認

`orc --version` を確認し、接続／ワークスペースがまだ判明していない場合は `orc status` を確認します。設定済みのエンドポイントを使用してください。不慣れな入力については `orc issues create --help` を確認してください。通常のタスク作成では、すべてのコマンドを閲覧したり、ソースコードを検索したり、シークレットファイルを検査したりする必要はありません。

## スコープの解決

`/w/WORKSPACE/issues?project_id=UUID&milestone_id=UUID` などの URL はスコープを直接提供します。完全な DOM パスを Issue にコピーしないでください。

- `--workspace WORKSPACE_ID` を一貫して渡すこと。
- Issue の project_id (UUID) とマイルストーンの projectKey を分けておくこと。
- projectKey は必要な場合にのみ解決し、その後そのプロジェクトのマイルストーンを確認すること。
- ユーザーが要求していない担当者、優先度、期日、またはメンバーシップを勝手に作成しないこと。

## 作成

1. 重複の可能性がある場合は、関連するタイトル語句を使用して同じワークスペース／プロジェクト内を検索します。表示番号のみの検索から存在しないと判断しないでください。
2. title、classification、description、および明示的に要求された project/initiative/priority フィールドを含む UTF-8 JSON 本文を作成します。
3. サポートされている場合は、stdin と idempotency key を使用して 1 回だけ送信します。
4. 返された内部 ID と表示識別子は個別に保持します。
5. 作成された ID を使用して要求されたマイルストーンを割り当て、メンバーシップを読み戻して確認します。

```bash
orc issues create --workspace WORKSPACE_ID --idempotency-key UNIQUE_KEY --stdin --format json < issue.json
```

JSON 本文には、現在の動作、要求された変更、完了条件、およびソースエビデンスを記載する必要があります。classification には owned、earned、または community などの現在の製品値を使用します。classification を priority と混同しないでください。

## 更新とリカバリ

既存の Issue を読み取り、要求されたフィールドのみを更新して、結果を検証します。ドキュメントに記載されている場合、省略されたフィールドはその値を保持します。null または明示的な配列によって、それらがクリアまたは置換される場合があります。作成後にマイルストーンの割り当てが失敗した場合は、重複を作成するのではなく、既存の Issue ID から再開してください。

## 返却内容

Issue 識別子、タイトル、ワークスペース、メンバーシップ、および結果の状態。レコード作成のリクエストは、レコードが検証された時点で完了となります。別途要求されない限り、コーディング、公開、または通知を開始しないでください。

## 参照

- [メンバーシップと識別子](references/membership.ja.md)
- [更新とリトライ](references/updates.ja.md)
- [コマンドファミリー](references/commands.ja.md)

<!-- translation-source-sha256: 4ed6957ee3b248f653f0d52d4dd8a377497eed5129527dfab34c613f2aaa3b05 -->
