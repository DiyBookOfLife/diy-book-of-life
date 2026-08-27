const packages = [
  {
    name: "Starter",
    price: "$500",
    subtitle: "1 Page Website",
    features: [
      "Custom Design",
      "Responsive Layout",
      "Contact Form",
      "Basic SEO",
      "2 Rounds of Revisions",
    ],
  },
  {
    name: "Standard",
    price: "$750",
    subtitle: "Up to 3 Pages",
    popular: true,
    features: [
      "Everything in Starter",
      "Expanded Content",
      "Photo Gallery",
      "More Content Space",
      "3 Rounds of Revisions",
    ],
  },
  {
    name: "Business",
    price: "$1,000",
    subtitle: "Up to 5 Pages",
    features: [
      "Everything in Standard",
      "Larger Gallery",
      "More Features",
      "Expanded Business Content",
      "3 Rounds of Revisions",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-column">
          <div className="pricing-heading">
            <p>Website Packages</p>
            <h2>Simple Pricing. Professional Results.</h2>
          </div>

          <div className="pricing-grid">
            {packages.map((pkg) => (
              <article
                className={`pricing-card ${pkg.popular ? "popular" : ""}`}
                key={pkg.name}
              >
                {pkg.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}

                <p className="package-name">{pkg.name}</p>
                <h3>{pkg.price}</h3>
                <p className="package-subtitle">{pkg.subtitle}</p>

                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <a href="#contact" className="pricing-button">
                  Get Started
                </a>
              </article>
            ))}

            <article className="pricing-card ecommerce-card">
              <div className="ecommerce-icon">🛒</div>

              <p className="package-name">E-Commerce Website</p>

              <span className="starting-label">Starting at</span>

              <h3>$1,500</h3>

              <p className="ecommerce-description">
                Secure online stores built to sell products professionally
                with checkout and payment integration.
              </p>

              <a href="#contact" className="pricing-button ecommerce-button">
                Learn More
              </a>
            </article>
          </div>

          <div className="pricing-details">
            <span>Extra Pages: $100 each</span>
            <span>Updates: $40+ as needed</span>
            <span>Maintenance: $50/month</span>
            <span>Hosting after Year 1: $60/year</span>
          </div>
        </div>
      </div>
    </section>
  );
}