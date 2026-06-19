export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-wrap">
        <div className="about-layout">
          <div className="about-photo-wrap reveal">
            <div className="about-photo-frame">
              <img src="/images/image.jpg" alt="Lojan Essam Farouk"
                style={{ objectFit: 'cover', objectPosition: '60% center', width: '100%', height: '100%' }} />
              <div className="about-scanlines" />
              <div className="photo-overlay">
                <div className="photo-tag">
                  <span className="dot" />
                  Secretary General · EASMUN I 2024
                </div>
              </div>
            </div>
          </div>


 <div className="about-text reveal d2">
  <div className="section-label">About</div>
  <div className="about-big">
    The<br />Engineer<br />Behind<br /><span className="green">The Code.</span>
  </div>
  <p className="about-p">
    I'm <strong>Lojan Essam Farouk</strong> — a Computer Engineering student at <strong>AASTMT</strong> focused on building systems that are intentional, scalable, and worth remembering.
  </p>
  <p className="about-p">
    I'm drawn to the space where <strong>software, intelligent systems, and engineering thinking</strong> meet — turning ideas into products, experiments into execution, and complexity into something people can actually use.
  </p>
  <p className="about-p">
    I care deeply about how things work beneath the surface: <strong>architecture, performance, reliability</strong>, and the small decisions that separate projects from real engineering. This portfolio is a collection of what I'm building, learning, and pushing forward — one system at a time.
  </p>
  <div className="about-btns">
    <a href="https://medium.com/@ThursdayThoughtsbyLojanEssam" target="_blank" rel="noreferrer" className="btn-outline-dark">
      <i className="fab fa-medium"></i> Read My Writing
    </a>
    <a href="https://github.com/notrickyadams" target="_blank" rel="noreferrer" className="btn-outline-dark">
      <i className="fab fa-github"></i> GitHub
    </a>
  </div>
</div>
        </div>
      </div>
    </section>
  )
}