using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KomisSamochodowy.Pages
{
    public class Car_detailsModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public int? ID { get; set; }

        public void OnGet()
        {
        }
    }
}
