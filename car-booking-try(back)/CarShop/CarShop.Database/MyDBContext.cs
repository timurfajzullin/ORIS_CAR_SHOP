using System.Text.Json;
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
        modelBuilder.Entity<CarInfo>()
            .Property(e => e.Pictures)
            .HasConversion(
                v => string.Join(",", v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries));
    }
    
    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await base.SaveChangesAsync(cancellationToken);
    }
}


public interface IMyDBContext
{
    public DbSet<CarInfo> carInfo { get; set; }
    public DbSet<CarCard> carCard { get; set; }
    public DbSet<Applications> applications { get; set; }
    
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}