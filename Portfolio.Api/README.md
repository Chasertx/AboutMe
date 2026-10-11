# API Documentation

This project hosts the structured content that powers the portfolio website. It exposes a single API endpoint that returns the profile, experience, skills, project list, and social links used by the React frontend.

## Purpose

The API acts as the source of truth for portfolio content so the UI can remain clean, reusable, and easy to maintain. Instead of hardcoding content in the frontend, the app fetches the portfolio data from the API as JSON.

## Stack

- .NET 8
- ASP.NET Core Web API
- C#
- Swagger / OpenAPI support

## Local development

From the repository root:

```bash
dotnet restore Portfolio.sln
dotnet run --project Portfolio.Api
```

The API runs at:

```text
http://localhost:5158
```

## Endpoint

### GET /api/portfolio

This endpoint returns a full portfolio payload with:

- name
- title
- location
- headline
- summary
- email
- highlights
- skills
- projects
- experience
- socialLinks

Example:

```bash
curl http://localhost:5158/api/portfolio
```

## Test commands

From the repo root:

```bash
dotnet test Portfolio.sln
```

This executes the xUnit tests covering the portfolio API contract.

## Important files

- `Controllers/PortfolioController.cs` — API endpoint and content payload
- `Models/PortfolioProfile.cs` — typed data model used by the API
- `Program.cs` — ASP.NET Core app startup and endpoint registration

## Notes

The API is intentionally lightweight. If the portfolio content changes, update the profile object or controller data rather than editing the frontend structure.
