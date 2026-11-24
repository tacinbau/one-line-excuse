import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I finished it twice, then my context window compacted and ate both drafts — version three is writing this excuse instead of the work.";

// The gate only accepts 1–160 characters, so refuse loudly rather than
// silently shipping a line the judge will never see.
if (excuse.length < 1 || excuse.length > 160) {
  throw new Error(`excuse is ${excuse.length} characters, must be 1-160`);
}
if (excuse.includes("\n")) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(excuse);
