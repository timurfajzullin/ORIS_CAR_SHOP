using CarShop.Database.Entities;
using CarShop.Features.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarShop.Controllers;

[ApiController]
[Route("[controller]")]
public class ApplicationsController
{
    private readonly IIpplicationServices _services;

    public ApplicationsController(IIpplicationServices services)
    {
        _services = services;
    }
    
    [HttpPost]
    public async Task AddApplication(Applications application)
    {
        await _services.AddApplication(application);
    }

    [HttpGet]
    public async Task<List<Applications>> GetApplications()
    {
        return await _services.GetApplications();
    }
}