# Lilian Manegene: single-page website

One-page React site (Vite). Sections: Home, About, Projects (rotating carousel), Contact.

```bash
npm install
npm run dev        # develop
npm run build      # production build into dist/
```

## Where to edit things

| What | File |
| --- | --- |
| Name, hero text, stats, roles, positions held, other roles | `src/data/profile.js` |
| Regulations, consultancy clients, cases (and their logos) | `src/data/projects.js` |
| Email, phone, address, social links, Formspree form ID | `src/sections/Contact/Contact.jsx` |
| Page title, description, share image, search-engine details | `src/seo/site.js` |
| Which things animate | top of `src/components/Motion/Motion.jsx` |

Images go in `src/assets/images/` (logos can live in a `logos/` subfolder, and
`logo` in `projects.js` can also be a link).

## Before you deploy

Create a `.env.production` file with your live address (no trailing slash):

```
VITE_SITE_URL=https://your-domain.com
```

Without it the build skips the canonical link, the share-image address and
`sitemap.xml`. After deploying, submit `https://your-domain.com/sitemap.xml` in
Google Search Console.
