using Microsoft.AspNetCore.Mvc;
using KomisSamochodowy.Models;
using KomisSamochodowy.Database;
using System.Text.Json;

namespace KomisSamochodowy.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class Cars : ControllerBase
    {
        KomisDbContext dbContext;

        public Cars(KomisDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET api/<Cars>/osobowe||dostawcze
        [HttpGet("{type}")]
        public string Get(string type)
        {
            if (type != "osobowe" && type != "dostawcze")
                return "ERROR";
            
            return JsonSerializer.Serialize(dbContext.Cars.Where(c => c.Category == type).ToList());
        }
    }
}
