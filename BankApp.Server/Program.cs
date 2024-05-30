
using BankApp.Server.Services;
using MongoDB.Driver;

namespace BankApp.Server;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Configuration.SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("Secrets.json");

        var mongoClient = new MongoClient(builder.Configuration.GetConnectionString("CommBank"));
        var mongoDatabase = mongoClient.GetDatabase("CommBank");

        IAccountsService accountsService = new AccountsService(mongoDatabase);
        IAuthService authService = new AuthService(mongoDatabase);
        IGoalsService goalsService = new GoalsService(mongoDatabase);
        ITagsService tagsService = new TagsService(mongoDatabase);
        ITransactionsService transactionsService = new TransactionsService(mongoDatabase);
        IUsersService usersService = new UsersService(mongoDatabase);

        builder.Services.AddSingleton(accountsService);
        builder.Services.AddSingleton(authService);
        builder.Services.AddSingleton(goalsService);
        builder.Services.AddSingleton(tagsService);
        builder.Services.AddSingleton(transactionsService);
        builder.Services.AddSingleton(usersService);

        builder.Services.AddCors();
        var app = builder.Build();
        app.UseCors(builder => builder
           .AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader());

        app.UseDefaultFiles();
        app.UseStaticFiles();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.MapFallbackToFile("/index.html");

        app.Run();
    }
}
