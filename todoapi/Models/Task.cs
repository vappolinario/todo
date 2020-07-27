using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class Task
    {
        [Key]
        public string Id { get; set; }
        [Required]
        [MaxLength(150)]
        public string Content { get; set; }
        [Required]
        public bool Done { get; set; }
    }
}
