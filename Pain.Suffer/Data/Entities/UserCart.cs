using System.Runtime.CompilerServices;

namespace Pain.Suffer.Data.Entities
{
    public class UserCart
    {
        public int Id { get; set; }
        public string? ExhibitionName { get; set; }
        public int? ExhibitionPrice { get; set; }
        public int? UserId { get; set; }
        public string? ExhibitionImageURL { get; set; }
    }
}
