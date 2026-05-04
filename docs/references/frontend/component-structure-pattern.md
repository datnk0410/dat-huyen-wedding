# Component Structure Pattern

## 1) Required Rules

- **Page**: Next.js App Router convention — `page.tsx` in route directory.
- **Component**: `export const ComponentName = () => {}` or `export default function ComponentName()`.
- **Each component folder** with multiple exports must have an `index.ts` barrel file.

## 2) Page Template

```tsx
// app/page.tsx (Landing page)
import { HeroSection } from '@/components/hero'
import { RsvpForm } from '@/components/rsvp'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <RsvpForm />
    </main>
  )
}
```

## 3) Component Template

```tsx
// components/hero/hero-section.tsx
type HeroSectionProps = {
  coupleNames: string
  weddingDate: string
}

export const HeroSection = ({ coupleNames, weddingDate }: HeroSectionProps) => {
  return (
    <section>
      <h1>{coupleNames}</h1>
      <p>{weddingDate}</p>
    </section>
  )
}
```

## 4) Barrel Export Template

```ts
// components/hero/index.ts — only export PUBLIC components
export { HeroSection } from './hero-section'
export { HeroDetails } from './hero-details'

// NOTE: hero-skeleton is internal — intentionally NOT exported here.
```

**Public vs Internal:**
- **Public**: components used outside the folder → include in `index.ts`.
- **Internal**: components only used within the folder → not in `index.ts`.

## 5) Recommended Import Style

```tsx
import { HeroSection, HeroDetails } from '@/components/hero'
```

## 6) File Size Rules

- Files/components **over 200 lines** must be split by concern.
- Each component should be responsible for **one thing**.
- Static content data should be separated from component logic.

## 7) Quick Checklist for New Components

- [ ] Component uses `export const` or `export default function`
- [ ] Component folder has `index.ts` — only exports public components
- [ ] Internal sub-components are **not** in `index.ts`
- [ ] File under 200 lines; if exceeded, split by concern
- [ ] Consumer imports from folder (not individual files unless necessary)