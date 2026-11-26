import ProjectCard from '../components/ProjectCard.tsx'
import { projects } from '../data/projects.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'

export default function ExplorePage() {
  usePageTitle('Projekt')

  return (
    <div className="container">
      <header className="page-header">
        <p className="eyebrow">Projekt</p>
        <h1 tabIndex={-1}>Det här har jag byggt</h1>
        <p className="lead">
          Varje projekt har en egen sida med problem, lösning och min roll, och ett eget repo på GitHub.
        </p>
      </header>

      <ul className="project-grid">
        {projects.map((project, index) => (
          <li key={project.slug} className="reveal" style={{ animationDelay: `${index * 100}ms` }}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  )
}
