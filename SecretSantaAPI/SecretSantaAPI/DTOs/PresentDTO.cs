using SecretSantaAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.DTOs
{
    public class PresentDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public double Price { get; set; }
        public Category Category { get; set; }
    }
}
