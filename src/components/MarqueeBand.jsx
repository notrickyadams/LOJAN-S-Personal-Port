const items = [
  { text: 'xBritish Council TCA', accent: true },
  { text: 'IEEE Member' },
  { text: 'National ISEF Finalist', accent: true },
  { text: 'ECPC Contestant' },
  { text: 'Open Source Contributor', accent: true },
  { text: 'CE @ AASTSMT' },
  { text: 'National TV Featured', accent: true },
  { text: 'Secretary General EASMUN\'I' },
  { text: 'ACA Volunteer', accent: true },
  { text: 'xAI Automation Intern @ BIP' },
]

export default function MarqueeBand() {
  const all = [...items, ...items] // duplicate for infinite scroll
  return (
    <div className="band">
      <div className="band-track">
        {all.map((item, i) => (
          <span key={i} className={item.accent ? 'accent-span' : ''}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}