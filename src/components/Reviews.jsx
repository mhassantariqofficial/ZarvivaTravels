import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { reviews } from '../data.js'

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length)
  const next = () => setIndex((i) => (i + 1) % reviews.length)
  const r = reviews[index]

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>

        <div className="review-slider">
          <button className="round-btn" onClick={prev} aria-label="Previous review">
            <ChevronLeft />
          </button>

          <div className="card review-card" key={index}>
            <div className="avatar">{r.name.charAt(0)}</div>
            <h3>{r.name}</h3>
            <div className="stars" aria-label={`${r.rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={18} fill={n <= r.rating ? 'currentColor' : 'none'} />
              ))}
            </div>
            <p>{r.text}</p>
          </div>

          <button className="round-btn" onClick={next} aria-label="Next review">
            <ChevronRight />
          </button>
        </div>

        <div className="dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Show review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
