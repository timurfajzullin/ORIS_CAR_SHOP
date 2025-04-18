using CarShop.Database;
using CarShop.Database.Entities;
using CarShop.Features.Services;
using Microsoft.EntityFrameworkCore;

namespace CarShop.Features;

public class CarInfoService : ICarInfoServices
{
    private readonly IMyDBContext _context;

    public CarInfoService(IMyDBContext context)
    {
        _context = context;
    }
    
    public async Task<List<CarInfo>> GetCarsInfosAsync()
    {
        return await _context.carInfo.ToListAsync();
    }

    public async Task AddCarInfoAsync(CarInfo carInfo)
    {
        await _context.carInfo.AddAsync(carInfo);
        await _context.SaveChangesAsync();
    }
}