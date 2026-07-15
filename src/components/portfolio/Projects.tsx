import { ExternalLink, Terminal } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Projects() {
  const { t } = useTranslation()

  const projectList = [
    {
      name: 'FurnitureApp',
      period: 'Nov 2023',
      description: t.projects.furniture,
      tags: ['React Native', 'Expo', 'Node.js', 'Stripe', 'Mobile']
    },
    {
      name: 'google_redesign',
      period: 'Oct 2023',
      description: t.projects.googleRedesign,
      tags: ['Vite', 'Storybook', 'Lerna', 'Monorepo', 'React']
    },
    {
      name: 'React-eCommerce-App',
      period: 'Dec 2023',
      description: t.projects.ecommerceApp,
      tags: ['React', 'Redux Toolkit', 'Redux Thunk', 'Styled Components', 'Bootstrap']
    },
    {
      name: 'Ecommerce React Js application',
      period: 'May 2022 - Jun 2022',
      description: t.projects.pizzaOrder,
      tags: ['React.js', 'PayPal API', 'Vercel', 'E-commerce'],
      links: [
        { label: 'Demo', url: 'https://pizza-order-tau.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/arunkjojo/pizza-order' }
      ]
    },
    {
      name: 'Voice Translation App',
      period: 'Apr 2022 - May 2022',
      description: t.projects.voiceTranslation,
      tags: ['React Native', 'Android', 'WebRTC', 'Redux Toolkit']
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
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-bold text-[var(--sea-ink-soft)] bg-[var(--chip-bg)] border border-[var(--chip-line)] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              {proj.links && (
                <div className="flex gap-4 pt-2 border-t border-[var(--line)]">
                  {proj.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[var(--lagoon-deep)] no-underline hover:underline"
                    >
                      {link.label} <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
