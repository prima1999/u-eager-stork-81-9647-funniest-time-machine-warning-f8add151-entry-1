import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Even a passenger who erases their own birth still owes the fare.
const warning = "NOTICE: Passengers who prevent their own birth will be charged a full return fare.";
const dir = "/output";
const file = join(dir, "entry.txt");

// Write the label once and leave the output folder standing.
mkdirSync(dir, { recursive: true });
writeFileSync(file, warning, "utf8");
