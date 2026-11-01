import { findImage } from "../../utils/resolveImage";

// Shows a photo only when `source` (set in src/data/photos.js) points at a real
// image. With no photo set it renders nothing, and the page shows just the text.
function PhotoSlot({ source, alt, width, height, priority = false }) {
  const url = findImage(source);
  if (!url) return null;
  return (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}

export const hasPhoto = (source) => Boolean(findImage(source));

export default PhotoSlot;
