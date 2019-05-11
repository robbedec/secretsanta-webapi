using Microsoft.EntityFrameworkCore;
using SecretSantaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Data.Repositories
{
    public class GroupRepository : IGroupRepository
    {
        private SecretSantaContext _dbContext;

        public GroupRepository(SecretSantaContext dbContext)
        {
            _dbContext = dbContext;
        }
        public IEnumerable<Group> GetAll()
        {
            return _dbContext.Groups.Include(b => b.Members).Include(b => b.Messages);
        }

        public Group GetById(int id)
        {
            return _dbContext.Groups.Include(b => b.Members).First(x => x.Id == id);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}
