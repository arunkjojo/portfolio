import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import type { ComponentType } from 'react'
import { ExternalLink, FileText, Github, LinkIcon, Linkedin, MessageCircle } from 'lucide-react'
import { useTranslation } from '../lib/i18n'
import { LINKS, getConfiguredRedirect, whatsappUrl } from '../lib/redirects'

// Build-time constant (VITE_REDIRECT_URL), so resolve once.
const TARGET = getConfiguredRedirect()

export const Route = createFileRoute('/r')({
  component: RedirectPage,
})

function RedirectPage() {
  return TARGET ? <Redirecting href={TARGET} /> : <LinksList />
}

function Redirecting({ href }: { href: string }) {
  const { t } = useTranslation()

  useEffect(() => {
    window.location.replace(href)
  }, [href])

  const host = new URL(href, window.location.origin).host

  return (
    <main className="page-wrap px-4 pb-16 pt-32">
      <section className="island-shell mx-auto max-w-xl rounded-[2rem] p-8 text-center">
        <ExternalLink className="mx-auto mb-4 h-8 w-8 text-[var(--lagoon-deep)]" />
        <p className="mb-2 text-lg font-bold text-[var(--sea-ink)]" aria-live="polite">
          {t.redirect.redirecting} {host}…
        </p>
        <a href={href} rel="noopener noreferrer" className="text-sm font-semibold text-[var(--lagoon-deep)] underline">
          {t.redirect.fallback}
        </a>
      </section>
    </main>
  )
}

const chipClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-6 py-3 text-sm font-bold text-[var(--lagoon-deep)] no-underline'

function LinksList() {
  const { t } = useTranslation()

  const links: { label: string; href: string; Icon: ComponentType<{ className?: string }> }[] = [
    { label: 'GitHub', href: LINKS.github, Icon: Github },
    { label: 'LinkedIn', href: LINKS.linkedin, Icon: Linkedin },
    { label: t.redirect.resume, href: LINKS.resume, Icon: FileText },
    { label: t.redirect.whatsapp, href: whatsappUrl(t.whatsapp.message), Icon: MessageCircle },
  ]

  return (
    <main className="page-wrap px-4 pb-16 pt-32">
      <section className="island-shell mx-auto max-w-xl rounded-[2rem] p-8 text-center">
        <LinkIcon className="mx-auto mb-4 h-8 w-8 text-[var(--lagoon-deep)]" />
        <h1 className="mb-2 text-xl font-bold text-[var(--sea-ink)]">{t.redirect.linksTitle}</h1>
        <p className="mb-6 text-sm text-[var(--sea-ink-soft)]">{t.redirect.linksDesc}</p>
        <ul className="mb-6 grid gap-3 sm:grid-cols-2">
          {links.map(({ label, href, Icon }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" className={chipClass}>
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/" className="text-sm font-semibold text-[var(--lagoon-deep)] underline">
          {t.redirect.backHome}
        </a>
      </section>
    </main>
  )
}
