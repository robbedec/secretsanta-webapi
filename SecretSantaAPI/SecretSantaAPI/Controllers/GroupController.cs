using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SecretSantaAPI.Models;

namespace SecretSantaAPI.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class GroupController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public GroupController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // GET: api/Group
        /// <summary>
        /// Get group from current user
        /// </summary>
        /// <returns>groupa from logged in user</returns>
        [HttpGet("CurrentUserGroup")]
        public ActionResult<Group> GetGroup()
        {
            Group groep = _userRepository.GetBy(User.Identity.Name).Group;
            if(groep == null)
            {
                return NotFound();
            }
            return groep;   
        }
    }
}