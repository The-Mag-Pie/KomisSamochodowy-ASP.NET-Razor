using Microsoft.AspNetCore.Mvc;
using KomisSamochodowy.Database;
using System.Text.Json;

namespace KomisSamochodowy.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class Messages : ControllerBase
    {
        KomisDbContext dbContext;

        public Messages(KomisDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/<Messages>
        [HttpGet]
        public string Get()
        {
            return JsonSerializer.Serialize(dbContext.Messages.ToList());
        }
    }
}
