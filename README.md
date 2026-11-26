# Web Design Portfolio

Demo websites for small businesses — fast, SEO-ready, mobile-first, and hosted free on Cloudflare Pages.
Each folder is a standalone [Astro](https://astro.build) + Tailwind CSS site.

| Site | Industry | Highlights |
|---|---|---|
| [`maison-eclat/`](./maison-eclat) | Restaurant / bistro | Editorial design, working reservation form with live time slots, menu, hours, map, schema.org restaurant data |
| [`ines-marlowe/`](./ines-marlowe) | Fashion photographer | Banani-designed black-and-white agency portfolio, hero slideshow, lightbox, live NY clock, inquiry form |
| _coming soon_ | Home services | Quote form, before/after gallery, reviews |
| _coming soon_ | Beauty & wellness | Booking-driven, premium minimal |

## Deploy a site to Cloudflare Pages (free)

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → choose this repo.
2. **Root directory:** the site's folder (e.g. `maison-eclat`).
3. Framework preset **Astro** · build command `npm run build` · output directory `dist`.
4. Add a custom domain if wanted. Each site folder becomes its own Pages project.

See each site's README for options (e.g. connecting the booking form to email).

All businesses shown are fictional and created for portfolio purposes. Photo credits are listed in each site's README.
