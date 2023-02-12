using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using KomisSamochodowy.Database;
using KomisSamochodowy.Models;
using System.Security.Cryptography;
using System.Text;

namespace KomisSamochodowy.Pages.Admin
{
    public class LoginModel : PageModel
    {
        KomisDbContext dbContext;

        public LoginModel(KomisDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void OnGet()
        {
        }

        [BindProperty(SupportsGet = false)]
        [Display(Name = "Login")]
        public string Username { get; set; }

        [BindProperty(SupportsGet = false)]
        [Display(Name = "Hasło")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public void OnPost()
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                var user = dbContext.Users.Where(u => u.Username == Username && u.PasswordHash == GetHash(sha256, Password));
                if (user.Count() == 1)
                {
                    ViewData["LoggedIn"] = true;
                    HttpContext.Session.Set("LoggedIn", BitConverter.GetBytes(true));
                }
                else
                    ViewData["LoggedIn"] = false;
            }
        }

        private static string GetHash(HashAlgorithm hashAlgorithm, string input)
        {
            byte[] data = hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes(input));
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < data.Length; i++)
            {
                sb.Append(data[i].ToString("x2"));
            }
            return sb.ToString();
        }
    }
}
