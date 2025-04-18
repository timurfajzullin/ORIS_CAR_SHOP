using CarShop.Database.Entities;
using CarShop.Features.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarShop.Controllers;

[ApiController]
[Route("[controller]")]
public class CarCardController : Controller
{
    private readonly ICarCardServices _carCardServices;

    public CarCardController(ICarCardServices carCardServices)
    {
        _carCardServices = carCardServices;
    }
    
    [HttpGet("[action]")]
    public async Task<List<CarCard>> GetCarCardsList()
    {
        return await _carCardServices.GetCarCardsAsync();
    }

    [HttpPost]
    public async Task<IActionResult> AddCarCard(CarCard carCard)
    {
        await _carCardServices.AddCarCard(carCard);
        return Ok("Car card added");
    }
}