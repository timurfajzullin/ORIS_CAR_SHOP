using CarShop.Database.Entities;
using CarShop.Features.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarShop.Controllers;

[ApiController]
[Route("[controller]")]
public class CarInfoController
{
    private readonly ICarInfoServices _service;

    public CarInfoController(ICarInfoServices service)
    {
        _service = service;
    }
    
    [HttpGet("[action]")]
    public async Task<List<CarInfo>> GetCarsInfosAsync()
    {
        return await _service.GetCarsInfosAsync();
    }

    [HttpPost]
    public async Task AddCarInfoAsync(CarInfo carInfo)
    {
        await _service.AddCarInfoAsync(carInfo);
    }
}