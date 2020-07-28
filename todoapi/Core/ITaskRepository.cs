using System.Collections.Generic;
using TodoApi.Models;

namespace TodoApi.Data
{
    public interface ITaskRepository
    {
        IEnumerable<Task> GetAllTodos();
        Task GetTaskById(string id);
        void DeleteTask(Task item);
        void CreateTask(Task item);
        void UpdateTask(Task item);
    }
}
