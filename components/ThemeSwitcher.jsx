'use client'
import { THEMES } from '../lib/messages'

export default function ThemeSwitcher({ activeTheme, setTheme }) {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {THEMES.map(t => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          title={t.label}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-body font-medium transition-all duration-200 border ${
            activeTheme === t.id
              ? 'border-white/50 bg-white/15 text-white scale-105 shadow-lg'
              : 'border-white/15 bg-white/5 text-white/50 hover:text-white/80 hover:border-white/30 hover:bg-white/10'
          }`}
        >
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${t.from}, ${t.accent})`,
              boxShadow: activeTheme === t.id ? `0 0 8px ${t.accent}` : 'none'
            }}
          />
          {t.label}
          {activeTheme === t.id && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" />
          )}
        </button>
      ))}
    </div>
  )
}
