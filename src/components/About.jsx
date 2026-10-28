import { Target, Eye, Headset, Globe2 } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div
          className="about-img"
          style={{
            backgroundImage: 'url(/images/about.jpg), linear-gradient(135deg,#2b7a9b,#b7e4c7)',
          }}
          role="img"
          aria-label="Travelers enjoying a mountain view"
        />
        <div>
          <h2 className="section-title left">Making Your Travel Dreams Come True</h2>
          <div className="about-points">
            <div>
              <Target size={22} />
              <div>
                <h4>Our Mission</h4>
                <p>Make quality travel affordable and stress-free for every traveler.</p>
              </div>
            </div>
            <div>
              <Eye size={22} />
              <div>
                <h4>Our Vision</h4>
                <p>To be the most trusted travel partner for families and friends.</p>
              </div>
            </div>
            <div>
              <Globe2 size={22} />
              <div>
                <h4>Travel Experience</h4>
                <p>Local knowledge of mountain routes, city tours and island getaways.</p>
              </div>
            </div>
            <div>
              <Headset size={22} />
              <div>
                <h4>Customer Service</h4>
                <p>Support before, during and after your trip.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
