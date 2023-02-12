using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace KomisSamochodowy.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class Logout : ControllerBase
    {
        // GET api/<Logout>/
        [HttpGet]
        public string Get()
        {
            HttpContext.Session.Set("LoggedIn", BitConverter.GetBytes(false));
            if (BitConverter.ToBoolean(HttpContext.Session.Get("LoggedIn") != null ? HttpContext.Session.Get("LoggedIn") : BitConverter.GetBytes(false)))
                return JsonSerializer.Serialize(false);
            else
                return JsonSerializer.Serialize(true);
        }
    }
}
