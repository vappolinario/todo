using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Data;
using TodoApi.Dtos;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITaskRepository _repo;
        public TodoController(ITaskRepository repo)
        {
             _repo = repo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Task>> GetAllTodos()
        {
            return Ok(_repo.GetAllTodos().OrderByDescending(t => t.Id));
        }

        [HttpGet("{id}", Name="GetTodoById")]
        public ActionResult<IEnumerable<Task>> GetTodoById(string id)
        {
            var item = _repo.GetTaskById(id);
            if ( item == null )
                return NotFound();
            return Ok(item);
        }

        [HttpPost]
        public ActionResult CreateTask([FromBody] TodoCreateDto todo)
        {
            if ( todo == null )
                throw new Exception("Todo null");

            var newTask = new Task { Id = Nanoid.Nanoid.Generate(size: 10), Content = todo.Content, Done = false };
            _repo.CreateTask(newTask);
            return CreatedAtRoute(nameof(GetTodoById),
                    new { Id = newTask.Id },
                    newTask);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteItem(string id)
        {
            var forDeletion = _repo.GetTaskById(id);
            if ( forDeletion == null )
                return NotFound();
            _repo.DeleteTask(forDeletion);
            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult UpdateTask(string id,[FromBody] TodoUpdateDto todo)
        {
            var forUpdate = _repo.GetTaskById(id);
            if ( forUpdate == null )
                return NotFound();

            forUpdate.Done = todo.Done;
            _repo.UpdateTask(forUpdate);
            return NoContent();
        }
    }
}
