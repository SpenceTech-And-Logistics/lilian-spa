import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

/* ------------------------------------------------------------------ */
/*  EDIT YOUR CONTENT HERE                                             */
/* ------------------------------------------------------------------ */

// Your Formspree form ID (from https://formspree.io/f/mjygazve).
const FORMSPREE_FORM_ID = "mjygazve";

const CONTACT_DETAILS = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "manegenel@gmail.com",
    href: "mailto:manegenel@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "(+254) 722 809084",
    href: "tel:+254722809084",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value: "Nairobi, Kenya",
  },
];

const SOCIALS = [
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "https://www.facebook.com/media/set/?set=a.815673175140432&type=3",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter",
    href: "",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "",
  },
];

/* ------------------------------------------------------------------ */

function ContactForm({ onReset }) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <div className="form-success" role="status">
        <span className="success-icon" aria-hidden="true">
          ✓
        </span>
        <h3>Message sent</h3>
        <p>Thank you for reaching out. I will get back to you soon.</p>
        <button type="button" onClick={onReset}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send a Message</h3>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            required
          />
          <ValidationError
            className="field-error"
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            required
          />
          <ValidationError
            className="field-error"
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="How can we help?"
          required
        />
        <ValidationError
          className="field-error"
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Write your message here..."
          required
        ></textarea>
        <ValidationError
          className="field-error"
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {/* Spam trap: hidden from people, visible to bots */}
      <input
        className="hp-field"
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Form-level errors (network problems, rate limits, etc.) */}
      <ValidationError className="form-alert" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Contact() {
  // Changing the key remounts the form, which clears the success state.
  const [formKey, setFormKey] = useState(0);
  const socials = SOCIALS.filter((social) => social.href);

  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Contact</span>
          <h2 id="contact-title">Get in Touch</h2>
          <p>
            Have a legal or business question? Send a message and I will get
            back to you as soon as I can.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {CONTACT_DETAILS.map(({ icon, label, value, href }) => (
              <div className="contact-card" key={label}>
                <span className="info-icon" aria-hidden="true">
                  {icon}
                </span>
                <div>
                  <h3>{label}</h3>
                  {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                </div>
              </div>
            ))}

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
                    {icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="form-card">
            <ContactForm
              key={formKey}
              onReset={() => setFormKey((key) => key + 1)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
