// Links and env-configured redirect for the /r route.

export const WHATSAPP_NUMBER = '919400247717'

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Links shown on /r when no redirect target is configured. */
export const LINKS = {
  github: 'https://github.com/arunkjojo',
  linkedin: 'https://www.linkedin.com/in/arunkjojo',
  resume: '/docs/Arun-Jojo_Senior-DevOps-Engineer_Resume.pdf',
} as const

/**
 * Redirect target for /r, from VITE_REDIRECT_URL (set in Vercel project env
 * vars, or `.env` locally). Vite inlines it at build time, so a change in
 * Vercel needs a redeploy. Accepts an absolute https:// URL or a same-origin
 * path ("/docs/..."). Empty or invalid → null, and /r shows LINKS instead.
 */
export function getConfiguredRedirect(): string | null {
  const raw = (import.meta.env.VITE_REDIRECT_URL ?? '').trim()
  if (!raw) return null

  if (raw.startsWith('/') && !raw.startsWith('//') && !raw.startsWith('/\\')) return raw

  try {
    const url = new URL(raw)
    if (url.protocol === 'https:' && !url.username && !url.password) return url.toString()
  } catch {
    // fall through
  }
  console.warn(`[redirect] Ignoring invalid VITE_REDIRECT_URL: ${raw}`)
  return null
}

export function isRedirectPath(pathname: string): boolean {
  return pathname === '/r' || pathname.startsWith('/r/')
}
