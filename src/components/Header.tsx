import ThemeToggle from './ThemeToggle'
import { useTranslation } from '../lib/i18n'
import type { Language } from '../lib/i18n'

export default function Header() {
  const { language, setLanguage, t } = useTranslation()

  const languages: { key: Language; label: string }[] = [
    { key: 'en', label: 'English (EN)' },
    { key: 'hi', label: 'Hindi (HI)' },
    { key: 'de', label: 'Deutsch (DE)' },
    { key: 'es', label: 'Español (ES)' },
    { key: 'ar', label: 'العربية (AR)' }
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" />
            {t.hero.title}
          </a>
        </h2>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0">
          <a href="#" className="nav-link">{t.nav.home}</a>
          <a href="#experience" className="nav-link">{t.nav.experience}</a>
          <a href="#projects" className="nav-link">{t.nav.projects}</a>
          <a href="#skills" className="nav-link">{t.nav.skills}</a>
          <a href="#certifications" className="nav-link">{t.nav.certifications}</a>
          <a href="#contact" className="nav-link">{t.nav.contact}</a>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            aria-label="Select Language"
            className="rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-2.5 py-1.5 text-xs font-bold text-[var(--sea-ink)] shadow-[0_8px_22px_rgba(30,90,72,0.08)] outline-none cursor-pointer transition hover:-translate-y-0.5"
          >
            {languages.map((lang) => (
              <option key={lang.key} value={lang.key} className="bg-[var(--bg-base)] text-[var(--sea-ink)]">
                {lang.label}
              </option>
            ))}
          </select>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/arunkjojo"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
          >
            <span className="sr-only">Follow Arun Jojo on LinkedIn</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/arunkjojo"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
          >
            <span className="sr-only">Go to Arun Jojo GitHub</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" width="22" height="22">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
