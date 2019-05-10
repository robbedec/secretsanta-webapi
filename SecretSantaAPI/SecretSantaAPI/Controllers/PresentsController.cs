using System;
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
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class PresentsController : ControllerBase
    {
        private readonly IWishlistRepository _wishlistRepository;
        private readonly IUserRepository _customerRepository;

        public PresentsController(IWishlistRepository wishlistRepository, IUserRepository customerRepository)
        {
            _wishlistRepository = wishlistRepository;
            _customerRepository = customerRepository;
        }

    }
}