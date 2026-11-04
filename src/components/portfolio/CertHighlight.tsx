import { useRef } from 'react'
import type { PointerEvent } from 'react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { useTranslation } from '../../lib/i18n'

const KCSA_URL = 'https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/'
const MAX_TILT_DEG = 6

export default function CertHighlight() {
  const { t, language } = useTranslation()
  const cardRef = useRef<HTMLDivElement>(null)

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--tilt-x', `${(-y * MAX_TILT_DEG * 2).toFixed(2)}deg`)
    el.style.setProperty('--tilt-y', `${(x * MAX_TILT_DEG * 2).toFixed(2)}deg`)
  }

  const onPointerLeave = () => {
    cardRef.current?.style.setProperty('--tilt-x', '0deg')
    cardRef.current?.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <section aria-labelledby="kcsa-title" className="cert-3d-scene mb-16">
      <div ref={cardRef} className="cert-3d-card" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
        <div className="cert-3d-inner flex flex-col gap-4 p-6 md:flex-row md:items-center md:p-8">
          <div className="cert-3d-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
            <ShieldCheck className="h-7 w-7 text-[var(--lagoon-deep)]" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="island-kicker mb-1">{t.kcsa.kicker}</p>
            <h2 id="kcsa-title" className="mb-2 text-xl font-bold leading-snug text-[var(--sea-ink)] md:text-2xl" lang="en">
              {t.kcsa.title}
            </h2>
            <p className="m-0 text-sm text-[var(--sea-ink-soft)] md:text-base" lang={language}>
              {t.kcsa.desc}
            </p>
          </div>
          <a
            href={KCSA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-bold text-[var(--lagoon-deep)] no-underline transition hover:bg-[var(--link-bg-hover)] md:self-center"
          >
            {t.kcsa.link}
            <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
