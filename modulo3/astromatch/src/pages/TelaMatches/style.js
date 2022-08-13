import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    
    img {
        width: 10vw;
        height: 10vh;
        border-radius: 10px;
    }

    span {
        font-size: 20px;
        margin-left: 10px;
        border-bottom: 1px solid red;
    }
`

export const DivLimpaMatches = styled.div` 
    cursor: pointer;
    display: flex;
    margin: auto;
    border-radius: 50%;
    padding: 10px;
    color: red;
    border: 1px solid #ffa500;
    width: 45px;

    :hover {
        color: white;
        background-color: green;
    }
`

export const Voltar = styled.button`
    cursor: pointer;
    margin-top: 10px;
    border-radius: 15px;
    padding: 5px;
    margin-left: 90vw
`

