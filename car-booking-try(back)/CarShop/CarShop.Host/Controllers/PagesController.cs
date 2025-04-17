using CarShop.Database.Entities;
using CarShop.Features;
using Microsoft.AspNetCore.Mvc;

namespace CarShop.Controllers;

[ApiController]
[Route("[controller]")]
public class PagesController : Controller
{
    private readonly ITest _test;
    
    // Добавляем конструктор для внедрения зависимости
    public PagesController(ITest test)
    {
        _test = test ?? throw new ArgumentNullException(nameof(test));
    }
    
    [HttpGet("/catalog")]
    public async Task<ActionResult<List<CarCard>>> GetCatalog()
    {
        try
        {
            var result = await _test.Dofef();
            return Ok(result);
        }
        catch (Exception ex)
        {
            // Логирование ошибки
            return StatusCode(500, "Internal server error");
        }
    }
}