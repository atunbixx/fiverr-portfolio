# Inès Marlowe — fashion photographer portfolio (demo)

A minimal, agency-style black-and-white portfolio for a New York fashion photographer.
**Design by [Banani](https://banani.co)** ("High End Photo Portfolio" flow, theme *Strict Mono*), implemented
faithfully in **Astro 5** with plain CSS (Banani's own styles, plus responsive rules). Hosted free on **Cloudflare Pages**.

**Functionality added to the design**

- Full-bleed hero slideshow: crossfade, autoplay with progress line (pauses on hover, off for reduced motion),
  arrow buttons, keyboard ← →, live counter and captions
- Live New York clock in the header (`America/New_York`)
- Click any work image → full-screen lightbox (keyboard ← → / Esc, focus returned on close)
- Service rows (Editorial / Campaign / Lookbook / Beauty) jump to the inquiry form and pre-select the project type
- Inquiry form with validation, budget ranges and confirmation state (demo mode until a form endpoint is set)
- Mobile layout in the same design language with a text "Menu" toggle
- SEO: meta + Open Graph, `Person` schema.org data; AVIF/WebP images; self-hosted Inter + PT Serif

## Re-use for another photographer

Content lives in `src/data/site.ts`; images in `src/assets/img/`. **Client names are fictional on purpose** —
only list brands the photographer has genuinely worked with.

## Local development

```sh
npm install
npm run dev
npm run build
```

## Receive inquiries by email

Set `PUBLIC_FORM_ENDPOINT` (Web3Forms or Formspree) and, for Web3Forms, `PUBLIC_FORM_ACCESS_KEY` as build variables.

## Deploy to Cloudflare Pages (free)

Connect the repo → **Root directory** `ines-marlowe` → preset Astro, build `npm run build`, output `dist`.

## Credits

Design and imagery generated with Banani (AI-generated photography and portrait). Inès Marlowe, North & Nine Agency
and all client/publication names are fictional, created for portfolio purposes.
