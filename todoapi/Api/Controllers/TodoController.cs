using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Data;
using TodoApi.Core.Models;
using MediatR;
using System.Threading.Tasks;

namespace TodoApi.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoTaskRepository _repo;
        private readonly IMediator _mediator;
        public TodoController(IMediator mediator, ITodoTaskRepository repo)
        {
             _repo = repo;
             _mediator = mediator;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TodoTask>> GetAllTodos()
        {
            return Ok(_repo.GetAllTodos().OrderByDescending(t => t.Id));
        }

        [HttpGet("{id}", Name="GetTodoById")]
        public ActionResult<IEnumerable<TodoTask>> GetTodoById(string id)
        {
            var item = _repo.GetTaskById(id);
            if ( item == null )
                return NotFound();
            return Ok(item);
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
