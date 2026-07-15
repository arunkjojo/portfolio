import { Zap } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Stats() {
  const { t } = useTranslation()

  const statsList = [
    { value: t.stats.experience.value, label: t.stats.experience.label, desc: t.stats.experience.desc },
    { value: t.stats.throughput.value, label: t.stats.throughput.label, desc: t.stats.throughput.desc },
    { value: t.stats.bottlenecks.value, label: t.stats.bottlenecks.label, desc: t.stats.bottlenecks.desc },
    { value: t.stats.delivery.value, label: t.stats.delivery.label, desc: t.stats.delivery.desc }
  ]

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
      {statsList.map((stat, idx) => (
        <div
          key={idx}
          className="island-shell feature-card rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <Zap className="h-12 w-12 text-[var(--lagoon-deep)]" />
          </div>
          <div className="text-3xl font-black text-[var(--lagoon-deep)] mb-1">{stat.value}</div>
          <div className="text-sm font-bold text-[var(--sea-ink)] mb-1">{stat.label}</div>
          <div className="text-xs text-[var(--sea-ink-soft)]">{stat.desc}</div>
        </div>
      ))}
    </section>
  )
}
