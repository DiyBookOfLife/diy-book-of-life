export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Designing Websites. Building Futures.</p>

          <h2>
            Your Business.
            <br />
            Your Story.
            <br />
            <span>Your Website.</span>
          </h2>

          <p className="hero-description">
            Custom, professional websites designed to help small businesses
            stand out, build trust, and grow online.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              View My Work →
            </a>

            <a href="#contact" className="btn btn-secondary">
              Get a Quote →
            </a>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">◉</span>
              <div>
                <strong>Modern Design</strong>
                <small>Built to impress</small>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">▣</span>
              <div>
                <strong>Responsive</strong>
                <small>Looks perfect everywhere</small>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">↗</span>
              <div>
                <strong>Results Driven</strong>
                <small>Built for your business goals</small>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">◇</span>
              <div>
                <strong>Reliable & Secure</strong>
                <small>Performance you can trust</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="circuit-pattern"></div>

          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-logo">DBL</div>

              <p className="screen-small">Websites That</p>
              <h3>Tell Your Story.</h3>
              <h4>Grow Your Business.</h4>

              <div className="book-art">⌄</div>
            </div>
          </div>

          <div className="phone">
            <div className="phone-screen">
              <div className="phone-logo">DBL</div>
              <p>Designing</p>
              <p>Websites.</p>
              <strong>Building</strong>
              <strong>Futures.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}