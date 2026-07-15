import { useState, useEffect } from 'react'
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'
import SpeakButton from './SpeakButton'

// Persistent flag to track typewriter animation state across renders
let hasTypedOnce = false

// Typewriter Subtitle Component
function Typewriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState(hasTypedOnce ? text : '')

  useEffect(() => {
    if (hasTypedOnce) {
      setDisplayedText(text)
      return
    }

    let i = 0
    setDisplayedText('')
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        hasTypedOnce = true
      }
    }, 45)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span className="relative">
      {displayedText}
      {!hasTypedOnce && <span className="animate-blink border-r-2 border-[var(--lagoon-deep)] ml-0.5" />}
    </span>
  )
}

export default function Hero() {
  const { t, language } = useTranslation()

  return (
    <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] p-8 md:p-14 mb-12">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.35),transparent_66%)]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.2),transparent_66%)]" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-8">
          {/* Single H1 - User's name */}
          <h1 className="display-title mb-3 text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--sea-ink)] leading-none">
            {t.hero.title}
          </h1>

          {/* Subtitle / Role with Typewriter animation */}
          <p className="text-lg md:text-xl font-bold text-[var(--lagoon-deep)] tracking-wide mb-6 uppercase min-h-[28px] md:min-h-[32px]">
            <Typewriter text={t.hero.subtitle} />
          </p>

          {/* Mobile-Only Portrait Image (positioned between subtitle and bio description) */}
          <div className="my-6 block lg:hidden">
            <div className="relative inline-block p-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] shadow-[0_15px_35px_rgba(30,90,72,0.12)] backdrop-blur-md">
              <img
                src="/images/portrait.jpg"
                alt="AJ portrait mobile"
                className="w-32 h-32 object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[var(--sea-ink)]/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Bio Description (with SpeakButton) */}
          <div className="flex gap-3 items-start mb-8 max-w-3xl">
            <p className="text-base md:text-lg text-[var(--sea-ink-soft)] leading-relaxed m-0">
              {t.hero.bio}
            </p>
            <div className="pt-1 flex-shrink-0">
              <SpeakButton text={t.hero.bio} lang={language} />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="/docs/resume.pdf"
              download="Arun_Jojo_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.16)] px-6 py-3 text-sm font-bold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.26)] shadow-sm cursor-pointer"
            >
              <Download className="h-4 w-4" /> {t.hero.downloadCv}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(23,58,64,0.2)] bg-white/60 dark:bg-black/30 px-6 py-3 text-sm font-bold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)] shadow-sm cursor-pointer"
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

        {/* Right Column - Desktop-Only Portrait Image */}
        <div className="hidden lg:col-span-4 lg:flex justify-center">
          <div className="relative group p-2 rounded-full border border-[var(--line)] bg-[var(--surface)] shadow-[0_20px_50px_rgba(30,90,72,0.15)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.03]">
            <img
              src="/images/portrait.jpg"
              alt="AJ portrait desktop"
              className="w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[var(--sea-ink)]/12 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
