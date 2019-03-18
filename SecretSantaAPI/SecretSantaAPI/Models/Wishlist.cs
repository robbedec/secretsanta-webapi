using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public class Wishlist
    {
        public int Id { get; set; }
        public string OwnerName { get; set; }
        public DateTime Created { get; set; }
        public ICollection<Present> Presents { get; set; }

        public Wishlist()
        {
            Presents = new List<Present>();
            Created = DateTime.Now;
        }

        public void AddPresent(Present present) => Presents.Add(present);
        public Present GetPresent(int id) => Presents.SingleOrDefault(b => b.Id == id);
    }
}
