import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, goToApplicationFormPage } from '../../Rotas/Coordinator'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from "../../constants/constants";
import { DivPrincipal, Sessao, ListaViagens, Lista, } from "./styles";

const ListTripsPage = () => {
    const navigate = useNavigate()

    const [dataListaDeViagens, isLoadingListaViagens, erroListaViagens] = useRequestData(
        `${BASE_URL}trips`
    )
    console.log(dataListaDeViagens);

    const listaDeViagens = dataListaDeViagens && dataListaDeViagens.trips.map((list) => {
        return (
            <Lista key={list.id}>
                <li><b>Nome:</b> {list.name}</li>
                <li><b>Descrição: </b>{list.description}</li>
                <li><b>Planeta:</b> {list.planet}</li>
                <li><b>Duração:</b> {list.durationInDays}</li>
                <li><b>Data:</b> {list.date}</li>
            </Lista>
        )
    })

    return (
        <DivPrincipal>
            <Sessao>
                <button onClick={() => { goToBack(navigate) }}>Voltar</button>
                <button onClick={() => { goToApplicationFormPage(navigate) }}>Inscrever-se</button>
                <p>Lista de viagens</p>
            </Sessao>
            {isLoadingListaViagens && "Carregando..."}
            <ListaViagens>
                {!isLoadingListaViagens && listaDeViagens}
            </ListaViagens>
            {!isLoadingListaViagens && dataListaDeViagens
                && dataListaDeViagens.length === 0 && "Não há viagens disponíveis"}
            {!isLoadingListaViagens && !dataListaDeViagens && erroListaViagens}
        </DivPrincipal>
    )
}

export default ListTripsPage