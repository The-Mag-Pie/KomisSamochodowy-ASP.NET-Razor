using Microsoft.AspNetCore.Mvc;
using KomisSamochodowy.Models;
using KomisSamochodowy.Database;
using System.Text.Json;

namespace KomisSamochodowy.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddCar : ControllerBase
    {
        KomisDbContext dbContext;

        public AddCar(KomisDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // POST api/<AddCar>
        [HttpPost]
        public string Post(Car car)
        {
            dbContext.Cars.Add(car);
            if (dbContext.SaveChanges() == 1)
                return JsonSerializer.Serialize(car.ID);
            else
                return "ERROR";
        }
    }
}
