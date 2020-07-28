namespace TodoApi.Dtos
{
    public class TaskCreateCommand
    {
        public string Content { get; set; }
        public bool Done { get; set; }
    }
}

