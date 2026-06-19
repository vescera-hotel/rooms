import { createServer } from "http";
import { readFile } from "fs/promises";
import { join, extname } from "path";
import { existsSync } from "fs";

const PORT = process.env.PORT || 20087;
const DIR = new URL("./public", import.meta.url).pathname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css",
  ".js":   "application/javascript",
  ".json": "application/json",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".mp4":  "video/mp4",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
};

createServer(async (req, res) => {
  let url = req.url.split("?")[0];
  if (url === "/" || url === "") url = "/index.html";

  const filePath = join(DIR, url);

  try {
    if (existsSync(filePath)) {
      const ext = extname(filePath).toLowerCase();
      const type = MIME[ext] || "application/octet-stream";
      const data = await readFile(filePath);
      res.writeHead(200, { "Content-Type": type });
      res.end(data);
    } else {
      const index = await readFile(join(DIR, "index.html"));
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(index);
    }
  } catch {
    res.writeHead(500);
    res.end("Server error");
  }
}).listen(PORT, "0.0.0.0", () => {
  console.log(`Hotel Vescera serving on port ${PORT}`);
});
