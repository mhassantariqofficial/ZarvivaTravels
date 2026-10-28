import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, CheckCircle2 } from 'lucide-react'
import XIcon from './XIcon.jsx'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const change = (e) => {
    setV({ ...v, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (!v.name.trim()) er.name = 'Name is required.'
    if (!v.email.trim()) er.email = 'Email is required.'
    else if (!emailRe.test(v.email.trim())) er.email = 'Enter a valid email address.'
    if (!v.message.trim()) er.message = 'Please write a message.'
    setErrors(er)
    if (Object.keys(er).length) {
      setSent(false)
      return
    }
    setSent(true)
    setV({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <br />

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              <Mail size={20} /> hello@zarvivatravels.example
            </p>
            <p>
              <Phone size={20} /> +92 300 0000000
            </p>
            <p>
              <MapPin size={20} /> Office 12, Sample Plaza, Islamabad, Pakistan
            </p>
            <a
              className="btn btn-whatsapp"
              href="https://wa.me/920000000000"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                <XIcon size={20} />
              </a>
            </div>
          </div>

          <form className="card form" onSubmit={submit} noValidate>
            {sent && (
              <div className="success" role="status">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Message sent!</strong>
                  <p>We will get back to you soon.</p>
                </div>
              </div>
            )}
            <label>
              Name
              <input name="name" className={errors.name ? 'invalid' : ''} value={v.name} onChange={change} />
              {errors.name && <span className="err">{errors.name}</span>}
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                className={errors.email ? 'invalid' : ''}
                value={v.email}
                onChange={change}
              />
              {errors.email && <span className="err">{errors.email}</span>}
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                className={errors.message ? 'invalid' : ''}
                value={v.message}
                onChange={change}
              />
              {errors.message && <span className="err">{errors.message}</span>}
            </label>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
