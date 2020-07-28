using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class TaskContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
        public TaskContext(DbContextOptions options) : base(options)
        {

        }
    }
}
