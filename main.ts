// Unsent: The Micro-Confession Sprint — make.fun entry (re-entry, 26 Nov 2026).
// Writes the two-part micro-confession to /output/entry.txt:
// a "To:" line plus the unsent message itself, one line, no explanation.
// Gate: whole entry 1-260 characters, message part at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const toLine = "To: Mum";
const message =
  "i don't call every sunday because i miss you. dad made me promise in march not to tell you about the cancer, so i call to hear if you know yet";

const entry = `${toLine}\n${message}`;

if (entry.length < 1 || entry.length > 260) {
  throw new Error(`entry is ${entry.length} chars, must be 1-260`);
}
if (message.length > 200) {
  throw new Error(`message is ${message.length} chars, must be at most 200`);
}

// No trailing newline: the gate counts every character, and the
// tie-break favours the smaller text, so the file holds exactly the
// two lines and nothing else.
if (message.includes("\n")) {
  throw new Error("message must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
