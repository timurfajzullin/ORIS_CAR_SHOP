namespace CarShop.Database.Entities;

public class CarCard
{
    public Guid Id { get; set; }
    public int PercentRecommends { get; set; }
    public string PictureCard { get; set; }
    public string Brand { get; set; }
    public int Miles { get; set; }
    public int Price { get; set; }
}