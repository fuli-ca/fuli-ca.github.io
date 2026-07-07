import fs from "fs";
import path from "path";

const domain = "https://fuli.ca";
const dist = "./docs/.vitepress/dist";
const output = "./docs/.vitepress/dist/sitemap.xml";

const urls = [];

function scanDirectory(dir) {

  const files = fs.readdirSync(dir);

  for (const file of files) {

    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);


    if (stat.isDirectory()) {

      scanDirectory(fullPath);

    } else if (file.endsWith(".html")) {


      let relative = path.relative(
        dist,
        fullPath
      )
      .replaceAll("\\", "/");


      // 删除 index.html
      if (relative.endsWith("index.html")) {

        relative = relative.replace(
          /index\.html$/,
          ""
        );

      } else {

        relative = relative.replace(
          /\.html$/,
          ""
        );

      }


      // 首页
      let url;

      if (relative === "") {

        url = domain + "/";

      } else {

        url = domain + "/" + relative;

      }


      urls.push(url);

    }

  }

}


scanDirectory(dist);


// 去重
const uniqueUrls = [
  ...new Set(urls)
].sort();


const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${uniqueUrls.map(url => `
<url>
  <loc>${url}</loc>
</url>
`).join("")}

</urlset>
`;


fs.writeFileSync(
  output,
  xml,
  "utf8"
);


console.log(
  `✅ sitemap生成完成，共 ${uniqueUrls.length} 个页面`
);