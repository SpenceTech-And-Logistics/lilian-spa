import { PROFILE } from "../../data/profile";
import lilly from "../../assets/images/lilymain.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">{PROFILE.name}</h1>
        <h2>{PROFILE.heroTitle}</h2>
        <p>{PROFILE.heroText}</p>
        <div className="hero-actions">
          <a href="#projects" className="hero-button">
            Explore Projects
          </a>
          <a href="#contact" className="hero-button hero-button-outline">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={lilly}
          alt="Portrait of Lilian Wanjiku Manegene, advocate and consultant"
          width="1080"
          height="1009"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

export default Hero;
