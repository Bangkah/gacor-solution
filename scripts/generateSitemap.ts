import { writeFileSync } from "fs";

const BASE_URL = "https://gacorsolution.vercel.app";

const pages = [
  "/",
  "/source-code",
  "/contact"
  // Tambahkan halaman baru di sini
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap berhasil dibuat di public/sitemap.xml");
