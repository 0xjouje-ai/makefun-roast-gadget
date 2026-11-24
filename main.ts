// One-Line Roast: The Gadget You Use Every Day — entry program.
//
// Writes one original roast line to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic.
//
// Candidates considered (all single-line, ≤200 chars):
//   "My phone dies at 4 p.m. every day, like it unionised against my schedule."
//     -> rejected: the dying-phone complaint is the example in the brief;
//        the most reheated angle in the field.
//   "My microwave beeps until I open it, like it needs closure more than
//     I need hot food."
//     -> good image, but the joke is the beep, not the gadget's behaviour
//        toward me; weaker sting of recognition.
//   "My earbuds pair to my laptop, my phone and my neighbour's TV —
//     everything except the device in my hand."
//     -> funny, but "pairs to the wrong device" is a well-worn complaint.
//   "My smartwatch congratulates me for standing up — after watching me sit
//     for eleven hours straight without a word."
//     -> CHOSEN. Names a daily gadget outright. The sting is recognition:
//        the watch really does cheer the bare minimum. The fresh angle is
//        the inversion — the "smart" device as a silent bystander that only
//        speaks up to praise you for the least you could do, after saying
//        nothing while you rotted in the chair for eleven hours. One
//        concrete detail (eleven hours) makes it one person's specific
//        gripe, not a generic grumble, and the line stays tight.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My smartwatch congratulates me for standing up — after watching me sit for eleven hours straight without a word.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Also: a single line, as the task requires.
const chars = [...ROAST].length;
if (chars < 1 || chars > 200) {
  throw new Error(`roast must be 1-200 characters, got ${chars}`);
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be only white space");
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("roast must be a single line");
}
if (!/smartwatch/i.test(ROAST)) {
  throw new Error("roast must name the daily gadget it roasts");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(ROAST);
console.log(`(${chars} characters)`);
