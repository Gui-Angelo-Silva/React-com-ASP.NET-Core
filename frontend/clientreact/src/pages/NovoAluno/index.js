import React, { useState } from "react";
import './styles.css';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";
import api from "../../services/api";

export default function NovoAluno() {

    const [id, setId] = useState(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);
    
    const {alunoId} = useParams();
    const history = useNavigate();

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function loadAluno(){
        try {
            
            const response  = await api.get(`api/alunos/${alunosId}`, authorization);
            setId(response.data.id);
            setNome(response.data.nome);
            setEmail(response.data.email);
            setIdade(response.data.idade);

        } catch (error) {
            alert('Erro ao recuperar o aluno ' + error);
            history('/alunos');
        }
    }

    return (
        <div className="novo-aluno-container">
            <div className="content">
                <section className="form">
                    <FiUserPlus size="105" color="#17202a"/>
                    <h1>{alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'}</h1>
                    <Link className="back-link" to="/alunos">
                        <FiCornerDownLeft size="25" color="#17202a"/>
                        Retornar
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome"/>
                    <input placeholder="Email"/>
                    <input placeholder="Idade"/>
                    <button className="button" type="submit">{alunoId === '0' ? 'Incluir' : 'Atualizar'}</button>
                </form>
            </div>
        </div>
    );
}