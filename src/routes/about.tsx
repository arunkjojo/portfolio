import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { useTranslation } from '../lib/i18n'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { t } = useTranslation()

  return (
    <main className="page-wrap px-4 pb-16 pt-24 overflow-x-hidden">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] p-8 md:p-14">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.35),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.2),transparent_66%)]" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="island-kicker mb-3">{t.about.kicker}</p>
            <h1 className="display-title mb-4 text-4xl font-extrabold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
              {t.about.title}
            </h1>
            <p className="mb-6 max-w-3xl text-base leading-relaxed text-[var(--sea-ink-soft)] md:text-lg">
              {t.about.summary}
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.16)] px-6 py-3 text-sm font-bold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.26)] shadow-sm"
              >
                <Sparkles className="h-4 w-4" /> {t.about.backHome}
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(79,184,178,0.35)] bg-[rgba(79,184,178,0.16)] px-6 py-3 text-sm font-bold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.26)] shadow-sm"
              >
                {t.about.contactMe} <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)]/95 p-5 shadow-[0_10px_30px_rgba(30,90,72,0.08)] backdrop-blur-md">
              <h2 className="mb-4 text-lg font-bold text-[var(--sea-ink)]">{t.about.capabilitiesTitle}</h2>
              <ul className="space-y-3">
                {t.about.capabilities.map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-[var(--sea-ink)]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--lagoon-deep)]" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)]/80 p-6 shadow-[0_20px_50px_rgba(30,90,72,0.12)] backdrop-blur-md">
            <div className="relative mx-auto flex w-full max-w-[280px] justify-center rounded-full border border-[var(--line)] bg-transparent p-2 shadow-[0_15px_35px_rgba(30,90,72,0.12)]">
              <img
                src="/images/portrait.jpg"
                alt={t.about.portraitAlt}
                className="h-48 w-48 rounded-full object-cover"
              />
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--lagoon-deep)]">
                {t.about.snapshotTitle}
              </p>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                {t.about.snapshot.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
