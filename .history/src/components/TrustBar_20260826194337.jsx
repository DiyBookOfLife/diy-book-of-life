const trustItems = [
  {
    icon: "✓",
    title: "100% Custom Built",
    text: "No cookie-cutter templates. Every site is tailored to your business.",
  },
  {
    icon: "◷",
    title: "On Time, Every Time",
    text: "Clear timelines, dependable communication, and consistent updates.",
  },
  {
    icon: "☏",
    title: "Direct Communication",
    text: "Work directly with me from the first conversation through launch.",
  },
  {
    icon: "☆",
    title: "Client Satisfaction",
    text: "Your success, experience, and final result are always the priority.",
  },
];

export default function TrustBar() {
  return (
    <section className="trust-section">
      <div className="trust-grid">
        {trustItems.map((item) => (
          <div className="trust-item" key={item.title}>
            <div className="trust-icon">{item.icon}</div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}