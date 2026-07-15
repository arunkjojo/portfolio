import { createFileRoute } from '@tanstack/react-router'
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Database,
  Cpu,
  Wrench,
  CheckCircle2,
  TrendingUp,
  Zap,
  Globe
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const stats = [
    { value: '5+ Years', label: 'Full-Stack Experience', desc: 'Building scalable web applications' },
    { value: '10,000+', label: 'Events / Second', desc: 'Optimizing real-time high-throughput systems' },
    { value: '30%', label: 'Less Bottlenecks', desc: 'Reduced rendering delay via SSR/ISR' },
    { value: '40%', label: 'Faster Delivery', desc: 'Accelerated cycles via AI-augmented dev' }
  ]

  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Gesher Technologies',
      location: 'Ernakulam',
      period: 'May 2026 – Present',
      highlights: [
        'Architecting full-stack solutions using Next.js and Supabase PostgreSQL, focusing on high concurrency and modular backend design for scalability. Optimized backend infrastructure via AI driven development.',
        'Implementing modern DevOps strategies, including automated CI/CD pipelines via GitHub Actions and containerization with Docker for seamless cloud scaling. Architected a deployment pipeline using GitHub Actions, ensuring zero-downtime frontend releases, increasing release frequency by 20%, and reducing manual intervention by 15% for a production-scale project.',
        'Consulting on frontend performance, implementing advanced caching strategies, and SSR optimization to improve SEO and user retention. Implemented complex state management architectures using React, TypeScript, and Redux-Saga, ensuring type safety and reducing client-side rendering bottlenecks by 30%.'
      ]
    },
    {
      role: 'Senior Developer',
      company: 'BCT Consulting',
      location: 'Thiruvandapuram',
      period: 'Jun 2024 – Aug 2025',
      highlights: [
        'Implemented state management using React/Redux-Saga, specifically focusing on optimizing data handling that influenced application performance and stability in production environments.',
        'Collaborated with the File Management Team to streamline document workflow processes, applying principles of efficiency and system integration. Resulting in a 25% measurable increase in team development efficiency through AI-augmented development practices and GitHub Copilot.',
        'Contributed to the deployment of the Ksmart and Ksuite web applications, ensuring functional accessibility and system stability across diverse user groups.'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'Inlux Intelligence',
      location: 'Kasaragod',
      period: 'Oct 2022 – Jun 2024',
      highlights: [
        'Optimized backend systems (PHP/Node.js-Express.js) for improved server response times and system reliability, focusing on system performance tuning.',
        'Used Git & GitHub for rigorous version control, collaborative code reviews, and managing multiple application branches to ensure continuous code quality for deployment.',
        'Developed scalable applications and designed relational/NoSQL database schemas leveraging PostgreSQL, MSSQL, and MongoDB, improving complex query execution speeds by 40%.'
      ]
    },
    {
      role: 'Jr. React Developer',
      company: '2Hats Logic Solutions',
      location: 'Ernakulam',
      period: 'Apr 2022 – Sep 2022',
      highlights: [
        'Built and deployed a Progressive Web App (PWA) and Trusted Web Activity (TWA) using React.js and React Native, achieving a 40% increase in mobile user retention, involving knowledge of application delivery and publishing processes.',
        'Managed real-time applications (Voice Translation App) and E-commerce platforms, requiring a focus on high availability and performance monitoring.'
      ]
    },
    {
      role: 'React-PHP Developer',
      company: 'Inlux Intelligence',
      location: 'Kasaragod',
      period: 'Jan 2020 – Mar 2022',
      highlights: [
        'Engineered and deployed high-performance web applications using React.js, PHP APIs, and MySQL, successfully publishing PWA/TWA projects to the Google Play Store.',
        'Managed the complete lifecycle from front-end UI design to Firebase deployment, leveraging freelance experience to deliver scalable, user-centric solutions.'
      ]
    }
  ]

  const projects = [
    {
      name: 'FurnitureApp',
      period: 'Nov 2023',
      description: 'A furniture e-commerce application. The project consists of a Node.js backend, a separate Stripe server, and a React Native (Expo) frontend.',
      tags: ['React Native', 'Expo', 'Node.js', 'Stripe', 'Mobile']
    },
    {
      name: 'google_redesign',
      period: 'Oct 2023',
      description: 'A redesign of Google services built using Storybook and Vite, structured within a Lerna-monorepo.',
      tags: ['Vite', 'Storybook', 'Lerna', 'Monorepo', 'React']
    },
    {
      name: 'React-eCommerce-App',
      period: 'Dec 2023',
      description: 'E-commerce platform implementing modern React patterns, styled components, and state management.',
      tags: ['React', 'Redux Toolkit', 'Redux Thunk', 'Styled Components', 'Bootstrap']
    },
    {
      name: 'Ecommerce React Js application',
      period: 'May 2022 - Jun 2022',
      description: 'Web application with integrated PayPal payment integration. Deployed on Vercel.',
      tags: ['React.js', 'PayPal API', 'Vercel', 'E-commerce'],
      links: [
        { label: 'Demo', url: 'https://pizza-order-tau.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/arunkjojo/pizza-order' }
      ]
    },
    {
      name: 'Voice Translation App',
      period: 'Apr 2022 - May 2022',
      description: 'Real-time translation application utilizing WebRTC and multiple audio format conversions.',
      tags: ['React Native', 'Android', 'WebRTC', 'Redux Toolkit']
    }
  ]

  const skillGroups = [
    {
      category: 'Frontend',
      icon: <Cpu className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'PWA Service Worker']
    },
    {
      category: 'Backend & APIs',
      icon: <Terminal className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['Node.js-Express.js', 'PHP', 'ASP.NET Core Web API', 'RESTful APIs', 'WebSockets']
    },
    {
      category: 'Databases',
      icon: <Database className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firestore', 'Supabase']
    },
    {
      category: 'DevOps & CI/CD',
      icon: <Zap className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['GitHub Actions', 'Zero-Downtime Release', 'Docker']
    },
    {
      category: 'Testing',
      icon: <Wrench className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['Vitest/Jest', 'Unit & Functional', 'React Testing Library (RTL)']
    },
    {
      category: 'AI & Tooling',
      icon: <TrendingUp className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['GitHub Copilot', 'Anthropic Claude', 'Antigravity']
    },
    {
      category: 'Soft Skills',
      icon: <CheckCircle2 className="h-5 w-5 text-[var(--lagoon-deep)]" />,
      items: ['Communication & Collaboration', 'Problem-Solving & Critical Thinking', 'Adaptability & Continuous Learning', 'Time Management', 'Accountability & Ownership', 'Attention to Detail']
    }
  ]

  const certifications = [
    { title: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', date: 'Aug 2025' },
    { title: 'Claude Code 101', issuer: 'Anthropic', date: 'Jul 2025' },
    { title: 'Claude Code: Software Engineering with Generative AI', issuer: 'Anthropic', date: 'Jul 2025' },
    { title: 'Back-End Development with .NET', issuer: 'Anthropic', date: 'Jul 2025' },
    { title: 'Learn by Doing - Prompt Engineering 101', issuer: 'KodeKloud', date: 'Aug 2025' },
    { title: '12 Factor App', issuer: 'KodeKloud', date: 'Jul 2025' },
    { title: 'Ethical Hacking Stage 2 - Hacking the MAC', issuer: 'Hacker X', date: 'Aug 2025' },
    { title: 'Ethical Hacking Stage 1 - Know the OS', issuer: 'Hacker X', date: 'Aug 2025' },
    { title: 'AI tools and ChatGPT workshop', issuer: 'Be10x', date: 'Nov 2024' },
    { title: 'Certificate in Prompt Engineering for ChatGPT', issuer: 'Great Learning', date: 'Nov 2024' },
    { title: 'Certificate in React.js', issuer: 'CareerNinja | LearnTube', date: 'Jun 2024' },
    { title: 'Mastering JavaScript Fundamentals', issuer: 'Geekster', date: 'May 2024' },
    { title: 'React and Redux Certification Test', issuer: 'KGCoding by Prashant Sir', date: 'Mar 2024' },
    { title: 'Udemy Certification on React JS', issuer: 'Udemy', date: 'Mar 2022' }
  ]

  return (
    <main className="page-wrap px-4 pb-16 pt-24">
      {/* Hero Section */}
      <section className="island-shell rise-in relative overflow-hidden rounded-[2.5rem] p-8 md:p-14 mb-12">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.35),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.2),transparent_66%)]" />
        
        <div className="relative z-10 grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <span className="island-kicker mb-3 inline-block">Available for Opportunities</span>
            {/* Single H1 - User's name */}
            <h1 className="display-title mb-3 text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--sea-ink)] leading-none">
              Arun Jojo
            </h1>
            {/* Subtitle - Professional Title */}
            <p className="text-xl md:text-2xl font-bold text-[var(--lagoon-deep)] tracking-wide mb-6 uppercase">
              AI Certified | Full-Stack | Software Engineer
            </p>
            <p className="text-base md:text-lg text-[var(--sea-ink-soft)] leading-relaxed mb-8 max-w-2xl">
              AI Certified Full-Stack Software Engineer with 5+ years of experience building scalable web applications using Next.js, React, Node.js, and TypeScript. I help teams ship faster by architecting CI/CD pipelines and optimizing real-time systems that handle 10,000+ events/second.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="/docs/resume.pdf"
                download="Arun_Jojo_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.16)] px-6 py-3 text-sm font-bold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.26)] shadow-sm"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(23,58,64,0.2)] bg-white/60 dark:bg-black/30 px-6 py-3 text-sm font-bold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)] shadow-sm"
              >
                Contact Info
              </a>
            </div>

            <div className="flex gap-4 mt-8">
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
                href="https://arunkjojo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] transition"
                aria-label="Personal Website"
              >
                <Globe className="h-6 w-6" />
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

      {/* Stats Dashboard */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="island-shell feature-card rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Zap className="h-12 w-12 text-[var(--lagoon-deep)]" />
            </div>
            <div className="text-3xl font-black text-[var(--lagoon-deep)] mb-1">{stat.value}</div>
            <div className="text-sm font-bold text-[var(--sea-ink)] mb-1">{stat.label}</div>
            <div className="text-xs text-[var(--sea-ink-soft)]">{stat.desc}</div>
          </div>
        ))}
      </section>

      {/* Work Experience */}
      <section id="experience" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-[var(--lagoon-deep)]" />
          <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">Work Experience</h2>
        </div>
        
        <div className="relative border-l border-[var(--line)] ml-4 pl-6 md:pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Bullet node on timeline */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-[var(--lagoon)] border-4 border-[var(--bg-base)] shadow-sm" />
              
              <div className="island-shell p-6 rounded-2xl">
                <span className="text-xs font-bold text-[var(--lagoon-deep)] uppercase tracking-wider block mb-1">
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold text-[var(--sea-ink)] flex flex-wrap gap-2 items-center">
                  <span>{exp.role}</span>
                  <span className="text-[var(--sea-ink-soft)] text-sm font-normal">at</span>
                  <span className="text-[var(--lagoon-deep)] font-semibold">{exp.company}</span>
                </h3>
                <span className="text-xs text-[var(--sea-ink-soft)] block mb-4">
                  {exp.location}
                </span>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--sea-ink-soft)]">
                  {exp.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-2 mb-8">
          <Terminal className="h-6 w-6 text-[var(--lagoon-deep)]" />
          <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <article key={idx} className="island-shell feature-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[var(--sea-ink)]">{proj.name}</h3>
                  <span className="text-xs text-[var(--sea-ink-soft)] font-medium whitespace-nowrap bg-[var(--chip-bg)] border border-[var(--chip-line)] px-2 py-0.5 rounded-full">
                    {proj.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--sea-ink-soft)] mb-6 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold text-[var(--sea-ink-soft)] bg-[var(--chip-bg)] border border-[var(--chip-line)] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                {proj.links && (
                  <div className="flex gap-4 pt-2 border-t border-[var(--line)]">
                    {proj.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[var(--lagoon-deep)] no-underline hover:underline"
                      >
                        {link.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-2 mb-8">
          <Wrench className="h-6 w-6 text-[var(--lagoon-deep)]" />
          <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">Skills Portfolio</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="island-shell p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[var(--line)]">
                {group.icon}
                <h3 className="text-base font-bold text-[var(--sea-ink)]">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs font-medium text-[var(--sea-ink)] bg-[var(--chip-bg)] border border-[var(--chip-line)] px-2.5 py-1 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mb-16 scroll-mt-20">
        <div className="flex items-center gap-2 mb-8">
          <Award className="h-6 w-6 text-[var(--lagoon-deep)]" />
          <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">Certifications</h2>
        </div>

        <div className="island-shell rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="demo-table text-left">
              <thead>
                <tr>
                  <th>Credential Name</th>
                  <th>Issuer</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((cert, idx) => (
                  <tr key={idx}>
                    <td className="font-bold text-[var(--sea-ink)] text-sm">{cert.title}</td>
                    <td className="text-[var(--sea-ink-soft)] text-sm">{cert.issuer}</td>
                    <td className="text-[var(--sea-ink-soft)] text-sm whitespace-nowrap">{cert.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="h-6 w-6 text-[var(--lagoon-deep)]" />
          <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">Education</h2>
        </div>

        <div className="island-shell p-6 rounded-2xl">
          <span className="text-xs font-bold text-[var(--lagoon-deep)] uppercase tracking-wider block mb-1">
            Jul 2018 – Mar 2021
          </span>
          <h3 className="text-lg font-bold text-[var(--sea-ink)] mb-1">
            Bachelor of Science in Computer Science
          </h3>
          <span className="text-sm text-[var(--sea-ink-soft)] block mb-4">
            College of Applied Science IHRD Manjeshwar | Kasaragod
          </span>
          <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--sea-ink-soft)]">
            <li>Bachelor of Science in Computer Science (3yr) from IHRD Manjeshwar</li>
            <li>Achievements: Won the Best Coder of the ZEITGEIST</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <div className="flex items-center gap-2 mb-8">
          <Mail className="h-6 w-6 text-[var(--lagoon-deep)]" />
          <h2 className="text-2xl font-bold tracking-tight text-[var(--sea-ink)]">Contact Information</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="island-shell p-6 rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider block mb-2">Email</span>
            <div>
              <Mail className="h-6 w-6 text-[var(--lagoon-deep)] mb-2" />
              <a href="mailto:arunkjojo@gmail.com" className="text-sm font-bold block break-all text-[var(--sea-ink)] hover:underline">
                arunkjojo@gmail.com
              </a>
            </div>
          </div>

          <div className="island-shell p-6 rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider block mb-2">Phone</span>
            <div>
              <Phone className="h-6 w-6 text-[var(--lagoon-deep)] mb-2" />
              <a href="tel:+919400247717" className="text-sm font-bold block text-[var(--sea-ink)] hover:underline">
                +91 94002 47717
              </a>
            </div>
          </div>

          <div className="island-shell p-6 rounded-2xl flex flex-col justify-between">
            <span className="text-xs font-bold text-[var(--sea-ink-soft)] uppercase tracking-wider block mb-2">Location</span>
            <div>
              <Globe className="h-6 w-6 text-[var(--lagoon-deep)] mb-2" />
              <span className="text-sm font-bold block text-[var(--sea-ink)]">
                Ernakulam / Kasaragod, Kerala, India
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
