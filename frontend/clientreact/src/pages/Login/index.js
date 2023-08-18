import React from "react";
import './styles.css';
import LogoImagem from '../../assets/imagemDeLogin.png';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={LogoImagem} alt="Imagem do Login" className="img1" />
                <form>
                    <h1>Cadastro de Alunos</h1>
                    <input placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button class="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}