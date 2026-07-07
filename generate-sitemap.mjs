import fs from "fs";
import path from "path";

const domain = "https://fuli.ca";
const dist = "./docs/.vitepress/dist";
const output = "./docs/public/sitemap.xml";

const urls = [];

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (file === "index.html") {

      let relativePath = path.relative(dist, path.dirname(fullPath));

      let urlPath = "/" + relativePath
        .replaceAll("\\", "/");

      // 首页
      if (urlPath === "") {
        urls.push(domain + "/");
      } else {
        urls.push(domain + urlPath + "/");
      }
    }
  }
}

if (!fs.existsSync(dist)) {
  console.error("❌ dist目录不存在，请先执行 vitepress build");
  process.exit(1);
}

scanDirectory(dist);


// 去重 + 排序
const uniqueUrls = [...new Set(urls)].sort();


const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${uniqueUrls
  .map(
    (url) => `<url>
  <loc>${url}</loc>
</url>`
  )
  .join("\n")}

</urlset>
`;

fs.writeFileSync(output, xml, "utf8");

console.log(
  `✅ sitemap生成成功，共 ${uniqueUrls.length} 个URL`
);

console.log(`📍位置: ${output}`);