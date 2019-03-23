using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SecretSantaAPI.Data.Repositories;
using SecretSantaAPI.Models;

namespace SecretSantaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet("CurrentUser")]
        public ApplicationUser GetCurrentUser()
        {
            //return _userRepository.GetBy(User.Identity.Name);
			return _userRepository.GetBy("robbe.decorte@student.hogent.be";
        }
    }
}