import { club, stats } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div>
          <h2 className="section-title">About the Club</h2>
          <p>
            {club.name} was founded in {club.founded} by a group of friends who shared one simple
            love — football. What started as weekend kickabouts has grown into a proud community
            club with a senior squad, a youth academy and thousands of loyal supporters.
          </p>
          <p>
            We play our home matches at <strong>{club.stadium}</strong> in {club.city}. Our values
            are friendship, respect and hard work — on and off the pitch.
          </p>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
