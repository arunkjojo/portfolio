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
  resume: '/docs/resume.pdf',
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
  const input = raw.trim()
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
  return pathname === '/r' || pathname.startsWith('/r/')
}
