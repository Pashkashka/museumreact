using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Data.Entities
{
    public class FavoritesContext : DbContext
    {
        public FavoritesContext(DbContextOptions<FavoritesContext> options) : base(options)
        {

        }
        public DbSet<Favorites> Favorites { get; set; }
    }
}
