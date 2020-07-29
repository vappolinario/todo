using MediatR;

namespace TodoApi.Core.Models
{
    public class TaskCreateCommand : IRequest<TodoTask>
    {
        public string Content { get; set; }
        public bool Done { get; set; }
    }
}

