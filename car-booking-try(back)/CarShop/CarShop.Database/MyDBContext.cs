using CarShop.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarShop.Database;

public class MyDBContext : DbContext , IMyDBContext
{
    public DbSet<CarInfo> carInfo { get; set; }
    public DbSet<CarCard> carCard { get; set; }
    public DbSet<Applications> applications { get; set; }
    
    public MyDBContext(DbContextOptions<MyDBContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
    }
}


public interface IMyDBContext
{
    public DbSet<CarInfo> carInfo { get; set; }
    public DbSet<CarCard> carCard { get; set; }
    public DbSet<Applications> applications { get; set; }
}