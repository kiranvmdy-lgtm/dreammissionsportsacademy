import fs from "node:fs";
import path from "node:path";

try {
  const publicDir = path.resolve(".output/public");
  const assetsDir = path.join(publicDir, "assets");

  if (!fs.existsSync(assetsDir)) {
    console.error("Assets directory does not exist:", assetsDir);
    process.exit(1);
  }

  const files = fs.readdirSync(assetsDir);
  const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

  console.log("Found JS asset:", jsFile);
  console.log("Found CSS asset:", cssFile);

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dream Mission Sports Academy — Dreams to Victory</title>
    <meta name="description" content="Welcome to Dream Mission Sports Academy in Karnataka since 2021. Explore all sports, coaching, events, equipment, fitness & yoga, counselling and more." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
  </body>
</html>`;

  fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent);
  fs.writeFileSync(path.join(publicDir, "404.html"), htmlContent);
  console.log("✅ Successfully generated index.html and 404.html in .output/public");
} catch (error) {
  console.error("Error in postbuild.js:", error);
  process.exit(1);
}
