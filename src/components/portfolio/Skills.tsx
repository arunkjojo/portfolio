import { Cpu, Database, Terminal, Zap, Wrench, TrendingUp, CheckCircle2 } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Skills() {
  const { t } = useTranslation()

  const skillGroups = [
    {
      category: t.skills.categories.frontend,
      icon: <Cpu className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'PWA Service Worker']
    },
    {
      category: t.skills.categories.backend,
      icon: <Terminal className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['Node.js-Express.js', 'PHP', 'ASP.NET Core Web API', 'RESTful APIs', 'WebSockets']
    },
    {
      category: t.skills.categories.devops,
      icon: <Zap className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: [
        'Docker',
        'Helm',
        'Kubernetes',
        'Terraform',
        'ArgoCD',
        'GitHub Pipelines',
        'Zero-Downtime Release',
        'AIOps',
        'FluxCD',
        'Istio',
        'Prometheus & Grafana',
        'Cloud Platforms'
      ]
    },
    {
      category: t.skills.categories.databases,
      icon: <Database className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'Supabase']
    },
    {
      category: t.skills.categories.testing,
      icon: <Wrench className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['Playwright', 'B2B Testing', 'Postman Testing']
    },
    {
      category: t.skills.categories.ai,
      icon: <TrendingUp className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: [
        'GitHub Copilot',
        'Claude cowork & code',
        'Cursor AI',
        'Codex',
        'Lovable',
        'Bolt.new',
        'Agentic Orchestration',
        'Advanced Prompting',
        'SSD Development',
        'Workflow Automation',
        'AI Agents & Subagents',
        'AI Integrations'
      ]
    },
    {
      category: t.skills.categories.soft,
      icon: <CheckCircle2 className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['Leadership', 'Task Prioritization', 'Stress Management']
    }
  ]

  return (
    <section id="skills" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-2 mb-8">
        <Wrench className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.skills.title}</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="island-shell p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[var(--line)]">
              {group.icon}
              <h3 className="text-base font-bold text-[var(--sea-ink)]">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, sIdx) => (
                <span key={sIdx} className="text-xs font-medium text-[var(--sea-ink)] bg-[var(--chip-bg)] border border-[var(--chip-line)] px-2.5 py-1 rounded-lg animate-pulse-subtle">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
