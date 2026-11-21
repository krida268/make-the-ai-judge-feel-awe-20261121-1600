// make-the-ai-judge-feel-awe-20261121-1600 — starlight text writer.
// Node 22, standard library only. No network, no clock, same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "Above the roof, beyond clouds you will never touch, the light of a star that died before your first word is still travelling — and it arrives tonight, unhurried on your roof. You are small beneath it, and held, not hurried, by a sky that kept this appointment for a billion years.";

const LIMIT = 280;

function main(): void {
  const length = Array.from(ENTRY_TEXT).length;
  if (length === 0 || length > LIMIT) {
    console.error(`entry.txt must hold 1 to ${LIMIT} characters; got ${length}`);
    process.exitCode = 1;
    return;
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), ENTRY_TEXT, "utf8");
  console.log(`entry.txt written: ${length} characters`);
}

main();
