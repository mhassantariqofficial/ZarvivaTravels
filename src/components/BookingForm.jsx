import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { destinations, packages, formatPKR } from '../data.js'

const empty = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  packageId: '',
  departure: '',
  travelers: 1,
  message: '',
}

const today = new Date().toISOString().split('T')[0]
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const phoneRe = /^\+?[0-9][0-9\s-]{8,14}$/

export function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Full name is required.'
  if (!v.email.trim()) e.email = 'Email is required.'
  else if (!emailRe.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!v.phone.trim()) e.phone = 'Phone number is required.'
  else if (!phoneRe.test(v.phone.trim())) e.phone = 'Enter a valid phone number (9-15 digits).'
  if (!v.destination) e.destination = 'Please choose a destination.'
  if (!v.departure) e.departure = 'Departure date is required.'
  else if (v.departure < today) e.departure = 'Departure date cannot be in the past.'
  if (!v.travelers || Number(v.travelers) < 1) e.travelers = 'At least 1 traveler is required.'
  return e
}

export default function BookingForm({ prefill }) {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  // Fill in destination/package when the user clicks Book elsewhere on the page
  useEffect(() => {
    if (!prefill.destination && !prefill.packageId) return
    setValues((v) => ({
      ...v,
      destination: prefill.destination || v.destination,
      packageId: prefill.packageId ?? v.packageId,
      travelers: prefill.travelers || v.travelers,
      departure: prefill.departure || v.departure,
    }))
    setSuccess(false)
  }, [prefill])

  const change = (e) => {
    const { name, value } = e.target
    setValues((v) => {
      const next = { ...v, [name]: value }
      // choosing a package also sets its destination
      if (name === 'packageId') {
        const pkg = packages.find((p) => p.id === value)
        if (pkg) next.destination = pkg.destination
      }
      return next
    })
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setSuccess(false)
      return
    }
    // Frontend only: a backend would save the booking here.
    setSuccess(true)
    setValues(empty)
  }

  const field = (name) => (errors[name] ? 'invalid' : '')

  return (
    <section id="booking" className="section section-alt">
      <div className="container narrow">
        <h2 className="section-title">Book Your Trip</h2>
        <p className="section-sub">Fill in the form and our team will confirm your booking request.</p>

        {success && (
          <div className="success" role="status">
            <CheckCircle2 size={22} />
            <div>
              <strong>Booking request received!</strong>
              <p>Thank you. We will contact you shortly to confirm the details.</p>
            </div>
          </div>
        )}

        <form className="card form" onSubmit={submit} noValidate>
          {Object.keys(errors).some((k) => errors[k]) && (
            <p className="form-error" role="alert">
              Please fix the highlighted fields and try again.
            </p>
          )}
          <div className="form-grid">
            <label>
              Full Name *
              <input name="name" className={field('name')} value={values.name} onChange={change} />
              {errors.name && <span className="err">{errors.name}</span>}
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                className={field('email')}
                value={values.email}
                onChange={change}
              />
              {errors.email && <span className="err">{errors.email}</span>}
            </label>
            <label>
              Phone *
              <input
                type="tel"
                name="phone"
                placeholder="+92 300 1234567"
                className={field('phone')}
                value={values.phone}
                onChange={change}
              />
              {errors.phone && <span className="err">{errors.phone}</span>}
            </label>
            <label>
              Destination *
              <select name="destination" className={field('destination')} value={values.destination} onChange={change}>
                <option value="">Select destination</option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}, {d.country}
                  </option>
                ))}
              </select>
              {errors.destination && <span className="err">{errors.destination}</span>}
            </label>
            <label>
              Tour Package
              <select name="packageId" value={values.packageId} onChange={change}>
                <option value="">No package (custom trip)</option>
                {packages.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title} ({formatPKR(p.price)})
                  </option>
                ))}
              </select>
            </label>
            <label>
              Departure Date *
              <input
                type="date"
                name="departure"
                min={today}
                className={field('departure')}
                value={values.departure}
                onChange={change}
              />
              {errors.departure && <span className="err">{errors.departure}</span>}
            </label>
            <label>
              Number of Travelers *
              <input
                type="number"
                name="travelers"
                min="1"
                max="20"
                className={field('travelers')}
                value={values.travelers}
                onChange={change}
              />
              {errors.travelers && <span className="err">{errors.travelers}</span>}
            </label>
          </div>
          <label>
            Additional Message
            <textarea name="message" rows="4" value={values.message} onChange={change} />
          </label>
          <button className="btn btn-primary" type="submit">
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  )
}
