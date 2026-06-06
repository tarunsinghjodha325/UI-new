# TODO — CareerVibe pixel-accurate UI rebuild

## Step 1: Fix auth + routing flow
- Update `src/main.jsx`:
  - Not logged in → redirect to `/login`
  - Login with `resumeUploaded=false` → `/welcome`
  - Login with `resumeUploaded=true` → `/dashboard`
  - Ensure `/career-growth/setup` accessible only when `resumeUploaded=false`
- Verify protected routes for `/dashboard`, `/welcome`, `/jobs`, `/career-path`, `/ai-coach`, `/career-growth/onboarding`, `/career-growth/setup`, `/find-jobs`, `/saved-jobs`

✅ Progress: pending

## Step 2: Fix broken Signup/Login page code
- Review and fix `src/pages/SignupPage.jsx` (currently has broken/duplicate icon mocks)
- Confirm `/login` renders the correct split-layout UI

✅ Progress: pending

## Step 3: Standardize shared layout/components to match screenshots
- Update `src/components/Sidebar.jsx`:
  - exact width/spacing, active item color, badge styling, footer premium card styling
- Update `src/components/TopBar.jsx`:
  - correct variants for pages (search header vs tab header)
- Update `src/components/JobCard.jsx` + any progress/match widgets to match card styles and match score circle

✅ Progress: pending

## Step 4: Implement/replace each slide page (1–10)
- `/` Landing + create-account flow (slide-01)
- `/signup` Create Account (slide-01 right)
- `/login` Login (slide-01 right layout)
- `/dashboard` (slide-02)
- `/welcome` (slide-03)
- `/jobs` AI Job Match (slide-04)
- `/career-growth/onboarding` (slide-05)
- `/career-growth/setup` (slide-06)
- `/career-path` (slide-07) including Edit target role dynamic UI
- `/find-jobs` (slide-08)
- `/ai-coach` (slide-09)
- `/saved-jobs` (slide-10)

✅ Progress: pending

## Step 5: Navigation targets referenced by sidebar
- Ensure routes exist for sidebar items:
  - `/interview-prep`, `/skills`, `/salary`, `/applications`, `/profile`, `/settings`, etc.
- If not in screenshots, create minimal shells to avoid broken navigation

✅ Progress: pending

## Step 6: Visual verification
- Run `npm run dev`
- Manually verify each route at consistent viewport/zoom
- Iterate Tailwind classes until alignment matches the provided `slide-01.jpg` … `slide-10.jpg` layouts

✅ Progress: pending
