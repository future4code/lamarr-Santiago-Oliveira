import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`

export function Etapa3(){
   return (
    <Div>

        <h1>Etapa 3: Informações Gerais de ensino</h1>
        <label>5. Por que você não terminou um curso de graduação?</label>
        <input type="text"/>
        <label>6. Você fez algum curso complementar?</label>
        <select>
            <option selected value="Selecione">Selecione</option>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Curso de inglês">Curso de inglês</option>
            <option value="Não fiz curso complementar">Não fiz curso complementar</option>
        </select>

    </Div>
   )
}