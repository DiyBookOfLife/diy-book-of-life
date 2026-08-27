export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        src="/images/circuit-art.png"
        alt=""
        className="hero-circuit"
      />

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">
            Designing Websites. Building Futures.
          </p>

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
              <span className="feature-icon">◈</span>
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
          <img
            src="/images/hero-office.png"
            alt="Professional website design displayed on laptop and mobile devices"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}