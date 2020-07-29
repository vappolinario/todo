using System.Collections.Generic;
using MediatR;

namespace TodoApi.Core.Models
{
    public class GetAllTasksResponse
    {
        public IEnumerable<TodoTask> Tasks { get; private set; }
        public GetAllTasksResponse(IEnumerable<TodoTask> tasks)
        {
            Tasks = tasks;
        }
    }
}



