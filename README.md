# Apricot Bridge 🍑

**Premium personalised roots tourism for the Armenian diaspora.**

Live site: [apricotbridge.com](https://apricotbridge.com)

---

## Tech stack

- [Next.js 14](https://nextjs.org) — App Router
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- Fonts: Playfair Display, Cormorant Garamond, DM Sans

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

The easiest way to deploy:

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import this repo
4. Click Deploy — done in 60 seconds

## Project structure

```
app/
  layout.tsx      # Root layout + metadata
  page.tsx        # Main page (assembles all sections)
  globals.css     # Global styles + fonts

components/
  Navbar.tsx      # Fixed navigation bar
  Hero.tsx        # Hero section with card stack
  TrustBar.tsx    # Dark trust signals bar
  HowItWorks.tsx  # 5-step process section
  Packages.tsx    # 3 package cards
  Stories.tsx     # Client testimonials
  FAQ.tsx         # Accordion FAQ
  Contact.tsx     # Inquiry form
  Footer.tsx      # Footer
```

## Brand colors

| Name | Hex |
|------|-----|
| Apricot | `#E8721A` |
| Apricot Light | `#F5A65B` |
| Apricot Pale | `#FDF0E6` |
| Earth | `#2C1810` |
| Leaf | `#3B6B2A` |
| Cream | `#FAF5EE` |

---

Built with ❤️ for the Armenian diaspora.
