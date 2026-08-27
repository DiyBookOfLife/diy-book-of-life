export default function Services() {
  const services = [
    {
      icon: "◎",
      title: "Business Websites",
      description:
        "Professional, modern websites that showcase your business and convert visitors into customers.",
      price: "Starting at $500",
      className: "teal",
    },
    {
      icon: "🛒",
      title: "E-Commerce Websites",
      description:
        "Secure online stores that are easy to manage and built to sell your products 24/7.",
      price: "Starting at $1,500",
      className: "terracotta",
    },
    {
      icon: "↻",
      title: "Updates & Maintenance",
      description:
        "Keep your website fresh, secure, and running smoothly with ongoing updates and support.",
      price: "Starting at $40",
      className: "teal",
    },
    {
      icon: "</>",
      title: "Custom Solutions",
      description:
        "Need something unique? I build custom features and functionality tailored to your business.",
      price: "Custom Quote",
      className: "gold",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p>What I Do</p>

        <div className="heading-row">
          <span></span>
          <h2>Services</h2>
          <span></span>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className={`service-icon ${service.className}`}>
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#pricing" className={`service-price ${service.className}`}>
              {service.price}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}