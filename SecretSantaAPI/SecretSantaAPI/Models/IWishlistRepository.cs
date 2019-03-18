using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public interface IWishlistRepository
    {
        Wishlist GetBy(int id);
        bool TryGetRecipe(int id, out Wishlist wishlist);
        IEnumerable<Wishlist> GetAll();
        void Add(Wishlist wishlist);
        void Delete(Wishlist wishlist);
        void Update(Wishlist wishlist);
        void SaveChanges();
    }
}
