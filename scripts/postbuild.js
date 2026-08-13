import fs from "node:fs";
import path from "node:path";

const domain = "https://dreammissionsportsacademy.com";

const routes = [
  {
    path: "/",
    title: "Dream Mission Sports Academy — Dreams to Victory",
    description:
      "Welcome to Dream Mission Sports Academy in Karnataka since 2021. Explore all sports, coaching, events, equipment, fitness & yoga, counselling and more.",
  },
  {
    path: "/about",
    title: "About Us — Dream Mission Sports Academy",
    description:
      "Meet Manjunatha G S and the story behind Dream Mission Sports Academy — five years of inspiring sportspersons across Karnataka.",
  },
  {
    path: "/mission",
    title: "Mission & Values — Dream Mission Sports Academy",
    description:
      "Our mission, vision and the values that guide everything we do — education, inspiration, collaboration, responsibility, empowerment and passion.",
  },
  {
    path: "/sports",
    title: "Sports & Programs — Dream Mission Sports Academy",
    description:
      "Coaching, equipment, sportswear, event organizing, fitness & yoga, nutrition, seminars, counselling and career advisory — nine programs under one academy.",
  },
  {
    path: "/contact",
    title: "Contact — Dream Mission Sports Academy",
    description:
      "Get in touch with Dream Mission Sports Academy. Call +91 95139 96935 or email mandyamanju@gmail.com to join our programs.",
  },
];

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

  function createHtmlContent({ title, description, canonicalUrl }) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="author" content="Dream Mission Sports Academy" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="Dream Mission Sports Academy" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ""}
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.$_TSR = {
        h: function() { this.hydrated = true; this.c(); },
        e: function() { this.streamEnded = true; this.c(); },
        c: function() { if (this.hydrated && this.streamEnded) { delete window.$_TSR; if (window.$R) delete window.$R['tsr']; } },
        p: function(script) { !this.initialized ? this.buffer.push(script) : script(); },
        buffer: [],
        router: { matches: [] }
      };
    </script>
    ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
  </body>
</html>`;
  }

  for (const route of routes) {
    const canonicalUrl = `${domain}${route.path === "/" ? "" : route.path}`;
    const htmlContent = createHtmlContent({
      title: route.title,
      description: route.description,
      canonicalUrl,
    });

    if (route.path === "/") {
      fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent);
      console.log("✅ Generated index.html");
    } else {
      const cleanPath = route.path.replace(/^\//, "");
      const targetSubdir = path.join(publicDir, cleanPath);
      if (!fs.existsSync(targetSubdir)) {
        fs.mkdirSync(targetSubdir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetSubdir, "index.html"), htmlContent);
      fs.writeFileSync(path.join(publicDir, `${cleanPath}.html`), htmlContent);
      console.log(`✅ Generated ${cleanPath}/index.html and ${cleanPath}.html`);
    }
  }

  const fallback404Content = createHtmlContent({
    title: "Page Not Found — Dream Mission Sports Academy",
    description: "The page you're looking for doesn't exist or has been moved.",
    canonicalUrl: domain,
  });
  fs.writeFileSync(path.join(publicDir, "404.html"), fallback404Content);
  console.log("✅ Generated 404.html");

  fs.writeFileSync(path.join(publicDir, ".nojekyll"), "# Disable Jekyll for GitHub Pages\n");
  fs.writeFileSync(path.join(publicDir, "_redirects"), "/*  /index.html  200\n");
  fs.writeFileSync(path.join(publicDir, ".gitignore"), "!*\n!**/*\n");
  console.log("✅ Created .nojekyll, _redirects, and .gitignore in .output/public");
} catch (error) {
  console.error("Error in postbuild.js:", error);
  process.exit(1);
}
