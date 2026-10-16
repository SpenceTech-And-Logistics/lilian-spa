import OrgLogo from "../OrgLogo/OrgLogo";
import "./ProjectCard.css";

function ProjectCard({ item }) {
  const showSubtitle = item.subtitle && item.subtitle !== item.title;

  return (
    <article className="project-card">
      <div className="project-card-logo">
        <OrgLogo
          name={item.subtitle && item.short ? item.subtitle : item.title}
          logo={item.logo}
          short={item.short}
        />
      </div>

      <div className="project-card-body">
        {item.tag && <span className="project-card-tag">{item.tag}</span>}
        <h4>{item.title}</h4>
        {showSubtitle && <p>{item.subtitle}</p>}
      </div>
    </article>
  );
}

export default ProjectCard;
