// Busca placeholders entre corchetes [ ... ] en el HTML generado por `next build`.
// En producción (VERCEL_ENV=production, o CHECK_PLACEHOLDERS=strict) hace fallar el build si queda alguno.
// En preview y desarrollo solo los lista. Los datos pendientes del fundador están en el README.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(process.cwd(), ".next", "server", "app");
const strict = process.env.VERCEL_ENV === "production" || process.env.CHECK_PLACEHOLDERS === "strict";

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* htmlFiles(p);
    else if (name.endsWith(".html")) yield p;
  }
}

const found = new Map(); // ruta -> Set de placeholders
for (const file of htmlFiles(ROOT)) {
  const html = readFileSync(file, "utf8")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ");
  const text = html.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
  const hits = text.match(/\[[^\[\]\n]{1,160}\]/g);
  if (!hits) continue;
  const route = "/" + relative(ROOT, file).replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  found.set(route === "/" ? "/" : route.replace(/\/$/, ""), new Set(hits.map((h) => h.replace(/\s+/g, " "))));
}

if (found.size === 0) {
  console.log("✓ Sin placeholders [ ... ] en el HTML generado.");
  process.exit(0);
}

let total = 0;
console.log("Placeholders pendientes:");
for (const [route, set] of [...found].sort()) {
  for (const h of set) {
    total++;
    console.log(`  ${route}  ${h}`);
  }
}
console.log(`\n${total} placeholder(s) en ${found.size} página(s).`);
if (strict) {
  console.error("✗ Build de producción bloqueado: reemplaza los placeholders por los datos reales.");
  process.exit(1);
}
console.log("(Modo no estricto: visibles en desarrollo y preview; bloquean solo en producción.)");
