import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { LanguageProvider, useTranslation } from '../lib/i18n'

export const Route = createRootRoute({
  component: RootDocument,
})

function RootDocument() {
  return (
    <LanguageProvider>
      <RootDocumentContent />
    </LanguageProvider>
  )
}

function RootDocumentContent() {
  const { language } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <div className="min-h-screen bg-[var(--bg-base)] flex flex-col font-sans transition-colors duration-300">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
