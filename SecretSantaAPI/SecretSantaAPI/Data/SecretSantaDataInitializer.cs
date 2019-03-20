using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using SecretSantaAPI.Models;

namespace SecretSantaAPI.Data
{
    public class SecretSantaDataInitializer
    {
        private readonly SecretSantaContext _dbContext;
        private readonly UserManager<IdentityUser> _userManager;

        public SecretSantaDataInitializer(SecretSantaContext dbContext, UserManager<IdentityUser> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        public async Task InitializeData()
        {
            _dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
                Customer robbedec = new Customer { Email = "robbe.decorte@student.hogent.be", FirstName = "Robbe", LastName = "Decorte" };
                robbedec.Wishlist = _dbContext.Wishlists.First();
                await CreateUser(robbedec.Email, "P@ssword1");
                Customer webiv = new Customer { Email = "webiv", FirstName = "webiv", LastName = "les" };
                await CreateUser(webiv.Email, "gelukkiggeennetbeans");

                _dbContext.Customers.AddRange(robbedec, webiv);
                _dbContext.SaveChanges();
            }
        }

        private async Task CreateUser(string email, string password)
        {
            var user = new IdentityUser { UserName = email, Email = email };
            await _userManager.CreateAsync(user, password);
        }
    }
}
