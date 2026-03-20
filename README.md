# 🌙 Eid Mubarak Greeting Generator

A modern, production-ready Eid greeting card generator built with **Next.js 14 (App Router)** and **Tailwind CSS**. Create beautiful personalised Eid cards, download as PNG, and share via WhatsApp in seconds.

---

## ✨ Features

- 🎨 **4 Message Tones** — Islamic, Emotional, Funny, Short & Simple
- 📝 **80+ Message Templates** — 20 unique messages per tone
- 🎴 **3 Card Themes** — Emerald Night, Midnight Violet, Desert Gold
- ⬇️ **Download as PNG** — High-quality 2× retina export
- 💬 **Share Options** — WhatsApp, Copy Text, Native Share API
- 🎲 **Randomize Button** — Instantly generates a surprise message
- 🌙 **Dark / Light Mode** — Toggle with one click
- 🎊 **Confetti Animation** — Fires on every card generation
- ⭐ **Twinkling Star Field** — Animated background
- 📱 **Mobile-First Responsive** — Works beautifully on all screen sizes
- 🔍 **SEO Ready** — Meta tags + Open Graph included

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn

### Installation

```bash
# 1. Clone or unzip the project
cd eid-generator

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
eid-generator/
├── app/
│   ├── layout.jsx          # Root layout with SEO metadata
│   ├── page.jsx            # Main single-page application
│   └── globals.css         # Tailwind directives + custom styles
├── components/
│   ├── Header.jsx          # Fixed header with dark/light toggle
│   ├── GreetingCard.jsx    # Card preview (forwardRef for PNG export)
│   ├── ShareButtons.jsx    # Download / WhatsApp / Copy / Share
│   ├── ThemeSwitcher.jsx   # 3 visual card themes
│   ├── StarField.jsx       # Animated star background
│   └── Footer.jsx          # Footer with credit
├── lib/
│   └── messages.js         # 80+ templates + generateMessage()
├── jsconfig.json           # Path aliases (@/components, @/lib)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | React framework |
| Tailwind CSS 3 | Utility-first styling |
| html-to-image | PNG card export |
| canvas-confetti | Confetti animation |
| Google Fonts | Playfair Display, DM Sans, Amiri |

---

## 🎨 Customisation

### Add More Message Templates

Edit `lib/messages.js` and add to any tone array:

```js
const islamic = [
  ({ r, s }) => `Eid Mubarak, ${r}! Your custom message here. — ${s}`,
  // ...
]
```

### Add a New Card Theme

In `lib/messages.js`, add to the `THEMES` array:

```js
{ id: 'rose', label: 'Rose Garden', from: '#4c0519', via: '#881337', to: '#1c1917', accent: '#fb7185' }
```

### Change Fonts

Update `app/globals.css` Google Fonts import and `tailwind.config.js` fontFamily section.

---

## 📦 Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🤲 Eid Mubarak!

> *"May Allah accept from us and from you."*
> — Taqabbal Allahu Minna wa Minkum

Made with ❤️ to spread Eid joy. Share freely, spread blessings.
