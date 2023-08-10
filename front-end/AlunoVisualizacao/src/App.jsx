import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Table } from 'reactstrap';
import React, { useState, useEffect } from 'react';

function App() {

  const baseUrl = 'https://localhost:7290/api/Alunos';
  
  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data)
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    pedidoGet();
  }, []);

  return (
    <div className="App">
      <br />
      <h3>Cadastro de Alunos</h3>
      <header className="App-header">
        {/* <img src={logoCadastro} alt='Cadastro' /> */}
        <Button className='btn btn-sucess'>Adicionar</Button>
      </header>
      <Table className='table table-bordered table-striped'>
        <thead>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Idade</th>
          <th>Operação</th>
        </thead>
        <tbody>
          {data.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <Button className='btn btn-primary'>Editar</Button> {"  "}
                <Button className='btn btn-danger'>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
