import { ROLES, POSITIONS_HELD, OTHER_POSITIONS } from "../data/profile";
import OrgLogo from "../components/OrgLogo/OrgLogo";
import { PLACEHOLDER } from "../utils/resolveImage";
import profile from "../assets/images/lilly.jpg";

function About() {
  return (
    <section className="sec about" id="about" aria-labelledby="about-title">
      <div className="who">
        <div className="who-img rv">
          <img
            src={profile}
            alt="Lilian Wanjiku Manegene"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PLACEHOLDER;
            }}
          />
        </div>
        <div className="who-tx rv">
                    <h2 id="about-title">Who Am I?</h2>
          <p className="lead">
            Through thoughtful advocacy and expert consultancy, I help my clients make informed
            decisions, protect their interests, and achieve their goals.
          </p>
          <p>I am dedicated to building trusted relationships founded on transparency, excellence, and results.</p>
          <ul className="chips">
            {ROLES.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ledger-wrap">
        <p className="eyebrow rv">What I have done</p>
        <h3 className="h3 rv">Positions Held &amp; Consultancy Roles</h3>
        <ol className="ledger">
          {POSITIONS_HELD.map((p, i) => (
            <li className="row rv" key={`${p.title}-${i}`}>
              <span className="row-p">{p.period}</span>
              <div className="row-t">
                <b>{p.title}</b>
                {p.description?.trim() && <span>{p.description}</span>}
              </div>
              <div className="row-l">
                <OrgLogo name={p.title} logo={p.logo} short={p.short} />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="roles-wrap">
        <p className="eyebrow rv">Beyond the profession</p>
        <h3 className="h3 rv">Professional &amp; Leadership Roles</h3>
        <div className="rgrid">
          {OTHER_POSITIONS.map((item, i) => (
            <article className="rcard rv" key={`${item.title}-${i}`} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
              <span className="rtag">{item.period}</span>
              <h4>{item.title}</h4>
              {item.place && <p className="rplace">{item.place}</p>}
              {item.description?.trim() && <p>{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
