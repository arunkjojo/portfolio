import { useEffect, useState } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { MessageCircle, X } from 'lucide-react'
import { useTranslation } from '../lib/i18n'
import { isRedirectPath, whatsappUrl } from '../lib/redirects'

const SESSION_FLAG = 'wa_redirect_done'
const COUNTDOWN_SECONDS = 5
const MOBILE_QUERY = '(max-width: 768px) and (pointer: coarse)'

function readFlag(): boolean {
  try {
    return window.sessionStorage.getItem(SESSION_FLAG) === '1'
  } catch {
    return false
  }
}

function writeFlag() {
  try {
    window.sessionStorage.setItem(SESSION_FLAG, '1')
  } catch {
    // storage blocked: prompt may reappear on reload, which is acceptable
  }
}

/** Mobile-only bottom banner that opens WhatsApp after a visible, cancellable countdown. */
export default function WhatsAppPrompt() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const { t } = useTranslation()
  const [active, setActive] = useState(false)
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS)

  // Decide once whether to show (client-only).
  useEffect(() => {
    if (isRedirectPath(pathname) || readFlag()) return
    if (!window.matchMedia(MOBILE_QUERY).matches) return
    setActive(true)
    // Runs once on first load; later navigation is handled below.
  }, [])

  // Navigating to /r while the banner is up cancels it silently.
  useEffect(() => {
    if (active && isRedirectPath(pathname)) setActive(false)
  }, [active, pathname])

  useEffect(() => {
    if (!active) return
    const id = window.setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000)
    return () => window.clearInterval(id)
  }, [active])

  useEffect(() => {
    if (!active || seconds > 0) return
    writeFlag()
    setActive(false)
    window.location.assign(whatsappUrl(t.whatsapp.message))
  }, [active, seconds, t.whatsapp.message])

  if (!active) return null

  const cancel = () => {
    writeFlag()
    setActive(false)
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-50 flex items-center gap-3 rounded-2xl border border-[var(--chip-line)] bg-[var(--surface-strong)] p-3 shadow-[0_12px_32px_rgba(0,0,0,0.18)] backdrop-blur-md"
    >
      <MessageCircle className="h-5 w-5 shrink-0 text-[var(--lagoon-deep)]" aria-hidden="true" />
      <p className="m-0 flex-1 text-sm font-semibold text-[var(--sea-ink)]">
        {t.whatsapp.countdown.replace('{s}', String(seconds))}
      </p>
      <button
        type="button"
        onClick={cancel}
        className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-bold text-[var(--sea-ink)]"
      >
        <X className="h-3.5 w-3.5" aria-hidden="true" />
        {t.whatsapp.cancel}
      </button>
    </div>
  )
}
