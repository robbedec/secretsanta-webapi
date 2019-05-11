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
            OwnerName = "webiv";
            Presents = new List<Present>();
            Created = DateTime.Now;
        }

        public void AddPresent(Present present) => Presents.Add(present);
        public void RemovePresent(int presentId) => Presents.Remove(Presents.FirstOrDefault(x => x.Id == presentId));
        public Present GetPresent(int id) => Presents.SingleOrDefault(b => b.Id == id);
    }
}
