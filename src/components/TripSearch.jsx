import { useState } from 'react'
import { Search } from 'lucide-react'
import { destinations, packages, formatPKR } from '../data.js'

const today = new Date().toISOString().split('T')[0]

export default function TripSearch({ onBook }) {
  const [form, setForm] = useState({ destination: '', departure: '', returnDate: '', travelers: 1 })
  const [error, setError] = useState('')
  const [results, setResults] = useState(null)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (form.departure && form.returnDate && form.returnDate < form.departure) {
      setError('Return date cannot be earlier than the departure date.')
      setResults(null)
      return
    }
    if (Number(form.travelers) < 1) {
      setError('Please enter at least 1 traveler.')
      setResults(null)
      return
    }
    setError('')
    const q = form.destination.trim().toLowerCase()
    const matches = packages.filter(
      (p) =>
        !q ||
        p.destination.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        destinations.some(
          (d) =>
            d.packageIds.includes(p.id) &&
            (d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q))
        )
    )
    setResults(matches)
  }

  return (
    <section className="search-section">
      <div className="container">
        <form className="search-box" onSubmit={submit} noValidate>
          <label>
            Destination
            <input
              name="destination"
              value={form.destination}
              onChange={change}
              placeholder="e.g. Hunza, Dubai, Bali"
            />
          </label>
          <label>
            Departure
            <input type="date" name="departure" min={today} value={form.departure} onChange={change} />
          </label>
          <label>
            Return
            <input
              type="date"
              name="returnDate"
              min={form.departure || today}
              value={form.returnDate}
              onChange={change}
            />
          </label>
          <label>
            Travelers
            <input type="number" name="travelers" min="1" max="20" value={form.travelers} onChange={change} />
          </label>
          <button className="btn btn-primary" type="submit">
            <Search size={18} /> Search
          </button>
        </form>

        {error && <p className="form-error center" role="alert">{error}</p>}

        {results && (
          <div className="search-results">
            {results.length === 0 ? (
              <p className="notice">
                No packages match "{form.destination}" yet. Try Hunza, Dubai or Bali, or send us a custom
                request using the booking form.
              </p>
            ) : (
              <>
                <h3>
                  {results.length} package{results.length > 1 ? 's' : ''} found
                </h3>
                <div className="result-list">
                  {results.map((p) => (
                    <div className="result-item" key={p.id}>
                      <div>
                        <strong>{p.title}</strong>
                        <span>
                          {p.duration} · {formatPKR(p.price)} per person
                        </span>
                      </div>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() =>
                          onBook({
                            destination: p.destination,
                            packageId: p.id,
                            travelers: Number(form.travelers) || 1,
                            departure: form.departure,
                          })
                        }
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
