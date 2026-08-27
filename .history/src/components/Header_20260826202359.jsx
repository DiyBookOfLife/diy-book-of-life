import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#home" className="brand" onClick={closeMenu}>
        <img
          src="/images/dbl-logo.png"
          alt="DIY Book of Life LLC"
          className="brand-logo"
        />
      </a>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="active" onClick={closeMenu}>
          Home
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>

        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>

        <a href="#process" onClick={closeMenu}>
          Process
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-quote"
          onClick={closeMenu}
        >
          Get a Quote →
        </a>
      </nav>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a href="#contact" className="quote-btn">
        Get a Quote →
      </a>
    </header>
  );
}