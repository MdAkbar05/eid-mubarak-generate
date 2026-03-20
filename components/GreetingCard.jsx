'use client'
import { forwardRef } from 'react'
import { THEMES } from '../lib/messages'

const DECORATIONS = {
  emerald: { star: '⭐', moon: '🌙', lantern: '🪔' },
  violet: { star: '✨', moon: '🌛', lantern: '🕌' },
  gold: { star: '⭐', moon: '🌙', lantern: '🌟' },
}

const GreetingCard = forwardRef(function GreetingCard({ message, senderName, theme, animKey }, ref) {
  const t = THEMES.find(t => t.id === theme) || THEMES[0]
  const dec = DECORATIONS[theme] || DECORATIONS.emerald
  const patternClass = theme === 'emerald' ? 'pattern-islamic' : theme === 'violet' ? 'pattern-stars' : 'pattern-arabesque'

  if (!message) return null

  return (
    <div
      ref={ref}
      key={animKey}
      className="animate-scale-in w-full"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      <div
        className={`relative overflow-hidden rounded-3xl card-glow ${patternClass}`}
        style={{
          background: `linear-gradient(135deg, ${t.from} 0%, ${t.via} 50%, ${t.to} 100%)`,
          minHeight: '420px',
        }}
      >
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 text-3xl opacity-30 animate-twinkle">{dec.star}</div>
        <div className="absolute top-4 right-4 text-3xl opacity-30 animate-twinkle" style={{ animationDelay: '1s' }}>{dec.moon}</div>
        <div className="absolute bottom-4 left-4 text-3xl opacity-30 animate-twinkle" style={{ animationDelay: '1.5s' }}>{dec.star}</div>
        <div className="absolute bottom-4 right-4 text-3xl opacity-30 animate-twinkle" style={{ animationDelay: '0.5s' }}>{dec.lantern}</div>

        {/* Decorative circles */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10"
          style={{ background: t.accent }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: t.accent }}
        />

        {/* Inner border frame */}
        <div className="absolute inset-4 rounded-2xl border border-white/10 pointer-events-none" />
        <div className="absolute inset-6 rounded-xl border border-white/5 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-10 py-14 text-center min-h-[420px]">
          {/* Top Arabic */}
          <p
            className="text-white/50 text-sm tracking-[0.3em] uppercase mb-4 font-body"
            style={{ letterSpacing: '0.25em' }}
          >
            ✦ بسم الله الرحمن الرحيم ✦
          </p>

          {/* Main emoji */}
          <div className="text-5xl mb-5 animate-float">{dec.moon}</div>

          {/* Eid Mubarak title */}
          <h2
            className="font-display font-bold mb-2 leading-tight"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              color: t.accent,
              textShadow: `0 0 30px ${t.accent}60`,
            }}
          >
            Eid Mubarak
          </h2>
          <p className="font-arabic text-white/60 text-lg mb-8">عيد مبارك</p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-8 w-full max-w-xs">
            <div className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${t.accent}60)` }} />
            <span style={{ color: t.accent }} className="text-sm">✦</span>
            <div className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${t.accent}60)` }} />
          </div>

          {/* Message */}
          <p
            className="text-white/90 leading-relaxed max-w-sm font-body"
            style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', lineHeight: '1.75' }}
          >
            {message}
          </p>
        </div>

        {/* Bottom shimmer bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: `linear-gradient(to right, transparent, ${t.accent}, transparent)` }}
        />
      </div>
    </div>
  )
})

export default GreetingCard
