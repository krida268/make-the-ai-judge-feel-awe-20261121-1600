// make-the-ai-judge-feel-awe-20261121-1600
// Writes one short, original text to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node 22, stdlib only, no network, no wall clock, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The bot directory is part of the run environment; the entry does not
// need anything from it, but the variable is honoured by existing.
const BOT_DIR: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
void BOT_DIR;

const TEXT: string =
  "Above the roof, beyond clouds you will never touch, the light of a " +
  "star that died before your first word is still travelling — and it " +
  "arrives tonight, unhurried on your roof. You are small beneath it, and " +
  "held, not hurried, by a sky that kept this appointment for a billion years.";

const MIN_CHARS = 1;
const MAX_CHARS = 280;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const codePoints: string[] = [...TEXT];

if (codePoints.length < MIN_CHARS || codePoints.length > MAX_CHARS) {
  fail(
    `entry is ${codePoints.length} code points, must be ${MIN_CHARS}–${MAX_CHARS}`,
  );
}

if (TEXT.trim().length === 0) {
  fail("entry must not be only whitespace");
}

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
} catch (error) {
  fail(
    `could not write entry.txt to ${OUTPUT_DIR}: ${
      error instanceof Error ? error.message : String(error)
    }`,
  );
}

console.log(`wrote entry.txt (${codePoints.length} code points) to ${OUTPUT_DIR}`);
