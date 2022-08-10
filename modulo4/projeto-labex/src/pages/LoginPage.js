import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToAdminHomePage } from '../Rotas/Coordinator'

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <p>Login</p>
            <form>
                <label>E-mail</label>
                <input type="email" placeholder="E-mail" />
                <label>Senha</label>
                <input type="passaword" placeholder="Senha" />
                <button onClick={() => { goToHomePage(navigate) }}>Voltar</button>
                <button onClick={() => { goToAdminHomePage(navigate) }}>Entrar</button>
            </form>
        </>

    )
}

export default LoginPage