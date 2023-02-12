using Microsoft.AspNetCore.Mvc;
using KomisSamochodowy.Models;
using KomisSamochodowy.Database;
using System.Text.Json;

namespace KomisSamochodowy.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeleteCar : ControllerBase
    {
        KomisDbContext dbContext;

        public DeleteCar(KomisDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET api/<DeleteCar>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            dbContext.Cars.Remove(new Car() { ID = id });
            if (dbContext.SaveChanges() == 1)
                return JsonSerializer.Serialize(true);
            else
                return JsonSerializer.Serialize(false);
        }
    }
}
