import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Squad from './components/Squad.jsx'
import Fixtures from './components/Fixtures.jsx'
import News from './components/News.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Squad />
        <Fixtures />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
