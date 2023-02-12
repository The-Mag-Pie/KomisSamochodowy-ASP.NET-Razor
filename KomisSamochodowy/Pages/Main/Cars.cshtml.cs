using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KomisSamochodowy.Pages
{
    public class CarsModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public string Type { get; set; }
        public void OnGet()
        {
        }
    }
}
