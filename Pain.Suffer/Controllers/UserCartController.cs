using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserCartController : ControllerBase
    {
        private readonly UserCartContext _userCartcontext;
        public UserCartController(UserCartContext userCartcontext)
        {
            _userCartcontext = userCartcontext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var userCart = await _userCartcontext.UserCart.ToListAsync();
            return Ok(userCart);
        }

        [HttpPost]
        public async Task<IActionResult> Create(UserCart userCart)
        {
            _userCartcontext.UserCart.Add(userCart);
            await _userCartcontext.SaveChangesAsync();
            return Ok(userCart);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavorites(int id)
        {
            var userCart = await _userCartcontext.UserCart.FindAsync(id);
            _userCartcontext.UserCart.RemoveRange(userCart);
            await _userCartcontext.SaveChangesAsync();

            return Ok(userCart);
        }
    }
}
