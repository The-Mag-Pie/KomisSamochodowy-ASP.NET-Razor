using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KomisSamochodowy.Pages.Admin
{
    public class Add_carModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public string? Type { get; set; }

        public void OnGet()
        {
        }
    }
}
