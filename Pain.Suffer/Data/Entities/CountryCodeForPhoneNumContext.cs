using Microsoft.EntityFrameworkCore;
using Pain.Suffer.Data.Entities;

namespace Pain.Suffer.Data.Entities
{
    public class CountryCodeForPhoneNumContext : DbContext
    {
        public CountryCodeForPhoneNumContext(DbContextOptions<CountryCodeForPhoneNumContext> options) : base(options)
        {

        }
        public DbSet<CountryCodeForPhoneNum> CountryCodeForPhoneNum { get; set; }
    }
}
