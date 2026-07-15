import { Volume2, VolumeX } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function SpeakButton({ text, lang }: { text: string; lang: string }) {
  const [speaking, setSpeaking] = useState(false)

  // Listen to browser speech events to keep button state in sync
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  function speak(e: React.MouseEvent) {
    e.stopPropagation() // Prevent triggering card link/click events

    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('Text-to-Speech is not supported in this browser.')
      return
    }

    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }

    // Cancel current speaking
    window.speechSynthesis.cancel()

    // Plain text sanitization (strip html or redundant brackets)
    const cleanText = text.replace(/[\[\]]/g, '')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    
    // Map language locales
    utterance.lang = lang

    // Bind system voice if available
    const voices = window.speechSynthesis.getVoices()
    const matchedVoice = voices.find((v) => v.lang.startsWith(lang))
    if (matchedVoice) {
      utterance.voice = matchedVoice
    }

    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    setSpeaking(true)
    window.speechSynthesis.speak(utterance)
  }

  return (
    <button
      type="button"
      onClick={speak}
      className="p-1.5 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] text-[var(--sea-ink-soft)] hover:text-[var(--lagoon-deep)] transition hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer shadow-sm"
      title={speaking ? 'Mute' : 'Read aloud'}
      aria-label={speaking ? 'Mute text' : 'Read aloud text'}
    >
      {speaking ? (
        <VolumeX className="h-4.5 w-4.5 text-[var(--lagoon-deep)] animate-pulse" />
      ) : (
        <Volume2 className="h-4.5 w-4.5" />
      )}
    </button>
  )
}
