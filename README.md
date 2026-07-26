# Campus Portal (Demo)

A generic student-portal dashboard built with Next.js 14 (App Router), styled to
match a Bootstrap-style admin theme (blue gradient navbar, icon sidebar, data
tables, accordion profile). All data is placeholder/fictional — no real
institution or person is represented, so it's safe to use as a coursework
project base.

## Structure

- `/` — Dashboard: current-semester course registration table, CGPA & credit
  status card, proctor message, spotlight/announcements.
- `/profile` — Editable student profile. **Profile is the 2nd sidebar item.**
  Toggle **Edit Mode** at the top of the page to make every field on the page
  editable (name, register no., program, and all accordion sections: Personal,
  Educational, Family, Proctor, Hostel). Click **Save changes** to persist
  (stored in the browser via `localStorage`) or **Cancel** to discard.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: Next.js (auto-detected). No env vars needed.
4. Click Deploy.

**Option B — via Vercel CLI**
```bash
npm i -g vercel
vercel        # first deploy, follow prompts
vercel --prod # promote to production
```

## Customizing

- Replace placeholder data in `data/mockData.js` with your own (course list,
  credit status, profile defaults, sidebar items).
- Colors/fonts/spacing live in `app/globals.css` as CSS custom properties at
  the top of the file (`--portal-*`, `--bs-*`) — change these to re-theme the
  whole app.
- Sidebar items (icons + labels + links) are defined in `sidebarItems` in
  `data/mockData.js`. Icon names map to `lucide-react` icon components.
- Swap the inline SVG placeholder avatars in `Navbar.jsx` / `app/profile/page.js`
  for real image files by dropping them in `/public` and updating the `src`.

## Notes

- No backend/database is included — profile edits persist per-browser via
  `localStorage`. To make this multi-user/persistent, wire the profile page
  up to an API route + database (e.g. Vercel Postgres, Supabase) instead of
  `localStorage`.
