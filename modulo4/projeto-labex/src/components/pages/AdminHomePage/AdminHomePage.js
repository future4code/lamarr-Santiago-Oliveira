import React from "react";
import { useNavigate } from 'react-router-dom'
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToBack, goToCreateTripPage, goToLoginPage, goToListTripsPageDetailsPage } from '../../Rotas/Coordinator'
import { DivPrincipal, Sessao, ListaDeViagem, Card, Botao } from './style'
import { BASE_URL } from '../../constants/constants'
import axios from 'axios'
import { useRequestData } from '../../hooks/useRequestData'

const AdminHomePage = (id) => {
    const navigate = useNavigate()
    useProtectedPage()


    const [dataListaDeViagens, isLoadingListaViagens, erroListaViagens] = useRequestData(
        `${BASE_URL}trips`
    )

    const delTrip = (event) => {
        event.preventDefault()

        axios.del(`${BASE_URL}/trips`)
            .then((response) => {
                console.log(response.data);
                alert("Viagem excluída!")
            }).catch((error) => {
                console.log(error.message);
                alert("Erro ao deletar viagem!")
            })

    }

    const listaDeViagens = dataListaDeViagens && dataListaDeViagens.trips.map((list) => {
        return (
            <div key={list.id}>

                <Card>
                    <li><b>Nome da Viagem:</b> {list.name}</li>
                </Card>
                <div>
                    <Botao onClick={delTrip}>Excluir</Botao>
                </div>
            </div>
        )
    })

    return (
        <DivPrincipal>
            <p>Painel do Administrador</p>
            <Sessao>
                <button onClick={() => { goToBack(navigate) }}>Voltar</button>
                <button onClick={() => { goToCreateTripPage(navigate) }}>Criar Viagem</button>
                <button onClick={() => { goToLoginPage(navigate) }}>Logout</button>
            </Sessao>

            <ul>
                {isLoadingListaViagens && "Carregando..."}
                <ListaDeViagem>
                    <div onClick={() => { goToListTripsPageDetailsPage(navigate, id) }}>{!isLoadingListaViagens && listaDeViagens}</div>
                </ListaDeViagem>
                {!isLoadingListaViagens && dataListaDeViagens
                    && dataListaDeViagens.length === 0 && "Não há viagens disponíveis"}
                {!isLoadingListaViagens && !dataListaDeViagens && erroListaViagens}
            </ul>

        </DivPrincipal>
    )
}

export default AdminHomePage