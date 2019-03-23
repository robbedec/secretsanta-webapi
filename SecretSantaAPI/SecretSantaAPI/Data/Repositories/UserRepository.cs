using Microsoft.EntityFrameworkCore;
using SecretSantaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly SecretSantaContext _dbContext;
        private readonly DbSet<ApplicationUser> _customers;

        public UserRepository(SecretSantaContext dbContext)
        {
            _dbContext = dbContext;
            _customers = dbContext.Users;
        }

        public void Add(ApplicationUser user)
        {
            _customers.Add(user);
        }

        public ApplicationUser GetBy(string email)
        {
            return _customers.Include(b => b.Wishlist).ThenInclude(b => b.Presents).SingleOrDefault(b => b.Email == email);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}
