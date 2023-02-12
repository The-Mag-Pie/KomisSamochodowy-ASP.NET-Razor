using System.ComponentModel.DataAnnotations;

namespace KomisSamochodowy.Models
{
    public class Car
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public string Image { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public int YearProduction { get; set; }

        [Required]
        public int Mileage { get; set; }

        [Required]
        public string FuelType { get; set; }

        [Required]
        public string DriveType { get; set; }

        [Required]
        public int EngineDisplacement { get; set; }

        [Required]
        public int EnginePower { get; set; }

        [Required]
        public string Transmission { get; set; }

        [Required]
        public double FuelConsumption { get; set; }

        [Required]
        public string Body { get; set; }

        [Required]
        public int Doors { get; set; }

        [Required]
        public double Price { get; set; }
    }
}
