import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../Rotas/Coordinator'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Labex</h1>
            <button onClick={() => { goToListTripsPage(navigate) }}>Ver Viagens</button>
            <button onClick={() => { goToLoginPage(navigate) }}>Área de Admin</button>
        </div>
    )
}

export default HomePage