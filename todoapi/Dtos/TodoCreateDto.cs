using System.ComponentModel.DataAnnotations;

namespace TodoApi.Dtos
{
    public class TodoCreateDto
    {
        public string Content { get; set; }
        public bool Done { get; set; }
    }
}

