import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo } from 'react'
import { ExternalLink, LinkIcon } from 'lucide-react'
import { useTranslation } from '../lib/i18n'
import { resolveRedirect } from '../lib/redirects'

export const Route = createFileRoute('/r/{-$slug}')({
  validateSearch: (search: Record<string, unknown>): { url?: string } => ({
    url: typeof search.url === 'string' ? search.url : undefined,
  }),
  component: RedirectPage,
})

function RedirectPage() {
  const { slug } = Route.useParams()
  const { url } = Route.useSearch()
  const { t } = useTranslation()

  const result = useMemo(() => resolveRedirect(slug, url), [slug, url])

  useEffect(() => {
    if (result.ok) window.location.replace(result.href)
  }, [result])

  const host = result.ok ? new URL(result.href, window.location.origin).host : ''

  return (
    <main className="page-wrap px-4 pb-16 pt-32">
      <section className="island-shell mx-auto max-w-xl rounded-[2rem] p-8 text-center">
        {result.ok ? (
          <>
            <ExternalLink className="mx-auto mb-4 h-8 w-8 text-[var(--lagoon-deep)]" />
            <p className="mb-2 text-lg font-bold text-[var(--sea-ink)]" aria-live="polite">
              {t.redirect.redirecting} {host}…
            </p>
            <a href={result.href} rel="noopener noreferrer" className="text-sm font-semibold text-[var(--lagoon-deep)] underline">
              {t.redirect.fallback}
            </a>
          </>
        ) : (
          <>
            <LinkIcon className="mx-auto mb-4 h-8 w-8 text-[var(--lagoon-deep)]" />
            <h1 className="mb-2 text-xl font-bold text-[var(--sea-ink)]">{t.redirect.invalidTitle}</h1>
            <p className="mb-6 text-sm text-[var(--sea-ink-soft)]">{t.redirect.invalidDesc}</p>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-6 py-3 text-sm font-bold text-[var(--lagoon-deep)] no-underline"
            >
              {t.redirect.backHome}
            </a>
          </>
        )}
      </section>
    </main>
  )
}
