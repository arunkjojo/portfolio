import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
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
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.scroll-fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="page-wrap px-4 pb-16 pt-24 overflow-x-hidden">
      <div className="scroll-fade-in">
        <Hero />
      </div>
      <div className="scroll-fade-in">
        <Stats />
      </div>
      <div className="scroll-fade-in">
        <Experience />
      </div>
      <div className="scroll-fade-in">
        <Skills />
      </div>
      <div className="scroll-fade-in">
        <Certifications />
      </div>
      <div className="scroll-fade-in">
        <Projects />
      </div>
      <div className="scroll-fade-in">
        <Education />
      </div>
      <div className="scroll-fade-in">
        <Contact />
      </div>
    </main>
  )
}
