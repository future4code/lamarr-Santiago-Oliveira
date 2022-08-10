import React from "react";

const TripDetailsPage = () => {

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

            <button>Voltar</button>

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