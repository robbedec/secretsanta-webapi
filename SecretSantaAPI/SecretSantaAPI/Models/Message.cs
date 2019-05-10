using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Models
{
    public class Message
    {
        public int Id { get; set; }
        public ApplicationUser Sender { get; set; }
        public string Content { get; set; }
    }
}
