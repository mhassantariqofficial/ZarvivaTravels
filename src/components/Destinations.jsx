import { useEffect, useState } from 'react'
import { MapPin, X } from 'lucide-react'
import { destinations, packages, formatPKR } from '../data.js'

export default function Destinations({ onBook }) {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  const related = selected ? packages.filter((p) => selected.packageIds.includes(p.id)) : []

  return (
    <section id="destinations" className="section">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-sub">Hand-picked places our travelers love most.</p>

        <div className="grid grid-3">
          {destinations.map((d) => (
            <article className="card dest-card" key={d.id}>
              <div
                className="card-img"
                style={{ backgroundImage: `url(${d.image}), ${d.gradient}` }}
                role="img"
                aria-label={d.name}
              />
              <div className="card-body">
                <h3>{d.name}</h3>
                <p className="muted">
                  <MapPin size={14} /> {d.country}
                </p>
                <p>{d.description}</p>
                <div className="card-foot">
                  <span className="price">From {formatPKR(d.from)}</span>
                  <button className="btn btn-outline btn-sm" onClick={() => setSelected(d)}>
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details">
              <X size={20} />
            </button>
            <div
              className="modal-img"
              style={{ backgroundImage: `url(${selected.image}), ${selected.gradient}` }}
            />
            <div className="modal-body">
              <h3>
                {selected.name}, {selected.country}
              </h3>
              <p>{selected.details}</p>
              <p className="price">Starting from {formatPKR(selected.from)} per person</p>

              <h4>Available packages</h4>
              {related.length === 0 ? (
                <p className="muted">No fixed package yet. Send a custom request and we will plan it for you.</p>
              ) : (
                related.map((p) => (
                  <div className="result-item" key={p.id}>
                    <div>
                      <strong>{p.title}</strong>
                      <span>
                        {p.duration} · {formatPKR(p.price)}
                      </span>
                    </div>
                  </div>
                ))
              )}

              <button
                className="btn btn-primary"
                onClick={() => {
                  onBook({ destination: selected.name, packageId: related[0]?.id || '' })
                  setSelected(null)
                }}
              >
                Book This Destination
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
