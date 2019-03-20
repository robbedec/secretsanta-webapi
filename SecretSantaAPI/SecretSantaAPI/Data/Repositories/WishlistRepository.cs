using Microsoft.EntityFrameworkCore;
using SecretSantaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Data.Repositories
{
    public class WishlistRepository : IWishlistRepository
    {
        private readonly SecretSantaContext _dbContext;
        private readonly DbSet<Wishlist> _wishlists;

        public WishlistRepository(SecretSantaContext dbContext)
        {
            _dbContext = dbContext;
            _wishlists = dbContext.Wishlists;
        }
        public void Add(Wishlist wishlist)
        {
            _wishlists.Add(wishlist);
        }

        public void Delete(Wishlist wishlist)
        {
            _wishlists.Remove(wishlist);
        }

        public IEnumerable<Wishlist> GetAll()
        {
            return _wishlists.Include(b => b.Presents).ToList();
        }

        public Wishlist GetBy(int id)
        {
            return _wishlists.Include(b => b.Presents).SingleOrDefault(b => b.Id == id);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }

        public bool TryGetRecipe(int id, out Wishlist wishlist)
        {
            wishlist = _dbContext.Wishlists.Include(b => b.Presents).FirstOrDefault(b => b.Id == id);
            return wishlist != null;
        }

        public void Update(Wishlist wishlist)
        {
            _dbContext.Update(wishlist);
        }
    }
}
