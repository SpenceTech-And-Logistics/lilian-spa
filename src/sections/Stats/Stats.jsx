import { STATS } from "../../data/profile";
import CountUp from "../../components/Motion/CountUp";
import "./Stats.css";

function Stats() {
  return (
    <section className="impact-container" aria-labelledby="stats-title">
      <h2 className="impact-heading" id="stats-title">
        Trusted by Businesses &amp; Individuals
      </h2>

      <p className="impact-subheading">
        Delivering trusted legal and consulting services with professionalism,
        integrity, and measurable results.
      </p>

      <div className="impact-stats">
        {STATS.map((stat) => (
          <div className="impact-stat" key={stat.label}>
            <span className="impact-value">
              <CountUp value={stat.value} />
            </span>
            <span className="impact-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
