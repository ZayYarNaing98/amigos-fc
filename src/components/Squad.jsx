import { useState } from 'react'
import { players } from '../data.js'

const positions = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward']

export default function Squad() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? players : players.filter((p) => p.position === filter)

  return (
    <section id="squad" className="section section-alt">
      <div className="container">
        <h2 className="section-title">First Team Squad</h2>
        <div className="filters">
          {positions.map((pos) => (
            <button
              key={pos}
              className={filter === pos ? 'chip active' : 'chip'}
              onClick={() => setFilter(pos)}
            >
              {pos}
            </button>
          ))}
        </div>
        <div className="player-grid">
          {shown.map((p) => (
            <article key={p.number} className="player-card">
              <span className="player-number">{p.number}</span>
              <h3>
                {p.name}
                {p.captain && <span className="captain" title="Captain">C</span>}
              </h3>
              <p>{p.position}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
