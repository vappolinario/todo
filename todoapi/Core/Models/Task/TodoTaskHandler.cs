using System.Threading;
using System.Threading.Tasks;
using MediatR;
using TodoApi.Data;

namespace TodoApi.Core.Models
{
    public class TaskHandler : IRequestHandler<TaskCreateCommand, TodoTask>,
        IRequestHandler<TaskUpdateCommand, TodoTask>
    {
        private readonly IMediator _mediator;
        private readonly ITodoTaskRepository _repository;

        public TaskHandler(IMediator mediator, ITodoTaskRepository repository)
        {
            _mediator= mediator;
            _repository = repository;
        }

        public async Task<TodoTask> Handle(TaskCreateCommand request, CancellationToken cancellationToken)
        {
            var task = new TodoTask {
                Id = Nanoid.Nanoid.Generate(size: 10),
                   Content = request.Content,
                   Done = request.Done };

            _repository.CreateTask(task);
            return await Task.Run( () => { return task; });
        }

        public async Task<TodoTask> Handle(TaskUpdateCommand request, CancellationToken cancellationToken)
        {
            var task = _repository.GetTaskById(request.Id);
            if ( task == null )
                throw new System.ArgumentNullException("Task");

            task.Done = request.Done;
            _repository.UpdateTask(task);
            return await Task.Run( () => { return task; });
        }
    }
}
