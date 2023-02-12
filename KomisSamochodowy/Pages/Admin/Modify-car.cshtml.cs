using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KomisSamochodowy.Pages.Admin
{
    public class Modify_carModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public int? ID { get; set; }

        public void OnGet()
        {
        }
    }
}
