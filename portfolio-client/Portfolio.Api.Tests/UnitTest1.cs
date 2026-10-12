using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Controllers;
using Portfolio.Api.Models;

namespace Portfolio.Api.Tests;

public class PortfolioControllerTests
{
    [Fact]
    public void GetPortfolio_ReturnsPortfolioProfileWithExpectedIdentityAndContactDetails()
    {
        var controller = new PortfolioController();

        var result = controller.GetPortfolio();

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var profile = Assert.IsType<PortfolioProfile>(okResult.Value);

        Assert.Equal("Chase Ashby", profile.Name);
        Assert.Equal("Lead Software Engineer", profile.Title);
        Assert.Equal("Atlanta, GA", profile.Location);
        Assert.Equal("chaseashby199@gmail.com", profile.Email);
        Assert.Contains("AI + .NET architecture", profile.Highlights);
        Assert.Contains("C#", profile.Skills);
        Assert.Equal(3, profile.Projects.Count);
        Assert.Equal(6, profile.Experience.Count);
    }

    [Fact]
    public void GetPortfolio_IncludesProjectAndSocialMetadataRequiredByPortfolioUi()
    {
        var controller = new PortfolioController();

        var result = controller.GetPortfolio();

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var profile = Assert.IsType<PortfolioProfile>(okResult.Value);

        Assert.Equal("Financial Systems Modernization", profile.Projects[0].Name);
        Assert.Contains("Finance", profile.Projects.Select(p => p.Category));
        Assert.Contains(profile.SocialLinks, link => link.Label == "LinkedIn" && link.Url.Contains("linkedin.com"));
        Assert.Contains(profile.SocialLinks, link => link.Label == "Email" && link.Url.Contains("mailto:"));
    }
}