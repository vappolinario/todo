using System.Collections.Generic;
using TodoApi.Core.Models;

namespace TodoApi.Data
{
    public interface ITodoTaskRepository
    {
        IEnumerable<TodoTask> GetAllTodos();
        TodoTask GetTaskById(string id);
        void DeleteTask(TodoTask item);
        void CreateTask(TodoTask item);
        void UpdateTask(TodoTask item);
    }
}
