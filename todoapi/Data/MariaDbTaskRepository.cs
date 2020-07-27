using System;
using System.Collections.Generic;
using System.Linq;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class MariaDbTaskRepository : ITaskRepository
    {
        private readonly TaskContext _context;

        public MariaDbTaskRepository(TaskContext context)
        {
            _context = context;
        }

        public void CreateTask(Task item)
        {
            if (item == null)
                throw new ArgumentNullException(nameof(item));

            _context.Tasks.Add(item);
            _context.SaveChanges();
        }

        public void DeleteTask(Task item)
        {
            if (item == null)
                throw new ArgumentNullException(nameof(item));

            _context.Tasks.Remove(item);
            _context.SaveChanges();
        }

        public IEnumerable<Task> GetAllTodos()
        {
            return _context.Tasks.ToList();
        }

        public Task GetTaskById(string id)
        {
            return _context.Tasks.FirstOrDefault(t => t.Id.Equals(id));
        }

        public void UpdateTask(Task item)
        {
            Console.WriteLine($"Atualizando item {item.Id} para {item.Done.ToString()}");
            _context.SaveChanges();
        }
    }
}

