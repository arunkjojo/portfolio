import { Globe, Mail, MessageSquareMore, Linkedin } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Contact() {
  const { t } = useTranslation()

  const contactItems = [
    {
      label: t.contact.website,
      icon: <Linkedin className="h-5 w-5 text-[var(--lagoon-deep)] flex-shrink-0" />,
      link: 'https://www.linkedin.com/in/arunkjojo',
      value: (
        <a href="https://www.linkedin.com/in/arunkjojo" target="_blank" rel="noopener noreferrer" className="hover:underline text-[var(--sea-ink)] font-bold">
          arunkjojo
        </a>
      )
    },
    {
      label: t.contact.email,
      icon: <Mail className="h-5 w-5 text-[var(--lagoon-deep)] flex-shrink-0" />,
      link: 'mailto:arunkjojo@gmail.com',
      value: (
        <a href="mailto:arunkjojo@gmail.com" className="hover:underline text-[var(--sea-ink)] font-bold break-all">
          arunkjojo@gmail.com
        </a>
      )
    },
    {
      label: t.contact.phone,
      icon: <MessageSquareMore className="h-5 w-5 text-[var(--lagoon-deep)] flex-shrink-0" />,
      link: 'https://wa.me/919400247717',
      value: (
        <a href="https://wa.me/919400247717" className="hover:underline text-[var(--sea-ink)] font-bold whitespace-nowrap">
          +91 94002 47717
        </a>
      )
    },
    {
      label: t.contact.location,
      icon: <Globe className="h-5 w-5 text-[var(--lagoon-deep)] flex-shrink-0" />,
      link: '/',
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
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={idx} className="island-shell p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-2">
            <div className="flex items-center gap-2 overflow-hidden">
              {item.icon}
              <span className="text-sm overflow-hidden text-ellipsis">
                {item.value}
              </span>
            </div>
            <span className="text-[10px] font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider block">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
