# 💍 Xuân Tùng & Vân Anh — Wedding Website

Thiệp cưới hiện đại, kể chuyện 10 năm yêu nhau qua trải nghiệm tương tác.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Animation**: Framer Motion
- **Backend**: Google Apps Script + Google Sheets (RSVP)
- **Deployment**: Vercel

## Quick Start

```bash
./init.sh
pnpm dev
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript check |

## Project Structure

```
app/
  page.tsx          → Landing page (hero, event info, CTA)
  story/page.tsx    → Our Story (10 chapters)
  layout.tsx        → Root layout
  globals.css       → Design tokens (wine/cream/beige/gold)

components/
  hero/             → Hero section
  story/            → Story chapters (scroll animations)
  rsvp/             → RSVP form
  guest/            → Guest personalization
  shared/           → Reusable components

lib/
  guests.ts         → Guest data lookup
  api.ts            → Google Apps Script client

public/
  images/           → Wedding photos
  guests/           → Guest-specific images
```

## Features

- **Landing page** — couple names, event info, venue map, CTAs
- **Our Story** — 10 chapters, scroll-based storytelling with Framer Motion
- **Guest personalization** — `?g=<id>` URL parameter
- **RSVP** — name + event checkboxes (8/6 tiệc đãi khách, 9/6 lễ thành hôn)

## Content

| Item | Value |
|------|-------|
| Couple | Xuân Tùng & Vân Anh |
| Tiệc đãi khách | 08/06/2026 (23/4 âm lịch Bính Ngọ) |
| Lễ thành hôn | 09/06/2026 (24/4 âm lịch) |
| Venue | Sân đình thôn Gia Lương, xã Đông Anh, TP Hà Nội |
| Language | Vietnamese, light mode |
