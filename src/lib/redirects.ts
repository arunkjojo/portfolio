// Short-link and external redirect rules for the /r route.

export const WHATSAPP_NUMBER = '919400247717'

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Named shortcuts: /r/<slug> */
export const SHORTCUTS = {
  linkedin: 'https://www.linkedin.com/in/arunkjojo',
  github: 'https://github.com/arunkjojo',
  resume: '/docs/Arun-Jojo_Senior-DevOps-Engineer_Resume.pdf',
  whatsapp: whatsappUrl(),
} as const satisfies Record<string, string>

/**
 * Hosts allowed for /r?url=<target>. A host matches itself and its subdomains
 * (e.g. "linkedin.com" allows "www.linkedin.com", not "linkedin.com.evil.com").
 */
export const ALLOWED_HOSTS = ['linkedin.com', 'github.com', 'wa.me', 'arunkjojo.vercel.app'] as const

function isAllowedHost(hostname: string): boolean {
  const host = hostname.toLowerCase()
  return ALLOWED_HOSTS.some((allowed) => host === allowed || host.endsWith(`.${allowed}`))
}

/**
 * Validate an arbitrary target. Accepts "https://host/path" or a bare
 * "host/path" (https is assumed). Returns the normalized URL or null.
 */
export function resolveExternalUrl(raw: string): string | null {
  // Repair "https:/host" (single slash, e.g. typed or collapsed in a path).
  const input = raw.trim().replace(/^(https?):\/(?!\/)/i, '$1://')
  if (!input || input.startsWith('/') || input.startsWith('\\')) return null

  // Anything with an explicit scheme must be https; bare hosts get https.
  const hasScheme = /^[a-z][a-z0-9+.-]*:/i.test(input)
  if (hasScheme && !/^https:\/\//i.test(input)) return null

  let url: URL
  try {
    url = new URL(hasScheme ? input : `https://${input}`)
  } catch {
    return null
  }

  if (url.protocol !== 'https:' || url.username || url.password) return null
  if (!isAllowedHost(url.hostname)) return null
  return url.toString()
}

export type RedirectResult = { ok: true; href: string } | { ok: false }

export function resolveRedirect(slug: string | undefined, target: string | undefined): RedirectResult {
  // "/r=github" arrives as target "github": a bare word is a shortcut name.
  if (!slug && target && /^[a-z0-9_-]+$/i.test(target.trim())) slug = target.trim()
  if (slug) {
    const key = slug.toLowerCase()
    if (Object.hasOwn(SHORTCUTS, key)) {
      return { ok: true, href: SHORTCUTS[key as keyof typeof SHORTCUTS] }
    }
    return { ok: false }
  }
  if (target) {
    const href = resolveExternalUrl(target)
    return href ? { ok: true, href } : { ok: false }
  }
  return { ok: false }
}

export function isRedirectPath(pathname: string): boolean {
  return pathname === '/r' || pathname.startsWith('/r/') || pathname.startsWith('/r=')
}

/**
 * Support the short form "/r=<target>" (e.g. /r=github, /r=linkedin.com/in/arunkjojo,
 * /r=https://github.com/arunkjojo) by rewriting it to "/r?url=<target>" before the
 * router reads the location. Everything after "/r=" (path, query, hash) is the target.
 */
export function normalizeShortRedirectUrl(): void {
  const { pathname, search, hash } = window.location
  if (!pathname.startsWith('/r=')) return
  let target = pathname.slice(3)
  try {
    target = decodeURIComponent(target)
  } catch {
    // malformed escape: keep raw; validation rejects it if unsafe
  }
  window.history.replaceState(window.history.state, '', `/r?url=${encodeURIComponent(target + search + hash)}`)
}
