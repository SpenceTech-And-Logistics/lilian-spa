import { createElement } from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaHandshake,
  FaLandmark,
} from "react-icons/fa";
import sections from "../../data/projects";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";
import Ornament from "../../components/Ornament/Ornament";
import "./Highlights.css";

// How each group in src/data/projects.js is labelled on its card.
// Key: "<section id>:<group number>"
const CATEGORY = {
  "regulations:0": { label: "Key Act", plural: "Key Acts", icon: FaBalanceScale },
  "regulations:1": { label: "Regulatory Body", plural: "Regulatory Bodies", icon: FaLandmark },
  "consultancy:0": { label: "Major Client", plural: "Major Clients", icon: FaHandshake },
  "cases:0": { label: "Case", plural: "Cases", icon: FaGavel },
};

const FALLBACK = { label: "Highlight", plural: "Highlights", icon: FaBalanceScale };

// One list with everything, each item tagged with its category.
const items = sections.flatMap((section) =>
  section.groups.flatMap((group, groupIndex) => {
    const category = CATEGORY[`${section.id}:${groupIndex}`] ?? FALLBACK;
    return group.items.map((item) => ({
      ...item,
      tag: category.label,
      icon: category.icon,
    }));
  }),
);

// Counts for the legend under the heading.
const legend = Object.values(CATEGORY).map((category) => ({
  ...category,
  count: items.filter((item) => item.tag === category.label).length,
}));

function Highlights() {
  return (
    <section
      className="section highlights"
      id="highlights"
      aria-labelledby="highlights-title"
    >
      <FaBalanceScale className="highlights-watermark" aria-hidden="true" />

      <div className="container">
        <div className="section-head">
          <Ornament />
          <span className="section-eyebrow">My work</span>
          <h2 id="highlights-title">Career Highlights</h2>
          <p>
            Key legislation, the regulatory bodies behind it, major clients and
            cases from a career in law and policy.
          </p>
        </div>

        <ul className="highlight-legend">
          {legend.map((category) => (
            <li key={category.label}>
              {createElement(category.icon, { "aria-hidden": true })}
              <strong>{category.count}</strong>{" "}
              {category.count === 1 ? category.label : category.plural}
            </li>
          ))}
        </ul>

        <LogoCarousel items={items} label="Career highlights" />
      </div>
    </section>
  );
}

export default Highlights;
