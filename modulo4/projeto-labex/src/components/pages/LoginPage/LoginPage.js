import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'
import { goToHomePage } from '../../Rotas/Coordinator'
import { useForm } from '../../hooks/useForm'
import { Div, Form, Botoes } from './style'

const LoginPage = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const fazerLogin = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}login`, form)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            }).catch((error) => {
                console.log(error.message);
            })

        clear()
    }

    return (
        <Div>
            <p>Login</p>
            <Form onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    /* pattern="" */
                    /* title="Verifique se o e-mail está correto" */
                    required
                />
                <label htmlFor="password">Senha</label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                />
                <Botoes>
                    <button onClick={() => { goToHomePage(navigate) }}>Voltar</button>
                    <button type="submit">Entrar</button>
                </Botoes>
            </Form>
        </Div>

    )
}

export default LoginPage