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
        public int MaxPrice { get; set; }
        public DateTime PartyDate { get; set; }
        public bool Public { get; set; }
        public ICollection<ApplicationUser> Members { get; set; }
        public ICollection<Message> Messages { get; set; }

        public Group()
        {
            Members = new List<ApplicationUser>();
            Messages = new List<Message>();
        }
    }
}
