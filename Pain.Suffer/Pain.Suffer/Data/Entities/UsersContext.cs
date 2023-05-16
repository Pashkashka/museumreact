using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Data.Entities
{
    public class UsersContext:DbContext
    {
        public UsersContext(DbContextOptions<UsersContext> options):base(options)
        {
            
        }
        public DbSet<Users> Users { get; set; }
    }
}
