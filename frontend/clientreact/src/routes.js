import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Alunos from './pages/Alunos';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={ <Login/> }/>
            <Route path="/alunos" exact element={ <Alunos/> }/>
        </Routes>
    );
}