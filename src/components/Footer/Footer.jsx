import { createElement } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { CONTACT, SOCIALS } from "../../data/profile";
import "./Footer.css";

function Footer() {
  const socials = SOCIALS.filter((social) => social.href);

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Lilian Manegene</p>
        <p className="footer-tagline">
          Advocate &middot; Consultant &middot; Wanjiku for Wanjiku
        </p>

        {socials.length > 0 && (
          <div className="social-links">
            {socials.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {createElement(icon)}
              </a>
            ))}
          </div>
        )}

        <ul className="footer-contact">
          {CONTACT.email && (
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
          )}
          {CONTACT.phone && (
            <li>
              <FaPhoneAlt aria-hidden="true" />
              <a href={`tel:${CONTACT.phoneLink || CONTACT.phone}`}>
                {CONTACT.phone}
              </a>
            </li>
          )}
          {CONTACT.location && (
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{CONTACT.location}</span>
            </li>
          )}
        </ul>

        <nav className="footer-links" aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#highlights">Career Highlights</a>
        </nav>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Lilian Manegene. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
