import path from "path";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
export const dirname = path.dirname(__filename); // get the name of the directory
