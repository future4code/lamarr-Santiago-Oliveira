import React from "react";
import { useNavigate } from 'react-router-dom'
import { goToBack, goToApplicationFormPage } from '../Rotas/Coordinator'
import { useRequestData } from '../hooks/useRequestData'
import { BASE_URL } from "../constants/constants";


const ListTripsPage = () => {
    const navigate = useNavigate()

    const [dataListaDeViagens, isLoadingListaViagens, erroListaViagens] = useRequestData(
        `${BASE_URL}trips`
    )
    console.log(dataListaDeViagens);

    const listaDeViagens = dataListaDeViagens && dataListaDeViagens.trips.map((list) => {
        return (
            <ul key={list.id}>
                <li>Nome: {list.name}</li>
                <li>Descrição: {list.description}</li>
                <li>Planeta: {list.planet}</li>
                <li>Duração: {list.durationInDays}</li>
                <li>Data: {list.date}</li>
            </ul>
        )
    })

    return (
        <div>
            <button onClick={() => { goToBack(navigate) }}>Voltar</button>
            <button onClick={() => { goToApplicationFormPage(navigate) }}>Inscrever-se</button>
            <p>Lista de viagens</p>
            {isLoadingListaViagens && "Carregando..."}
            <div>
                {!isLoadingListaViagens && listaDeViagens}
            </div>
            {!isLoadingListaViagens && dataListaDeViagens
                && dataListaDeViagens.length === 0 && "Não há viagens disponíveis"}
            {!isLoadingListaViagens && !dataListaDeViagens && erroListaViagens}
        </div>
    )
}

export default ListTripsPage