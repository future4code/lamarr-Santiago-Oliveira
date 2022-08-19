import React from "react";
import { useNavigate, useParams } from 'react-router-dom'
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";
import { goToBack } from '../../Rotas/Coordinator'
import { DivPrincipal, Sessao, ListaDeViagem } from './style'

const TripDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const pathParams = useParams()


    const token = localStorage.getItem("token")
    const headers = {
        headers: {

            auth: token
        }
    }

    const [detailsViagens, isLoadingDetailsViagens, erroDetailsViagens] = useRequestData(
        `${BASE_URL}trip/${pathParams.id}`, headers
    )

    const listDetailsDeViagens = detailsViagens && detailsViagens.trip.map((list) => {
        return (
            <ul key={list.id}>
                <li><b>Nome:</b> {list.name}</li>
                <li><b>Descrição: </b>{list.description}</li>
                <li><b>Planeta:</b> {list.planet}</li>
                <li><b>Duração:</b> {list.durationInDays}</li>
                <li><b>Data:</b> {list.date}</li>
            </ul>
        )
    })


    return (
        <DivPrincipal>
            {isLoadingDetailsViagens && "Carregando..."}
            <p>Descrição da Viagem</p>
            <ListaDeViagem>
                {!isLoadingDetailsViagens && listDetailsDeViagens}
            </ListaDeViagem>
            {!isLoadingDetailsViagens && detailsViagens
                && detailsViagens.length === 0 && "Não há viagens disponíveis"}
            {!isLoadingDetailsViagens && !detailsViagens && erroDetailsViagens}
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