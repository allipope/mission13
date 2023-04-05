using System.ComponentModel.DataAnnotations;

namespace mission14.Data
{
    public class Movies
    {
        [Key]
        public int movieID { get; set; }
        public string? Title { get; set; }
        public string? Category { get; set; }
        public int Year { get; set; }
        public string? Director { get; set; }
        public string? Rating { get; set; }
        public string? Edited { get; set; }
        public string? LentTo { get; set; }
        public string? Notes { get; set; }
    }
}
