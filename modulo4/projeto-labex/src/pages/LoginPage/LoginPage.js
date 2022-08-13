import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToHomePage, goToAdminHomePage } from '../../Rotas/Coordinator'
import { Div, Form, Botoes } from './style'

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <Div>
            <p>Login</p>
            <Form>
                <label>E-mail</label>
                <input type="email" placeholder="E-mail" />
                <label>Senha</label>
                <input type="passaword" placeholder="Senha" />
                <Botoes>
                    <button onClick={() => { goToHomePage(navigate) }}>Voltar</button>
                    <button onClick={() => { goToAdminHomePage(navigate) }}>Entrar</button>
                </Botoes>
            </Form>
        </Div>

    )
}

export default LoginPage