using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Data.Entities
{
    public class ExhibitionContext : DbContext
    {
        public ExhibitionContext(DbContextOptions<ExhibitionContext> options) : base(options)
        {

        }
        public DbSet<Exhibition> Exhibition { get; set; }
    }
}
