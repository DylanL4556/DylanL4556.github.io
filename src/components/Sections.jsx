import { about, education, experience, featured, profile, projects, skills } from '../lib/data'
import { ArrowIcon } from './Icons'

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title" data-reveal>
        {title}
      </h2>
      {children}
    </section>
  )
}

const Tags = ({ items }) => (
  <ul className="tags">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
)

export function About() {
  return (
    <Section id="about" title="About">
      <div className="prose" data-reveal>
        {about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </Section>
  )
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.title + job.org} className="job" data-reveal>
            <p className="mono job-dates">{job.dates}</p>
            <div>
              <h3 className="job-title">
                {job.title} <span className="job-org">· {job.org}</span>
              </h3>
              <ul className="bullets">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Tags items={job.tags} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects & Research">
      <div className="featured">
        {featured.map((p) => (
          <article key={p.title} className="card card-featured" data-reveal>
            <p className="mono card-kind">{p.kind}</p>
            <h3 className="card-title">{p.title}</h3>
            <p className="card-text">{p.summary}</p>
            <dl className="stats">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <dt className="mono">{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
            <Tags items={p.tags} />
            <div className="card-foot">
              <div className="links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link">
                    {l.label} <ArrowIcon />
                  </a>
                ))}
              </div>
              {p.note && <p className="card-note">{p.note}</p>}
            </div>
          </article>
        ))}
      </div>

      <h3 className="subhead mono" data-reveal>Other projects</h3>
      <div className="grid">
        {projects.map((p) => {
          const body = (
            <>
              <h4 className="card-title small">
                {p.title} {p.href && <ArrowIcon />}
              </h4>
              <p className="card-text">{p.summary}</p>
              <Tags items={p.tags} />
            </>
          )
          return p.href ? (
            <a key={p.title} href={p.href} target="_blank" rel="noreferrer" className="card card-link" data-reveal>
              {body}
            </a>
          ) : (
            <article key={p.title} className="card" data-reveal>
              {body}
            </article>
          )
        })}
      </div>
      <p className="more" data-reveal>
        More code on{' '}
        <a href={profile.github} target="_blank" rel="noreferrer" className="link">
          GitHub <ArrowIcon />
        </a>
      </p>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skill-group" data-reveal>
            <h3 className="mono skill-head">{g.group}</h3>
            <Tags items={g.items} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="edu" data-reveal>
        <div>
          <h3 className="job-title">{education.degree}</h3>
          <p className="muted">{education.school}</p>
        </div>
        <p className="mono job-dates">{education.date}</p>
      </div>
      <ul className="honors" data-reveal>
        {education.honors.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </Section>
  )
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact" data-reveal>
        <p className="prose-lead">
          I’m interested in back-end, algorithms and ML engineering roles. The best way to reach me is email.
        </p>
        <a href={`mailto:${profile.email}`} className="btn">
          Say hello
        </a>
      </div>
      <footer className="footer mono">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React + Vite</span>
      </footer>
    </Section>
  )
}
