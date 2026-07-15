import { Globe, Mail, Phone, Link2 } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Contact() {
  const { t } = useTranslation()

  const contactItems = [
    {
      label: t.contact.website,
      icon: <Link2 className="h-5 w-5 text-[var(--lagoon-deep)] flex-shrink-0" />,
      value: (
        <a href="https://www.linkedin.com/in/arunkjojo" target="_blank" rel="noopener noreferrer" className="hover:underline text-[var(--sea-ink)] break-all font-bold">
          linkedin.com/in/arunkjojo
        </a>
      )
    },
    {
      label: t.contact.email,
      icon: <Mail className="h-5 w-5 text-[var(--lagoon-deep)] flex-shrink-0" />,
      value: (
        <a href="mailto:arunkjojo@gmail.com" className="hover:underline text-[var(--sea-ink)] break-all font-bold">
          arunkjojo@gmail.com
        </a>
      )
    },
    {
      label: t.contact.phone,
      icon: <Phone className="h-5 w-5 text-[var(--lagoon-deep)] flex-shrink-0" />,
      value: (
        <a href="tel:+919400247717" className="hover:underline text-[var(--sea-ink)] font-bold">
          +91 94002 47717
        </a>
      )
    },
    {
      label: t.contact.location,
      icon: <Globe className="h-5 w-5 text-[var(--lagoon-deep)] flex-shrink-0" />,
      value: <span className="text-[var(--sea-ink)] font-bold">{t.contact.locationVal}</span>
    }
  ]

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="flex items-center gap-2 mb-8">
        <Mail className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.contact.title}</h2>
      </div>

      <div className="island-shell p-6 md:p-8 rounded-3xl max-w-2xl">
        <div className="divide-y divide-[var(--line)]">
          {contactItems.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-4 first:pt-0 last:pb-0 gap-2 sm:gap-4">
              <span className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider min-w-[150px]">
                {item.label}
              </span>
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
