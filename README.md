# Four Brothers Exteriors — Website

Next.js 16 + Tailwind CSS 4 single-site build for **Four Brothers Exteriors**, a Calgary roofing & exterior company. Deploy-ready for Vercel.

## Before launch — placeholders to replace

This build ships with a few honest placeholders instead of invented/fake data. Replace these before going live:

1. **Web3Forms access key** — `src/lib/config.ts` → `WEB3FORMS_ACCESS_KEY`. The quote form and popup form both POST to `src/app/api/contact/route.ts`, which forwards to `https://api.web3forms.com/submit` server-side using this key — the key is never exposed in client JS. Currently set to the test key you provided; before real launch, set `WEB3FORMS_ACCESS_KEY` as an env var in Vercel (project settings) pointing at the production key tied to `fourbrothersexterior@gmail.com`, and confirm the "email to" on that key is set correctly at web3forms.com.
2. **Email address** — `fourbrothersexterior@gmail.com` is set in `src/lib/config.ts` (`CONTACT_EMAIL`) and used in the footer, homepage contact card, and JSON-LD schema.
3. **Domain** — the site currently assumes `https://www.fourbrothersexteriors.com` for canonical URLs, Open Graph tags, sitemap, robots.txt, and JSON-LD (`src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/components/ui/local-business-schema.tsx`). Update all of these once the real domain is confirmed.
4. **Team names & photos** — `src/app/page.tsx` (`team` array) currently shows "Name Coming Soon" placeholders and a generic icon avatar for both brothers. Swap in real names, a short bio, and a real headshot (`next/image` with a local file in `public/`) for each.
5. **Project photos** — the "Our Work" gallery on the homepage and the mini-galleries on each service page are placeholder tiles / empty (`galleryPhotos={[]}`) since no real project photos were provided yet. Once photos arrive:
   - Save them to `public/images/gallery/<service>/` with descriptive, keyword-rich filenames, e.g. `calgary-roof-repair-shingle-replacement-before-1.jpg`.
   - Populate the `galleryPhotos` array in each service page (`src/app/roof-installation/page.tsx`, etc.) and the homepage gallery section with `{ src, alt }` objects using Calgary + service keywords in the `alt` text.
6. **Hero background photo** — the hero currently uses an animated WebGL shader background (no photo needed). If you'd rather use a real job-site photo, swap `AnimatedShaderHero` for a photo-backed hero once one is available.
7. **Social links** — no Instagram/Facebook/etc. were provided, so none are linked anywhere. Add them to the footer and `sameAs` array in `local-business-schema.tsx` once available.

## Phone numbers

- Primary (Calgary, shown everywhere as the main CTA number): **(587) 891-9200**
- Secondary (listed in the contact section as a direct line to the other brother): **(514) 348-1366**

Both live in `src/lib/config.ts`.

## Structure

- `/` — homepage: hero, services, why-choose-us, about, meet the team, FAQ preview, projects, service area, quote form/contact
- `/roof-installation`, `/roof-repair`, `/siding-exterior` — dedicated service pages, each with its own hero, service breakdown, quote form, and FAQ (with `FAQPage` schema)
- `/faq` — 14-question FAQ page with `FAQPage` schema
- `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/manifest.ts` — auto-generated SEO files
- `src/components/ui/local-business-schema.tsx` — `LocalBusiness` + `HomeAndConstructionBusiness` JSON-LD injected site-wide

## Local development

```bash
npm install
npm run dev
```

## Deploy

Deploy directly to Vercel (framework auto-detected via `vercel.json`). Set `WEB3FORMS_ACCESS_KEY` as an environment variable in the Vercel project settings once you have a production Web3Forms key.
