import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-label">Work Experience</div>
          <h2 className="section-title">Things I've<br /> Done.</h2>
          <p className="section-sub">Practical experience in designing and implementing software systems.</p>
        </div>

        <div className="h-line" />

        <div className="projects-list">
          {experiences.map((exp, i) => (
            <div className={`proj-row reveal d${(i % 4) + 1}`} key={exp.num}>
              <span className="proj-num">{exp.num}</span>
              <div className="proj-body">
                <div className="proj-tags">
                  {exp.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
                </div>
                <h3 className="proj-name">{exp.title}</h3>
                <p className="proj-desc">{exp.desc}</p>
                <div className="proj-stack">
                  {exp.stack.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
              <div className="proj-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}