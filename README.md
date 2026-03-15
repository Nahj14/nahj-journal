# NAHJ Journal — Separate Journal Site

Standalone Astro site for journal.nahjinstitute.com

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Run locally:
   ```
   npm run dev
   ```
   Site runs at http://localhost:4321

3. Build:
   ```
   npm run build
   ```

## Deploy to Cloudflare

Create a NEW separate GitHub repository called `nahj-journal`.
Push this entire folder to that repository.

In Cloudflare Workers & Pages:
- Create application → Continue with GitHub
- Select `nahj-journal` repository
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: NODE_VERSION = 18

Then add custom domain: `journal.nahjinstitute.com`

## Before Going Live

Replace ALL Formspree placeholder IDs:
- `YOUR_JOURNAL_FORM_ID` in submit/manuscript.astro
- `YOUR_REVIEWER_FORM_ID` in review/reviewer.astro
- `YOUR_BOARD_FORM_ID` in review/board.astro
- `YOUR_SPECIAL_ISSUE_FORM_ID` in review/special-issue.astro
- `YOUR_GUEST_EDITOR_FORM_ID` in review/guest-editor.astro

## Page Structure

- `/` — Homepage with current issue, latest articles, aims & scope
- `/archive` — All volumes and issues
- `/team` — Editorial team, board, reviewers
- `/submit` — Author guidelines
- `/submit/manuscript` — Manuscript submission form
- `/review` — Reviewer pathways landing
- `/review/reviewer` — Reviewer application
- `/review/board` — Editorial board application
- `/review/special-issue` — Special issue proposal
- `/review/guest-editor` — Guest editor application
- `/login` — Author/reviewer login portal
- `/articles/[slug]` — Individual article pages
- `/privacy` — Privacy policy
- `/terms` — Terms of use
