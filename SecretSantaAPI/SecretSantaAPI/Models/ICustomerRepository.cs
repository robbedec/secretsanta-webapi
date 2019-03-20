﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public interface ICustomerRepository
    {
        Customer GetBy(string email);
        void Add(Customer customer);
        void SaveChanges();
    }
}
