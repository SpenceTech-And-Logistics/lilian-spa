import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "highlights", label: "Career Highlights" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Marks the link of the section in the middle of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <a href="#home" className="nav-mark" onClick={close} aria-label="Lilian Manegene, back to top">
        L<span>M</span>
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <i />
        <i />
      </button>
      <nav id="primary-navigation" className={`nav-links${open ? " is-open" : ""}`} aria-label="Main">
        {LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={close}
            aria-current={active === id ? "true" : undefined}
            className={active === id ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
