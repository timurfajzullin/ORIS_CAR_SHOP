using CarShop.Database.Entities;

namespace CarShop.Features.Services;

public interface ICarCardServices
{
    public Task<List<CarCard>> GetCarCardsAsync();
    
    public Task AddCarCard(CarCard carCard);
    
    
}