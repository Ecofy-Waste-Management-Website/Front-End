import { useState } from "react";

const navLinks = ["Home", "About", "Services", "Contact us", "Blog"];
const infoCards = [
  {
    icon: "target",
    title: "MISSION",
    text: "To digitalize private waste collection services through a smart, web-based platform that ensures timely pickup, transparent operations, and seamless communication.",
  },
  {
    icon: "eye",
    title: "VISION",
    text: "To foster a cleaner, healthier environment by transforming traditional waste collection into a better ecosystem.",
  },
  {
    icon: "users",
    title: "WHO ARE WE",
    text: "Ecofy is a smart, web-based waste management platform designed to modernize private waste collection services.",
  },
  {
    icon: "help",
    title: "WHY US",
    text: "We provide eco-friendly, zero-waste solutions and reliable, custom-tailored collection services to ensure full regulatory compliance.",
  },
];

const reasonCards = [
  {
    title: "Education",
    subtitle: "End-user Training",
    text: "Practical guides and support that make sorting and scheduling easy.",
  },
  {
    title: "HyperEfficient",
    subtitle: "Pickup Process",
    text: "Route planning and clear timelines for fewer delays and missed pickups.",
  },
  {
    title: "Smart",
    subtitle: "Experience",
    text: "A fast dashboard with live status and service updates in one place.",
  },
  {
    title: "Best",
    subtitle: "Modern Efficiency",
    text: "Reliable operations designed for households and growing businesses.",
  },
];

const testimonials = [
  {
    name: "Mary Ann",
    message:
      "Ecofy has completely changed our trash routine. The app is so easy to use and the team always arrives on schedule.",
  },
  {
    name: "Napoleon",
    message:
      "Ecofy has simplified our disposal flow this quarter. The pickup consistency and clear updates make managing waste stress-free.",
  },
  {
    name: "Stephen John",
    message:
      "I never imagined eco-friendly waste services could be this smooth. The app notifications and support team are excellent.",
  },
  {
    name: "Donald Mbalu",
    message:
      "Best waste service ever made. Easy booking and very responsive support, highly recommended.",
  },
];

function CardIcon({ type }) {
  if (type === "target") {
    return <span className="icon-wrap">◎</span>;
  }
  if (type === "eye") {
    return <span className="icon-wrap">◉</span>;
  }
  if (type === "users") {
    return <span className="icon-wrap">◍</span>;
  }
  return <span className="icon-wrap">?</span>;
}

export default function App() {
  const [active, setActive] = useState("Home");
  const [pickupType, setPickupType] = useState("Pickup now");
  const [showDropdown, setShowDropdown] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("Pickup location");
  const [destination, setDestination] = useState("Destination");

  const pickupOptions = ["Pickup now", "Schedule Later", "Recurring Pickup"];

  return (
    <div className="page-shell">
      <section className="hero">
        <div className="hero-overlay" />

        <header className="top-nav">
          <p className="logo">Ecofy</p>

          <nav className="pill-nav" aria-label="Main navigation">
            {navLinks.map((item) => (
              <button
                key={item}
                className={active === item ? "nav-link active" : "nav-link"}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="auth-actions">
            <button className="plain-link">Sign in</button>
            <button className="login-btn">Login</button>
          </div>
        </header>

        <div className="hero-content">
          <div className="hero-left">
            <h1>
              Smart Way to
              <br />
              Manage <span>Waste.</span>
            </h1>

            <div className="pickup-dropdown-wrap">
              <button className="pickup-pill" onClick={() => setShowDropdown((v) => !v)}>
                <span>◷</span>
                {pickupType}
              </button>
              {showDropdown && (
                <div className="pickup-dropdown">
                  {pickupOptions.map((option) => (
                    <button
                      key={option}
                      className={option === pickupType ? "dropdown-item selected" : "dropdown-item"}
                      onClick={() => {
                        setPickupType(option);
                        setShowDropdown(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="hero-fields">
              <label>
                <span className="field-dot dark" />
                <input
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  aria-label="Pickup location"
                />
                <button onClick={() => setPickupLocation("")} aria-label="Clear pickup location">
                  x
                </button>
              </label>

              <label>
                <span className="field-dot green" />
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  aria-label="Destination"
                />
              </label>
            </div>

            <button className="price-btn">See the Prices</button>
          </div>

          <aside className="hero-card">
            <div className="bin-emoji" aria-hidden="true">
              ♻
            </div>
            <button className="schedule-btn">Schedule Later</button>
          </aside>
        </div>
      </section>

      <section className="info-block">
        {infoCards.map((card) => (
          <article className="info-card" key={card.title}>
            <CardIcon type={card.icon} />
            <div>
              <p>{card.text}</p>
              <h3>{card.title}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="why-us">
        <p className="section-kicker">Our commitment to cleaner collection</p>
        <h2>Why Choose Us</h2>
        <div className="reason-grid">
          {reasonCards.map((card) => (
            <article className="reason-card" key={card.subtitle}>
              <p className="reason-title">{card.title}</p>
              <h3>{card.subtitle}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <p>Real stories from users who trust our waste pickup process</p>

        <div className="review-grid">
          {testimonials.map((review) => (
            <article className="review" key={review.name}>
              <div className="review-head">
                <strong>{review.name}</strong>
                <span>+</span>
              </div>
              <p>{review.message}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <h3>Ecofy</h3>
          <p>
            Smarter, sustainable waste
            <br />
            services in cleaner spaces.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <p>Pickup scheduling</p>
          <p>Business plans</p>
          <p>Advisory</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>Our journey</p>
          <p>Team</p>
          <p>FAQs</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>8 Riverpoint Hub</p>
          <p>+1 555 062 906</p>
          <button>Get in</button>
        </div>
      </footer>
    </div>
  );
}