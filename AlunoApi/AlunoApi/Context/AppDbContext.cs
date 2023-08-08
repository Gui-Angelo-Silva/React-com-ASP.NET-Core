using AlunoApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AlunoApi.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }

        public DbSet<Aluno> Alunos { get; set; }
    }
}
