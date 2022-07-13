import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
`

export function Etapa2(){
   return (
    <Div>

        <h1>Etapa 2: Informações do ensino superior</h1>
        <label>5. Qual curso?</label>
        <input type="text"/>
        <label>6. Qual a unidade de ensino?</label>
        <input type="text"/>
    </Div>
   )
}