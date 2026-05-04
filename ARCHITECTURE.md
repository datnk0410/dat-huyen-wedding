# ARCHITECTURE.md

## Problem Summary

A wedding invitation website that provides event information, tells a 10-year love story through interactive scroll-based storytelling, personalizes content per guest, and collects RSVP responses — all without a traditional backend.

## Codemap

```
app/
  page.tsx              → Landing page (hero, event info, CTA)
  story/
    page.tsx            → Our Story (chapter-based scroll storytelling)
  layout.tsx            → Root layout (fonts, metadata, global styles)
  globals.css           → Tailwind CSS v4 imports + CSS custom properties

components/
  hero/                 → Hero section (names, photo, event details)
  story/                → Story chapter components (scroll animations)
  rsvp/                 → RSVP form component
  guest/                → Guest personalization banner
  shared/               → Cross-feature reusable components

lib/
  guests.ts             → Guest data lookup (URL param → personalized content)
  api.ts                → Google Apps Script API client for RSVP

public/
  images/               → Wedding photos (optimized WebP/AVIF)
  guests/               → Guest-specific images
```

## Key Files/Types

- `app/page.tsx` — Landing page orchestrator
- `app/story/page.tsx` — Story page orchestrator
- `lib/guests.ts` — Guest personalization data and lookup logic
- `lib/api.ts` — RSVP submission API client
- `components/hero/` — Hero section with event details
- `components/story/` — Scroll-animated story chapters
- `components/rsvp/` — RSVP form with validation

## Architectural Invariants

1. **No traditional backend.** All server-side logic is Google Apps Script. The Next.js app is purely static/client-side.
2. **Client-first rendering.** Pages use client components for interactivity (animations, guest personalization). Server components for static content and metadata.
3. **Image optimization is mandatory.** All images must be WebP/AVIF, properly sized, lazy-loaded. No unoptimized images in production.
4. **Animation via Framer Motion only.** No CSS animation libraries, no GSAP. One animation system for consistency.
5. **Guest data is static JSON.** No database for guest personalization. Guest data lives in `lib/guests.ts` as a typed constant.
6. **Mobile-first.** 80-90% of users will be on mobile. All designs start mobile, then enhance for desktop.

## Boundaries

```
Browser → Next.js (SSG/CSR) → Google Apps Script → Google Sheets
                                    ↑
                              RSVP form POST only
```

- **Next.js → Google Apps Script**: Single POST endpoint for RSVP. No other API calls.
- **Guest personalization**: Client-side only. URL param `?g=<id>` → lookup in static data.
- **No authentication**: Public website. No login, no auth middleware.

## Cross-Cutting Concerns

- **Animation**: Framer Motion with `prefers-reduced-motion` support. Lazy-loaded via `next/dynamic`.
- **SEO**: Next.js metadata API for title, description, Open Graph images.
- **Performance**: Next.js Image component, dynamic imports, WebP/AVIF, lazy loading.
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, reduced-motion support.