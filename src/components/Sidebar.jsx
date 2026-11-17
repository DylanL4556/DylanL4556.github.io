import { profile } from '../lib/data'
import { GitHubIcon, LinkedInIcon, MailIcon, ThemeIcon } from './Icons'

export default function Sidebar({ sections, active, onToggleTheme }) {
  return (
    <header className="sidebar">
      <div>
        <p className="mono prompt">~/dylan-lott</p>
        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>

        <nav className="toc" aria-label="Sections">
          <ol>
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? 'is-active' : undefined} aria-current={active === s.id ? 'true' : undefined}>
                  <span className="mono toc-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="toc-line" />
                  <span className="toc-label">{s.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="sidebar-foot">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn"><GitHubIcon /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn"><LinkedInIcon /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn"><MailIcon /></a>
        <button type="button" onClick={onToggleTheme} aria-label="Toggle light or dark theme" className="icon-btn"><ThemeIcon /></button>
      </div>
    </header>
  )
}
