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
    public class GroupsController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IGroupRepository _groupRepository;

        public GroupsController(IUserRepository userRepository, IGroupRepository groupRepository)
        {
            _userRepository = userRepository;
            _groupRepository = groupRepository;
        }

        public ICollection<Group> GetGroups()
        {
            return _groupRepository.GetAll().ToList();
        }

        // GET: api/Group
        /// <summary>
        /// Get group from current user
        /// </summary>
        /// <returns>group from logged in user</returns>
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

        [HttpPost("joingroup")]
        public ActionResult<Group> JoinGroup(int groupId)
        {
            _groupRepository.GetById(groupId).AddUser(_userRepository.GetBy(User.Identity.Name));
            _groupRepository.SaveChanges();
            return Ok();
        }

        [HttpPost("leavegroup")]
        public ActionResult<Group> LeaveGroup()
        {
            ApplicationUser user = _userRepository.GetBy(User.Identity.Name);
            user.Group.RemoveUser(user);
            _groupRepository.SaveChanges();
            return Ok();
        }
    }
}