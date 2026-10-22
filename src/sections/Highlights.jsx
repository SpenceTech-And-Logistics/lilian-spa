import { useState } from "react";
import { FaBalanceScale, FaGavel, FaHandshake, FaLandmark } from "react-icons/fa";
import sections from "../data/projects";
import OrgLogo from "../components/OrgLogo/OrgLogo";

// How each group in src/data/projects.js is labelled. Key: "<section id>:<group number>"
const CATEGORY = {
  "regulations:0": { label: "Key Act", plural: "Key Acts", icon: FaBalanceScale },
  "regulations:1": { label: "Regulatory Body", plural: "Regulatory Bodies", icon: FaLandmark },
  "consultancy:0": { label: "Major Client", plural: "Major Clients", icon: FaHandshake },
  "cases:0": { label: "Case", plural: "Cases", icon: FaGavel },
};
const FALLBACK = { label: "Highlight", plural: "Highlights", icon: FaBalanceScale };

const items = sections.flatMap((section) =>
  section.groups.flatMap((group, groupIndex) => {
    const category = CATEGORY[`${section.id}:${groupIndex}`] ?? FALLBACK;
    return group.items.map((item) => ({ ...item, tag: category.label }));
  }),
);

const tabs = [
  { key: "All", label: "All" },
  ...Object.values(CATEGORY).map((c) => ({
    key: c.label,
    label: c.plural,
    icon: c.icon,
  })),
];

function Highlights() {
  const [tab, setTab] = useState("All");
  const shown = tab === "All" ? items : items.filter((i) => i.tag === tab);

  return (
    <section className="sec hl" id="highlights" aria-labelledby="highlights-title">
      <div className="hl-head rv">
        <p className="eyebrow">My work</p>
        <h2 id="highlights-title">Career Highlights</h2>
        <p>
          Key legislation, the regulatory bodies behind it, major clients and cases from a career in
          law and policy.
        </p>
      </div>

      <div className="tabs rv" role="tablist" aria-label="Filter highlights">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            className={tab === t.key ? "on" : ""}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="hgrid" key={tab}>
        {shown.map((item, i) => (
          <article className="hcard" key={`${item.title}-${i}`} style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}>
            <div className="hlogo">
              <OrgLogo name={item.title} logo={item.logo} short={item.short} />
            </div>
            <div className="hbody">
              <span className="htag">{item.tag}</span>
              <h3>{item.title.trim()}</h3>
              {item.subtitle?.trim() && <p>{item.subtitle.trim()}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
