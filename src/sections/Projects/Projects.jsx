import { useState } from "react";
import sections from "../../data/projects";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";
import "./Projects.css";

// Flatten each tab's groups into one list, remembering the group as a tag.
const tabs = sections.map((section) => ({
  id: section.id,
  label: section.label,
  intro: section.intro,
  items: section.groups.flatMap((group) =>
    group.items.map((item) => ({ ...item, tag: group.title })),
  ),
}));

function Projects() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section
      className="section projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">My work</span>
          <h2 id="projects-title">Regulations, Consultancy &amp; Cases</h2>
          <p>
            The Acts and regulatory bodies, the clients and the matters behind
            my work.
          </p>
        </div>

        <div className="projects-toolbar">
          <div className="filter-buttons" role="group" aria-label="Choose a category">
            {tabs.map((t) => (
              <button
                type="button"
                key={t.id}
                className={t.id === activeId ? "active" : ""}
                aria-pressed={t.id === activeId}
                onClick={() => setActiveId(t.id)}
              >
                {t.label} <span className="filter-count">{t.items.length}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="projects-intro">{tab.intro}</p>

        {/* key: a fresh carousel (and Show all state) for each tab */}
        <LogoCarousel key={tab.id} items={tab.items} label={tab.label} />
      </div>
    </section>
  );
}

export default Projects;
