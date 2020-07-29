using System;
using System.Collections.Generic;
using System.Linq;
using TodoApi.Core.Models;

namespace TodoApi.Data
{
    public class MariaDbTaskRepository : ITodoTaskRepository
    {
        private readonly TaskContext _context;

        public MariaDbTaskRepository(TaskContext context)
        {
            _context = context;
        }

        public void CreateTask(TodoTask item)
        {
            if (item == null)
                throw new ArgumentNullException(nameof(item));

            _context.Tasks.Add(item);
            _context.SaveChanges();
        }

        public void DeleteTask(TodoTask item)
        {
            if (item == null)
                throw new ArgumentNullException(nameof(item));

            _context.Tasks.Remove(item);
            _context.SaveChanges();
        }

        public IEnumerable<TodoTask> GetAllTodos()
        {
            return _context.Tasks.ToList();
        }

        public TodoTask GetTaskById(string id)
        {
            return _context.Tasks.FirstOrDefault(t => t.Id.Equals(id));
        }

        public void UpdateTask(TodoTask item)
        {
            _context.SaveChanges();
        }
    }
}

