using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace KomisSamochodowy.Pages
{
    public class ContactModel : PageModel
    {
        [BindProperty(SupportsGet = true)]
        public int? ID { get; set; }

        [BindProperty(SupportsGet = true)]
        public string? Brand { get; set; }

        [BindProperty(SupportsGet = true)]
        public string? Model { get; set; }

        public void OnGet()
        {
        }
    }
}
