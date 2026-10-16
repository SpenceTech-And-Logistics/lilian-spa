import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-links" aria-label="Footer">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <p>
        &copy; {new Date().getFullYear()} Lilian Wanjiku Manegene. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
