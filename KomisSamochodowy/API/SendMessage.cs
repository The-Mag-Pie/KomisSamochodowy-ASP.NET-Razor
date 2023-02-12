using Microsoft.AspNetCore.Mvc;
using KomisSamochodowy.Models;
using KomisSamochodowy.Database;
using System.Text.Json;

namespace KomisSamochodowy.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class SendMessage : ControllerBase
    {
        KomisDbContext dbContext;

        public SendMessage(KomisDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // POST api/<SendMessage>
        [HttpPost]
        public string Post(Message message)
        {
            dbContext.Messages.Add(message);
            if (dbContext.SaveChanges() == 1)
                return JsonSerializer.Serialize(true);
            else
                return JsonSerializer.Serialize(false);
        }
    }
}
