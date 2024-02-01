using Microsoft.EntityFrameworkCore;

namespace asdf.Models
{
    public class WorckerContext: DbContext
    {
        public WorckerContext(DbContextOptions<WorckerContext> options) : base(options) 
        {

        }

        public DbSet<Worcker>Worckers { get; set; }

    }
}
