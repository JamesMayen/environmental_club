# UJEC — Environmental Club, University of Juba

A production-ready React + Vite + Tailwind website for the Environmental Club
of the University of Juba ("Eco Action for a Greener South").

This project was generated as source code only — dependencies have **not**
been installed, since this environment has no network access. Follow the
steps below on your own machine (Node.js 18+ required).

## 1. Install dependencies

```bash
cd ujec-website
npm install
```

## 2. Run the dev server

```bash
npm run dev
```

Visit the local URL it prints (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The static site will be in `dist/` — deploy that folder to Netlify, Vercel,
GitHub Pages, or any static host.

---

## Project structure

```
ujec-website/
├── public/                  # favicon, robots.txt, sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout wrapper
│   │   └── ui/               # Button, SectionHeading, Counter, SEO, MediaFrame,
│   │                          GrowthRings, WaveDivider, WhatsAppFloat
│   ├── data/siteData.js     # ALL site content lives here (single source of truth)
│   ├── pages/                # Home, About, Projects, Gallery, News,
│   │                          GetInvolved, Donate, Leadership, Partners, Contact
│   ├── App.jsx               # React Router routes
│   ├── main.jsx              # entry point
│   └── index.css             # Tailwind + brand tokens + signature motifs
├── tailwind.config.js        # brand color palette, fonts, animations
└── package.json
```

## Editing content

Almost everything — impact numbers, mission text, projects, blog posts,
leadership roles, partners, donation tiers, contact details, social links —
lives in **`src/data/siteData.js`**. Edit that file to update the site
without touching any component code.

## Adding real photos

Every photo placeholder on the site currently renders through
`src/components/ui/MediaFrame.jsx` — a branded SVG/gradient illustration
keyed by category (Tree Planting, Cleanups, Workshops, etc.), since no real
photography was available to this build. To swap in real photos:

1. Drop your images into `public/images/` (e.g. `public/images/tree-planting-1.jpg`).
2. Replace the relevant `<MediaFrame ... />` usage with a normal `<img>` tag,
   e.g. `<img src="/images/tree-planting-1.jpg" alt="..." loading="lazy" className="..." />`.
   Keep the same `className` so sizing/rounding stays consistent.
3. For the Gallery page specifically, consider extending each object in
   `galleryItems` (in `siteData.js`) with an `image` field, then reading
   that field inside `Gallery.jsx` instead of `MediaFrame`.

## Forms (EmailJS)

The Membership form (`Get Involved`) and Contact form use
[EmailJS](https://www.emailjs.com/). Both files have placeholder constants
near the top:

```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

Create a free EmailJS account, set up an email service + template, and
paste your IDs in. The Partners inquiry form currently just shows a success
message locally — wire it up the same way once you're ready.

## What's included vs. not built

**Included (production-ready source):**
- All 10 pages, fully responsive (mobile/tablet/laptop/desktop)
- React Router navigation, Framer Motion animations throughout
- Tailwind theme using the Club's official brand colors and fonts
- SEO via `react-helmet-async` (meta tags, Open Graph, JSON-LD schema) + `robots.txt` + `sitemap.xml`
- Gallery with category filtering + lightbox (Swiper-ready structure)
- Membership form, Partnership inquiry form, Contact form (React Hook Form)
- Animated impact counters (CountUp), WhatsApp floating button, Google Map embed
- Accessible focus states, semantic markup, reduced-motion support

**Not included in this pass** (flagged in the original brief as "additional
recommendations" — these are backend/infrastructure projects in their own
right, well beyond a static frontend, and need real hosting + database
decisions from the Club first):
- CMS-ready blog backend / admin dashboard
- MongoDB/MERN membership database integration
- Donation payment processing / tracking system
- Event management module

Happy to help scope and build any of those as a follow-up once you've
decided on a backend host (e.g. a small Node/Express + MongoDB API, or a
headless CMS like Sanity/Strapi).

## Brand tokens (from the Club Constitution)

| Token | Value |
|---|---|
| Forest Green (primary) | `#0B6B3A` |
| Deep Green | `#14532D` |
| Light Green | `#4ADE80` |
| Sky Blue (accent) | `#38BDF8` (Tailwind's default `sky-400`) |
| Earth Brown | `#8B5A2B` |
| Warm Gray (background) | `#F8FAFC` |
| Headings | Poppins (ExtraBold) |
| Body | Inter |

— *"Eco Action for a Greener South"*
