import { Award } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Certifications() {
  const { t } = useTranslation()

  const certificationsList = [
    { title: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', date: 'Aug 2025' },
    { title: 'Claude Code 101', issuer: 'Anthropic', date: 'Jul 2025' },
    { title: 'Claude Code: Software Engineering with Generative AI', issuer: 'Anthropic', date: 'Jul 2025' },
    { title: 'Back-End Development with .NET', issuer: 'Anthropic', date: 'Jul 2025' },
    { title: 'Learn by Doing - Prompt Engineering 101', issuer: 'KodeKloud', date: 'Aug 2025' },
    { title: '12 Factor App', issuer: 'KodeKloud', date: 'Jul 2025' },
    { title: 'Ethical Hacking Stage 2 - Hacking the MAC', issuer: 'Hacker X', date: 'Aug 2025' },
    { title: 'Ethical Hacking Stage 1 - Know the OS', issuer: 'Hacker X', date: 'Aug 2025' },
    { title: 'AI tools and ChatGPT workshop', issuer: 'Be10x', date: 'Nov 2024' },
    { title: 'Certificate in Prompt Engineering for ChatGPT', issuer: 'Great Learning', date: 'Nov 2024' },
    { title: 'Certificate in React.js', issuer: 'CareerNinja | LearnTube', date: 'Jun 2024' },
    { title: 'Mastering JavaScript Fundamentals', issuer: 'Geekster', date: 'May 2024' },
    { title: 'React and Redux Certification Test', issuer: 'KGCoding by Prashant Sir', date: 'Mar 2024' },
    { title: 'Udemy Certification on React JS', issuer: 'Udemy', date: 'Mar 2022' }
  ]

  return (
    <section id="certifications" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-2 mb-8">
        <Award className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.certifications.title}</h2>
      </div>

      <div className="island-shell rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="demo-table text-left">
            <thead>
              <tr>
                <th>{t.certifications.headers.name}</th>
                <th>{t.certifications.headers.issuer}</th>
                <th>{t.certifications.headers.date}</th>
              </tr>
            </thead>
            <tbody>
              {certificationsList.map((cert, idx) => (
                <tr key={idx}>
                  <td className="font-bold text-[var(--sea-ink)] text-sm">{cert.title}</td>
                  <td className="text-[var(--sea-ink-soft)] text-sm">{cert.issuer}</td>
                  <td className="text-[var(--sea-ink-soft)] text-sm whitespace-nowrap">{cert.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
