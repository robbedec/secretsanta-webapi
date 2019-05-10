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
        private readonly DbSet<ApplicationUser> _users;

        public UserRepository(SecretSantaContext dbContext)
        {
            _dbContext = dbContext;
            _users = dbContext.Users;
        }

        public void Add(ApplicationUser user)
        {
            _users.Add(user);
        }

        public ApplicationUser GetBy(string email)
        {
            return _users.Include(b => b.Wishlist).ThenInclude(b => b.Presents).Include(b => b.Group).ThenInclude(b => b.Members).Include(b => b.Group).ThenInclude(b => b.Messages).SingleOrDefault(b => b.Email == email);
        }

        public ApplicationUser GetByUsername(string username)
        {
            return _users.Include(b => b.Wishlist).ThenInclude(b => b.Presents).Include(b => b.Group).ThenInclude(b => b.Members).SingleOrDefault(b => b.Username == username);   
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}
