using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public class ApplicationUser
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string AvatarUrl { get; set; }
        public Wishlist Wishlist { get; set; }
        [JsonIgnore]
        public Group Group { get; set; }

        public ApplicationUser()
        {
            Wishlist = new Wishlist()
            {
                OwnerName = FirstName + " " + LastName,
            };
            //Group = new Group() { GroupName = "test" };
  
        }
    }
}
