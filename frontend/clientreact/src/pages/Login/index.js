import React, { useState } from "react";
import './styles.css';
import api from "../../services/api";
import { useNavigate } from 'react-router-dom'

import LogoImagem from '../../assets/imagemDeLogin.png';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    async function login(event){
        event.preventDefault();

        const data = {
            email, password
        };

        try {
            const response = await api.post('api/Account/LoginUser', data);

            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);

            history('/alunos');
        }
        catch (error) {
            console.error('Login falhou: ' + error);
            alert('O login falhou. Verifique suas credenciais e tente novamente.');
        }        
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={LogoImagem} alt="Imagem do Login" className="img1" />
                <form onSubmit={login}>
                    <h1>Cadastro de Alunos</h1>
                    <input placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <input type="password" placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    <button class="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}