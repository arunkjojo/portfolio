import { Globe, Mail, Phone } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="flex items-center gap-2 mb-8">
        <Mail className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.contact.title}</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="island-shell p-6 rounded-2xl flex flex-col justify-between">
          <span className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider block mb-2">{t.contact.email}</span>
          <div>
            <Mail className="h-6 w-6 text-[var(--lagoon-deep)] mb-2" />
            <a href="mailto:arunkjojo@gmail.com" className="text-sm font-bold block break-all text-[var(--sea-ink)] hover:underline">
              arunkjojo@gmail.com
            </a>
          </div>
        </div>

        <div className="island-shell p-6 rounded-2xl flex flex-col justify-between">
          <span className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider block mb-2">{t.contact.phone}</span>
          <div>
            <Phone className="h-6 w-6 text-[var(--lagoon-deep)] mb-2" />
            <a href="tel:+919400247717" className="text-sm font-bold block text-[var(--sea-ink)] hover:underline">
              +91 94002 47717
            </a>
          </div>
        </div>

        <div className="island-shell p-6 rounded-2xl flex flex-col justify-between">
          <span className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider block mb-2">{t.contact.location}</span>
          <div>
            <Globe className="h-6 w-6 text-[var(--lagoon-deep)] mb-2" />
            <span className="text-sm font-bold block text-[var(--sea-ink)]">
              {t.contact.locationVal}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
