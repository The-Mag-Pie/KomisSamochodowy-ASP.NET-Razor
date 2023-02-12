using System.ComponentModel.DataAnnotations;

namespace KomisSamochodowy.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string PasswordHash { get; set; }
    }
}
