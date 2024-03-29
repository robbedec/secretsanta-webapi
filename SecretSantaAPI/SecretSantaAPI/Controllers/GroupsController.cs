﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SecretSantaAPI.DTOs;
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

        [HttpPost("Create")]
        public ActionResult<Group> PostGroup(GroupDTO group)
        {
            Group groupToCreate = new Group { GroupName = group.GroupName, MaxPrice = (int)group.MaxPrice, PartyDate = group.PartyDate, Public = group.Public };
            _groupRepository.Add(groupToCreate);
            _groupRepository.SaveChanges();
            return Ok();
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
               return null;
            }
            return groep;   
        }

        [HttpPost("joingroup/{groupId}")]
        public ActionResult<Group> JoinGroup(int groupId)
        {
            ApplicationUser user = _userRepository.GetBy(User.Identity.Name);
            Group group = _groupRepository.GetById(groupId);
            group.AddUser(user);
            user.Group = group;
            
            //_userRepository.GetBy(User.Identity.Name).Group = _groupRepository.GetById(groupId);
            _userRepository.SaveChanges();
            _groupRepository.SaveChanges();
            return Ok();
        }

        [HttpPost("leavegroup")]
        public ActionResult<Group> LeaveGroup()
        {
            ApplicationUser user = _userRepository.GetBy(User.Identity.Name);
            user.Group.RemoveUser(user);
            user.Group = null;
            _userRepository.SaveChanges();
            _groupRepository.SaveChanges();
            return Ok();
        }
    }
}