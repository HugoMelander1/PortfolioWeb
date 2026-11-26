import { Link, useParams } from 'react-router'
import ProjectLinks from '../components/ProjectLinks.tsx'
import StatusBadge from '../components/StatusBadge.tsx'
import { findProject } from '../data/projects.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'
import NotFoundPage from './NotFoundPage.tsx'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = findProject(slug)
  usePageTitle(project ? project.title : 'Sidan finns inte')

  if (!project) return <NotFoundPage />

  const sections = [
    { heading: 'Problemet', text: project.problem },
    { heading: 'Lösningen', text: project.solution },
    { heading: 'Min roll', text: project.role },
  ]

  return (
    <article className="container project-page">
      <Link to="/explore" className="back-link">
        <span aria-hidden="true">←</span> Alla projekt
      </Link>

      <header className="page-header">
        <div className="badge-row">
          <StatusBadge status={project.status} />
          {project.isPlaceholder && <span className="badge badge-placeholder">Platshållare</span>}
        </div>
        <h1 tabIndex={-1}>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <ProjectLinks project={project} />
      </header>

      {project.image?.src && (
        <img className="project-hero-image" src={project.image.src} alt={project.image.alt} />
      )}

      <div className="project-details">
        {sections.map((section) => (
          <section key={section.heading} className="detail-block">
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}

        {project.technologies.length > 0 && (
          <section className="detail-block">
            <h2>Tekniker</h2>
            <ul className="tag-list">
              {project.technologies.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  )
}
