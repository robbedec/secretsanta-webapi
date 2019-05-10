using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
    public class WishlistsController : ControllerBase
    {
        private readonly IWishlistRepository _wishlistRepository;
        private readonly IUserRepository _customerRepository;

        public WishlistsController(IWishlistRepository wishlistRepository, IUserRepository customerRepository)
        {
            _wishlistRepository = wishlistRepository;
            _customerRepository = customerRepository;
        }


        // GET: api/Wishlist
        /// <summary>
        /// Get wishlist from current user
        /// </summary>
        /// <returns>wishlist from logged in user</returns>
        [HttpGet]
        public Wishlist GetWishlist()
        {
            return _customerRepository.GetBy(User.Identity.Name).Wishlist;
        }

        // GET: api/Wishlist/5
        [HttpGet("{id}")]
        public ActionResult<Wishlist> GetWishlist(int id)
        {
            Wishlist wishlist = _wishlistRepository.GetBy(id);
            if(wishlist == null)
            {
                return NotFound();
            }
            return wishlist;
        }

        // POST: api/Wishlist
        [HttpPost]
        public ActionResult<Wishlist> PostWishlist(WishlistDTO wishlist)
        {
            Wishlist wishlistToCreate = new Wishlist() { OwnerName = wishlist.OwnerName, Created = DateTime.Now };
            foreach(var i in wishlist.Presents)
            {
                wishlistToCreate.AddPresent(new Present(i.Name, i.Price, i.Category));
            }
            _wishlistRepository.Add(wishlistToCreate);
            _wishlistRepository.SaveChanges();
            return CreatedAtAction(nameof(GetWishlist), new { id = wishlistToCreate.Id }, wishlistToCreate);
        }

        // PUT: api/Wishlist/5
        [HttpPut("{id}")]
        public IActionResult PutWishlist(int id, Wishlist wishlist)
        {
            if(id != wishlist.Id)
            {
                return BadRequest();
            }
            _wishlistRepository.Update(wishlist);
            _wishlistRepository.SaveChanges();
            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult<Wishlist> Delete(int id)
        {
            Wishlist wishlist = _wishlistRepository.GetBy(id);
            if(wishlist == null)
            {
                return NotFound();
            }
            _wishlistRepository.Delete(wishlist);
            _wishlistRepository.SaveChanges();
            return wishlist;
        }

        [HttpDelete("removepresent/{presentid}")]
        public ActionResult<Present> RemovePresent(int presentId)
        {
            GetWishlist().RemovePresent(presentId);
            _wishlistRepository.SaveChanges();
            return Ok();
        }
    }
}
