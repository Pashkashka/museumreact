using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController:ControllerBase
    {
        private readonly UsersContext _userscontext;
        public UsersController(UsersContext usercontext)
        {
            _userscontext = usercontext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _userscontext.Users.ToListAsync();
            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Users users)
        {
            _userscontext.Users.Add(users);
            await _userscontext.SaveChangesAsync();
            return Ok(users);
        }
    }
}
