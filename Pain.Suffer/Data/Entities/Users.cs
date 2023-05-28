using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace Pain.Suffer.Data.Entities
{
    public class Users
    { 
        public int Id { get;private set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string? PhoneNum { get; set; }
        public string? Email { get; set; }
        public string? CountryCodeId { get; set; }
    }
}
