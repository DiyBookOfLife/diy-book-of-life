const projects = [
  {
    title: "Erica's DeSignz",
    subtitle: "Beauty & Design Studio",
    description:
      "A sleek, bold website for a creative beauty brand featuring services, gallery content, business information, and a simple inquiry experience.",
    image: "/images/ericas-designz.png",
    link: "https://ericas-designz.vercel.app/",
    features: ["Responsive Design", "Photo Gallery", "Inquiry Form"],
  },
  {
    title: "Toni Thomas Portfolio",
    subtitle: "Software Engineer | IT Professional",
    description:
      "A professional portfolio showcasing software engineering, technical experience, projects, and a versatile background across development and IT.",
    image: "/images/toni-portfolio.png",
    link: "https://toni-thomas.vercel.app/",
    features: ["Modern UI", "Project Showcase", "Responsive Design"],
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <img
        src="/images/circuit-art.png"
        alt=""
        className="portfolio-circuit portfolio-circuit-left"
      />

      <img
        src="/images/circuit-art.png"
        alt=""
        className="portfolio-circuit portfolio-circuit-right"
      />

      <div className="portfolio-container">
        <div className="portfolio-heading">
          <p>Featured Work</p>

          <div className="portfolio-heading-row">
            <span></span>
            <h2>Recent Projects</h2>
            <span></span>
          </div>

          <p className="portfolio-intro">
            Real websites designed to help businesses and professionals build
            a stronger online presence.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual">
                <div className="browser-frame">
                  <div className="browser-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <img src={project.image} alt={`${project.title} website`} />
                </div>
              </div>

              <div className="project-content">
                <p className="project-label">Web Design</p>

                <h3>{project.title}</h3>

                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>✓ {feature}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-button"
                >
                  View Live Site →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}