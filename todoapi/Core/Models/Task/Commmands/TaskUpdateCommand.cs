using MediatR;

namespace TodoApi.Core.Models
{
    public class TaskUpdateCommand : IRequest<TodoTask>
    {
        public string Id { get; set; }
        public bool Done { get; set; }
    }
}

