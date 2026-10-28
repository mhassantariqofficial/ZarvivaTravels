import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TripSearch from './components/TripSearch.jsx'
import Destinations from './components/Destinations.jsx'
import TourPackages from './components/TourPackages.jsx'
import About from './components/About.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Reviews from './components/Reviews.jsx'
import BookingForm from './components/BookingForm.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { scrollToId } from './utils.js'


export default function App() {
  // Prefill values shared between sections and the booking form
  const [prefill, setPrefill] = useState({ destination: '', packageId: '', travelers: 1, departure: '' })

  const startBooking = (data) => {
    setPrefill((p) => ({ ...p, ...data }))
    scrollToId('booking')
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TripSearch onBook={startBooking} />
        <Destinations onBook={startBooking} />
        <TourPackages onBook={startBooking} />
        <About />
        <WhyChooseUs />
        <Reviews />
        <BookingForm prefill={prefill} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
