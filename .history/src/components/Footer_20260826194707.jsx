export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a href="#home" className="footer-brand">
          <img
            src="/images/dbl-logo.png"
            alt="DIY Book of Life LLC"
          />
        </a>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="mailto:diybookoflife@gmail.com"
            aria-label="Email"
          >
            ✉
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 DIY Book of Life LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}