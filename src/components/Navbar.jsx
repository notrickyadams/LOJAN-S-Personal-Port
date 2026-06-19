import { useState, useEffect } from 'react'

const links = ['home', 'projects', 'skills', 'achievements', 'about', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      let cur = 'home'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 140) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#home" className="nav-logo" onClick={e => smoothTo(e, 'home')}>
        LOJAN.IO<span className="blink"></span>
      </a>

      <div className={`nav-center${open ? ' open' : ''}`}>
        {links.map(id => (
          <a key={id} href={`#${id}`} className={`nav-link${active === id ? ' active' : ''}`} onClick={e => smoothTo(e, id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <a href="https://github.com/notrickyadams" target="_blank" rel="noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/lojan-essam-farouk-8a244b207/" target="_blank" rel="noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://medium.com/@ThursdayThoughtsbyLojanEssam" target="_blank" rel="noreferrer" title="Medium">
          <i className="fab fa-medium"></i>
        </a>
        <a href="/lojanCV.pdf" download className="nav-cta">Resume ↓</a>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}