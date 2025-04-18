using CarShop.Database;
using CarShop.Database.Entities;
using CarShop.Features.Services;
using Microsoft.EntityFrameworkCore;

namespace CarShop.Features;

public class CarCardHandler : ICarCardServices
{
    private readonly MyDBContext _context;

    public CarCardHandler(MyDBContext context)
    {
        _context = context;
    }
        
    public async Task<List<CarCard>> GetCarCardsAsync()
    {
        return await _context.carCard.ToListAsync();
    }

    public async Task AddCarCard(CarCard carCard)
    {
        await _context.carCard.AddAsync(carCard);
        await _context.SaveChangesAsync();
    }
}