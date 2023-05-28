using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExhibitionController : ControllerBase
    {
        private readonly ExhibitionContext _exhibitioncontext;
        public ExhibitionController(ExhibitionContext exhibitioncontext)
        {
            _exhibitioncontext = exhibitioncontext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var exhibition = await _exhibitioncontext.Exhibition.ToListAsync();
            return Ok(exhibition);
        }
    }
}
