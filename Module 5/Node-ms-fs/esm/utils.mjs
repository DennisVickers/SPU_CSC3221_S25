import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// ESM doesn"t have __dirname; emulate it
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function getFilePath(filename) {
   return path.join(__dirname, "..", "data", filename);
};

export function getNewPath(newName) {
   return path.join(__dirname, "..", "data", newName);
};

export function getDirName() {
   return __dirname;
};

