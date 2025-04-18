using CarShop.Database.Entities;

namespace CarShop.Features.Services;

public interface ICarInfoServices
{
    public Task<List<CarInfo>> GetCarsInfosAsync();
    
    public Task AddCarInfoAsync(CarInfo carInfo);
}