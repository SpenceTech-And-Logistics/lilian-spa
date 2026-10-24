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
          <p className="eyebrow">About</p>
          <h2 id="about-title">Lilian Wanjiku Manegene</h2>
          <p className="lead">
            Lilian Wanjiku Manegene is a distinguished legal and governance
            professional, strategic advisor and institutional reform specialist
            with over 20 years of experience spanning legal practice, public
            policy, legislative reform, institutional governance and corporate
            advisory. An Advocate of the High Court of Kenya, she has built an
            extensive career providing high-level legal and strategic advisory
            services to government institutions, development partners and
            private sector organisations.
          </p>
          <p>
            Her professional experience includes serving as a{" "}
            <b>Legal Consultant under the USAID LISA Programme</b>, contributing
            to governance, regulatory and institutional reforms within
            Kenya&rsquo;s health sector. She has also served as a{" "}
            <b>
              member of the Dispute Resolution Committee of the Kenya National
              Chamber of Commerce and Industry (KNCCI)
            </b>
            , contributing to alternative dispute resolution and commercial
            dispute management.
          </p>
          <p>
            A significant milestone in her professional journey was her
            selection as a finalist and participation in the formal interviews
            for the position of{" "}
            <b>
              Chairperson of Kenya&rsquo;s Independent Electoral and Boundaries
              Commission (IEBC)
            </b>
            .
          </p>
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
            <article
              className="rcard rv"
              key={`${item.title}-${i}`}
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
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
