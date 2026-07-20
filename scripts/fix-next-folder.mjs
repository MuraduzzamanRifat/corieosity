// Post-build fix for shared hosting (HostGator) that 403-blocks underscore dirs.
// Renames out/_next -> out/next and rewrites every "/_next/" reference to "/next/".
import {
  readdirSync,
  statSync,
  renameSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";

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
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      walk(p);
    } else {
      const dot = name.lastIndexOf(".");
      const ext = dot >= 0 ? name.slice(dot) : "";
      if (exts.has(ext)) {
        const c = readFileSync(p, "utf8");
        if (c.includes("/_next/")) {
          writeFileSync(p, c.replaceAll("/_next/", "/next/"));
          changed++;
        }
      }
    }
  }
}

walk(out);
console.log(`HostGator fix applied: _next -> next, rewrote ${changed} files`);
