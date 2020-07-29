using Microsoft.EntityFrameworkCore;
using TodoApi.Core.Models;

namespace TodoApi.Data
{
    public class TaskContext : DbContext
    {
        public DbSet<TodoTask> Tasks { get; set; }
        public TaskContext(DbContextOptions options) : base(options)
        {

        }
    }
}
