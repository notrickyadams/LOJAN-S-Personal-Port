import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBand from './components/MarqueeBand'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const revEls = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.08 })
    revEls.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <div className="grid-bg" />
      <div className="noise" />
      <Navbar />
      <Hero />
      <MarqueeBand />
      <Experience />
      <Skills />
      <Achievements />
      <About />
      <Contact />
      <Footer />
    </>
  )
}