import { useState } from 'react'
import { Plane, Menu, X } from 'lucide-react'
import { scrollToId } from '../utils.js'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'packages', label: 'Tour Packages' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="logo" onClick={() => go('home')} aria-label="ZarvivaTravels home">
          <Plane size={24} /> Zarviva<span>Travels</span>
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <button key={l.id} className="nav-link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
          <button className="btn btn-primary nav-book" onClick={() => go('booking')}>
            Book Now
          </button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}
