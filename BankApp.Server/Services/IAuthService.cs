using BankApp.Server.Models;

namespace BankApp.Server.Services
{
    public interface IAuthService
    {
        Task<User?> Login(string email, string password);
    }
}