// Build-time SEO for the single-page site.
//
// After `vite build` this writes the page's real <head> tags (title,
// description, social preview, structured data) into dist/index.html, plus
// sitemap.xml and robots.txt, so Google, WhatsApp and LinkedIn can read them
// without running JavaScript.
//
// It needs your live address. Set it before building:
//   VITE_SITE_URL=https://www.your-domain.com
// (in a .env.production file, or in your host's environment settings).
// Without it the build still works, but the canonical link, social image
// address and sitemap are skipped.

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

export default function seoPlugin() {
  let root = "";
  let outDir = "";
  let siteUrl = "";

  return {
    name: "lm-seo",
    apply: "build",

    configResolved(config) {
      root = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
      siteUrl = String(
        config.env?.VITE_SITE_URL || "",
      ).replace(/\/+$/, "");
    },

    async closeBundle() {
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;

      const { SITE } = await import(
        pathToFileURL(path.resolve(root, "src/seo/site.js")).href
      );
      const template = fs.readFileSync(indexPath, "utf8");
      const block = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
      if (!block.test(template)) {
        console.warn("[seo] index.html has no seo:start / seo:end block; skipped.");
        return;
      }

      const url = siteUrl ? siteUrl + "/" : null;
      const image = siteUrl ? siteUrl + SITE.image : null;

      const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE.legalName,
        jobTitle: SITE.jobTitle,
        ...(url && { url }),
        ...(image && { image }),
        email: SITE.email,
        telephone: SITE.telephone,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressCountry: SITE.country,
        },
        knowsAbout: SITE.knowsAbout,
        alumniOf: SITE.alumniOf.map((name) => ({
          "@type": "EducationalOrganization",
          name,
        })),
      };

      const tags = [
        `<title>${esc(SITE.title)}</title>`,
        `<meta name="description" content="${esc(SITE.description)}" />`,
        `<meta name="robots" content="index, follow" />`,
        url && `<link rel="canonical" href="${url}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
        `<meta property="og:title" content="${esc(SITE.title)}" />`,
        `<meta property="og:description" content="${esc(SITE.description)}" />`,
        url && `<meta property="og:url" content="${url}" />`,
        image && `<meta property="og:image" content="${image}" />`,
        image && `<meta property="og:image:alt" content="${esc(SITE.imageAlt)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(SITE.title)}" />`,
        `<meta name="twitter:description" content="${esc(SITE.description)}" />`,
        image && `<meta name="twitter:image" content="${image}" />`,
        jsonLd(person),
        url &&
          jsonLd({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE.name,
            url,
          }),
      ];

      fs.writeFileSync(
        indexPath,
        template.replace(
          block,
          () => `<!-- seo:start -->\n    ${tags.filter(Boolean).join("\n    ")}\n    <!-- seo:end -->`,
        ),
      );

      const robots = ["User-agent: *", "Allow: /"];
      if (siteUrl) {
        robots.push("", `Sitemap: ${siteUrl}/sitemap.xml`);
        const today = new Date().toISOString().slice(0, 10);
        fs.writeFileSync(
          path.join(outDir, "sitemap.xml"),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n</urlset>\n`,
        );
      } else {
        console.warn(
          "[seo] VITE_SITE_URL is not set: skipping sitemap.xml, canonical link and social image URL.",
        );
      }
      fs.writeFileSync(path.join(outDir, "robots.txt"), robots.join("\n") + "\n");
    },
  };
}
