import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';
import { FiEdit, FiUserX, FiXCircle } from 'react-icons/fi';

import LogoCadastro from '../../assets/logoCadastro.png';

export default function Alunos() {
    return (
        <div className="aluno-container">
            <header>
                <img src={ LogoCadastro } alt="Logo do Cadastro de Alunos"/>
                <span>Bem-Vindo, <strong>Guilherme</strong>!</span>
                <Link className="button" to="aluno/novo">Novo Aluno</Link>
                <button type="button">
                    <FiXCircle size={35} color="#17202a"/>
                </button>
            </header>
            <form>
                <input type="text" placeholder="Nome" />
                <button type="button" className="button">
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                <li>
                    <b>Nome: </b>Paulo<br /><br />
                    <b>Email: </b>paulo@email.com<br /><br />
                    <b>Idade: </b>22<br /><br />
                    <button type="button">
                        <FiEdit size="25" color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size="25" color="#17202a" />
                    </button>
                </li>
            </ul>
        </div>
    );
}