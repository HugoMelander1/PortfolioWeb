import { Link } from 'react-router'
import { profile } from '../data/profile.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'

const paths = [
  { to: '/explore', title: 'Projekt', text: 'Se vad jag har byggt och hur jag har tänkt.' },
  { to: '/about', title: 'Om mig', text: 'Erfarenhet, utbildning och kompetenser.' },
  { to: '/contact', title: 'Kontakt', text: 'E-post, LinkedIn och GitHub.' },
]

export default function HomePage() {
  usePageTitle()

  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow">{profile.role}</p>
          <h1 id="hero-title" tabIndex={-1}>
            Hej, jag heter <span className="accent">{profile.name}</span>.
          </h1>
          <p className="lead">{profile.intro}</p>
          <div className="button-row">
            <Link to="/explore" className="button button-primary">
              Se mina projekt
            </Link>
            <Link to="/contact" className="button button-secondary">
              Kontakta mig
            </Link>
          </div>
        </div>
        <SignalGraphic />
      </section>

      <section aria-labelledby="paths-title" className="section">
        <h2 id="paths-title" className="section-title">
          Vart vill du gå?
        </h2>
        <ul className="path-grid">
          {paths.map((path, index) => (
            <li key={path.to} className="reveal" style={{ animationDelay: `${index * 80}ms` }}>
              <Link to={path.to} className="path-card">
                <span className="path-title">
                  {path.title} <span aria-hidden="true">→</span>
                </span>
                <span className="path-text">{path.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

// Dekorativ grafik: noder som skickar signaler mellan sig (integration/data).
// aria-hidden eftersom den inte bär någon information.
function SignalGraphic() {
  return (
    <svg className="signal" viewBox="0 0 240 200" aria-hidden="true" focusable="false">
      <path className="signal-line" d="M40 50 L120 100 L200 50" />
      <path className="signal-line" d="M120 100 L120 170" />
      <path className="signal-pulse" d="M40 50 L120 100 L200 50" />
      <path className="signal-pulse signal-pulse-late" d="M120 100 L120 170" />
      <circle className="signal-node" cx="40" cy="50" r="9" />
      <circle className="signal-node" cx="200" cy="50" r="9" />
      <circle className="signal-node signal-node-main" cx="120" cy="100" r="14" />
      <circle className="signal-node" cx="120" cy="170" r="9" />
    </svg>
  )
}
