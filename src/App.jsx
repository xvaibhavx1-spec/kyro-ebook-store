
import { useState } from "react";
import "./App.css";

const features = [
  {
    icon: "💻",
    title: "Learn Web Development",
    description:
      "Understand HTML, CSS and JavaScript with practical examples.",
  },
  {
    icon: "⚛️",
    title: "Master Modern Tools",
    description:
      "Explore React, Git, GitHub and modern development workflows.",
  },
  {
    icon: "🚀",
    title: "Build Real Projects",
    description:
      "Follow a practical roadmap to create and publish your own website.",
  },
];

const topics = [
  "HTML & CSS Fundamentals",
  "JavaScript & Interactive UI",
  "React & Component Design",
  "Git & GitHub",
  "Deployment & Hosting",
  "Web Security Essentials",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handlePurchase() {
    alert(
      "Welcome to KYRO DIGITAL! Checkout is being configured. No payment has been taken."
    );
  }

  return (
    <div className="site-wrapper">
      <div className="announcement">
        YOUR NEXT CHAPTER STARTS HERE
        <span> · </span>
        Learn. Build. Launch.
      </div>

      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-symbol">K</span>
          <span>
            KYRO<span className="brand-accent">DIGITAL</span>
            <small>BY THE INITIAL KYRO TECH</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#product" onClick={() => setMenuOpen(false)}>
            E-Books
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Benefits
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a
            className="nav-cta"
            href="#product"
            onClick={() => setMenuOpen(false)}
          >
            Explore Guide ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="status-badge">
              <span className="status-dot" />
              THE DEVELOPER STARTS HERE
            </div>

            <h1>
              Don't just use
              <br />
              technology.
              <br />
              <span>Build it.</span>
            </h1>

            <p className="hero-description">
              Practical digital guides for the next generation of developers.
              Learn essential skills, build real projects and take your first
              steps into web development.
            </p>

            <div className="hero-actions">
              <a href="#product" className="button button-primary">
                Explore the E-Book <span>↗</span>
              </a>
              <a href="#features" className="button button-secondary">
                Discover More
              </a>
            </div>

            <div className="trust-row">
              <div className="trust-item">
                <span className="trust-icon">⌘</span>
                <span>
                  <strong>Practical</strong>
                  <small>Code examples</small>
                </span>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <span className="trust-icon">◈</span>
                <span>
                  <strong>Beginner-friendly</strong>
                  <small>Structured learning</small>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="window-filename">your-future.jsx</span>
                <span className="window-menu">•••</span>
              </div>

              <div className="code-content">
                <div>
                  <span className="line-number">01</span>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </div>
                <div>
                  <span className="line-number">02</span>
                  &nbsp;&nbsp;skills: [
                </div>
                <div>
                  <span className="line-number">03</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">"HTML"</span>,
                </div>
                <div>
                  <span className="line-number">04</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">"CSS"</span>,
                </div>
                <div>
                  <span className="line-number">05</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">"JavaScript"</span>
                </div>
                <div>
                  <span className="line-number">06</span>
                  &nbsp;&nbsp;],
                </div>
                <div>
                  <span className="line-number">07</span>
                  &nbsp;&nbsp;mindset:{" "}
                  <span className="code-green">"Keep building"</span>
                </div>
                <div>
                  <span className="line-number">08</span>
                  {"}"};
                </div>
                <div className="code-gap" />
                <div>
                  <span className="line-number">09</span>
                  <span className="code-purple">if</span> (learnEveryDay) {"{"}
                </div>
                <div>
                  <span className="line-number">10</span>
                  &nbsp;&nbsp;buildSomethingAmazing();
                </div>
                <div>
                  <span className="line-number">11</span>
                  {"}"}
                  <span className="code-cursor">▌</span>
                </div>
              </div>

              <div className="window-footer">
                <span>
                  <span className="status-dot" /> Ready to build
                </span>
                <span>UTF-8</span>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">{"</>"}</span>
              <span>
                <strong>Write your first line</strong>
                <small>Start with the fundamentals</small>
              </span>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon">↗</span>
              <span>
                <strong>Ideas into reality</strong>
                <small>Learn by building</small>
              </span>
            </div>

            <div className="visual-caption">
              <span>001</span> YOUR JOURNEY INTO DEVELOPMENT
            </div>
          </div>
        </section>

        <section className="product-section" id="product">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">THE FIRST EDITION</span>
              <h2>Your developer journey, <span>in one guide.</span></h2>
              <p>
                Start with the fundamentals. Learn the workflow. Build
                something you can call your own.
              </p>
            </div>

            <article className="product-card">
              <div className="book-art">
                <div className="book-cover">
                  <div className="book-brand">THE INITIAL KYRO TECH</div>
                  <div className="book-cover-line" />
                  <div className="book-title">
                    THE PRACTICAL
                    <br />
                    WEB
                    <br />
                    DEVELOPMENT
                    <br />
                    GUIDE
                  </div>
                  <div className="book-code">
                    {"<"} / {">"}
                  </div>
                  <div className="book-bottom">
                    LEARN <span>•</span> BUILD <span>•</span> LAUNCH
                  </div>
                </div>
              </div>

              <div className="product-details">
                <div className="product-label">
                  <span className="status-dot" /> DIGITAL EDITION
                </div>

                <h3>The Practical Web Development Guide</h3>

                <p>
                  A beginner-friendly PDF guide covering web technologies,
                  practical coding examples, deployment and essential security
                  practices.
                </p>

                <div className="topic-list">
                  {topics.map((topic) => (
                    <div className="topic-item" key={topic}>
                      <span>✓</span>
                      {topic}
                    </div>
                  ))}
                </div>

                <div className="product-price-row">
                  <div>
                    <small>INTRODUCTORY PRICE</small>
                    <div className="product-price">₹199</div>
                  </div>
                  <span className="format-badge">PDF E-BOOK</span>
                </div>

                <button
                  className="button button-primary purchase-button"
                  onClick={handlePurchase}
                >
                  Get the E-Book <span>↗</span>
                </button>

                <p className="checkout-note">
                  Secure checkout will be enabled before launch.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="features-section container" id="features">
          <div className="section-heading">
            <span className="eyebrow">MADE FOR BUILDERS</span>
            <h2>Learn with a <span>clear direction.</span></h2>
            <p>
              Useful knowledge, practical skills and a path to your next
              project.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-top">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-number">
                    0{index + 1}
                  </span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#product" className="feature-link">
                  Explore the guide <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="roadmap-section">
          <div className="container roadmap-inner">
            <div>
              <span className="eyebrow">YOUR NEXT 30 DAYS</span>
              <h2>Less scrolling.<br /><span>More building.</span></h2>
              <p>
                Follow a structured learning roadmap and turn concepts into
                practical work, one step at a time.
              </p>
            </div>

            <div className="roadmap-list">
              {[
                ["01", "Understand the fundamentals", "HTML & CSS"],
                ["02", "Add interactivity", "JavaScript"],
                ["03", "Build modern interfaces", "React & Git"],
                ["04", "Publish your work", "Deployment & security"],
              ].map(([number, title, subtitle]) => (
                <div className="roadmap-item" key={number}>
                  <span className="roadmap-number">{number}</span>
                  <span className="roadmap-copy">
                    <strong>{title}</strong>
                    <small>{subtitle}</small>
                  </span>
                  <span className="roadmap-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section container" id="faq">
          <div className="section-heading">
            <span className="eyebrow">GOOD TO KNOW</span>
            <h2>Frequently asked <span>questions.</span></h2>
          </div>

          <div className="faq-list">
            <details>
              <summary>Is this e-book suitable for beginners?</summary>
              <p>
                Yes. It introduces core web technologies and provides a
                structured roadmap for practising the fundamentals.
              </p>
            </details>

            <details>
              <summary>What will I learn from the guide?</summary>
              <p>
                HTML, CSS, JavaScript, React concepts, Git, deployment,
                security essentials and project-building practices.
              </p>
            </details>

            <details>
              <summary>How will I receive my purchase?</summary>
              <p>
                Digital delivery will be configured with the payment system
                before the store launches. Purchases are not yet enabled.
              </p>
            </details>

            <details>
              <summary>Does this guarantee a job or income?</summary>
              <p>
                No. The guide is an educational resource. Outcomes depend on
                your practice, skills and individual circumstances.
              </p>
            </details>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <span className="eyebrow">START SOMETHING GREAT</span>
            <h2>Your ideas deserve<br /><span>to become real.</span></h2>
            <p>
              Begin your web development journey with THE INITIAL KYRO TECH.
            </p>
            <a href="#product" className="button button-primary">
              Explore the Guide <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-main">
          <a href="#home" className="brand">
            <span className="brand-symbol">K</span>
            <span>
              KYRO<span className="brand-accent">DIGITAL</span>
              <small>BY THE INITIAL KYRO TECH</small>
            </span>
          </a>

          <p>Learn. Build. Launch.</p>
          <a href="mailto:hello@theinitialkyro.com">
            Contact us ↗
          </a>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 THE INITIAL KYRO TECH</span>
          <span>Built for the next generation of builders.</span>
        </div>
      </footer>
    </div>
  );
}

