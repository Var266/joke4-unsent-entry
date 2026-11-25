// Unsent: The Micro-Confession Sprint — make.fun entry.
// Writes the winning two-part micro-confession to /output/entry.txt:
// a "To:" line plus the unsent message itself, one line, no explanation.
// Gate: whole entry 1-260 characters, message part at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const toLine = "To: Dad";
const message =
  "I sold the watch you gave me when I graduated to pay March rent, and I have worn the cheap replacement every Sunday since so you would not notice.";

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
