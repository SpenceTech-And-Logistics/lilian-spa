import { CONTACT, PROFILE, ROLES } from "../data/profile";
import portrait from "../assets/images/lilymain.jpg";

function Hero() {
  const [first, ...rest] = PROFILE.name.split(" ");
  const row = [...ROLES, ...ROLES];

  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-l">
          <p className="kicker">{PROFILE.tagline}</p>
          <h1 id="hero-title">
            <span>{first}</span>
            <span className="it">{rest.join(" ")}</span>
          </h1>
          <ul className="chips hero-chips" aria-label="Professional titles">
            {ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <div className="cta">
            <a href="#highlights" className="btn solid">
              Career Highlights
            </a>
            {CONTACT.email && (
              <a href={`mailto:${CONTACT.email}`} className="btn line">
                Email Me
              </a>
            )}
          </div>
        </div>

        <div className="hero-r">
          <div className="arch">
            <img
              src={portrait}
              alt="Portrait of Lilian Wanjiku Manegene, advocate and consultant"
              width="1080"
              height="1009"
              fetchPriority="high"
            />
          </div>
          <div className="seal" aria-hidden="true">
            <b>&ldquo;</b>
            <span>Wanjiku for Wanjiku</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="track">
          {row.concat(row).map((role, i) => (
            <span key={i}>
              {role}
              <em>&#10022;</em>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
