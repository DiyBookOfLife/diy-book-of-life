export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-circuit contact-circuit-left"></div>
      <div className="contact-circuit contact-circuit-right"></div>

      <div className="contact-container">
        <div className="contact-copy">
          <p className="contact-eyebrow">Let's Build Something Great</p>

          <h2>
            Ready to Create
            <br />
            <span>Your Next Chapter?</span>
          </h2>

          <p>
            Tell me about your business and what you want your website to do.
            I’ll help you figure out the right direction.
          </p>

          <div className="contact-email">
            <span>✉</span>

            <div>
              <small>Or email me directly</small>

              <a href="mailto:diybookoflife@gmail.com">
                diybookoflife@gmail.com
              </a>

              <p>I usually respond within 24 hours.</p>
            </div>
          </div>
        </div>

        <form
          className="quote-form"
          action="mailto:diybookoflife@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name *" required />

            <input
              type="text"
              name="business"
              placeholder="Business Name"
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
            />

            <input type="tel" name="phone" placeholder="Phone (Optional)" />
          </div>

          <div className="form-row">
            <select name="websiteType" defaultValue="">
              <option value="" disabled>
                Type of Website
              </option>

              <option>Starter Website</option>
              <option>Standard Website</option>
              <option>Business Website</option>
              <option>E-Commerce Website</option>
              <option>Custom Solution</option>
            </select>

            <select name="budget" defaultValue="">
              <option value="" disabled>
                Budget Range
              </option>

              <option>$500 – $749</option>
              <option>$750 – $999</option>
              <option>$1,000 – $1,499</option>
              <option>$1,500+</option>
            </select>
          </div>

          <textarea
            name="project"
            placeholder="Tell me about your project..."
            rows="5"
          ></textarea>

          <button type="submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}