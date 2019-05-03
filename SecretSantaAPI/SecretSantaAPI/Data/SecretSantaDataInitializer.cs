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

                ApplicationUser webiv = new ApplicationUser { Username = "webiv", Email = "webiv", FirstName = "Pieter", LastName = "Hogent", AvatarUrl = "https://avatars3.githubusercontent.com/u/22676272?s=400&v=4" };
                webiv.Group = _dbContext.Groups.First();
                await CreateUser(webiv.Email, "gelukkiggeennetbeans");

                ApplicationUser jan = new ApplicationUser { Username = "jandec", Email = "jan.mieke@telenet.be", FirstName = "Jan", LastName = "Decorte" , AvatarUrl = "https://scontent-bru2-1.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-bru2-1.xx&oh=6791e9ef14a487bafbc2fab2b406c553&oe=5D5FE949"};
                jan.Group = _dbContext.Groups.First();
                await CreateUser(jan.Email, "gelukkiggeennetbeans");

                ApplicationUser mieke = new ApplicationUser { Username = "miestu", Email = "mieke.jan@telenet.be", FirstName = "Mieke", LastName = "Stubbe", AvatarUrl = "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/12963634_1002897793119199_4188946336257922061_n.jpg?_nc_cat=108&_nc_ht=scontent-bru2-1.xx&oh=c5822f210c0e6239d1a940a12b939d19&oe=5D7119CF" };
                jan.Group = _dbContext.Groups.First();
                await CreateUser(jan.Email, "gelukkiggeennetbeans");


                ApplicationUser stan = new ApplicationUser { Username = "standec", Email = "stan.decorte@telenet.be", FirstName = "Stan", LastName = "Decorte", AvatarUrl = "https://scontent-bru2-1.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-bru2-1.xx&oh=6791e9ef14a487bafbc2fab2b406c553&oe=5D5FE949" };
                stan.Group = _dbContext.Groups.First();
                await CreateUser(jan.Email, "gelukkiggeennetbeans");

                ApplicationUser rune = new ApplicationUser { Username = "runedec", Email = "rune.decorte@telenet.be", FirstName = "Rune", LastName = "Decorte", AvatarUrl = "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/49828797_614041942360435_7312430268118204416_n.jpg?_nc_cat=104&_nc_ht=scontent-bru2-1.xx&oh=41192b48d8029b905fe305f8e6646f04&oe=5D6C77CF" };
                rune.Group = _dbContext.Groups.First();
                await CreateUser(jan.Email, "gelukkiggeennetbeans");



                _dbContext.Groups.First().Members.Add(webiv);
                _dbContext.Groups.First().Members.Add(robbedec);
                _dbContext.Groups.First().Members.Add(jan);
                _dbContext.Groups.First().Members.Add(stan);
                _dbContext.Groups.First().Members.Add(rune);
                _dbContext.Groups.First().Members.Add(mieke);


                _dbContext.Users.AddRange(robbedec, webiv, jan, stan, rune, mieke);
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
