// Vérifie après build : title/description, H1 unique, alt+title des images, canonical.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
let bad = 0;
for (const f of walk('dist').filter((f) => f.endsWith('.html'))) {
  const h = readFileSync(f, 'utf8');
  const t = (h.match(/<title>(.*?)<\/title>/) || [])[1] || '';
  const d = (h.match(/<meta name="description" content="(.*?)"/) || [])[1] || '';
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  const imgs = [...h.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const noAlt = imgs.filter((i) => !/ alt="[^"]+"/.test(i) || !/ title="[^"]+"/.test(i)).length;
  const issues = [];
  const skip = /noindex/.test(h);
  if (!skip && (t.length < 40 || t.length > 62)) issues.push(`title ${t.length}`);
  if (!skip && (d.length < 135 || d.length > 160)) issues.push(`desc ${d.length}`);
  if (h1 !== 1) issues.push(`h1=${h1}`);
  if (noAlt) issues.push(`img sans alt/title: ${noAlt}`);
  if (!/rel="canonical"/.test(h)) issues.push('canonical manquant');
  console.log(issues.length ? '✗' : '✓', f.replace('dist/', '').padEnd(48), `t${t.length} d${d.length}`, issues.join(' | '));
  bad += issues.length;
}
process.exit(bad ? 1 : 0);
