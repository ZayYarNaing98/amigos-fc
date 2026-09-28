import { news } from '../data.js'
import { formatDate } from '../utils.js'

export default function News() {
  return (
    <section id="news" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Latest News</h2>
        <div className="news-grid">
          {news.map((n) => (
            <article key={n.title} className="news-card">
              <time dateTime={n.date}>{formatDate(n.date)}</time>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
