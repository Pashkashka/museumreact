using System.Runtime.CompilerServices;

namespace Pain.Suffer.Data.Entities
{
    public class Exhibition
    {
        public int Id { get; set; }
        public string? ExhibitionName { get; set; }
        public int? MuseumCodeId { get; set; }
        public string? Descrption { get; set; }
        public int? ExhibitionPrice { get; set; }
        public string? ExhibitionImageURL { get; set; }
    }
}
