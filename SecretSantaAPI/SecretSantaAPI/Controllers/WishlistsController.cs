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
        private readonly ICustomerRepository _customerRepository;

        public WishlistsController(IWishlistRepository wishlistRepository, ICustomerRepository customerRepository)
        {
            _wishlistRepository = wishlistRepository;
            _customerRepository = customerRepository;
        }


        // GET: api/Wishlist
        /// <summary>
        /// Get all recipes ordered by name
        /// </summary>
        /// <returns>array of recipes</returns>
        [HttpGet]
        public IEnumerable<Wishlist> GetWishlists()
        {
            return _wishlistRepository.GetAll().OrderBy(b => b.OwnerName);
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

        /// <summary>
        /// Get favorite recipes of current user
        /// </summary>
        [HttpGet("Wishlist")]
        public Wishlist GetUserWishlist()
        {
            Customer customer = _customerRepository.GetBy(User.Identity.Name);
            return customer.Wishlist;
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
            return CreatedAtAction(nameof(GetWishlists), new { id = wishlistToCreate.Id }, wishlistToCreate);
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
        public void Delete(int id)
        {
        }
    }
}
