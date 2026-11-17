import Sidebar from './components/Sidebar'
import { About, Contact, Education, Experience, Projects, Skills } from './components/Sections'
import { useActiveSection, useReveal, useTheme } from './lib/hooks'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
const IDS = SECTIONS.map((s) => s.id)

export default function App() {
  useReveal()
  const active = useActiveSection(IDS)
  const toggleTheme = useTheme()

  return (
    <div className="layout">
      <a href="#about" className="skip">Skip to content</a>
      <Sidebar sections={SECTIONS} active={active} onToggleTheme={toggleTheme} />
      <main className="content">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
