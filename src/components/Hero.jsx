import { scrollToId } from '../utils.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">ZarvivaTravels</p>
        <h1>Explore the World with Us</h1>
        <p className="hero-text">
          From the peaks of Hunza to the beaches of Bali, we plan comfortable, affordable trips so you can
          focus on making memories.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollToId('destinations')}>
            Explore Destinations
          </button>
          <button className="btn btn-light" onClick={() => scrollToId('booking')}>
            Book Your Trip
          </button>
        </div>
      </div>
    </section>
  )
}
