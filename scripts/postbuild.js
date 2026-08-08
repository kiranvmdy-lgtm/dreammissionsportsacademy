import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");

if (!fs.existsSync(publicDir)) {
  console.error("Public directory does not exist:", publicDir);
  process.exit(1);
}

const indexPath = path.join(publicDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("TanStack Start did not generate index.html:", indexPath);
  process.exit(1);
}

const html = fs.readFileSync(indexPath, "utf8");

fs.writeFileSync(path.join(publicDir, "404.html"), html);

console.log("Created 404.html from the generated TanStack Start index.html");
