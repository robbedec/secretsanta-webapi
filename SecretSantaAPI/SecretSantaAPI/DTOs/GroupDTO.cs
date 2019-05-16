using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.DTOs
{
    public class GroupDTO
    {
        [Required]
        public string GroupName { get; set; }
        [Required]
        public double MaxPrice { get; set; }
        [Required]
        public DateTime PartyDate { get; set; }
        [Required]
        public bool Public { get; set; }
    }
}
