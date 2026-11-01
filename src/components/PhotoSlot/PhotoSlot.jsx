import { findImage } from "../../utils/resolveImage";

// Shows the photo when `source` points at a real image, otherwise a
// legal-themed placeholder design. Set the sources in src/data/photos.js.
//
//   variant "portrait" -> tall, for the hero arch (4:5)
//   variant "about"    -> landscape (4:3)

const GOLD = "#d9b44a";
const GOLD_DK = "#b8860b";
const PURPLE = "#663399";
const DEEP = "#2d1457";

function Portrait() {
  return (
    <svg className="photo-ph" viewBox="0 0 480 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Scales of justice illustration">
      <defs>
        <linearGradient id="phpBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4effb" />
          <stop offset="1" stopColor="#e2d6f3" />
        </linearGradient>
        <linearGradient id="phpGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2d276" />
          <stop offset="1" stopColor={GOLD_DK} />
        </linearGradient>
      </defs>
      <rect width="480" height="600" fill="url(#phpBg)" />
      <circle className="ph-spin" cx="240" cy="270" r="190" fill="none" stroke={GOLD} strokeOpacity=".6" strokeWidth="2" strokeDasharray="3 12" strokeLinecap="round" />
      <circle className="ph-spin ph-rev" cx="240" cy="270" r="140" fill="none" stroke={PURPLE} strokeOpacity=".22" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
      <g fill={GOLD_DK}>
        <circle className="ph-twinkle" style={{ animationDelay: "0s" }} cx="92" cy="130" r="4" />
        <circle className="ph-twinkle" style={{ animationDelay: "0.9s" }} cx="396" cy="150" r="3.5" />
        <circle className="ph-twinkle" style={{ animationDelay: "1.7s" }} cx="150" cy="470" r="3" />
        <circle className="ph-twinkle" style={{ animationDelay: "2.4s" }} cx="360" cy="440" r="4" />
      </g>
      {/* columns */}
      <g className="ph-col" fill={PURPLE} fillOpacity=".1">
        <rect x="40" y="250" width="40" height="300" rx="4" />
        <rect x="400" y="250" width="40" height="300" rx="4" />
        <rect x="30" y="236" width="60" height="16" rx="3" />
        <rect x="390" y="236" width="60" height="16" rx="3" />
      </g>
      {/* scales */}
      <g>
        <rect x="233" y="190" width="14" height="318" rx="4" fill={DEEP} />
        <circle className="ph-glow" cx="240" cy="170" r="16" fill="url(#phpGold)" />
        <g className="ph-beam">
          <rect x="100" y="196" width="280" height="10" rx="5" fill={DEEP} />
          <circle cx="100" cy="201" r="9" fill="url(#phpGold)" />
          <circle cx="380" cy="201" r="9" fill="url(#phpGold)" />
          <g className="ph-pan ph-pan-l">
            <path d="M100 210 L56 330 M100 210 L144 330" stroke={GOLD_DK} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M44 330 H156 Q100 410 44 330 Z" fill="url(#phpGold)" />
          </g>
          <g className="ph-pan ph-pan-r">
            <path d="M380 210 L336 330 M380 210 L424 330" stroke={GOLD_DK} strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M324 330 H436 Q380 410 324 330 Z" fill="url(#phpGold)" />
          </g>
        </g>
        <path d="M200 508 H280 L296 536 H184 Z" fill={DEEP} />
        <rect x="160" y="536" width="160" height="16" rx="4" fill={PURPLE} />
        <rect x="136" y="552" width="208" height="14" rx="4" fill={DEEP} />
      </g>
      <text className="ph-fade" x="240" y="92" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" letterSpacing="7" fill={PURPLE} fillOpacity=".7">LAW · JUSTICE</text>
    </svg>
  );
}

function About() {
  return (
    <svg className="photo-ph" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Courthouse illustration">
      <defs>
        <linearGradient id="phaBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#efe9f8" />
          <stop offset="1" stopColor="#d9cbee" />
        </linearGradient>
        <linearGradient id="phaGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2d276" />
          <stop offset="1" stopColor={GOLD_DK} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#phaBg)" />
      <circle className="ph-spin" cx="200" cy="120" r="96" fill="none" stroke={GOLD} strokeOpacity=".7" strokeWidth="2" strokeDasharray="3 11" strokeLinecap="round" />
      {/* pediment */}
      <g className="ph-drop"><polygon points="60,112 200,36 340,112" fill={DEEP} />
      <polygon points="92,106 200,48 308,106" fill="none" stroke="url(#phaGold)" strokeWidth="3" />
      <circle className="ph-glow" cx="200" cy="84" r="13" fill="url(#phaGold)" /></g>
      {/* entablature */}
      <rect className="ph-drop" x="56" y="112" width="288" height="14" fill={PURPLE} />
      {/* columns */}
      <g fill="#ffffff" stroke={PURPLE} strokeWidth="2">
        {[84, 138, 192, 246, 300].map((x, i) => (
          <g key={x} className="ph-rise" style={{ animationDelay: `${0.25 + i * 0.14}s` }}>
            <rect x={x} y="132" width="22" height="104" rx="2" />
            <rect x={x - 4} y="126" width="30" height="8" rx="2" fill={PURPLE} stroke="none" />
            <rect x={x - 4} y="234" width="30" height="8" rx="2" fill={PURPLE} stroke="none" />
          </g>
        ))}
      </g>
      {/* steps */}
      <g className="ph-fade" style={{ animationDelay: "1s" }}>
        <rect x="64" y="242" width="272" height="12" fill={PURPLE} />
        <rect x="48" y="254" width="304" height="12" fill={DEEP} />
        <rect x="32" y="266" width="336" height="14" fill={PURPLE} fillOpacity=".85" />
      </g>
    </svg>
  );
}

function PhotoSlot({ source, alt, variant = "portrait", width, height, priority = false }) {
  const url = findImage(source);
  if (url) {
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
  return variant === "about" ? <About /> : <Portrait />;
}

export default PhotoSlot;
