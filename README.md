# VU LMS – Practice Clone (Next.js)

Front-end clone of the Virtual University LMS portal, made for a class assignment.
Only **Home** and **Grade Book** in the sidebar are functional. No backend.

Stack: Next.js 14 (App Router), React 18, Tailwind CSS, lucide-react, TypeScript.

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Deploy
Push to GitHub, import the repo at vercel.com, click Deploy (no settings needed).

## Structure
- app/ – layout, page (sidebar tab switching), global styles
- components/ – Sidebar, TopBar, HomeView, GradeBookView
- lib/data.ts – courses, menu items, grade table
- public/images/ – logos, avatar, instructor photos
