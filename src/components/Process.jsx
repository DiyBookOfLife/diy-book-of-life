const steps = [
  {
    number: "01",
    icon: "◉",
    title: "Discover",
    text: "We learn about your business, goals, audience, and vision.",
  },
  {
    number: "02",
    icon: "▣",
    title: "Plan & Design",
    text: "I design and build a website that fits your business and brand.",
  },
  {
    number: "03",
    icon: "✓",
    title: "Review & Refine",
    text: "You review the site, request revisions, and we perfect the details.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Launch & Grow",
    text: "Your website goes live and your business is ready to grow.",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <div className="process-heading">
          <p>My Process</p>
          <h2>Simple. Clear. Effective.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <div className="process-icon">{step.icon}</div>

              <div className="process-copy">
                <span>{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}