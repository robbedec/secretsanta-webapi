﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public Wishlist Wishlist { get; set; }

        public Customer()
        {
            Wishlist = new Wishlist()
            {
                OwnerName = FirstName + " " + LastName,
            };
        }
    }
}
