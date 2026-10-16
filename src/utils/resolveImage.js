// Resolves an image "source" into something an <img> can display.
//
// Supported sources:
//   1. Imported asset      -> import hero from "../assets/images/hero.png"; image: hero
//   2. Assets filename     -> "sha.png" (found anywhere inside src/assets/images/,
//                             including subfolders such as src/assets/images/logos/)
//   3. Link                -> "https://example.com/photo.jpg"
//   4. Public-folder path  -> "/images/photo.jpg"
//
// Requires Vite (import.meta.glob).

const localImages = import.meta.glob(
  "../assets/images/**/*.{png,jpg,jpeg,webp,svg,gif,avif}",
  { eager: true, query: "?url", import: "default" },
);

export const PLACEHOLDER = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e9e0f7"/>
        <stop offset="1" stop-color="#d4c2f0"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="600" fill="url(#g)"/>
    <text x="50%" y="50%" fill="#663399" font-family="sans-serif" font-size="32"
          text-anchor="middle" dominant-baseline="middle">Image unavailable</text>
  </svg>`,
)}`;

const isLink = (value) =>
  /^(https?:)?\/\//i.test(value) ||
  value.startsWith("data:") ||
  value.startsWith("blob:");

// Returns a usable URL, or null when the image can't be found.
export function findImage(source) {
  if (!source || typeof source !== "string") return null;

  // Link, or an already-resolved URL / public-folder path
  if (isLink(source) || source.startsWith("/")) return source;

  // Look the filename up inside src/assets/images (any subfolder)
  const filename = source.split("/").pop();
  const match = Object.entries(localImages).find(([path]) =>
    path.endsWith(`/${filename}`),
  );
  return match ? match[1] : null;
}

// Same as findImage, but falls back to the placeholder.
export function resolveImage(source) {
  return (
    findImage(source) || (typeof source === "string" && source) || PLACEHOLDER
  );
}

// Picks the cover image for an item: `image` first, then the first of `images`.
export function getCoverImage(project) {
  return resolveImage(project.image || project.images?.[0]);
}
