import { Plane, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { scrollToId } from '../utils.js'
import XIcon from './XIcon.jsx'

const quick = [
  { id: 'home', label: 'Home' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'packages', label: 'Tour Packages' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo light">
            <Plane size={22} /> Zarviva<span>Travels</span>
          </div>
          <p>Simple, affordable and well-planned trips for families, friends and solo explorers.</p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
              <XIcon size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {quick.map((l) => (
            <button key={l.id} className="footer-link" onClick={() => scrollToId(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <Mail size={16} /> hello@zarvivatravels.example
          </p>
          <p>
            <Phone size={16} /> +92 300 0000000
          </p>
          <p>
            <MapPin size={16} /> Islamabad, Pakistan
          </p>
        </div>
      </div>
      <div className="copyright">© 2026 ZarvivaTravels. All rights reserved.</div>
    </footer>
  )
}
