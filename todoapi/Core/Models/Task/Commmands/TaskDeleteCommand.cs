using MediatR;

namespace TodoApi.Core.Models
{
    public class TaskDeleteCommand : IRequest
    {
        public string Id { get; set; }
    }
}


