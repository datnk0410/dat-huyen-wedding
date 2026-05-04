# Project Folder Structure

## Directory Layout

```
tx-va-wedding/
├── app/
│   ├── page.tsx              → Landing page (hero, event info, CTA)
│   ├── story/
│   │   └── page.tsx          → Our Story (scroll storytelling)
│   ├── layout.tsx            → Root layout (fonts, metadata, styles)
│   └── globals.css           → Tailwind CSS v4 + custom properties
├── components/
│   ├── hero/                 → Hero section components
│   ├── story/                → Story chapter components
│   ├── rsvp/                 → RSVP form components
│   ├── guest/                → Guest personalization components
│   └── shared/               → Cross-feature reusable components
├── lib/
│   ├── guests.ts             → Guest data and lookup logic
│   └── api.ts                → Google Apps Script API client
├── public/
│   ├── images/               → Optimized wedding photos (WebP/AVIF)
│   └── guests/               → Guest-specific images
├── docs/
│   ├── PRODUCT.md            → Product specification
│   ├── FRONTEND.md           → Frontend rules and design system
│   ├── product-specs/        → Per-feature acceptance criteria
│   ├── references/           → Canonical coding standards
│   └── knowledge/            → Architecture and harness guides
├── harness/
│   ├── feature_index.json    → Feature index and status
│   ├── features/             → Per-feature JSON records
│   ├── progress.md           → Session continuity log
│   └── session-handoff.md    → Session handoff template
├── scripts/                  → Utility scripts
├── AGENTS.md                 → Agent routing and rules
├── ARCHITECTURE.md           → System map and invariants
└── init.sh                   → Standard initialization script
```

## Naming Conventions

- **Components**: PascalCase directories and files (`components/hero/HeroSection.tsx`)
- **Utilities**: camelCase files (`lib/guests.ts`, `lib/api.ts`)
- **Pages**: Next.js App Router convention (`app/page.tsx`, `app/story/page.tsx`)
- **Assets**: kebab-case (`public/images/couple-photo.webp`)

## Import Aliases

- `@/*` maps to project root (configured in `tsconfig.json`)
- Use `@/components/`, `@/lib/`, `@/public/` for absolute imports