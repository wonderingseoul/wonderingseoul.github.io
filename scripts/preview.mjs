// Dependency-free local preview of the exported out/ folder.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("out");
const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".mp4": "video/mp4", ".pdf": "application/pdf", ".woff2": "font/woff2" };
createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (base) { if (path !== base && !path.startsWith(base + "/")) throw new Error("Not found"); path = path.slice(base.length); }
    let file = resolve(root, "." + (path || "/"));
    if (file !== root && !file.startsWith(root + sep)) throw new Error("Not found");
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    const data = await readFile(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
    res.end(data);
  } catch { res.writeHead(404, { "Content-Type": "text/html" }); res.end(await readFile(resolve(root, "404.html")).catch(() => "Not found")); }
}).listen(3000, "127.0.0.1", () => console.log(`Preview: http://localhost:3000${base}/`));
