import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, goToCreateTripPage, goToLoginPage } from '../Rotas/Coordinator'

const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Painel do Administrador</p>
            <button onClick={() => { goToBack(navigate) }}>Voltar</button>
            <button onClick={() => { goToCreateTripPage(navigate) }}>Criar Viagem</button>
            <button onClick={() => { goToLoginPage(navigate) }}>Logout</button>

            <ul>
                <li>Lista de viagens</li>
                <button>Excluir Viagem</button>
            </ul>
        </div>
    )
}

export default AdminHomePage