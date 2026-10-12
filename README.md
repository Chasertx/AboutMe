# Chase Ashby Portfolio

A full-stack personal portfolio and engineering profile built with a .NET 8 web API and a modern React/Vite frontend. The project is designed to be easy to maintain, fully testable, and ready for automated Azure deployment from GitHub.

## Overview

This repository combines a polished frontend experience with a content-driven API so the site can be updated without reworking the UI. It is structured for both local development and production deployment, with automated checks that validate the app before publishing.

### Included features

- responsive personal portfolio landing page
- hero, about, experience, projects, and contact sections
- API-backed profile content
- dark premium visual design
- frontend and backend automated tests
- GitHub Actions deployment pipeline to Azure App Service

## Architecture

```text
portfolio/
├── .github/
│   └── workflows/
│       ├── portfolio-ci.yml
│       └── azure-deploy.yml
├── Portfolio.Api/
│   ├── Controllers/
│   ├── Models/
│   ├── Program.cs
│   ├── README.md
│   ├── Portfolio.Api.csproj
│   └── wwwroot/
├── portfolio-client/
│   ├── src/
│   ├── README.md
│   ├── package.json
│   ├── vite.config.js
│   ├── vitest.config.js
│   └── Portfolio.Api.Tests/
├── Portfolio.sln
├── README.md
└── .gitignore
```

### Frontend

- React 19
- Vite
- JavaScript / JSX
- Testing Library + Vitest

### Backend

- .NET 8
- ASP.NET Core Web API
- strongly typed portfolio content model

## Local development

### Prerequisites

- .NET 8 SDK
- Node.js 20+
- npm
- Git

### 1. Restore dependencies

```bash
dotnet restore Portfolio.sln
```

### 2. Run the API

```bash
dotnet run --project Portfolio.Api
```

The API is available at:

```text
http://localhost:5158/api/portfolio
```

### 3. Run the frontend

```bash
cd portfolio-client
npm install
npm run dev
```

The frontend is available at:

```text
http://localhost:5173
```

## Testing

### Frontend tests

```bash
cd portfolio-client
npm test -- --run
```

### Backend tests

```bash
dotnet test Portfolio.sln --configuration Release
```

### Full local validation

```bash
cd portfolio-client
npm run build
```

```bash
dotnet build Portfolio.sln
```

## CI and deployment pipeline

The repository includes two GitHub Actions workflows:

- `.github/workflows/portfolio-ci.yml` — validates pull requests and main-branch pushes
- `.github/workflows/azure-deploy.yml` — runs validation, builds the production bundle, and deploys to Azure App Service

### Deployment flow

When a commit is pushed to `main`, the deployment workflow does the following:

1. installs frontend dependencies
2. runs frontend regression tests
3. builds the production React app
4. prepares the static assets for ASP.NET hosting
5. restores .NET dependencies
6. runs .NET tests
7. publishes the API bundle
8. deploys the published app to Azure App Service

## Azure setup

Before the first deployment, configure these GitHub repository secrets:

- `AZURE_WEBAPP_NAME` — the Azure App Service name
- `AZURE_WEBAPP_PUBLISH_PROFILE` — the publish profile XML downloaded from Azure

The workflow expects an App Service deployment target already created in Azure and the app configured for public access.

## Updating portfolio content

Core content and structure are defined in these files:

- `Portfolio.Api/Controllers/PortfolioController.cs` — profile payload and content source
- `Portfolio.Api/Models/PortfolioProfile.cs` — typed data model for the app
- `portfolio-client/src/App.jsx` — UI rendering and fetch logic
- `portfolio-client/src/App.css` — styling and layout

Common updates include:

- changing headline, summary, skill list, or location
- updating experience entries or project cards
- refreshing links to GitHub, LinkedIn, or email
- refining the visual style to match your personal brand

## Production deployment notes

This project is ready for a straightforward GitHub-to-Azure deployment workflow:

1. commit and push to `main`
2. GitHub Actions validates the code
3. the app is built and published
4. Azure App Service receives the updated deployment
5. the site reflects the latest content without a manual publish step

## Contact

- Email: chaseashby199@gmail.com
- LinkedIn: https://www.linkedin.com/in/chase-ashby-bs-cs-664a6217a/
- GitHub: https://github.com/Chasertx

## Notes

This project is designed to support ongoing portfolio refinement, career updates, and future expansion while maintaining a clean engineering workflow with automated validation and deployment.
