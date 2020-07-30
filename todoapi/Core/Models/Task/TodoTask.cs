using System.ComponentModel.DataAnnotations;

namespace TodoApi.Core.Models
{
    public class TodoTask
    {
        [Key]
        public string Id { get; set; }
        [Required]
        [MaxLength(150)]
        public string Content { get; set; }
        [Required]
        public bool Done { get; set; }

        public override string ToString() => $"Task {Id} - {Content} : {Done}";
    }
}
