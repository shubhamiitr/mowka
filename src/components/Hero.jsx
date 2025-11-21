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
          We find people built to thrive in your unique environment — its pace, ambiguity level, workload intensity, ownership expectations, and collaboration style.
        </p>
        <p className="hero-subtitle">
          We don't just fill a role; we secure talent who compound impact from day one.
        </p>
      </div>
    </section>
  )
}

export default Hero
