# FRONTEND.md

Frontend constraints, animation rules, and design system for the wedding website.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Deployment**: Vercel

## Project Structure

```
app/
  page.tsx              → Landing page
  story/page.tsx        → Our Story page
  layout.tsx            → Root layout
  globals.css           → Tailwind + custom properties

components/
  hero/                 → Hero section components
  story/                → Story chapter components
  rsvp/                 → RSVP form components
  guest/                → Guest personalization components
  shared/               → Reusable UI components

lib/
  guests.ts             → Guest data and lookup
  api.ts                → RSVP API client

public/
  images/               → Optimized wedding photos
  guests/               → Guest-specific images
```

## Design Principles

1. **Emotion over technology.** This is a feeling product. UX matters more than technical sophistication.
2. **Simple, smooth, story-driven.** Every element serves the narrative.
3. **Mobile-first.** 80-90% of users will be on mobile. Design mobile, enhance desktop.
4. **Performance is UX.** Target <2s initial load. No animation lag on scroll.

## Animation Rules

- **Library**: Framer Motion only. No GSAP, no CSS animation libraries.
- **Style**: Subtle and elegant. Fade-in, slide-up, gentle zoom. No flashy effects.
- **Trigger**: Scroll-based for story sections. Intersection Observer via Framer Motion's `whileInView`.
- **Accessibility**: Always respect `prefers-reduced-motion`. Provide `reduceMotion` variant.
- **Loading**: Lazy-load animation-heavy components with `next/dynamic`.

```tsx
// Pattern: Lazy-loaded animated component
const StorySection = dynamic(() => import('@/components/story/story-section'), {
  loading: () => <StorySkeleton />,
})
```

## Image Rules

- **Format**: WebP primary, AVIF where supported. No PNG/JPG for photos.
- **Sizing**: Use Next.js `<Image>` component with proper `width`/`height` and `sizes`.
- **Loading**: Lazy by default. `priority` only for above-the-fold hero image.
- **Total count**: Max 40 images across entire site. Quality over quantity.

```tsx
// Pattern: Optimized image
<Image
  src="/images/couple.webp"
  alt="Couple photo"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
/>
```

## Component Rules

- Pages (`app/*/page.tsx`) are orchestrators. They compose components, handle routing state, and manage top-level flow.
- Feature components go in `components/<feature>/`.
- Shared components go in `components/shared/`.
- Split early when a component grows large or mixes concerns.
- Keep abstractions pragmatic and concrete.

## Styling Rules

- **Tailwind CSS v4** with `@theme` for custom design tokens.
- Use CSS custom properties for theme colors in `globals.css`.
- No CSS Modules, no styled-components. Tailwind only.
- Mobile-first responsive design: `base` → `sm` → `md` → `lg`.

## Guest Personalization

- URL pattern: `?g=<guestId>` (e.g., `?g=anhtu`)
- Guest data is a static typed constant in `lib/guests.ts`.
- If guest ID not found, show generic content (no error state).
- Personalization includes: name greeting, personal message, optional guest photo.

## RSVP Form

- Fields: Name, Attending (Yes/No), Number of guests, Note
- Submit via POST to Google Apps Script URL.
- Show success/error feedback after submission.
- No client-side validation beyond required fields.