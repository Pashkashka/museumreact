using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Data.Entities
{
    public class UserOrdersContext : DbContext
    {
        public UserOrdersContext(DbContextOptions<UserOrdersContext> options) : base(options)
        {

        }
        public DbSet<UserOrders> UserOrders { get; set; }
    }
}
