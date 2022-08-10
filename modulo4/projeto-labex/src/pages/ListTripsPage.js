import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, goToApplicationFormPage } from '../Rotas/Coordinator'


const ListTripsPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => { goToBack(navigate) }}>Voltar</button>
            <button onClick={() => { goToApplicationFormPage(navigate) }}>Inscrever-se</button>
            <p>Lista de viagens</p>
        </div>
    )
}

export default ListTripsPage