# Maison Éclat — restaurant website (portfolio demo)

A fast, fully static restaurant homepage built with **Astro 5 + Tailwind CSS 4**, implemented from the
Banani design "Editorial Bistro". Hosted free on **Cloudflare Pages** (commercial use allowed on the free plan).

**What's included**

- Editorial hero, story strip, menu cards, opening hours, map card, photo gallery, footer
- Working reservation form: real date picker, time slots generated from the opening hours
  (closed days are blocked; last seating 1 hour before close), validation, confirmation state
- Fully responsive (mobile menu, stacked layouts), keyboard and screen-reader friendly
- SEO: meta + Open Graph tags, `Restaurant` schema.org data (address, hours, cuisine) for Google
- Images auto-converted to AVIF/WebP at multiple sizes; self-hosted fonts; no third-party scripts

## Re-use for a new client

All the business details (name, address, menu, hours, photos, links) live in **`src/data/site.ts`**.
Swap that file and the images in `src/assets/img/`, and adjust colours/fonts in the `@theme` block of
`src/styles/global.css`.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Make the booking form send real emails

Without configuration the form runs in demo mode (shows the confirmation, sends nothing).
To receive bookings by email, create a free form endpoint (e.g. Web3Forms or Formspree) and set these
as **build environment variables** in Cloudflare Pages:

| Variable | Example |
|---|---|
| `PUBLIC_FORM_ENDPOINT` | `https://api.web3forms.com/submit` or your Formspree URL |
| `PUBLIC_FORM_ACCESS_KEY` | Web3Forms access key (Web3Forms only; it is a public key by design) |

## Deploy to Cloudflare Pages (free)

1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. (Optional) add the form variables above, and `SITE_URL` = the final domain (used for canonical/OG URLs).
5. Add a custom domain under **Custom domains**.

Tip for client work: create the Pages project in a Cloudflare account the **client** owns and add yourself
as a member — they own the site and never pay for hosting.

## Credits

Photos from Pexels (free licence): Sarah O'Shea, Céline, Sara Free, Nadin Sh, César O'neill,
Natalia Olivera, Ron Lach, Willians Huerta, Mimi. Icons: Lucide. Fonts: PT Serif, DM Sans.
Maison Éclat is a fictional restaurant created for portfolio purposes.
