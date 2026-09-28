// Remove only generated output so deleted routes cannot survive a subsequent build.
import { rmSync } from "node:fs";
rmSync(new URL("../out/", import.meta.url), { recursive: true, force: true });
