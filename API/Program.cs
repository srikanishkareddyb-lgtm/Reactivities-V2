using Application.Activities.Queries;
using Microsoft.EntityFrameworkCore;
using Persistence;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddCors();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi

//Mediator pattern for CQRS
builder.Services.AddMediatR(x =>
    x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>());

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
//configure CORS to allow any origin, method, and header (middleware)
app.UseCors(policy => policy.AllowAnyOrigin()
.AllowAnyMethod()
.AllowAnyHeader()
.WithOrigins("http://localhost:3000","https://localhost:3000"));

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    var seeder = new DbInitializer();
    await seeder.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during migration");
}
app.Run();
