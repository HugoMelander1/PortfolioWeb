import { education, experience, profile, skills, type TimelineItem } from '../data/profile.ts'
import { usePageTitle } from '../hooks/usePageTitle.ts'

export default function AboutPage() {
  usePageTitle('Om mig')

  return (
    <div className="container">
      <header className="page-header">
        <p className="eyebrow">Om mig</p>
        <h1 tabIndex={-1}>{profile.name}</h1>
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="lead">
            {paragraph}
          </p>
        ))}
      </header>

      <div className="about-grid">
        <Timeline id="experience" title="Erfarenhet" items={experience} />
        <Timeline id="education" title="Utbildning" items={education} />
      </div>

      <section className="section" aria-labelledby="skills-title">
        <h2 id="skills-title" className="section-title">
          Kompetenser
        </h2>
        <dl className="skill-groups">
          {skills.map((group, index) => (
            <div key={group.category} className="skill-group reveal" style={{ animationDelay: `${index * 50}ms` }}>
              <dt>{group.category}</dt>
              <dd>
                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li key={skill} className="skill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}

function Timeline({ id, title, items }: { id: string; title: string; items: TimelineItem[] }) {
  return (
    <section className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      <ol className="timeline">
        {items.map((item) => (
          <li key={`${item.title}-${item.period}`} className="timeline-item">
            <p className="timeline-period">{item.period}</p>
            <h3>{item.title}</h3>
            <p className="timeline-org">
              {item.organisation}
              {item.location && <span className="timeline-location">, {item.location}</span>}
            </p>
            {item.description.map((paragraph) => (
              <p key={paragraph} className="timeline-text">
                {paragraph}
              </p>
            ))}
            {item.technologies && item.technologies.length > 0 && (
              <ul className="tag-list" aria-label="Tekniker">
                {item.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
