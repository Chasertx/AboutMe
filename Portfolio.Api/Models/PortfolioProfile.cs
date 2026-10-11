namespace Portfolio.Api.Models;

public class PortfolioProfile
{
    public string Name { get; set; } = "Alex Morgan";
    public string Title { get; set; } = "Senior Full-Stack Engineer";
    public string Location { get; set; } = "Austin, TX";
    public string Headline { get; set; } = "I design and build digital products that feel effortless for users and measurable for businesses.";
    public string Summary { get; set; } = "I help teams turn complex ideas into elegant, high-performing software experiences. My work blends product strategy, UI craftsmanship, and solid backend engineering to drive real business outcomes.";
    public string Email { get; set; } = "hello@alexmorgan.dev";
    public List<string> Highlights { get; set; } = new()
    {
        "8+ years building web products",
        "UX-forward engineering",
        "Cloud-native delivery"
    };
    public List<string> Skills { get; set; } = new()
    {
        "C#",
        ".NET 8",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Azure",
        "Docker",
        "CI/CD",
        "Design Systems",
        "Product Strategy"
    };
    public List<ProjectItem> Projects { get; set; } = new();
    public List<ExperienceItem> Experience { get; set; } = new();
    public List<SocialLink> SocialLinks { get; set; } = new();
}

public class ProjectItem
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public List<string> Stack { get; set; } = new();
    public string LiveUrl { get; set; } = string.Empty;
    public string RepoUrl { get; set; } = string.Empty;
}

public class ExperienceItem
{
    public string Role { get; set; } = string.Empty;
    public string Company { get; set; } = string.Empty;
    public string Period { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}

public class SocialLink
{
    public string Label { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
}
