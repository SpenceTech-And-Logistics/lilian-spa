import { useState } from "react";
import { findImage } from "../../utils/resolveImage";

const STOP_WORDS = new Set(["of", "and", "the", "for", "&"]);

function initialsFrom(name = "") {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((word) => word && !STOP_WORDS.has(word.toLowerCase()))
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join("");
}

// A stable hue (0-359) per name, so each badge keeps its own tint.
function hueFrom(name = "") {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) % 360;
  }
  return hash;
}

function OrgLogo({ name, logo, short }) {
  const [failed, setFailed] = useState(false);
  const src = findImage(logo);

  if (src && !failed) {
    return (
      <img
        className="org-logo-img"
        src={src}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    );
  }

  const label = short || initialsFrom(name);

  return (
    <span
      className={`org-logo-badge ${label.length > 4 ? "is-long" : ""}`}
      style={{ "--hue": hueFrom(name) }}
      role="img"
      aria-label={name}
    >
      {label}
    </span>
  );
}

export default OrgLogo;
