using CarShop.Database.Entities;

namespace CarShop.Features.Services;

public interface IIpplicationServices
{
    public Task AddApplication(Applications application);
    
    public Task<List<Applications>> GetApplications();
}