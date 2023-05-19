using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MuseumController : ControllerBase
    {
        private readonly MuseumContext _museumcontext;
        public MuseumController(MuseumContext museumcontext)
        {
            _museumcontext = museumcontext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var museum = await _museumcontext.Museum.ToListAsync();
            return Ok(museum);
        }
    }
}
