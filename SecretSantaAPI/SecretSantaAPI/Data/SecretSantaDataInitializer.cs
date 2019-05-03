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
                    AvatarUrl = "https://avatars1.githubusercontent.com/u/21178642?v=4",
                };
                robbedec.Wishlist = _dbContext.Wishlists.First();
                robbedec.Group = _dbContext.Groups.First();
                
                await CreateUser(robbedec.Email, "P@ssword1");

                ApplicationUser webiv = new ApplicationUser { Username = "webiv", Email = "webiv", FirstName = "webiv", LastName = "les" };
                webiv.Group = _dbContext.Groups.First();
                await CreateUser(webiv.Email, "gelukkiggeennetbeans");

                ApplicationUser jan = new ApplicationUser { Username = "jandec", Email = "jan.mieke@telenet.be", FirstName = "Jan", LastName = "Decorte" };
                jan.Group = _dbContext.Groups.First();
                await CreateUser(jan.Email, "gelukkiggeennetbeans");

                ApplicationUser stan = new ApplicationUser { Username = "standec", Email = "stan.decorte@telenet.be", FirstName = "Stan", LastName = "Decorte" };
                stan.Group = _dbContext.Groups.First();
                await CreateUser(jan.Email, "gelukkiggeennetbeans");

                ApplicationUser rune = new ApplicationUser { Username = "runedec", Email = "rune.decorte@telenet.be", FirstName = "Rune", LastName = "Decorte" };
                rune.Group = _dbContext.Groups.First();
                await CreateUser(jan.Email, "gelukkiggeennetbeans");



                _dbContext.Groups.First().Members.Add(webiv);
                _dbContext.Groups.First().Members.Add(robbedec);
                _dbContext.Groups.First().Members.Add(jan);
                _dbContext.Groups.First().Members.Add(stan);
                _dbContext.Groups.First().Members.Add(rune);

                _dbContext.Users.AddRange(robbedec, webiv, jan, stan, rune);
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
