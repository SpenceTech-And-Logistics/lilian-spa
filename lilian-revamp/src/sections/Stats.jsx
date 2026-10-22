import { createElement } from "react";
import { STATS } from "../data/profile";
import CountUp from "../components/CountUp";

function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="stats-head rv">
        <p className="eyebrow">Impact</p>
        <h2 id="stats-title">Trusted by Businesses &amp; Individuals</h2>
        <p>
          Delivering trusted legal and consulting services with professionalism, integrity, and
          measurable results.
        </p>
      </div>
      <div className="stats-row">
        {STATS.map((stat, i) => (
          <div className="stat rv" key={stat.label} style={{ transitionDelay: `${i * 120}ms` }}>
            {stat.icon && (
              <span className="stat-icon" aria-hidden="true">
                {createElement(stat.icon)}
              </span>
            )}
            <b>
              <CountUp value={stat.value} />
            </b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
