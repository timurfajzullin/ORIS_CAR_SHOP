using CarShop.Database;
using CarShop.Features;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ITest, Test>();
builder.Services.AddScoped<IMyDBContext, MyDBContext>();
builder.Services.AddDbContext<MyDBContext>(options =>
    options.UseNpgsql(connectionString: builder.Configuration.GetConnectionString("MyDBContext")));

// Настройка CORS (разрешаем запросы с 5173 и 5174)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:5174")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(); // ← Важно: до MapControllers()
app.MapControllers();
app.MapDefaultControllerRoute();

app.Run();