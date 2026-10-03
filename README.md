# Chahak Goswami — AI Engineering Portfolio

A recruiter-first portfolio built with Next.js. The site emphasizes evidence: concrete projects, engineering tradeoffs, architecture, code links, and experience.

## Pages

- `/` — recruiter-focused landing page with selected work, FAA experience, skills, and positioning
- `/projects` — project portfolio
- `/projects/[slug]` — individual case studies
- `/experience` — FAA / Rigil internship, additional experience, leadership and writing
- `/about` — narrative, education and skills

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel (free)

1. Create a new GitHub repository, e.g. `chahak-portfolio`.
2. Upload/push this folder to the repository.
3. Sign in to Vercel with GitHub.
4. Click **Add New → Project** and import the repository.
5. Leave Framework Preset as **Next.js** and deploy.
6. Optional: add a custom domain in **Project Settings → Domains**.

No environment variables are required.

## Content notes

- Resume facts are based on the supplied Chahak Goswami résumé.
- Project descriptions are grounded in the public GitHub repositories supplied for this build.
- The ticket-resolution and CI-triage projects are intentionally labeled "Project build / roadmap" because their current public README pages present a staged build plan.
- A DOCX copy of the supplied résumé is included in `public/Chahak_Goswami_Resume.docx` and linked in the navigation.

## Recommended next upgrades

1. Add a professional headshot only if Chahak wants a more personal presentation.
2. Record 45–90 second demo videos for the two strongest projects.
3. Add screenshots/output artifacts from each repository.
4. Convert the résumé to PDF and replace the navigation link with the PDF version.
5. Add a custom domain when ready.

## Security-patched framework versions

This package has been updated for Vercel deployment with:

- Next.js 15.5.27 (Maintenance LTS security release)
- React 19.1.7
- React DOM 19.1.7

If replacing an existing GitHub repository, replace the project files and redeploy. Vercel will reinstall dependencies from package.json.

