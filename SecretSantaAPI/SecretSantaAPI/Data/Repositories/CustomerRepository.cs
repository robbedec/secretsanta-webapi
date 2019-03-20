using Microsoft.EntityFrameworkCore;
using SecretSantaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Data.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly SecretSantaContext _dbContext;
        private readonly DbSet<Customer> _customers;

        public CustomerRepository(SecretSantaContext dbContext)
        {
            _dbContext = dbContext;
            _customers = dbContext.Customers;
        }

        public void Add(Customer customer)
        {
            _customers.Add(customer);
        }

        public Customer GetBy(string email)
        {
            return _customers.Include(b => b.Wishlist).ThenInclude(b => b.Presents).SingleOrDefault(b => b.Email == email);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}
