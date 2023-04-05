using Microsoft.EntityFrameworkCore;

namespace mission14.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }
        public DbSet<Movies> Movies { get; set; }
    }
}
