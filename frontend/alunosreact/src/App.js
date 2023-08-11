import React, { useEffect, useState } from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Table } from 'reactstrap';
import logoCadastro from './assets/logocadastro.png'

function App() {

  const baseUrl = 'https://localhost:7290/api/Alunos';
  
  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
        console.log(data)
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    pedidoGet();
  })

  return (
    <div className="App">
      <br />
      <h3>Cadastro de Alunos</h3>
      <header className="App-header">
        {/* <img src={logoCadastro} alt='Cadastro' /> */}
        <Button className='btn btn-success'>Adicionar</Button>
      </header>
      <Table className='table table-bordered'>
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
                <Button className='btn btn-info'>Editar</Button> {"  "}
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