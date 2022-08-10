import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, goToCreateTripPage, goToLoginPage, goToListTripsPageDetailsPage } from '../Rotas/Coordinator'

const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Painel do Administrador</p>
            <button onClick={() => { goToBack(navigate) }}>Voltar</button>
            <button onClick={() => { goToCreateTripPage(navigate) }}>Criar Viagem</button>
            <button onClick={() => { goToLoginPage(navigate) }}>Logout</button>

            <ul>
                <button onClick={() => {goToListTripsPageDetailsPage(navigate)}}>Lista de viagens</button>
                <button>Excluir Viagem</button>
            </ul>
        </div>
    )
}

export default AdminHomePage