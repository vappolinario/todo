using Microsoft.AspNetCore.Mvc;
using TodoApi.Core.Models;
using MediatR;
using System.Threading.Tasks;

namespace TodoApi.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TodoController(IMediator mediator)
        {
             _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<GetAllTasksResponse>> GetAllTodos()
        {
            var response = await _mediator.Send(new GetAllTasksQuery());
            return Ok(response);
        }

        [HttpGet("{id}", Name="GetTodoById")]
        public async Task<ActionResult<GetTaskByIdResponse>> GetTodoById(string id)
        {
            var response = await _mediator.Send(new GetTaskByIdQuery(id));
            if ( response.Task == null )
                return NotFound();

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult> CreateTask([FromBody] TaskCreateCommand createNewTask)
        {
            var response = await _mediator.Send(createNewTask);
            return CreatedAtRoute(nameof(GetTodoById),
                    new { Id = response.Id },
                    response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteItem(string id)
        {
            var response = await _mediator.Send(new TaskDeleteCommand { Id = id });
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTask(string id, [FromBody] TaskUpdateCommand todoTask)
        {
            todoTask.Id = id;
            var response = await _mediator.Send(todoTask);
            return NoContent();
        }
    }
}
