using MediatR;

namespace TodoApi.Core.Models
{
    public class GetTaskByIdQuery : IRequest<GetTaskByIdResponse>
    {
        public string Id { get; private set; }
        public GetTaskByIdQuery(string id)
        {
            Id = id;
        }
    }
}

