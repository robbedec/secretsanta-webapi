using Microsoft.EntityFrameworkCore;
using SecretSantaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Data
{
    public class SecretSantaContext : DbContext
    {
        public SecretSantaContext(DbContextOptions<SecretSantaContext> options): base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Wishlist>()
                .HasMany(b => b.Presents)
                .WithOne()
                .IsRequired()
                .HasForeignKey("WishlistId");
            modelBuilder.Entity<Wishlist>().Property(b => b.OwnerName).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<Present>().Property(b => b.Name).IsRequired().HasMaxLength(50);
            modelBuilder.Entity<Present>().Property(b => b.Price).IsRequired().HasMaxLength(10);
            modelBuilder.Entity<Present>().Property(b => b.Category);

            modelBuilder.Entity<Wishlist>().HasData(new Wishlist { Id = 1, OwnerName = "Robbe", Created = DateTime.Now });

            modelBuilder.Entity<Present>().HasData(
                    new { Id = 1, Name = "laptop", Price = (double)2000, Category = Category.sports, WishlistId = 1 },
                    new { Id = 2, Name = "fiets", Price = (double)125, Category = Category.sports, WishlistId = 1 },
                    new { Id = 3, Name = "giftcard", Price = (double)50, Category = Category.sports, WishlistId = 1 },
                    new { Id = 4, Name = "monitor", Price = (double)300, Category = Category.sports, WishlistId = 1 }
                );
        }

        public DbSet<Wishlist> Wishlists { get; set; }
    }
}
