import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Alunos from './pages/Alunos';
import NovoAluno from "./pages/NovoAluno";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={ <Login/> }/>
            <Route path="/alunos" element={ <Alunos/> }/>
            <Route path="/alunos/aluno/novo/:alunoId" element={ <NovoAluno /> }/>
        </Routes>
    );
}