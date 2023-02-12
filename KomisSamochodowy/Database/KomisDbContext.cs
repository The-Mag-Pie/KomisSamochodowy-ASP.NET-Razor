using Microsoft.EntityFrameworkCore;
using KomisSamochodowy.Models;

namespace KomisSamochodowy.Database
{
    public class KomisDbContext : DbContext
    {
        public KomisDbContext(DbContextOptions<KomisDbContext> options) : base(options) { }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
