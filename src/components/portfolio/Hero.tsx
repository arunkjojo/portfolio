import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] p-8 md:p-14 mb-12">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.35),transparent_66%)]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.2),transparent_66%)]" />
      
      <div className="relative z-10 grid gap-10 md:grid-cols-12 items-center">
        <div className="md:col-span-8">
          <span className="island-kicker mb-3 inline-block">{t.hero.available}</span>
          {/* Single H1 - User's name */}
          <h1 className="display-title mb-3 text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--sea-ink)] leading-none">
            {t.hero.title}
          </h1>
          {/* Subtitle - Professional Title */}
          <p className="text-xl md:text-2xl font-bold text-[var(--lagoon-deep)] tracking-wide mb-6 uppercase">
            {t.hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-[var(--sea-ink-soft)] leading-relaxed mb-8 max-w-2xl">
            {t.hero.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="/docs/resume.pdf"
              download="Arun_Jojo_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.16)] px-6 py-3 text-sm font-bold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.26)] shadow-sm"
            >
              <Download className="h-4 w-4" /> {t.hero.downloadCv}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(23,58,64,0.2)] bg-white/60 dark:bg-black/30 px-6 py-3 text-sm font-bold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)] shadow-sm"
            >
              {t.hero.contactInfo}
            </a>
          </div>

          <div className="flex gap-5 mt-8">
            <a
              href="https://www.linkedin.com/in/arunkjojo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/arunkjojo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] transition"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:arunkjojo@gmail.com"
              className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] transition"
              aria-label="Email Address"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+919400247717"
              className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] transition"
              aria-label="Phone Number"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-center">
          <div className="relative group p-2 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-[0_20px_50px_rgba(30,90,72,0.12)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="/images/portrait.jpg"
              alt="Arun Jojo portrait"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-[1.75rem]"
            />
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-[var(--sea-ink)]/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
