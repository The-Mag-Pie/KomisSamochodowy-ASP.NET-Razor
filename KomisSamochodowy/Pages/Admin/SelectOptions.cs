using Microsoft.AspNetCore.Mvc.Rendering;

namespace KomisSamochodowy.Pages.Admin
{
    public static class SelectOptions
    {
        public static List<SelectListItem> Categories { get; } = new List<SelectListItem>
        {
            new SelectListItem { Text = "Wybierz kategorię...", Value = ""},
            new SelectListItem { Text = "Samochody osobowe", Value = "osobowe"},
            new SelectListItem { Text = "Samochody dostawcze", Value = "dostawcze"}
        };

        public static List<SelectListItem> FuelTypes { get; } = new List<SelectListItem>
        {
            new SelectListItem { Text = "Wybierz rodzaj paliwa...", Value = ""},
            new SelectListItem { Text = "Benzyna", Value = "Benzyna"},
            new SelectListItem { Text = "Diesel", Value = "Diesel"},
            new SelectListItem { Text = "Benzyna + LPG", Value = "Benzyna + LPG"},
            new SelectListItem { Text = "LPG", Value = "LPG"},
            new SelectListItem { Text = "Napęd elektryczny", Value = "Napęd elektryczny"},
            new SelectListItem { Text = "Wodór", Value = "Wodór"}
        };

        public static List<SelectListItem> DriveTypes { get; } = new List<SelectListItem>
        {
            new SelectListItem { Text = "Wybierz rodzaj napędu...", Value = ""},
            new SelectListItem { Text = "AWD", Value = "AWD"},
            new SelectListItem { Text = "4WD", Value = "4WD"},
            new SelectListItem { Text = "FWD", Value = "FWD"},
            new SelectListItem { Text = "RWD", Value = "RWD"}
        };

        public static List<SelectListItem> TransmissionTypes { get; } = new List<SelectListItem>
        {
            new SelectListItem { Text = "Wybierz skrzynię biegów...", Value = ""},
            new SelectListItem { Text = "manualna", Value = "manualna"},
            new SelectListItem { Text = "automatyczna", Value = "automatyczna"},
            new SelectListItem { Text = "sekwencyjna", Value = "sekwencyjna"}
        };
    }
}
