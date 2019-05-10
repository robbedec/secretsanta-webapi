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
                
                await CreateUser(robbedec.Email, "P@ssword1");

                ApplicationUser webiv = new ApplicationUser { Username = "webiv", Email = "webiv", FirstName = "Pieter", LastName = "Hogent", AvatarUrl = "https://avatars3.githubusercontent.com/u/22676272?s=400&v=4" };
                await CreateUser(webiv.Email, "P@ssword1");

                ApplicationUser jan = new ApplicationUser { Username = "jandec", Email = "jan.mieke@telenet.be", FirstName = "Jan", LastName = "Decorte" };
                await CreateUser(jan.Email, "P@ssword1");

                ApplicationUser mieke = new ApplicationUser { Username = "miestu", Email = "mieke.jan@telenet.be", FirstName = "Mieke", LastName = "Stubbe", AvatarUrl = "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/12963634_1002897793119199_4188946336257922061_n.jpg?_nc_cat=108&_nc_ht=scontent-bru2-1.xx&oh=c5822f210c0e6239d1a940a12b939d19&oe=5D7119CF" };
                await CreateUser(mieke.Email, "P@ssword1");


                ApplicationUser stan = new ApplicationUser { Username = "standec", Email = "stan.decorte@telenet.be", FirstName = "Stan", LastName = "Decorte" };
                await CreateUser(stan.Email, "P@ssword1");

                ApplicationUser rune = new ApplicationUser { Username = "runedec", Email = "rune.decorte@telenet.be", FirstName = "Rune", LastName = "Decorte", AvatarUrl = "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/49828797_614041942360435_7312430268118204416_n.jpg?_nc_cat=104&_nc_ht=scontent-bru2-1.xx&oh=41192b48d8029b905fe305f8e6646f04&oe=5D6C77CF" };
                await CreateUser(rune.Email, "P@ssword1");

               Group famDec = new Group()
                {
                    //Id = 1,
                    GroupName = "Familie Decorte",
                    MaxPrice = 30,
                    PartyDate = DateTime.Now.AddMonths(5),
                    Public = false,
                    Messages = new List<Message>
                    {
                        new Message { Sender = robbedec, Content = "Leuk programma" },
                        new Message { Sender = jan, Content = "Tot op kerst!" }
                    }
                };
                robbedec.Group = famDec;
                jan.Group = famDec;
                mieke.Group = famDec;
                stan.Group = famDec;
                rune.Group = famDec;

                famDec.Members.Add(robbedec);
                famDec.Members.Add(jan);
                famDec.Members.Add(stan);
                famDec.Members.Add(rune);
                famDec.Members.Add(mieke);

                _dbContext.Groups.Add(famDec);
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
