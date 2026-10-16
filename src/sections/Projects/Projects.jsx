import { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import sections from "../../data/projects";
import OrgLogo from "../../components/OrgLogo/OrgLogo";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Flatten each tab's groups into one list, remembering the group as a tag.
const tabs = sections.map((section) => ({
  id: section.id,
  label: section.label,
  intro: section.intro,
  items: section.groups.flatMap((group) =>
    group.items.map((item) => ({ ...item, tag: group.title })),
  ),
}));

function Slide({ item }) {
  const showSubtitle = item.subtitle?.trim() && item.subtitle !== item.title;

  return (
    <article className="project-slide">
      <div className="project-slide-logo">
        <OrgLogo
          name={item.subtitle && item.short ? item.subtitle : item.title}
          logo={item.logo}
          short={item.short}
        />
      </div>
      <div className="project-slide-body">
        {item.tag && <span className="project-slide-tag">{item.tag}</span>}
        <h3>{item.title}</h3>
        {showSubtitle && <p>{item.subtitle}</p>}
      </div>
    </article>
  );
}

function Projects() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const [showAll, setShowAll] = useState(false);
  const [playing, setPlaying] = useState(!prefersReducedMotion());
  const swiperRef = useRef(null);

  const tab = useMemo(
    () => tabs.find((t) => t.id === activeId) ?? tabs[0],
    [activeId],
  );

  const rotates = tab.items.length > 3;
  const canLoop = tab.items.length >= 6;

  const togglePlay = () => {
    const autoplay = swiperRef.current?.autoplay;
    if (!autoplay) return;
    if (playing) autoplay.stop();
    else autoplay.start();
    setPlaying(!playing);
  };

  const pickTab = (id) => {
    setActiveId(id);
    setPlaying(!prefersReducedMotion());
  };

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
                onClick={() => pickTab(t.id)}
              >
                {t.label} <span className="filter-count">{t.items.length}</span>
              </button>
            ))}
          </div>

          <div className="projects-controls">
            {!showAll && rotates && (
              <button
                type="button"
                className="projects-control"
                onClick={togglePlay}
                aria-label={playing ? "Pause the carousel" : "Play the carousel"}
              >
                {playing ? "❚❚ Pause" : "▶ Play"}
              </button>
            )}
            <button
              type="button"
              className="projects-control"
              onClick={() => setShowAll((value) => !value)}
              aria-pressed={showAll}
            >
              {showAll ? "Show carousel" : `Show all ${tab.items.length}`}
            </button>
          </div>
        </div>

        <p className="projects-intro">{tab.intro}</p>

        {showAll ? (
          <div className="projects-grid">
            {tab.items.map((item, index) => (
              <ProjectCard key={`${item.title}-${index}`} item={item} />
            ))}
          </div>
        ) : (
          <div className="projects-carousel">
            <Swiper
              // A new carousel for each tab, so it starts from the first slide
              key={tab.id}
              modules={[A11y, Autoplay, Keyboard, Navigation, Pagination]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                700: { slidesPerView: 2 },
                1000: { slidesPerView: 3 },
              }}
              loop={canLoop}
              rewind={rotates && !canLoop}
              centerInsufficientSlides
              grabCursor
              keyboard={{ enabled: true }}
              navigation={rotates}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={
                rotates && !prefersReducedMotion()
                  ? {
                      delay: 3200,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
                  : false
              }
              a11y={{
                containerMessage: `${tab.label} carousel`,
                prevSlideMessage: "Previous project",
                nextSlideMessage: "Next project",
              }}
            >
              {tab.items.map((item, index) => (
                <SwiperSlide key={`${item.title}-${index}`}>
                  <Slide item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
