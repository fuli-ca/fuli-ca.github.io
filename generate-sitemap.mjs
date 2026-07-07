import fs from "fs";
import path from "path";

const domain = "https://www.fuli.ca";
const dist = "./docs/.vitepress/dist";

let urls = [];

function scan(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scan(fullPath);
    } else if (file === "index.html") {

      let urlPath = path
        .dirname(fullPath)
        .replace(dist, "")
        .replaceAll("\\", "/");

      if (urlPath === "/") {
        urls.push(domain + "/");
      } else {
        urls.push(domain + urlPath + "/");
      }
    }
  }
}

scan(dist);


const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.map(url => `
<url>
  <loc>${url}</loc>
</url>
`).join("")}

</urlset>`;


fs.writeFileSync(
  "./docs/public/sitemap.xml",
  sitemap
);

console.log(
  `sitemap generated: ${urls.length} urls`
);