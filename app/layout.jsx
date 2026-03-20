import './globals.css'

export const metadata = {
  title: 'Eid Mubarak Generator 🌙 — Create Beautiful Eid Greetings',
  description: 'Generate personalised Eid Mubarak greeting cards with beautiful designs. Share via WhatsApp or download as PNG.',
  keywords: 'Eid Mubarak, Eid greeting, Eid card generator, Eid ul Fitr, Eid ul Adha, Islamic greetings',
  openGraph: {
    title: 'Eid Mubarak Generator 🌙',
    description: 'Create and share beautiful personalised Eid greeting cards',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
