import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack } from '../../Rotas/Coordinator'
import { DivPrincipal, Sessao, ListaDeViagem } from './style'

const TripDetailsPage = () => {
    const navigate = useNavigate()

    return (
        <DivPrincipal>
            <p>Descrição da Viagem</p>
            <ListaDeViagem>
                <li>Nome:</li>
                <li>Descrição:</li>
                <li>Planeta:</li>
                <li>Duração:</li>
                <li>Data:</li>
            </ListaDeViagem>

            <Sessao>
                <button onClick={() => { goToBack(navigate) }}>Voltar</button>
            </Sessao>

            <p>Candidatos Pendentes</p>

            <ListaDeViagem>
                <ul>
                    <li>Candidatos</li>
                </ul>
            </ListaDeViagem>
            <Sessao>
                <button>Aprovar</button>
                <button>Reprovar</button>
            </Sessao>

            <p>Candidatos Aprovados</p>
            <ul>
                <li>Nome do Candidato</li>
            </ul>
        </DivPrincipal>
    )
}

export default TripDetailsPage