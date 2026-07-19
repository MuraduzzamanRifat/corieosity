# Corieosity

An award-grade, multi-page interactive website for **Corieosity** — a U.S.-focused **AI-search growth agency**. Built to prove the thesis it sells: rich and immersive for humans, server-rendered and machine-readable for AI engines.

> **Be the answer — on Google and in AI.**

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **React Three Fiber + three.js** with a custom **GLSL** point-field
- **GSAP** (preloader), **Lenis** (smooth scroll), **Framer Motion** (page transitions)

> Note: the brief specified Next.js 15; `create-next-app@latest` now ships **Next.js 16** (same App Router, React 19). This matches the newer stack already in use elsewhere. Pin to 15 if required.

## Run

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (type-checked)
npm run start    # serve the production build
```

The original single-page concept demo is preserved at **`/demo.html`**.

## Structure

```
src/
  app/
    layout.tsx            # shell: fonts, metadata, JSON-LD, scene, cursor, preloader, smooth-scroll
    template.tsx          # cinematic page-transition (curtain + fade)
    page.tsx              # Home (full narrative)
    about | services | work | case-studies | contact | privacy | terms   # pages
    api/contact/route.ts  # lead intake (validates + logs; wire email/CRM here)
    sitemap.ts | robots.ts
  components/
    three/                # Scene, ParticleField (GLSL), SceneMount, SceneTint, scroll/scene singletons
    ui/                   # Reveal, Magnetic, Cursor, Preloader
    layout/               # Nav, Footer, PageHero
    sections/             # SectionHeading, ServiceGrid, AnswerSystem, ProcessList, Commitments, Faq, CtaBand, Marquee, StatBar
    seo/JsonLd.tsx · svg/  # structured data + owl mark & icons
    providers/SmoothScroll.tsx
  content/site.ts         # single source of truth for ALL copy
```

## Design system

Tokens and every component class live in `src/app/globals.css` (owl identity: teal intelligence + gold insight, cinematic dark). Fonts: **Space Grotesk** (display) + **Inter** (body) via `next/font`.

## The 3D system

One persistent, fixed `<Canvas>` sits behind all content and survives route changes (no reload flicker). A custom GLSL shader renders a ~4k-point field that drifts, twinkles, reacts to mouse + scroll, and **lerps its tint per page** via `SceneTint`. It is loaded client-only after first paint, throttles points on mobile, respects `prefers-reduced-motion`, and degrades to a CSS gradient where WebGL is unavailable — so content stays fully server-rendered for crawlers.

## Honesty (by design)

No fabricated clients, logos, or testimonials. Instead:
- **Work** -> clearly-labelled *proof builds* (self-initiated demos).
- **Case Studies** -> the site itself as the worked example.
- **Commitments** -> the KPIs we'll be measured on, in place of fake quotes.

Real client case studies/testimonials/logos slot in later via a CMS/admin panel.

## SEO / AEO / GEO

- Per-page `metadata`, canonical URLs, OpenGraph/Twitter, `en-US`.
- `Organization` + `WebSite` + `FAQPage` JSON-LD (`components/seo/JsonLd.tsx`).
- `sitemap.xml` and a `robots.txt` that **explicitly welcomes AI crawlers** (GPTBot, PerplexityBot, Google-Extended, ClaudeBot, ...) — for a GEO agency, being crawled is the point.
- All body copy is server-rendered (verified: content present in raw HTML).

## Accessibility & performance

Skip link, visible focus rings, keyboard-operable nav/FAQ, `aria` on icon-only controls, reduced-motion honored across preloader/reveals/scene, custom cursor disabled on touch. Fonts self-hosted (no layout shift); WebGL deferred and mobile-throttled.

## To take it live (the only open items)

1. **Contact delivery** — `src/app/api/contact/route.ts` validates + logs leads; connect an email/CRM provider (e.g. Resend/HubSpot) at the marked line.
2. **Real details** — set the true domain in `src/content/site.ts` (`site.url`) and swap the placeholder U.S. phone (Google Voice) for the real one.
3. **Logo & OG** — refine the owl into the geometric mark used here (or supply final art) and add OpenGraph/social images.
