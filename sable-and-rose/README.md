# Sable & Rose — hair salon website (portfolio demo)

A premium, booking-driven salon website built with **Astro 5 + Tailwind CSS 4**. Hosted free on **Cloudflare Pages**.

**What's included**

- **4-step booking widget** — service → stylist (or "first available") → date strip & real time slots → details.
  Slots respect opening hours, each stylist's working days, the service's duration and the current time.
  Confirmation screen with **"Add to calendar" (.ics download)**. "Book" links on the menu and stylist cards pre-fill it.
- Live "Next available" indicator in the hero
- Tabbed service & pricing menu (keyboard accessible), stylist cards, studio story, lookbook grid,
  testimonials, gift-card banner, opening hours, newsletter signup, mobile menu
- SEO: meta + Open Graph, `HairSalon` schema.org data with opening hours and the full service/price catalogue
- AVIF/WebP images, self-hosted fonts (Fraunces, Manrope), no third-party scripts, reduced-motion support

## Re-use for a new client

All content — services, prices, durations, stylists and their working days, opening hours, lookbook, reviews —
lives in **`src/data/site.ts`**. Colours and fonts are in `src/styles/global.css`.
For a salon already on Fresha / Square / Booksy / Vagaro, the widget can be swapped for their booking embed.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Receive bookings by email

Set `PUBLIC_FORM_ENDPOINT` (Web3Forms or Formspree) and, for Web3Forms, `PUBLIC_FORM_ACCESS_KEY` as build variables.
Without them the widget runs in demo mode.

## Deploy to Cloudflare Pages (free)

Connect the repo → **Root directory** `sable-and-rose` → preset Astro, build `npm run build`, output `dist`.

## Credits

Photos from Pexels (free licence): Anastasiya Badun, Arina Krasnikova, Max Vakhtbovych, cottonbro studio,
Nataliya Vaitkevich, Vladimir Vysotsky, Farouk Animashaun, Kseniia Lopyreva, Oscar Steiner, Alexander Mass,
Beatriz Fernandes. Icons: Lucide. Sable & Rose, its stylists and reviews are fictional, created for portfolio purposes.
