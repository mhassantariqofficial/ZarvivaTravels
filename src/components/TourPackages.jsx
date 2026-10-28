import { Clock, Check } from 'lucide-react'
import { packages, formatPKR } from '../data.js'

export default function TourPackages({ onBook }) {
  return (
    <section id="packages" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Tour Packages</h2>
        

        <div className="grid grid-3">
          {packages.map((p) => (
            <article className="card" key={p.id}>
              <div
                className="card-img"
                style={{ backgroundImage: `url(${p.image}), ${p.gradient}` }}
                role="img"
                aria-label={p.title}
              />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="muted">
                  <Clock size={14} /> {p.duration}
                </p>
                <ul className="includes">
                  {p.includes.map((item) => (
                    <li key={item}>
                      <Check size={16} /> {item}
                    </li>
                  ))}
                </ul>
                <div className="card-foot">
                  <span className="price">
                    {formatPKR(p.price)} <small>per person</small>
                  </span>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => onBook({ destination: p.destination, packageId: p.id })}
                  >
                    Book Package
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
