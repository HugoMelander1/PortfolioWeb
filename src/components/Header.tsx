import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

const links = [
  { to: '/', label: 'Start' },
  { to: '/explore', label: 'Projekt' },
  { to: '/about', label: 'Om mig' },
  { to: '/contact', label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Stäng mobilmenyn med Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  // "Projekt" ska även se aktiv ut på en enskild projektsida.
  const isActive = (to: string, active: boolean) =>
    active || (to === '/explore' && pathname.startsWith('/portfolio/'))

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span aria-hidden="true" className="logo-mark">
            HM
          </span>
          <span className="logo-text">Hugo Melander</span>
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true" />
          <span className="visually-hidden">{menuOpen ? 'Stäng meny' : 'Öppna meny'}</span>
        </button>

        <nav id="main-nav" aria-label="Huvudmeny" className={menuOpen ? 'nav is-open' : 'nav'}>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive: active }) =>
                    isActive(link.to, active) ? 'nav-link is-active' : 'nav-link'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
