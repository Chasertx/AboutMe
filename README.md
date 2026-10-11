# Chase Ashby Portfolio

A full-stack personal portfolio site for Chase Ashby that combines a .NET 8 API with a modern React/Vite frontend. The app presents engineering leadership, technical depth, project experience, and contact information in a premium dark brand style.

## Overview

This repository is designed to function as both a personal portfolio and a maintainable full-stack application. It separates presentation from content so the portfolio can evolve without rewriting the UI or layout structure.

### What the app includes

- responsive portfolio landing page
- hero, about, experience, project, and contact sections
- dynamic portfolio content served from a backend API
- polished dark visual design with custom animation and branding
- structured data model for updating profile information quickly
- CI workflow for automated validation in GitHub Actions

## Architecture

```text
portfolio/
├── .github/
│   └── workflows/
│       └── portfolio-ci.yml
├── Portfolio.Api/
│   ├── Controllers/
│   ├── Models/
│   ├── Program.cs
│   ├── Portfolio.Api.csproj
│   └── README.md
├── portfolio-client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   ├── vitest.config.js
│   ├── README.md
│   └── Portfolio.Api.Tests/
├── Portfolio.sln
├── README.md
└── .gitignore
```

### Frontend

- React 19
- Vite
- CSS-driven UI styling
- Vitest + Testing Library for regression tests

### Backend

- .NET 8
- ASP.NET Core Web API
- strongly typed model layer for portfolio content

## Prerequisites

Before running the project locally, install:

- .NET 8 SDK
- Node.js 20+
- npm
- Git

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd portfolio
```

### 2. Restore .NET dependencies

```bash
dotnet restore Portfolio.sln
```

### 3. Run the API

```bash
dotnet run --project Portfolio.Api
```

The API is available at:

```text
http://localhost:5158/api/portfolio
```

### 4. Run the frontend

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

From the frontend directory:

```bash
cd portfolio-client
npm test
```

This runs the Vitest suite covering the main UI rendering and fallback logic.

### Backend tests

From the repository root:

```bash
dotnet test Portfolio.sln
```

This runs the .NET xUnit suite for the API contract and content validation.

### Full local validation

```bash
cd portfolio-client
npm run build
```

And for the API:

```bash
dotnet build Portfolio.sln
```

## Continuous Integration

The project includes a GitHub Actions workflow at:

```text
.github/workflows/portfolio-ci.yml
```

It runs on pushes and pull requests and validates:

- frontend dependency install
- frontend unit/regression tests
- frontend production build
- .NET restore and test execution

## How to update portfolio content

Most content is stored in the backend and rendered by the frontend:

- profile and experience data: `Portfolio.Api/Controllers/PortfolioController.cs`
- model definitions: `Portfolio.Api/Models/PortfolioProfile.cs`
- UI structure: `portfolio-client/src/App.jsx`
- visual styling: `portfolio-client/src/App.css`

Typical content updates include:

- changing your headline, summary, or title
- adding experience entries or projects
- updating email, LinkedIn, or GitHub links
- refining the visual language or layout

## Deployment Notes

This project is ready for a simple deployment flow:

1. push to GitHub
2. let GitHub Actions run the validation checks
3. deploy the API and frontend to your target hosting environment
4. verify the live profile loads from the API

## Contact

- Email: chaseashby199@gmail.com
- LinkedIn: https://www.linkedin.com/in/chase-ashby-bs-cs-664a6217a/
- GitHub: https://github.com/Chasertx

## Notes

This project is intentionally structured to be easy to maintain while maintaining a polished, personalized experience. It is well-suited for ongoing portfolio improvement, employer outreach, and future expansion with additional projects, downloadable resume content, or CMS-backed profile updates.
