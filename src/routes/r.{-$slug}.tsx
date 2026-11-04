import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import { ExternalLink, LinkIcon } from 'lucide-react'
import { useTranslation } from '../lib/i18n'
import { resolveRedirect } from '../lib/redirects'

const HOME_REDIRECT_SECONDS = 5

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
  const navigate = useNavigate()

  const result = useMemo(() => resolveRedirect(slug, url), [slug, url])
  const missing = !result.ok && result.reason === 'missing'
  const [seconds, setSeconds] = useState(HOME_REDIRECT_SECONDS)

  useEffect(() => {
    if (result.ok) window.location.replace(result.href)
  }, [result])

  // No target given (/r or /r?url=): show "Link not available", then go home.
  useEffect(() => {
    if (!missing) return
    setSeconds(HOME_REDIRECT_SECONDS)
    const tick = window.setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000)
    const done = window.setTimeout(() => navigate({ to: '/', replace: true }), HOME_REDIRECT_SECONDS * 1000)
    return () => {
      window.clearInterval(tick)
      window.clearTimeout(done)
    }
  }, [missing, navigate])

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
            <p className="mb-6 text-sm text-[var(--sea-ink-soft)]">
              {missing ? t.redirect.missingDesc : t.redirect.invalidDesc}
            </p>
            {missing && (
              <p className="mb-6 text-sm font-semibold text-[var(--lagoon-deep)]" aria-live="polite">
                {t.redirect.homeCountdown.replace('{s}', String(seconds))}
              </p>
            )}
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
