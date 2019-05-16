using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public interface IGroupRepository
    {
        void Add(Group group);
        IEnumerable<Group> GetAll();
        Group GetById(int id);
        void SaveChanges();
    }
}
