import { gallery } from '../data.js'

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {gallery.map((photo) => (
            <figure key={photo.src} className="gallery-item">
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
