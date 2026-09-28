import { useState } from 'react'
import Crest from './Crest.jsx'
import { club } from '../data.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#squad', label: 'Squad' },
  { href: '#fixtures', label: 'Fixtures' },
  { href: '#news', label: 'News' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Crest size={40} />
          <span>{club.name}</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
