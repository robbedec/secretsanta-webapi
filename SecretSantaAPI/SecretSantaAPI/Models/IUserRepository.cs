using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public interface IUserRepository
    {
        ApplicationUser GetBy(string email);
        ApplicationUser GetByUsername(string username);
        void Add(ApplicationUser user);
        void SaveChanges();
    }
}
