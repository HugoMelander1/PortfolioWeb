import { useEffect } from 'react'

const SITE_NAME = 'Hugo Melander'

/** Sätter texten i webbläsarfliken, t.ex. "Om mig – Hugo Melander". */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} – ${SITE_NAME}` : `${SITE_NAME} – Systemvetare`
  }, [title])
}
