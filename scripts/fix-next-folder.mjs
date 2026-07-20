// Post-build step for HostGator shared hosting: renames out/_next -> out/next and
// rewrites every "/_next/" reference to "/next/". (The live asset 403s turned out to
// be a directory-permission issue, not underscore paths; this rename is kept as a
// harmless precaution against Apache configs that do deny underscore dirs.)
import {
  readdirSync,
  renameSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from "node:fs";
import { join, extname } from "node:path";

const out = join(process.cwd(), "out");
const src = join(out, "_next");
const dst = join(out, "next");

if (!existsSync(out)) {
  console.log("no out/ folder (export not run); skipping HostGator fix");
  process.exit(0);
}
if (existsSync(src) && !existsSync(dst)) renameSync(src, dst);

const exts = new Set([".html", ".js", ".css", ".txt", ".xml", ".json"]);
let changed = 0;

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(p);
    } else if (exts.has(extname(entry.name))) {
      const c = readFileSync(p, "utf8");
      if (c.includes("/_next/")) {
        writeFileSync(p, c.replaceAll("/_next/", "/next/"));
        changed++;
      }
    }
  }
}

walk(out);
console.log(`HostGator fix applied: _next -> next, rewrote ${changed} files`);
