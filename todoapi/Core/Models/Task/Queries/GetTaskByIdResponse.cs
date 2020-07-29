using MediatR;

namespace TodoApi.Core.Models
{
    public class GetTaskByIdResponse
    {
        public TodoTask Task { get; private set; }
        public GetTaskByIdResponse(TodoTask task)
        {
            Task = task;
        }
    }
}

