# Frontend Documentation

This folder contains the React + Vite presentation layer for Chase Ashby’s portfolio site. The frontend renders the landing page, profile card, project highlights, experience timeline, and contact actions while consuming the API data from the backend project.

## Purpose

The frontend handles the public-facing experience and ensures the interface reflects the content model without coupling the UI directly to the backend implementation.

It includes:

- hero and branding section
- profile summary and highlights
- timeline of work experience
- project cards and skill badges
- responsive layout for desktop and mobile
- polished visual treatment for a professional personal brand

## Stack

- React 19
- Vite
- JavaScript / JSX
- CSS custom styling
- Vitest + Testing Library for UI regression tests

## Local development

From this directory:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

The app expects the backend API to be running so it can load the live portfolio payload from `/api/portfolio`.

## Test commands

```bash
npm test
```

This runs the React regression tests covering rendering and fallback behavior.

## Production build

```bash
npm run build
```

The build output is generated into the `dist` folder and is suitable for deployment to a static hosting target.

## Important files

- `src/App.jsx` — main portfolio UI and data loading logic
- `src/App.css` — styling and visual design
- `src/App.test.jsx` — front-end regression tests
- `public/` — static assets like the profile image and favicon

## Notes

The app includes a fallback profile object used when the API is unavailable. This ensures the site still renders correctly in local development or a degraded backend scenario.
