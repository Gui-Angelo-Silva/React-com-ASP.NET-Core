using ControleAlunosAPI.Models;
using ControleAlunosAPI.ViewsModels;
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
        public DbSet<LoginModel> LoginModels { get; set; }
        public DbSet<RegisterModel> RegisterModels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Aluno>().HasKey(a => a.Id);

            modelBuilder.Entity<LoginModel>().HasNoKey();

            modelBuilder.Entity<RegisterModel>().HasNoKey();

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
