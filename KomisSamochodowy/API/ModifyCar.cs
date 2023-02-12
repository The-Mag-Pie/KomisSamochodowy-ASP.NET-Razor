using Microsoft.AspNetCore.Mvc;
using KomisSamochodowy.Models;
using KomisSamochodowy.Database;
using System.Text.Json;

namespace KomisSamochodowy.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModifyCar : ControllerBase
    {
        KomisDbContext dbContext;

        public ModifyCar(KomisDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // POST api/<ModifyCar>
        [HttpPost]
        public string Post(Car car)
        {
            dbContext.Cars.Update(car);
            if (dbContext.SaveChanges() == 1)
                return JsonSerializer.Serialize(true);
            else
                return JsonSerializer.Serialize(false);
        }
    }
}
