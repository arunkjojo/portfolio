import { Globe, Mail, Phone, Linkedin } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Contact() {
  const { t } = useTranslation()

  const contactItems = [
    {
      label: t.contact.website,
      icon: <Linkedin className="h-4 w-4 text-[var(--lagoon-deep)] flex-shrink-0" />,
      value: (
        <a href="https://www.linkedin.com/in/arunkjojo" target="_blank" rel="noopener noreferrer" className="hover:underline text-[var(--sea-ink)] font-bold">
          arunkjojo
        </a>
      )
    },
    {
      label: t.contact.email,
      icon: <Mail className="h-4 w-4 text-[var(--lagoon-deep)] flex-shrink-0" />,
      value: (
        <a href="mailto:arunkjojo@gmail.com" className="hover:underline text-[var(--sea-ink)] font-bold break-all">
          arunkjojo@gmail.com
        </a>
      )
    },
    {
      label: t.contact.phone,
      icon: <Phone className="h-4 w-4 text-[var(--lagoon-deep)] flex-shrink-0" />,
      value: (
        <a href="tel:+919400247717" className="hover:underline text-[var(--sea-ink)] font-bold whitespace-nowrap">
          +91 94002 47717
        </a>
      )
    },
    {
      label: t.contact.location,
      icon: <Globe className="h-4 w-4 text-[var(--lagoon-deep)] flex-shrink-0" />,
      value: <span className="text-[var(--sea-ink)] font-bold">{t.contact.locationVal}</span>
    }
  ]

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="flex items-center gap-2 mb-8">
        <Mail className="h-6 w-6 text-[var(--lagoon-deep)]" />
        <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">{t.contact.title}</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item, idx) => (
          <div key={idx} className="island-shell p-5 rounded-2xl flex flex-row items-center justify-between gap-3">
            <span className="text-[10px] font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider">
              {item.label}
            </span>
            <div className="flex items-center gap-2 overflow-hidden">
              {item.icon}
              <span className="text-xs sm:text-sm overflow-hidden text-ellipsis">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
