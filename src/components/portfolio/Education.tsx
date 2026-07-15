import { GraduationCap } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'
import SpeakButton from './SpeakButton'

export default function Education() {
  const { t, language } = useTranslation()

  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.education.title}</h2>
      </div>

      <div className="island-shell p-6 rounded-2xl animate-fade-in">
        <div className="flex justify-between items-start gap-4 mb-3">
          <div>
            <span className="text-xs font-bold text-[var(--lagoon-deep)] uppercase tracking-wider block mb-1">
              {t.education.period}
            </span>
            <h3 className="text-lg font-bold text-[var(--sea-ink)] mb-1 leading-tight">
              {t.education.degree}
            </h3>
            <span className="text-sm text-[var(--sea-ink-soft)] block">
              {t.education.school}
            </span>
          </div>
          <div className="flex-shrink-0">
            <SpeakButton 
              text={`${t.education.degree} at ${t.education.school}. ${t.education.bullets.join(' ')}`} 
              lang={language} 
            />
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--sea-ink-soft)]">
          {t.education.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
