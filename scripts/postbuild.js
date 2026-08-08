import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const indexPath = path.join(publicDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("index.html was not generated:", indexPath);
  process.exit(1);
}

const html = fs.readFileSync(indexPath, "utf8");

fs.writeFileSync(path.join(publicDir, "404.html"), html);

console.log("Created 404.html successfully");
console.log("Homepage:", indexPath);
