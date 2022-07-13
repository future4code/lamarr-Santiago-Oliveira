import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`

export function Etapa1(){
   return (
    <Div>

        <h1>Etapa 1: Dados Gerais</h1>
        <label>1. Qual o seu nome?</label>
        <input type="text"/>
        <label>2. Qual sua idade?</label>
        <input type="numero"/>
        <label>3. Qual seu e-mail?</label>
        <input type="email"/>
        <label>4. Qual o grau de escolaridade</label>
        <select>
            <option selected value="Selecione">Selecione</option>
            <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
            <option value="Ensino Superior Completo">Ensino Superior Completo</option>
        </select>

    </Div>
   )
}