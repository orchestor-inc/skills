import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
const root = fileURLToPath(new URL('../', import.meta.url));
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
}
const paths = [...walk(resolve(root, 'skills')).filter(path => path.endsWith('.md') && !path.endsWith('.ja.md')), resolve(root, 'README.md')];
const literals = text => text.match(/```[^\n]*\n[\s\S]*?```|`[^`\n]+`/g) ?? [];
for (const path of paths) {
  const english = readFileSync(path, 'utf8');
  const japanese = readFileSync(path.replace(/\.md$/, '.ja.md'), 'utf8');
  const digest = createHash('sha256').update(english).digest('hex');
  assert.ok(japanese.includes(`<!-- translation-source-sha256: ${digest} -->`), `Stale translation: ${path}`);
  assert.deepEqual(literals(japanese), literals(english), `Changed code or identifiers: ${path}`);
  assert.match(japanese, /[ぁ-んァ-ヶ一-龠]/, `Missing Japanese: ${path}`);
  if (path.endsWith('/SKILL.md')) {
    const metadata = text => parse(text.match(/^---\n([\s\S]*?)\n---/)[1]);
    const source = metadata(english), target = metadata(japanese);
    assert.ok(target.description && target.description.length <= 1024);
    delete source.description; delete target.description;
    assert.deepEqual(target, source, `Changed skill identity or runtime metadata: ${path}`);
  }
}
console.log(`Validated ${paths.length} English/Japanese pairs, freshness, literal code and skill identity`);
