export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark">DBL</div>

        <div className="brand-text">
          <h1>DIY BOOK OF LIFE LLC</h1>
          <p>Create Your Next Chapter.</p>
        </div>
      </div>

      <nav className="main-nav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#pricing">Pricing</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="quote-btn">
        Get a Quote →
      </a>
    </header>
  );
}