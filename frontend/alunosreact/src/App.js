import React, { useEffect, useState } from 'react'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Table } from 'reactstrap';
// import logoCadastro from './assets/logocadastro.png'

function App() {

  const baseUrl = 'https://localhost:7290/api/Alunos';
  
  const [data, setData] = useState([]);

  const [modalIncluir, setModalIncluir] = useState(false);

  const [alunoSelecionado, setAlunoSelecionado] = useState({
    id: '',
    nome: '',
    email: '',
    idade: ''
  })

  const abrirFecharModalIncluir=()=>{
    setModalIncluir(!modalIncluir)
  }

  const handleChange = e=> {
    const {name, value} = e.target;
    setAlunoSelecionado({
      ...alunoSelecionado,[name]:value
    })
    console.log(alunoSelecionado)
  }

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
        console.log(data)
      }).catch(error => {
        console.log(error);
      })
  }

  const pedidoPost = async () => {
    delete alunoSelecionado.id
    alunoSelecionado.idade=parseInt(alunoSelecionado.idade)
      await axios.post(baseUrl, alunoSelecionado)
    .then(response=>{
      setData(data.concat(response.data))
      abrirFecharModalIncluir()
    }).catch(error=>{
      console.log(error)
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
        <Button onClick={()=>abrirFecharModalIncluir()} className='btn btn-success'>Adicionar</Button>
      </header>
      <br />
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
      <Modal isOpen={modalIncluir}>
        <ModalHeader>Incluir Alunos</ModalHeader>
        <ModalBody>
          <div className='form-group'>
            <label>Nome: </label>
            <br />
            <input type='text' className='form-control' name="nome" onChange={handleChange} />
            <br />
            <label>Email: </label>
            <br />
            <input type='text' className='form-control' name="email" onChange={handleChange} />
            <br />
            <label>Idade: </label>
            <br />
            <input type='text' className='form-control' name="idade" onChange={handleChange} />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-primary' onClick={()=>pedidoPost()}>Incluir</button>
          <button className='btn btn-danger' onClick={()=>abrirFecharModalIncluir()}>Cancelar</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;