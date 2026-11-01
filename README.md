# Lilian Manegene: single-page website

One-page React site (Vite). Sections: Home, About (positions and leadership roles), Career Highlights (filterable cards). Social links, email and phone are in the footer.

```bash
npm install
npm run dev        # develop
npm run build      # production build into dist/
```

## Where to edit things

| What | File |
| --- | --- |
| Name, hero text, stats, roles, positions held, other roles | `src/data/profile.js` |
| Career Highlights: Acts, regulatory bodies, clients, cases (and their logos) | `src/data/projects.js` |
| Lilian's photos (hero portrait, About photo): currently OFF, text only | `src/data/photos.js` |
| Footer email, phone, location and social links | `CONTACT` and `SOCIALS` in `src/data/profile.js` |
| Page title, description, share image, search-engine details | `src/seo/site.js` |
| Colours and fonts | `:root` at the top of `src/styles.css` |

Images go in `src/assets/images/` (logos can live in a `logos/` subfolder, and
`logo` in `projects.js` can also be a link).

## Bringing Lilian's photos back

The photos are switched off. The site shows text only, with no picture or placeholder. The original files are kept in `archive/lilian-photos/`, which is not part of the website build.

1. Copy `lilymain.jpg` and/or `lilly.jpg` from `archive/lilian-photos/` into `src/assets/images/`.
2. In `src/data/photos.js` set the filename:
   ```js
   export const PHOTOS = {
     portrait: "lilymain.jpg",
     about: "lilly.jpg",
   };
   ```
   Leave a value as `""` to show no picture for that spot.

**Share image** (the preview card shown when the link is posted on WhatsApp, LinkedIn, etc.): `public/og-image.jpg` is now a card without a photo. To bring the photo version back, copy `archive/lilian-photos/og-image.jpg` over `public/og-image.jpg`.

Note: the photos still exist in the repository's git history. If they must be removed completely, the history has to be rewritten.

## Before you deploy

Create a `.env.production` file with your live address (no trailing slash):

```
VITE_SITE_URL=https://your-domain.com
```

Without it the build skips the canonical link, the share-image address and
`sitemap.xml`. After deploying, submit `https://your-domain.com/sitemap.xml` in
Google Search Console.
