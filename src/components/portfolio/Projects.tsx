import { Terminal } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Projects() {
  const { t } = useTranslation()

  const projectList = [
    {
      name: 'Market Place Web App',
      period: 'Representative Project',
      description: t.projects.marketplace,
      tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Docker']
    },
    {
      name: 'Voice Translation App',
      period: 'Representative Project',
      description: t.projects.voiceTranslation,
      tags: ['React Native', 'Android', 'WebRTC', 'Redux Toolkit', 'Audio Conversion']
    },
    {
      name: 'Ecommerce Application',
      period: 'Representative Project',
      description: t.projects.ecommerce,
      tags: ['Next.js', 'Stripe API', 'Redux', 'Bootstrap', 'Node.js']
    },
    {
      name: 'SaaS Application',
      period: 'Personal Project',
      description: t.projects.saas,
      tags: ['React', 'Node.js', 'Docker', 'GitHub Actions', 'CI/CD']
    },
    {
      name: 'Shop-store Native App',
      period: 'Representative Project',
      description: t.projects.shopStore,
      tags: ['React Native', 'PWA Service Worker', 'Firebase', 'Google Play Store']
    },
    {
      name: 'IIoT Live Monitoring System',
      period: 'Representative Project',
      description: t.projects.iiot,
      tags: ['React.js', 'WebSockets', 'Node.js', 'PostgreSQL', 'Real-time Charting']
    }
  ]

  return (
    <section id="projects" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-2 mb-8">
        <Terminal className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.projects.title}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projectList.map((proj, idx) => (
          <article key={idx} className="island-shell feature-card rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="text-lg font-bold text-[var(--sea-ink)]">{proj.name}</h3>
                <span className="text-xs text-[var(--sea-ink-soft)] font-medium whitespace-nowrap bg-[var(--chip-bg)] border border-[var(--chip-line)] px-2 py-0.5 rounded-full">
                  {proj.period}
                </span>
              </div>
              <p className="text-sm text-[var(--sea-ink-soft)] mb-6 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold text-[var(--sea-ink-soft)] bg-[var(--chip-bg)] border border-[var(--chip-line)] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
