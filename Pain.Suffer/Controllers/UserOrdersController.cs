using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserOrdersController : ControllerBase
    {
        private readonly UserOrdersContext _userOrderscontext;
        public UserOrdersController(UserOrdersContext userOrderscontext)
        {
            _userOrderscontext = userOrderscontext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var userOrders = await _userOrderscontext.UserOrders.ToListAsync();
            return Ok(userOrders);
        }

        [HttpPost]
        public async Task<IActionResult> Create(UserOrders userOrders)
        {
            _userOrderscontext.UserOrders.Add(userOrders);
            await _userOrderscontext.SaveChangesAsync();
            return Ok(userOrders);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrders(int id)
        {
            var userOrders = await _userOrderscontext.UserOrders.FindAsync(id);
            _userOrderscontext.UserOrders.RemoveRange(userOrders);
            await _userOrderscontext.SaveChangesAsync();

            return Ok(userOrders);
        }
    }
}
