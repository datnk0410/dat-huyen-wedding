# Naming & Conventions Pattern

## 1) File Naming

- Files use `kebab-case`.
- Page: `page.tsx` (Next.js App Router convention).
- Component: `<component-name>.tsx` in feature folder.
- Utility: `<name>.ts` in `lib/`.
- Barrel export: `index.ts` in component folders with multiple exports.

## 2) Export Convention

- Component: `export const ComponentName = () => {}` or `export default function ComponentName()`.
- Utility: named export.

## 3) Type Naming

- Guest data types: `GuestData`, `GuestId`.
- RSVP types: `RsvpFormData`, `RsvpResponse`.
- Props types: `ComponentNameProps`.
- Keep types co-located with their usage or in `lib/` for shared types.

## 4) Constant Naming

- Route paths: `PATHS` object.
- Text/copy: domain-specific objects (`HERO_COPY`, `STORY_COPY`, `RSVP_LABELS`).
- General constants: `UPPER_SNAKE_CASE`.

## 5) Import Convention

- Prefer absolute alias: `@/...`.
- Import components via barrel `index.ts` when folder has one.
- Import order: third-party first → blank line → internal `@/`.
- No duplicate imports from the same path — merge into one statement.

## 6) Comment Convention

- All code comments in English.
- Placeholder/mock: `// TODO: replace with real data`.
- Stale comments must be updated when related values change.

## 7) Content Language

- UI text and copy in Vietnamese.
- Code, comments, and documentation in English.