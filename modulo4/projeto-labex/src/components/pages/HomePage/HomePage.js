import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage } from '../../Rotas/Coordinator'
import { Home } from './style'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <Home>
            <h1>LabeX</h1>
            <div>
                <button onClick={() => { goToListTripsPage(navigate) }}>Ver Viagens</button>
                <button onClick={() => { goToLoginPage(navigate) }}>Área de Admin</button>
            </div>
        </Home>
    )
}

export default HomePage