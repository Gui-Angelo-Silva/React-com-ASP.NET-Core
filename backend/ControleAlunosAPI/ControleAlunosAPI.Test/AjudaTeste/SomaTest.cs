using ControleAlunosAPI.AjudaTeste;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControleAlunosAPI.Test.AjudaTeste
{
    [TestClass]
    public class SomaTest
    {
        [TestMethod]
        public void Deve_retornar_a_soma_de_a_mais_b()
        {
            //Assert.Inconclusive();
            var resultado = new Soma().Somar(a: 2, b: 2);
            Assert.AreEqual(3, resultado);
        }
    }
}
