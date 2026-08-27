export default function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand">
        <img
          src="/images/dbl-logo.png"
          alt="DIY Book of Life LLC"
          className="brand-logo"
        />
      </a>

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
      <button class="menu-toggle" aria-label="Open navigation menu">
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
