import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../Rotas/Coordinator'

const TripDetailsPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <p>Descrição da Viagem</p>
            <ul>
                <li>Nome:</li>
                <li>Descrição:</li>
                <li>Planeta:</li>
                <li>Duração:</li>
                <li>Data:</li>
            </ul>

            <button onClick={() => {goToBack(navigate)}}>Voltar</button>

            <p>Candidatos Pendentes</p>
            <ul>
                <li>Candidatos</li>
            </ul>
            <button>Aprovar</button>
            <button>Reprovar</button>

            <p>Candidatos Aprovados</p>
            <ul>
                <li>Nome do Candidato</li>
            </ul>
        </>
    )
}

export default TripDetailsPage