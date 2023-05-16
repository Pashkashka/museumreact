using System.Runtime.CompilerServices;

namespace Pain.Suffer.Data.Entities
{
    public class Users
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public int? CountryCodeId { get; set; }
        public string? PhoneNum { get; set; }
        public string? Email { get; set; }
        public int? FavoriteId { get; set; }
        public int? CartId { get; set; }
        public string? UserImageURL { get; set; }   
        public int? Money { get; set; }
    }
}
