using System.Threading.Tasks;
using CarShop.Database.Entities;

namespace CarShop.Features.Services
{
    public interface IEmailService
    {
        Task SendApplicationConfirmationAsync(Applications application);
    }
}