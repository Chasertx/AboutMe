using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/")]
public class PortfolioController : ControllerBase
{
    [HttpGet("portfolio")]
    public ActionResult<PortfolioProfile> GetPortfolio()
    {
        var profile = new PortfolioProfile
        {
            Name = "Chase Ashby",
            Title = "Lead Software Engineer",
            Location = "Cincinnati, OH",
            Headline = "I build scalable software, AI-enabled workflows, and resilient cloud systems that support real business outcomes.",
            Summary = "I’m a software engineer with a B.S. in Computer Science, specializing in full-stack development, cloud architecture, and AI-assisted engineering across financial services, retail, and defense environments. My work combines strong backend design, modern frontend delivery, and pragmatic problem solving.",
            Email = "chaseashby199@gmail.com",
            Highlights = new List<string>
            {
                "Lead Software Engineer at Fiserv",
                "AI + .NET architecture",
                "Cloud, payments, and data systems"
            },
            Skills = new List<string>
            {
                "C#",
                ".NET Core 8/10",
                "ASP.NET Core",
                "React",
                "Blazor",
                "TypeScript",
                "JavaScript",
                "RxJS",
                "SQL Server",
                "PostgreSQL",
                "MongoDB",
                "Cosmos DB",
                "Azure",
                "Docker",
                "Git",
                "Azure DevOps",
                "CI/CD",
                "Entity Framework Core",
                "TensorFlow",
                "PyTorch",
                "GitHub Copilot",
                "AI Engineering"
            },
            Projects = new List<ProjectItem>
            {
                new()
                {
                    Name = "Financial Systems Modernization",
                    Description = "Led platform modernization work across mission-critical financial applications, balancing security, availability, and enterprise backlog priorities.",
                    Category = "Finance",
                    Stack = new List<string> { ".NET Core", "Azure", "SQL Server", "AI Agents" },
                    LiveUrl = "https://github.com/Chasertx",
                    RepoUrl = "https://github.com/Chasertx"
                },
                new()
                {
                    Name = "Retail Platform Automation",
                    Description = "Used AI-assisted tooling to accelerate .NET 8/10 CRUD and schema generation while focusing engineering effort on critical retail transaction workflows and database optimization.",
                    Category = "Retail",
                    Stack = new List<string> { "C#", "PostgreSQL", "Oracle DB", "AKS" },
                    LiveUrl = "https://github.com/Chasertx",
                    RepoUrl = "https://github.com/Chasertx"
                },
                new()
                {
                    Name = "Telemetry & AI Operations",
                    Description = "Built scalable web APIs and ETL workflows for telemetry and mission-planning systems, including integrations with TensorFlow Lite and edge processing.",
                    Category = "Defense / Data",
                    Stack = new List<string> { ".NET", "Angular", "TensorFlow", "ETL" },
                    LiveUrl = "https://github.com/Chasertx",
                    RepoUrl = "https://github.com/Chasertx"
                }
            },
            Experience = new List<ExperienceItem>
            {
                new()
                {
                    Role = "Lead Software Engineer",
                    Company = "Fiserv",
                    Period = "April 2026 — Present",
                    Description = "Spearheaded technical interviewing and hiring for senior and mid-level engineers, mentored junior developers, drove Agile delivery, and led architecture for mission-critical financial applications."
                },
                new()
                {
                    Role = "Software Engineer",
                    Company = "American Eagle Outfitters",
                    Period = "Sep 2025 — Apr 2026",
                    Description = "Built and modernized retail backend infrastructure using .NET 8/10, PostgreSQL, AKS, and AI-assisted development to accelerate feature work and deployment reliability."
                },
                new()
                {
                    Role = "Sr. Software Engineer",
                    Company = "Eastern Bank",
                    Period = "Apr 2025 — Sep 2025",
                    Description = "Designed microservices and REST APIs for payment systems, built ETL for financial transaction data, and led sprint planning in Azure DevOps."
                },
                new()
                {
                    Role = "Full-Stack Engineer III",
                    Company = "Dynamic Software Solutions",
                    Period = "Jul 2024 — Mar 2025",
                    Description = "Architected ASP.NET Core 8 APIs, designed SQL Server schemas, and built Angular-based full-stack enterprise applications with Azure deployment pipelines."
                },
                new()
                {
                    Role = "Full-Stack Engineer II",
                    Company = "Kratos Defense",
                    Period = "Feb 2023 — Jul 2024",
                    Description = "Designed scalable .NET Web APIs for telemetry and mission planning tools, optimized query performance, and integrated TensorFlow Lite-based edge processing."
                },
                new()
                {
                    Role = "Full-Stack Engineer I",
                    Company = "Siemens Digital Industries",
                    Period = "Jan 2019 — Dec 2022",
                    Description = "Built RESTful APIs and React-based dashboards, optimized SQL queries and LINQ, and strengthened deployment confidence through xUnit tests and Agile delivery."
                }
            },
            SocialLinks = new List<SocialLink>
            {
                new() { Label = "GitHub", Url = "https://github.com/Chasertx", Icon = "github" },
                new() { Label = "LinkedIn", Url = "https://www.linkedin.com/in/chase-ashby-bs-cs-664a6217a/", Icon = "linkedin" },
                new() { Label = "Email", Url = "mailto:chaseashby199@gmail.com", Icon = "mail" }
            }
        };

        return Ok(profile);
    }
}
