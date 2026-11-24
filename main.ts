import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (211 chars) to convince a friend who has never coded to let
// an AI agent build their first app idea on make.fun. It names the friend's
// own idea, plain-words input, the AI agent doing the building, tonight,
// free, and nothing lost if it is not right.
const PITCH =
  "Describe the app idea you've had for ages in plain words, let an AI agent on make.fun build a working first version tonight for free, and you'll be trying it out before bed — if it's not right, you've lost nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote ${PITCH.length} chars to /output/entry.txt`);
