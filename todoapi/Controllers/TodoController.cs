using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private static readonly List<Todo> _todos = new List<Todo>
        {
            new Todo { Id = 1, Content = "Primeira Tarefa", Done = false },
            new Todo { Id = 2, Content = "Segunda Tarefa", Done = false },
            new Todo { Id = 3, Content = "Tarefa concluida", Done = true },
        };

        [HttpGet]
        public ActionResult<IEnumerable<Todo>> GetAllTodos()
        {
            return Ok(_todos.OrderByDescending(t => t.Id));
        }

        [HttpGet("{id}", Name="GetTodoById")]
        public ActionResult<IEnumerable<Todo>> GetTodoById(int id)
        {
            var item = _todos.Find(t => t.Id.Equals(id));
            if ( item == null )
                return NotFound();
            return Ok(item);
        }

        [HttpPost]
        public ActionResult CreateTask([FromBody] Todo todo)
        {
            var newTask = new Todo { Id = _todos.Max(t => t.Id) + 1, Content = todo.Content, Done = false };
            _todos.Add(newTask);
            return CreatedAtRoute(nameof(GetTodoById),
                    new { Id = newTask.Id },
                    newTask);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteTask(int id)
        {
            var forDeletion = _todos.Find(t => t.Id.Equals(id));
            if ( forDeletion == null )
                return NotFound();
            _todos.Remove(forDeletion);
            return Ok();
        }
    }
}
