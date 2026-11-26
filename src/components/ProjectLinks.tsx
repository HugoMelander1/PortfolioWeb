import type { Project } from '../data/projects.ts'

// Visar bara de knappar som har en länk. Finns ingen länk alls visas inget.
export default function ProjectLinks({ project }: { project: Project }) {
  const { githubUrl, demoUrl, title } = project
  if (!githubUrl && !demoUrl) return null

  return (
    <div className="button-row">
      {githubUrl && (
        <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
          Kod på GitHub<span className="visually-hidden"> för {title} (öppnas i ny flik)</span>
        </a>
      )}
      {demoUrl && (
        <a className="button button-primary" href={demoUrl} target="_blank" rel="noreferrer">
          Testa demo<span className="visually-hidden"> av {title} (öppnas i ny flik)</span>
        </a>
      )}
    </div>
  )
}
