# CareerVibe

AI-powered career growth platform. Find the right job, build the right career.

**Live demo:** _add your Netlify URL here after deploy_

## Stack
- React 18 + Vite 5
- Tailwind CSS 3
- React Router 6
- Lucide React icons

## Local development
```bash
npm install
npm run dev          # http://127.0.0.1:5173
```

## Production build
```bash
npm run build        # outputs to dist/
npm run preview      # serve dist/ locally
```

## Deploy
The repo includes a `netlify.toml` with SPA fallback for React Router. Connect this repo to [Netlify](https://app.netlify.com) and it will auto-detect the build settings and deploy.

## Routes
- `/` — landing page
- `/signup` — sign up
- `/dashboard` — home dashboard
- `/jobs` — AI Job Match (with sub-items: Best Matches, High Match, Good Match, Explore All, Saved Jobs, Job Alerts)
- `/career-path` — Career Path
- `/career-growth/setup` — resume gate (ResumeGate)
- `/career-growth/onboarding` — onboarding flow
- `/ai-coach` — AI Career Coach
- `/saved-jobs` — Saved Jobs
- `/find-jobs` — Find Jobs (credits)
- `/profile`, `/settings`, `/applications`, `/interview-prep`, `/salary`, `/skills`
