import { useEffect, useRef, useState } from 'react'

const words = ['ENGINEER', 'RESEARCHER', 'BUILDER', 'CREATOR', 'THINKER']
const counters = [
  { target: 3, label: 'Years Building' },
  { target: 10, label: 'Projects Shipped' },
  { target: 5, label: 'Orgs & Competitions' },
  { target: 200, label: 'MUN Delegates Led' },
]

function useTyped(words) {
  const [text, setText] = useState('')
  const state = useRef({ wi: 0, ci: 0, deleting: false })

  useEffect(() => {
    let timer
    const loop = () => {
      const { wi, ci, deleting } = state.current
      const word = words[wi]
      if (!deleting) {
        setText(word.slice(0, ci + 1))
        state.current.ci++
        if (state.current.ci === word.length) {
          state.current.deleting = true
          timer = setTimeout(loop, 1600)
          return
        }
      } else {
        setText(word.slice(0, ci - 1))
        state.current.ci--
        if (state.current.ci === 0) {
          state.current.deleting = false
          state.current.wi = (wi + 1) % words.length
          timer = setTimeout(loop, 300)
          return
        }
      }
      timer = setTimeout(loop, deleting ? 60 : 100)
    }
    timer = setTimeout(loop, 100)
    return () => clearTimeout(timer)
  }, [])

  return text
}

function useCounter(target, trigger) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    const dur = 1600
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
      else setVal(target)
    }
    requestAnimationFrame(step)
  }, [trigger, target])
  return val
}

function Counter({ target, label }) {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect() } }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const val = useCounter(target, triggered)
  return (
    <div className="hero-counter" ref={ref}>
      <span className="num"><span className="count-num">{val}</span><span className="accent">+</span></span>
      <span className="label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const typed = useTyped(words)

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <h1 className="hero-name reveal d1">
          <span className="line1 glitch" data-text="LOJAN">LOJAN</span>
          <span className="line2">
            <span className="typed-accent" id="typed-word">{typed}</span>
            <span className="typed-cursor" />
          </span>
          <span className="line3">FAROUK</span>
        </h1>

        <p className="hero-tagline reveal d2">
          <span className="highlight">Upcoming junior Computer Engineer</span><br />
          I'm a self-starter who builds software systems and machine learning projects by turning ideas into working solutions through hands-on engineering.
        </p>

        <div className="hero-actions reveal d3">
          <a href="#projects" className="btn-green"><i className="fas fa-terminal" /> View Projects</a>
          <a href="/lojanCV.pdf" download className="btn-outline-dark"><i className="fas fa-file-code" /> Download Résumé</a>
          <a href="#contact" className="btn-outline-dark"><i className="fas fa-satellite-dish" /> Let's Connect!</a>
        </div>

        <div className="hero-meta reveal d4">
          {counters.map(c => <Counter key={c.label} target={c.target} label={c.label} />)}
        </div>
      </div>

      <div className="hero-ticker reveal d5">SCROLL TO EXPLORE</div>
      <div className="scroll-down"><div className="scroll-line" /></div>
    </section>
  )
}