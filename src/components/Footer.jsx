import Crest from './Crest.jsx'
import { club } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <Crest size={32} />
          <span>{club.name}</span>
        </div>
        <p>© {new Date().getFullYear()} {club.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
