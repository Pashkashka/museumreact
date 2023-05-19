using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FavoritesController : ControllerBase
    {
        private readonly FavoritesContext _favoritescontext;
        public FavoritesController(FavoritesContext favoritescontext)
        {
            _favoritescontext = favoritescontext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var favorites = await _favoritescontext.Favorites.ToListAsync();
            return Ok(favorites);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Favorites favorites)
        {
            _favoritescontext.Favorites.Add(favorites);
            await _favoritescontext.SaveChangesAsync();
            return Ok(favorites);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavorites(int id)
        {
            var favorites = await _favoritescontext.Favorites.FindAsync(id);
            _favoritescontext.Favorites.RemoveRange(favorites);
            await _favoritescontext.SaveChangesAsync();

            return Ok(favorites);
        }

    }
}
