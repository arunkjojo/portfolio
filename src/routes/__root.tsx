import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Arun Jojo | AI Certified Full-Stack Software Engineer',
      },
      {
        name: 'description',
        content: 'AI Certified Full-Stack Software Engineer with 5+ years of experience building scalable web applications. Expert in React, Next.js, Node.js, and TypeScript.',
      },
      {
        name: 'keywords',
        content: 'Arun Jojo, Full-Stack Engineer, AI Certified, React, Next.js, Node.js, TypeScript, Supabase, CI/CD, DevOps, Software Engineer Portfolio',
      },
      {
        name: 'author',
        content: 'Arun Jojo',
      },
      {
        property: 'og:title',
        content: 'Arun Jojo | AI Certified Full-Stack Software Engineer',
      },
      {
        property: 'og:description',
        content: 'AI Certified Full-Stack Software Engineer with 5+ years of experience building scalable web applications. Specialize in CI/CD automation, React, and performance tuning.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://arunkjojo.vercel.app',
      },
      {
        property: 'og:image',
        content: '/images/portrait.jpg',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Arun Jojo | AI Certified Full-Stack Software Engineer',
      },
      {
        name: 'twitter:description',
        content: 'AI Certified Full-Stack Software Engineer with 5+ years of experience. Expert in React, TypeScript, Node.js, and CI/CD.',
      },
      {
        name: 'twitter:image',
        content: '/images/portrait.jpg',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/jpeg',
        href: '/images/portrait.jpg',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <Header />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
