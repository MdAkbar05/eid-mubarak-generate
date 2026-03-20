import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://eid-mubarak-generator.vercel.app";

export const metadata = {
  title: "Eid Mubarak Generator 🌙 — Create Beautiful Eid Greeting Cards",
  description:
    "Generate personalized Eid Mubarak greeting cards in seconds. Choose your tone — Islamic, Emotional, Funny or Bangla — download as PNG and share on WhatsApp.",
  keywords: [
    "Eid Mubarak",
    "Eid greeting card",
    "Eid generator",
    "Eid ul Fitr",
    "Eid ul Adha",
    "Islamic greetings",
    "বাংলা ঈদ শুভেচ্ছা",
  ],
  authors: [{ name: "MD. Akbar Hossan" }],

  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "Eid Mubarak Generator 🌙 — Create Beautiful Eid Greeting Cards",
    description:
      "Create and share beautiful personalized Eid Mubarak greeting cards. Islamic, Emotional, Funny and Bangla tones. Free — no signup needed.",
    siteName: "Eid Mubarak Generator",
    images: "/og-image.svg",
  },

  twitter: {
    card: "summary_large_image",
    title: "Eid Mubarak Generator 🌙",
    description:
      "Create personalized Eid greeting cards with beautiful designs. Download & share on WhatsApp — free!",
    images: "/og-image.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
