using Microsoft.AspNetCore.Mvc;
using KomisSamochodowy.Models;
using KomisSamochodowy.Database;
using System.Text.Json;

namespace KomisSamochodowy.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarDetails : ControllerBase
    {
        KomisDbContext dbContext;

        public CarDetails(KomisDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET api/<CarDetails>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            var car = dbContext.Cars.Where(c => c.ID == id);
            if (car.Count() == 1)
            {
                return JsonSerializer.Serialize(car.ToList()[0]);
            }
            else
            {
                return "ERROR";
            }
        }
    }
}
