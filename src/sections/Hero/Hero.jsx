import { FaBalanceScale, FaGavel, FaLandmark } from "react-icons/fa";
import { CONTACT, PROFILE } from "../../data/profile";
import lilly from "../../assets/images/lilymain.jpg";
import "./Hero.css";

// Moves the floating icons a little as the pointer moves (mouse only).
function trackPointer(e) {
  if (e.pointerType === "touch") return;
  const box = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - box.left) / box.width - 0.5;
  const y = (e.clientY - box.top) / box.height - 0.5;
  e.currentTarget.style.setProperty("--px", x.toFixed(3));
  e.currentTarget.style.setProperty("--py", y.toFixed(3));
}

function resetPointer(e) {
  e.currentTarget.style.setProperty("--px", "0");
  e.currentTarget.style.setProperty("--py", "0");
}

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
    >
      {/* Large faint scales behind the text */}
      <FaBalanceScale className="hero-watermark" aria-hidden="true" />

      <div className="hero-content">
        <h1 id="hero-title">{PROFILE.name}</h1>
        <h2>{PROFILE.heroTitle}</h2>
        <p>{PROFILE.heroText}</p>
        <div className="hero-actions">
          <a href="#highlights" className="hero-button">
            Career Highlights
          </a>
          {CONTACT.email && (
            <a
              href={`mailto:${CONTACT.email}`}
              className="hero-button hero-button-outline"
            >
              Email Me
            </a>
          )}
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-stage">
          <img
            src={lilly}
            alt="Portrait of Lilian Wanjiku Manegene, advocate and consultant"
            width="1080"
            height="1009"
            fetchPriority="high"
          />

          {/* Floating glass badges at different depths */}
          <span className="orb orb-scales" aria-hidden="true">
            <FaBalanceScale />
          </span>
          <span className="orb orb-gavel" aria-hidden="true">
            <FaGavel />
          </span>
          <span className="orb orb-landmark" aria-hidden="true">
            <FaLandmark />
          </span>

          {/* A slowly spinning 3D gold medallion */}
          <div className="medallion" aria-hidden="true">
            <span className="medal-edge" style={{ "--i": 0 }} />
            <span className="medal-edge" style={{ "--i": 1 }} />
            <span className="medal-edge" style={{ "--i": 2 }} />
            <span className="medal-edge" style={{ "--i": 3 }} />
            <span className="medal-edge" style={{ "--i": 4 }} />
            <span className="medal-face medal-front">
              <FaBalanceScale />
            </span>
            <span className="medal-face medal-back">
              <FaGavel />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
