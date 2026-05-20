# Moore Covenant Productions — Setup Guide

## Prerequisites

You need **Node.js** installed. If you don't have it:

1. Go to [nodejs.org](https://nodejs.org) and download the LTS version (v20+)
2. Run the installer
3. Restart your terminal

Or use Homebrew (if installed):
```bash
brew install node
```

---

## Install & Run

```bash
# Open Terminal and navigate to the project
cd ~/Desktop/moore-covenant-productions

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open your browser to: **http://localhost:3000**

---

## Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
moore-covenant-productions/
├── app/
│   ├── layout.tsx          — Root layout (nav, footer, fonts)
│   ├── globals.css         — Global styles, animations, utility classes
│   ├── page.tsx            — Home page
│   ├── about/page.tsx      — About page
│   ├── services/page.tsx   — Services page
│   ├── portfolio/page.tsx  — Portfolio/Work page
│   ├── contact/page.tsx    — Contact form page
│   ├── journal/page.tsx    — Journal/Blog page
│   ├── loading.tsx         — Loading state
│   └── not-found.tsx       — 404 page
├── components/
│   ├── Navigation.tsx      — Fixed nav with mobile menu
│   ├── Footer.tsx          — Footer with CTA
│   └── ui/
│       ├── AnimatedText.tsx  — Word-by-word text reveal
│       ├── ScrollReveal.tsx  — Scroll-triggered fade/slide
│       ├── GrainOverlay.tsx  — Film grain CSS overlay
│       └── CustomCursor.tsx  — Custom gold dot cursor
├── tailwind.config.ts      — Design tokens (colors, fonts, sizes)
└── package.json
```

---

## Deployment (Vercel — Recommended)

1. Create a free account at [vercel.com](https://vercel.com)
2. Push this folder to a GitHub repository
3. Import the repo in Vercel
4. Deploy — done

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## Customization Notes

### Colors (tailwind.config.ts)
- `gold`: `#c4974a` — The primary brand accent
- `black`: `#080808` — Background
- `cream`: `#f0ebe0` — Primary text

### Fonts
- **Cormorant Garamond** — Display/headings (editorial, cinematic)
- **Inter** — Body text (clean, modern)
Both loaded from Google Fonts in `app/layout.tsx`

### Adding Real Images
Replace the gradient placeholder divs with Next.js `<Image>` components:
```tsx
import Image from "next/image";
<Image src="/your-photo.jpg" alt="Description" fill className="object-cover" />
```

### Contact Form
The form in `app/contact/page.tsx` currently logs to console.
Connect it to a real service like:
- **Resend** (email) — resend.com
- **Formspree** — formspree.io
- **EmailJS** — emailjs.com

### Social Links
Update the social media URLs in `components/Footer.tsx` (lines ~60-80).
