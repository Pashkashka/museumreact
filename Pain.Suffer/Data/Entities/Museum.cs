using System.Runtime.CompilerServices;

namespace Pain.Suffer.Data.Entities
{
    public class Museum
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public short? CityId { get; set; }
        public int? CountryCodeId { get; set; }
        public string? PhoneNum { get; set; }
        public string? Adress { get; set; }
        public int? PriceMIN { get; set; }
        public int? PriceMAX { get; set; }
        public short? StatusId { get; set; }
        public string? MuseumImageURL { get; set; }
        public string? Description { get; set; }
        public string? map { get; set; }
    }
}
