# Next Auth Mini (Client-side)
A tiny demo showing a **client-side** login flow with **Next.js App Router + TypeScript + Tailwind + shadcn-style** components, now using **React Hook Form + Zod** and **TanStack Query**.

## 🚀 Quickstart
```bash
pnpm i
pnpm dev
```
Open http://localhost:3000/login → enter a valid Iranian phone number → Login.

## ✅ Valid phone formats
- `09xxxxxxxxx`
- `+989xxxxxxxxx`
- `00989xxxxxxxxx`

## 🧩 Tech
- Next.js App Router, client components where needed
- Tailwind CSS only for styling
- **React Hook Form + Zod** for form & schema validation
- **TanStack Query** for mutation orchestration & devtools

## 🔒 Auth model
- Client-side only: user data stored in `localStorage` under `auth:user`.
- Client redirects; no server middleware.

## 🧪 Tests
- **Unit**: Vitest + jsdom for utils (`lib/validation.ts`, `lib/storage.ts`)
- **E2E**: Playwright (login flow + redirect guard + logout)
```bash
pnpm test        # unit
pnpm test:e2e    # e2e
```

## 🧪 Notes
- Login API: `https://randomuser.me/api/?results=1&nat=us`
- We only save `{ name, email, picture }`

## 📝 Scripts
- `dev` / `build` / `start` / `test` / `test:e2e`
