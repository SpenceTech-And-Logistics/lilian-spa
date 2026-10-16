import { PLACEHOLDER, resolveImage } from "../../utils/resolveImage";
import { ROLES, POSITIONS_HELD, OTHER_POSITIONS } from "../../data/profile";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";
import lilly from "../../assets/images/lilly.jpg";
import "./About.css";

// Profile photo: an imported image, a filename in src/assets/images/, or a link.
const PROFILE_IMAGE = lilly;

function TimelineSection({ eyebrow, title, items }) {
  return (
    <div className="timeline-block">
      <div className="section-heading">
        <span className="section-eyebrow">{eyebrow}</span>
        <h3 className="section-title">{title}</h3>
      </div>

      <div className="cards-grid">
        {items.map((item, index) => (
          <article className="info-card" key={`${item.title}-${index}`}>
            <span className="card-year">{item.period}</span>
            <h4>{item.title}</h4>
            {item.place && <p className="card-place">{item.place}</p>}
            {item.description?.trim() && <p>{item.description}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="who-grid">
          <div className="who-image">
            <img
              src={resolveImage(PROFILE_IMAGE)}
              alt="Lilian Wanjiku Manegene"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = PLACEHOLDER;
              }}
            />
          </div>

          <div className="who-text">
            <span className="section-eyebrow">Hello, I'm Lilian</span>
            <h2 id="about-title">Who Am I?</h2>

            <p>
              Through thoughtful advocacy and expert consultancy,{" "}
              <span className="highlight">Lilian Wanjiku</span> empowers clients
              to make informed decisions, protect their interests, and achieve
              their goals.
            </p>

            <p>
              She is dedicated to building trusted relationships founded on
              transparency, excellence, and results.
            </p>

            <ul className="who-roles">
              {ROLES.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="timeline-block">
          <div className="section-heading">
            <span className="section-eyebrow">What I have done</span>
            <h3 className="section-title">Positions Held &amp; Consultancy Roles</h3>
          </div>

          <LogoCarousel
            items={POSITIONS_HELD.map((position) => ({
              ...position,
              tag: position.period,
              subtitle: position.description,
            }))}
            label="Positions held"
          />
        </div>

        <TimelineSection
          eyebrow="Beyond the profession"
          title="Professional & Leadership Roles"
          items={OTHER_POSITIONS}
        />
      </div>
    </section>
  );
}

export default About;
