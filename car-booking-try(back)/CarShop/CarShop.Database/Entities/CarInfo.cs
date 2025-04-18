namespace CarShop.Database.Entities;

public class CarInfo
{
    public Guid Id { get; set; }
    public string Brand { get; set; }
    public int Cost { get; set; }
    public string GeneralPicture { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public string BodyType { get; set; }
    public int Year { get; set; }
    public string FuelType { get; set; }
    public int Mileage { get; set; }
    public string Transmission { get; set; }
    public string[] Pictures { get; set; }
}