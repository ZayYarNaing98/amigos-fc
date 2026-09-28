import Crest from './Crest.jsx'
import { club, fixtures, heroImage } from '../data.js'
import { formatDate } from '../utils.js'

export default function Hero() {
  const next = fixtures[0]

  return (
    <section id="top" className="hero" style={{ '--hero-image': `url(${heroImage})` }}>
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Est. {club.founded} · {club.city}</p>
          <h1>
            {club.shortName} <span>FC</span>
          </h1>
          <p className="motto">{club.motto}</p>
          <div className="hero-actions">
            <a href="#fixtures" className="btn btn-primary">See Fixtures</a>
            <a href="#contact" className="btn btn-ghost">Join the Club</a>
          </div>
        </div>
        <div className="hero-card">
          <Crest size={160} />
          {next && (
            <div className="next-match">
              <p className="label">Next Match · {next.competition}</p>
              <p className="teams">
                {next.home ? `${club.shortName} vs ${next.opponent}` : `${next.opponent} vs ${club.shortName}`}
              </p>
              <p className="when">
                {formatDate(next.date)} · {next.time}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
