import { contact } from '../data/profile.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'

export default function ContactPage() {
  usePageTitle('Kontakt')

  // Bygg bara upp de kontaktvägar som är ifyllda i profile.ts.
  const items = [
    contact.email && { label: 'E-post', value: contact.email, href: `mailto:${contact.email}` },
    contact.linkedin && { label: 'LinkedIn', value: shortUrl(contact.linkedin), href: contact.linkedin },
    contact.github && { label: 'GitHub', value: shortUrl(contact.github), href: contact.github },
  ].filter((item) => !!item)

  return (
    <div className="container">
      <header className="page-header">
        <p className="eyebrow">Kontakt</p>
        <h1 tabIndex={-1}>Hör gärna av dig</h1>
        <p className="lead">
          Jag söker juniora roller inom integration, fullstack och systemutveckling. Skicka ett mejl eller
          hör av dig på LinkedIn.
        </p>
      </header>

      {items.length > 0 ? (
        <ul className="contact-list">
          {items.map((item, index) => (
            <li key={item.label} className="reveal" style={{ animationDelay: `${index * 80}ms` }}>
              <a
                className="contact-card"
                href={item.href}
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
              >
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="notice">Platshållare: kontaktuppgifter fylls i i src/data/profile.ts.</p>
      )}
    </div>
  )
}

/** Visar "linkedin.com/in/namn" i stället för hela adressen med https://www. */
function shortUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}
