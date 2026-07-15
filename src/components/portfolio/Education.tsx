import { GraduationCap } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Education() {
  const { t } = useTranslation()

  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.education.title}</h2>
      </div>

      <div className="island-shell p-6 rounded-2xl">
        <span className="text-xs font-bold text-[var(--lagoon-deep)] uppercase tracking-wider block mb-1">
          {t.education.period}
        </span>
        <h3 className="text-lg font-bold text-[var(--sea-ink)] mb-1">
          {t.education.degree}
        </h3>
        <span className="text-sm text-[var(--sea-ink-soft)] block mb-4">
          {t.education.school}
        </span>
        <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--sea-ink-soft)]">
          {t.education.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
