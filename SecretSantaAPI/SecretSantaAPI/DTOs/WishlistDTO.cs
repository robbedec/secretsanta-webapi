using SecretSantaAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.DTOs
{
    public class WishlistDTO
    {
        [Required]
        public string OwnerName { get; set; }
        public IList<PresentDTO> Presents { get; set; }
    }
}
