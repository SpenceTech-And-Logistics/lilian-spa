import { createElement, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import OrgLogo from "../OrgLogo/OrgLogo";
import ProjectCard from "../ProjectCard/ProjectCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./LogoCarousel.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Slide({ item }) {
  const showSubtitle = item.subtitle?.trim() && item.subtitle !== item.title;

  return (
    <article className="logo-slide">
      <div className="logo-slide-logo">
        <OrgLogo
          name={item.subtitle && item.short ? item.subtitle : item.title}
          logo={item.logo}
          short={item.short}
        />
      </div>
      <div className="logo-slide-body">
        {item.tag && (
          <span className="logo-slide-tag">
            {item.icon && createElement(item.icon, { "aria-hidden": true })}
            {item.tag}
          </span>
        )}
        <h3>{item.title}</h3>
        {showSubtitle && <p>{item.subtitle}</p>}
      </div>
    </article>
  );
}

/*
  A rotating carousel of logo cards, with a Pause button and a "Show all"
  grid. Each item: { title, subtitle, logo, short, tag }.
  Used by both the Projects and the About sections.
*/
function LogoCarousel({ items, label }) {
  const [showAll, setShowAll] = useState(false);
  const [playing, setPlaying] = useState(!prefersReducedMotion());
  const swiperRef = useRef(null);

  const rotates = items.length > 3;
  const canLoop = items.length >= 6;

  const togglePlay = () => {
    const autoplay = swiperRef.current?.autoplay;
    if (!autoplay) return;
    if (playing) autoplay.stop();
    else autoplay.start();
    setPlaying(!playing);
  };

  return (
    <div className="logo-carousel-wrap">
      <div className="carousel-bar">
        {!showAll && rotates && (
          <button
            type="button"
            className="carousel-control"
            onClick={togglePlay}
            aria-label={playing ? "Pause the carousel" : "Play the carousel"}
          >
            {playing ? "❚❚ Pause" : "▶ Play"}
          </button>
        )}
        <button
          type="button"
          className="carousel-control"
          onClick={() => setShowAll((value) => !value)}
          aria-pressed={showAll}
        >
          {showAll ? "Show carousel" : `Show all ${items.length}`}
        </button>
      </div>

      {showAll ? (
        <div className="logo-grid">
          {items.map((item, index) => (
            <ProjectCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>
      ) : (
        <div className="logo-carousel">
          <Swiper
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
              containerMessage: `${label} carousel`,
              prevSlideMessage: "Previous",
              nextSlideMessage: "Next",
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={`${item.title}-${index}`}>
                <Slide item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default LogoCarousel;
