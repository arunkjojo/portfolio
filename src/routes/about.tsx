import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap px-4 pb-12 pt-24">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Professional Summary</p>
        <h1 className="display-title mb-6 text-4xl font-extrabold text-[var(--sea-ink)] sm:text-5xl">
          About Arun Jojo
        </h1>
        <p className="mb-6 max-w-3xl text-base leading-relaxed text-[var(--sea-ink-soft)]">
          AI Certified Full-Stack Software Engineer with 5+ years of experience building scalable web applications using Next.js, React, Node.js, and TypeScript. Expert in architecting CI/CD pipelines and optimizing real-time systems that handle 10,000+ events/second. Reduced rendering bottlenecks by 30% through SSR/ISR strategies and accelerated delivery cycles by 40% using AI-augmented development.
        </p>

        <h2 className="text-lg font-bold text-[var(--sea-ink)] mb-4">Core Capabilities</h2>
        <ul className="space-y-3">
          {[
            'Architecting full-stack solutions using Next.js and Supabase PostgreSQL',
            'Deploying automated zero-downtime CI/CD pipelines via GitHub Actions',
            'Optimizing backend architectures in PHP, Node.js, and ASP.NET Core',
            'Unit & Functional testing using Vitest, Jest, and RTL',
            'AI-augmented software development using modern AI tools and agents'
          ].map((principle, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--sea-ink-soft)] font-medium">
              <CheckCircle2 className="h-5 w-5 text-[var(--lagoon-deep)] shrink-0" />
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
