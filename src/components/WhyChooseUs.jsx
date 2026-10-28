import { Wallet, Compass, BedDouble, HeartHandshake } from 'lucide-react'

const reasons = [
  { icon: Wallet, title: 'Affordable Packages', text: 'Clear pricing with no hidden charges, built for every budget.' },
  { icon: Compass, title: 'Experienced Guides', text: 'Friendly local guides who know the best routes and stories.' },
  { icon: BedDouble, title: 'Comfortable Stay', text: 'Carefully selected hotels that are clean, safe and cozy.' },
  { icon: HeartHandshake, title: 'Friendly Support', text: 'Real people ready to help whenever you need us.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="grid grid-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div className="card why-card" key={title}>
              <div className="icon-circle">
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
