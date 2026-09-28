import { club, fixtures, results } from '../data.js'
import { formatDate } from '../utils.js'

function outcome(r) {
  if (r.us > r.them) return 'W'
  if (r.us < r.them) return 'L'
  return 'D'
}

export default function Fixtures() {
  return (
    <section id="fixtures" className="section">
      <div className="container fixtures">
        <div>
          <h2 className="section-title">Upcoming Fixtures</h2>
          <ul className="match-list">
            {fixtures.map((f) => (
              <li key={f.date} className="match">
                <div className="match-date">
                  <span>{formatDate(f.date)}</span>
                  <span>{f.time}</span>
                </div>
                <div className="match-teams">
                  {f.home ? `${club.shortName} vs ${f.opponent}` : `${f.opponent} vs ${club.shortName}`}
                </div>
                <span className={f.home ? 'tag home' : 'tag away'}>{f.home ? 'Home' : 'Away'}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Recent Results</h2>
          <ul className="match-list">
            {results.map((r) => {
              const o = outcome(r)
              const score = r.home ? `${r.us} – ${r.them}` : `${r.them} – ${r.us}`
              return (
                <li key={r.date} className="match">
                  <div className="match-date">
                    <span>{formatDate(r.date)}</span>
                  </div>
                  <div className="match-teams">
                    {r.home ? club.shortName : r.opponent} <strong>{score}</strong>{' '}
                    {r.home ? r.opponent : club.shortName}
                  </div>
                  <span className={`result result-${o}`}>{o}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
