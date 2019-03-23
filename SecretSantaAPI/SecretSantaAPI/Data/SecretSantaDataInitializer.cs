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
                ApplicationUser robbedec = new ApplicationUser
                {
                    Email = "robbe.decorte@student.hogent.be",
                    Username = "robbedec",
                    FirstName = "Robbe",
                    LastName = "Decorte",
                    AvatarUrl = "https://avatars1.githubusercontent.com/u/21178642?v=4"
                };
                robbedec.Wishlist = _dbContext.Wishlists.First();
                await CreateUser(robbedec.Email, "P@ssword1");

                ApplicationUser webiv = new ApplicationUser { Email = "webiv", FirstName = "webiv", LastName = "les" };
                await CreateUser(webiv.Email, "gelukkiggeennetbeans");

                _dbContext.Users.AddRange(robbedec, webiv);
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
