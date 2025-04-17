using CarShop.Database;
using CarShop.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarShop.Features;

public class Test : ITest
{
    private readonly IMyDBContext _context;

    // Добавляем конструктор для внедрения зависимости
    public Test(IMyDBContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    public async Task<List<CarCard>> Dofef()
    {
        // Используем асинхронный метод ToListAsync()
        return await _context.carCard.ToListAsync();
    }
}

public interface ITest
{
    public Task<List<CarCard>> Dofef();
}