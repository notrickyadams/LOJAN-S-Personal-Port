import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-label">Skills</div>
        </div>
        <div className="skills-layout">
          <div className="skills-intro reveal">
            <p className="big-text">My<br />Technical<br />Arsenal.</p>
            <p>Languages, frameworks, and domains I operate in daily — grouped by role</p>
          </div>
          <div className="skills-groups">
            {skillGroups.map((group, i) => (
              <div className={`skill-group reveal d${i}`} key={group.label}>
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-pills">
                  {group.pills.map(p => <span className="skill-pill" key={p}>{p}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}