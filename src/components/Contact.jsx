import { club } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div>
          <h2 className="section-title">Join the Amigos Family</h2>
          <p>
            Want to play, volunteer, sponsor or just come and support? Get in touch — every amigo
            is welcome.
          </p>
        </div>
        <ul className="contact-list">
          <li><strong>Ground</strong>{club.stadium}, {club.city}</li>
          <li><strong>Email</strong><a href={`mailto:${club.email}`}>{club.email}</a></li>
          <li><strong>Phone</strong><a href={`tel:${club.phone.replace(/\s/g, '')}`}>{club.phone}</a></li>
        </ul>
      </div>
    </section>
  )
}
