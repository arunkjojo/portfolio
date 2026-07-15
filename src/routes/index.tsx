import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/portfolio/Hero'
import Stats from '../components/portfolio/Stats'
import Experience from '../components/portfolio/Experience'
import Projects from '../components/portfolio/Projects'
import Skills from '../components/portfolio/Skills'
import Certifications from '../components/portfolio/Certifications'
import Education from '../components/portfolio/Education'
import Contact from '../components/portfolio/Contact'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-16 pt-24">
      <Hero />
      <Stats />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
