namespace CarShop.Database.Entities;

public class Applications
{
    public Guid Id { get; set; }
    public string FullName { get; set; }
    public string Country { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string OtherInfo { get; set; }
}