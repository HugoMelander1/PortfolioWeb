import { Link } from 'react-router'
import type { Project } from '../data/projects.ts'
import StatusBadge from './StatusBadge.tsx'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {project.image?.src && (
        <img className="project-image" src={project.image.src} alt={project.image.alt} loading="lazy" />
      )}
      <div className="project-card-body">
        <div className="badge-row">
          <StatusBadge status={project.status} />
          {project.isPlaceholder && <span className="badge badge-placeholder">Platshållare</span>}
        </div>
        <h2 className="project-title">
          {/* Hela kortet blir klickbart via CSS (::after på länken). */}
          <Link to={`/portfolio/${project.slug}`} className="card-link">
            {project.title}
          </Link>
        </h2>
        <p>{project.summary}</p>
        {project.technologies.length > 0 && (
          <ul className="tag-list" aria-label="Tekniker">
            {project.technologies.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        )}
        <span className="read-more" aria-hidden="true">
          Läs mer →
        </span>
      </div>
    </article>
  )
}
