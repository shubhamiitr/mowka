import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="logo-container">
          <img 
            src="/logos/logo-mark.png" 
            alt="Mowka" 
            className="logo-mark"
          />
        </div>
        <h1 className="hero-title">
          Mowka - Grow with Confidence
        </h1>
        <p className="hero-value-prop">
          We find people built to thrive in your unique environment — its pace, ambiguity level, workload intensity, ownership expectations, and collaboration style. We don't just fill a role; we secure talent who compound impact from day one.
        </p>
        <div className="hero-cta">
          <a 
            href="https://forms.gle/qXGnh47znrFhRzHN9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hero-cta-button"
          >
            Continue
          </a>
        </div>
        <p className="hero-subtitle">
          Share your details and we'll reach out within 24 hours.
        </p>
      </div>
    </section>
  )
}

export default Hero
