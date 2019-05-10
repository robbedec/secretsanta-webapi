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
                OwnerName = FirstName + " " + LastName
            };
            //Group = new Group() { GroupName = "test" };
            AvatarUrl = "https://scontent-bru2-1.xx.fbcdn.net/v/t31.0-1/c379.0.1290.1290a/10506738_10150004552801856_220367501106153455_o.jpg?_nc_cat=1&_nc_ht=scontent-bru2-1.xx&oh=6791e9ef14a487bafbc2fab2b406c553&oe=5D5FE949";
        }
    }
}
