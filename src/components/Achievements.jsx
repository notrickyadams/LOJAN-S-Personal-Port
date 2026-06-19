import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <section id="achievements" className="ach-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-label">Achievements</div>
          <h2 className="section-title">Recognition<br />&amp; Impact.</h2>
          <p className="section-sub">Milestones that mark the journey so far.</p>
        </div>
        <div className="ach-grid">
          {achievements.map((a, i) => (
            <div className={`ach-cell reveal d${i}`} key={a.title}>
              <div className="ach-icon"><i className={a.icon} /></div>
              <div className="ach-year">{a.year}</div>
              <h3 className="ach-title">{a.title}</h3>
              <p className="ach-desc">{a.desc}</p>
              <span className="ach-badge">{a.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}