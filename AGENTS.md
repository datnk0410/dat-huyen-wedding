<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge these baseline rules with project-specific instructions as needed.

**Tradeoff:** these guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them instead of picking silently.
- If a simpler approach exists, say so.
- If something is unclear, stop and name the confusion.

## 2. Simplicity First

**Use the minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No flexibility or configurability that was not requested.
- No error handling for impossible scenarios.
- If 200 lines can be 50, rewrite it.

Ask: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Do not improve adjacent code, comments, or formatting.
- Do not refactor unrelated code.
- Match existing style, even if you would choose differently.
- If you notice unrelated dead code, mention it instead of deleting it.

When your changes create orphans:
- Remove imports, variables, or functions made unused by your changes.
- Do not remove pre-existing dead code unless asked.

The test: every changed line should trace directly to the request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Translate vague requests into checks you can prove:
- "Add validation" -> write tests for invalid inputs, then make them pass.
- "Fix the bug" -> reproduce it with a test, then make it pass.
- "Refactor X" -> ensure behavior is unchanged before and after.

For multi-step work, state a brief plan:

```text
1. [Step] -> verify: [check]
2. [Step] -> verify: [check]
3. [Step] -> verify: [check]
```

Strong success criteria reduce unnecessary clarification loops.

---

**These guidelines are working if:** diffs stay focused, overbuilt solutions decrease, and clarification happens before implementation instead of after mistakes.

---

# PRODUCT

Wedding Website — Modern, Personalized, Story-Driven Experience

A wedding invitation website that tells a 10-year love story through interactive scroll-based storytelling, with guest personalization and RSVP management.

## Tech Stack

- Frontend: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion
- Backend: Google Apps Script (Web App API) + Google Sheets (RSVP storage)
- Deployment: Vercel (CI/CD from GitHub, CDN, SSL)
- Tooling: pnpm, ESLint, Prettier, TypeScript

## Quick Start

Before writing or changing code:
1. Read this file and [ARCHITECTURE.md](ARCHITECTURE.md).
2. Run `./init.sh`.
3. Review `harness/feature_index.json` and the relevant file in `harness/features/`.
4. For product behavior context, read `docs/PRODUCT.md` and `docs/product-specs/` as needed.

## Session Rules

- Work on one feature or plan per session. Do not mix scopes.
- Run verification before claiming a feature is done.
- Use clear, consistent, maintainable code.
- Commit with a descriptive message.
- Update `harness/progress.md` after each session.
- Update harness feature state before ending a session.
- Leave the repository in a clean, restartable state via the standard startup path.

## Required Artifacts

- `harness/feature_index.json`: feature index and status
- `harness/features/*.json`: per-feature records, dependencies, and evidence
- `harness/progress.md`: newest-first session log with blockers and next steps
- `harness/session-handoff.md`: handoff file for unfinished sessions when needed
- `init.sh`: standard repository initialization and verification script

## Definition of Done

A feature is done only when:
- Implementation is complete and committed.
- All verification steps pass: lint, type-check, build.
- Evidence is recorded in `harness/features/*.json` and reflected in `harness/feature_index.json`.
- Progress is logged in `harness/progress.md`.
- The repository can be restarted cleanly from the standard startup path.

## Commands

```bash
# Full workspace initialization and verification
./init.sh

# Development
pnpm dev

# Build
pnpm build

# Lint
pnpm lint
```

`./init.sh` is the default full-workspace verification path. It runs install, harness checks, lint, type-check, and the build.

## References

Read these before deeper changes:
- `ARCHITECTURE.md`: system map, layer model, dependency rules
- `docs/PRODUCT.md`: product specification and feature list
- `docs/product-specs/`: per-feature acceptance criteria
- `docs/FRONTEND.md`: frontend constraints, animation rules, and design system

## Frontend Requirements

All frontend work must follow `docs/FRONTEND.md`.

Component decomposition:
1. Keep `app/page.tsx` and route pages as orchestrators for layout and top-level flow.
2. Put feature components in `components/<feature>/`.
3. Put shared/reusable components in `components/shared/`.
4. Split early when a component grows large or mixes concerns.
5. Keep abstractions pragmatic and concrete.

## Animation Rules

- Use Framer Motion for all animations (consistent API, React-friendly).
- Keep animations subtle: fade-in, slide-up, zoom — no flashy effects.
- Prefer scroll-triggered animations for story sections.
- Always respect `prefers-reduced-motion` media query.
- Lazy-load animation-heavy components with `next/dynamic`.

## Performance Rules

- Optimize images: WebP/AVIF format, proper sizing, lazy loading.
- Dynamic import for heavy components (Framer Motion, gallery).
- Target <2s initial load on mobile.
- Test on 3G throttle during development.