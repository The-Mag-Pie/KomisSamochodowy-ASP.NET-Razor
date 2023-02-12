using System.ComponentModel.DataAnnotations;

namespace KomisSamochodowy.Models
{
    public class Message
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string Time { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Topic { get; set; }

        [Required]
        public string Content { get; set; }
    }
}
