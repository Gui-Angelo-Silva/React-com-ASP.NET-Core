using ControleAlunosAPI.Models;

namespace ControleAlunosAPI.Repositories
{
    public class AlunoRepositorio
    {
        public static User Get(string username, string password)
        {
            var users = new List<User>();
            users.Add(new User { Id = 1, Username = "guilherme", Password = "gui123", Role = "manager" });
            users.Add(new User { Id = 2, Username = "gabriel", Password = "123456", Role = "employee" });
            return users.Where(x => x.Username.ToLower() == username.ToLower() && x.Password == x.Password).FirstOrDefault();
        }
    }
}
