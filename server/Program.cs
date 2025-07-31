using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// ✅ Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Your Angular frontend origin
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// ✅ Use CORS middleware
app.UseCors(); // Must come BEFORE UseAuthorization

app.UseAuthorization();
app.MapControllers();

app.Run();
