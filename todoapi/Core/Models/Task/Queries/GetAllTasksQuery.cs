using MediatR;

namespace TodoApi.Core.Models
{
    public class GetAllTasksQuery : IRequest<GetAllTasksResponse>
    {
    }
}


