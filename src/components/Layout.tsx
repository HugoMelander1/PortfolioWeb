import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import Footer from './Footer.tsx'
import Header from './Header.tsx'

export default function Layout() {
  const { pathname } = useLocation()
  const previousPath = useRef(pathname)

  // Vid sidbyte: scrolla upp och flytta fokus till sidans rubrik,
  // så att tangentbords- och skärmläsaranvändare märker att sidan bytts.
  // Vid första laddningen är sökvägen oförändrad och inget händer.
  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    window.scrollTo(0, 0)
    document.querySelector<HTMLElement>('main h1')?.focus()
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">
        Hoppa till innehållet
      </a>
      <Header />
      {/* key gör att in-animationen spelas om för varje ny sida */}
      <main id="main" className="page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
