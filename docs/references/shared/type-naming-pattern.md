# Type Naming Pattern

## 1) Required Rules

- Data objects exchanged with Google Apps Script API: suffix `Payload` for outgoing, `Response` for incoming.
- Form data types: suffix `FormData` (e.g., `RsvpFormData`).
- Props types: suffix `Props` (e.g., `StoryChapterProps`).
- Guest data types: descriptive names (e.g., `GuestData`, `GuestId`).

## 2) Naming Conventions

- RSVP form: `RsvpFormData`, `RsvpPayload`, `RsvpApiResponse`.
- Guest: `GuestData`, `GuestId`, `GuestMap`.
- Story: `StoryChapter`, `StoryChapterProps`.
- API wrapper: `ApiResponse<T>` for Google Apps Script responses.

## 3) Standard Template

```ts
// lib/guests.ts
export type GuestId = string

export type GuestData = {
  name: string
  message: string
  image?: string
}

export type GuestMap = Record<GuestId, GuestData>
```

```ts
// lib/api.ts
export type RsvpFormData = {
  name: string
  attending: boolean
  guests: number
  note?: string
}

export type RsvpPayload = RsvpFormData

export type ApiResponse<T> = {
  status: 'success' | 'error'
  data?: T
  message?: string
}
```

## 4) Do Not Use

- `UserData`, `Model`, `Payload` (ambiguous, non-standard without context).
- Mixing form data with API types in the same type definition.

## 5) Quick Checklist

- [ ] API payload types have `Payload` suffix
- [ ] API response types have `Response` suffix
- [ ] Form data types have `FormData` suffix
- [ ] Component props have `Props` suffix