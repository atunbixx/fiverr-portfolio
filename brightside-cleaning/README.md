# Brightside Cleaning Co. — cleaning company website (portfolio demo)

A fast, fully static home-services website built with **Astro 5 + Tailwind CSS 4**, implemented from the
Banani design "Brightside Cleaning Homepage". Hosted free on **Cloudflare Pages**.

**What's included**

- **Instant quote calculator** — bedrooms/bathrooms steppers, clean type, extras, live price.
  "Book This Clean" carries the quote into the booking form automatically.
- Working booking/enquiry form: UK postcode validation, date picker, service preselected from the quote,
  confirmation state (demo mode until a form endpoint is set)
- Services grid, before/after comparison, how-it-works steps, trust bar, reviews, service-area list,
  FAQ accordion, footer
- Fully responsive with mobile menu; keyboard and screen-reader friendly
- SEO: meta + Open Graph tags, `LocalBusiness` schema.org data with service areas and opening hours
- Images auto-converted to AVIF/WebP; self-hosted fonts (Nunito, DM Sans); no third-party scripts

## Re-use for a new client (cleaners, plumbers, gardeners, painters…)

Everything lives in **`src/data/site.ts`**: business details, services, **pricing model**
(base price per clean type + price per extra bedroom/bathroom + extras), areas, reviews, FAQs.
Colours and fonts are in the `@theme` block of `src/styles/global.css`.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Make the booking form send real emails

Create a free endpoint (Web3Forms or Formspree) and set build variables in Cloudflare Pages:
`PUBLIC_FORM_ENDPOINT` and (Web3Forms only) `PUBLIC_FORM_ACCESS_KEY`. The quote summary is sent with each enquiry.

## Deploy to Cloudflare Pages (free)

Connect the repo → **Root directory** `brightside-cleaning` → preset Astro, build `npm run build`, output `dist`.

## Credits

Photos from Pexels (free licence): Alexander Zvir, Alexander F Ungerer, Curtis Adams. Icons: Lucide.
Brightside Cleaning Co. is a fictional business created for portfolio purposes; reviews and ratings are sample content.
