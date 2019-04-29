using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SecretSantaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Data
{
    public class SecretSantaContext : IdentityDbContext
    {
        public SecretSantaContext(DbContextOptions<SecretSantaContext> options): base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Wishlist>()
                .HasMany(b => b.Presents)
                .WithOne()
                .IsRequired()
                .HasForeignKey("WishlistId");
            builder.Entity<Wishlist>().Property(b => b.OwnerName).IsRequired().HasMaxLength(50);

            builder.Entity<Present>().Property(b => b.Name).IsRequired().HasMaxLength(50);
            builder.Entity<Present>().Property(b => b.Price).IsRequired().HasMaxLength(10);
            builder.Entity<Present>().Property(b => b.Category);

            builder.Entity<Group>()
                .HasMany(b => b.Members)
                .WithOne()
                .HasForeignKey("GroupId");
            builder.Entity<Group>().Property(b => b.GroupName).IsRequired().HasMaxLength(50);

            builder.Entity<ApplicationUser>().Property(c => c.LastName).IsRequired().HasMaxLength(50);
            builder.Entity<ApplicationUser>().Property(c => c.FirstName).IsRequired().HasMaxLength(50);
            builder.Entity<ApplicationUser>().Property(c => c.Email).IsRequired().HasMaxLength(100);
            //builder.Entity<ApplicationUser>().HasOne(b => b.Group).WithMany().HasForeignKey("GroupId");

            builder.Entity<Wishlist>().HasData(new Wishlist { Id = 1, OwnerName = "Robbe", Created = DateTime.Now });

            builder.Entity<Group>().HasData(new { Id = 1, GroupName = "Familie Decorte"});

            builder.Entity<Present>().HasData(
                    new { Id = 1, Name = "laptop", Price = (double)2000, Category = Category.sports, WishlistId = 1 },
                    new { Id = 2, Name = "fiets", Price = (double)125, Category = Category.sports, WishlistId = 1 },
                    new { Id = 3, Name = "giftcard", Price = (double)50, Category = Category.sports, WishlistId = 1 },
                    new { Id = 4, Name = "monitor", Price = (double)300, Category = Category.sports, WishlistId = 1 }
            );
        }

        public DbSet<Wishlist> Wishlists { get; set; }
        public new DbSet<ApplicationUser> Users { get; set; }
        public DbSet<Group> Groups { get; set; }
    }
}
