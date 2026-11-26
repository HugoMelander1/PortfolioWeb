import { Link } from 'react-router'
import { usePageTitle } from '../hooks/usePageTitle.ts'

export default function NotFoundPage() {
  usePageTitle('Sidan finns inte')

  return (
    <div className="container page-header not-found">
      <p className="eyebrow">404</p>
      <h1 tabIndex={-1}>Sidan finns inte</h1>
      <p className="lead">Adressen kan vara felstavad, eller så har sidan flyttats.</p>
      <div className="button-row">
        <Link to="/" className="button button-primary">
          Till startsidan
        </Link>
        <Link to="/explore" className="button button-secondary">
          Se projekten
        </Link>
      </div>
    </div>
  )
}
