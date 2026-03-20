'use client'
import { useState } from 'react'

export default function ShareButtons({ message, onDownload }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'Eid Mubarak!', text: message })
    }
  }

  const btn = 'flex items-center gap-2 px-4 py-3 rounded-2xl font-body text-sm font-medium transition-all duration-200 active:scale-95'

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {/* Download */}
      <button
        onClick={onDownload}
        className={`${btn} bg-violet-500 hover:bg-violet-400 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-400/40 hover:scale-105`}
      >
        <span>⬇️</span> Download PNG
      </button>

      {/* WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className={`${btn} bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 hover:scale-105`}
      >
        <span>💬</span> WhatsApp
      </button>

      {/* Copy */}
      <button
        onClick={handleCopy}
        className={`${btn} glass bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-105`}
      >
        <span>{copied ? '✅' : '📋'}</span> {copied ? 'Copied!' : 'Copy Text'}
      </button>

      {/* Native Share (mobile) */}
      {typeof navigator !== 'undefined' && navigator.share && (
        <button
          onClick={handleNativeShare}
          className={`${btn} glass bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-105`}
        >
          <span>🔗</span> Share
        </button>
      )}
    </div>
  )
}
