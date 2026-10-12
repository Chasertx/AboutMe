# Frontend Documentation

This folder contains the React + Vite presentation layer for Chase Ashby’s portfolio site. The frontend renders the landing page, profile card, project highlights, experience timeline, and contact actions while consuming the portfolio payload from the backend.

## Purpose

The frontend provides the public-facing experience while keeping the content model separate from the view logic. This makes it easy to update profile information, add sections, or refine branding without changing the data structure.

It includes:

- hero and branding section
- profile summary and highlights
- timeline of work experience
- project cards and skill badges
- responsive layout for desktop and mobile
- a graceful fallback profile when the API is unavailable

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
npm test -- --run
```

This runs the React regression suite covering render behavior, API-driven content loading, and fallback handling.

## Production build

```bash
npm run build
```

The build output is generated into the `dist` folder and is subsequently copied into the ASP.NET application before deployment.

## CI and deployment behavior

The project’s GitHub Actions pipeline validates the frontend before deployment:

1. install dependencies
2. run the test suite
3. build the production bundle
4. publish the application to Azure App Service after all checks pass

## Important files

- `src/App.jsx` — main portfolio UI and data loading logic
- `src/App.css` — styling and visual design
- `src/App.test.jsx` — frontend regression tests
- `public/` — static assets such as the profile image and favicon

## Notes

The app includes a fallback profile object used when the API is unavailable. This ensures the site still renders correctly during local development or when the backend is temporarily down.
