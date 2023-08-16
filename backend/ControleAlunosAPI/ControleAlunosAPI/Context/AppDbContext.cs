using ControleAlunosAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ControleAlunosAPI.Context
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {

        }
    
        public DbSet<Aluno> Alunos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>().HasData(
                new Aluno
                {
                    Id = 1,
                    Nome = "Guilherme Silva",
                    Email = "guilherme_angelosilva@hotmail.com",
                    Idade = 18
                },
                new Aluno
                {
                    Id = 2,
                    Nome = "Gabriel Silva",
                    Email = "gabriel_angelosilva@hotmail.com",
                    Idade = 13
                }
            );
        }
    }
}
