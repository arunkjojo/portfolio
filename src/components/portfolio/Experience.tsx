import { Briefcase } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Experience() {
  const { t } = useTranslation()

  // Static company/period data paired with localized key contents
  const rolesList = [
    {
      key: 'gesher' as const,
      company: 'Gesher Technologies',
      period: 'May 2026 – Present'
    },
    {
      key: 'upskillingGap' as const,
      company: 'Self-Employed / Personal Projects',
      period: 'Sep 2025 – Apr 2026'
    },
    {
      key: 'bct' as const,
      company: 'BCT Consulting',
      period: 'Jun 2024 – Aug 2025'
    },
    {
      key: 'inluxFull' as const,
      company: 'Inlux Intelligence',
      period: 'Oct 2022 – Jun 2024'
    },
    {
      key: 'hats' as const,
      company: '2Hats Logic Solutions',
      period: 'Apr 2022 – Sep 2022'
    },
    {
      key: 'inluxReact' as const,
      company: 'Inlux Intelligence',
      period: 'Jan 2020 – Mar 2022'
    }
  ]

  return (
    <section id="experience" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.experience.title}</h2>
      </div>
      
      <div className="relative border-l border-[var(--line)] ml-4 pl-6 md:pl-8 space-y-12">
        {rolesList.map((role, idx) => {
          const roleDetails = t.experience.roles[role.key]
          return (
            <div key={idx} className="relative">
              {/* Bullet node on timeline */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-[var(--lagoon)] border-4 border-[var(--bg-base)] shadow-sm" />
              
              <div className="island-shell p-6 rounded-2xl">
                <span className="text-xs font-bold text-[var(--lagoon-deep)] uppercase tracking-wider block mb-1">
                  {role.period}
                </span>
                <h3 className="text-lg font-bold text-[var(--sea-ink)] flex flex-wrap gap-2 items-center">
                  <span>{roleDetails.role}</span>
                  <span className="text-[var(--sea-ink-soft)] text-sm font-normal">{t.experience.at}</span>
                  <span className="text-[var(--lagoon-deep)] font-semibold">{role.company}</span>
                </h3>
                <span className="text-xs text-[var(--sea-ink-soft)] block mb-4">
                  {roleDetails.location}
                </span>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--sea-ink-soft)]">
                  {roleDetails.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
