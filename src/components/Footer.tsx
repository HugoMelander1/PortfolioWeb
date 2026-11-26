import { Link } from 'react-router'
import { profile } from '../data/profile.ts'

// Räknas ut en gång när sidan laddas, inte vid varje rendering.
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {currentYear} {profile.name}
        </p>
        <p>
          <Link to="/contact">Hör av dig</Link>
        </p>
      </div>
    </footer>
  )
}
