using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Data.Entities
{
    public class UserCartContext : DbContext
    {
        public UserCartContext(DbContextOptions<UserCartContext> options) : base(options)
        {

        }
        public DbSet<UserCart> UserCart { get; set; }
    }
}
