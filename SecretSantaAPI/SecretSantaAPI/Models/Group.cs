using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string GroupName { get; set; }
        public ICollection<ApplicationUser> Members { get; set; }

        public Group()
        {
            Members = new List<ApplicationUser>();
        }
    }
}
