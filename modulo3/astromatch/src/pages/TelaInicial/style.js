import styled from 'styled-components'

export const Container = styled.div`
      display: flex;
      flex-direction: column;
      background-color: gray;
      margin:10px auto;
      width: 22vw;
      height: 90vh;
      border: 1px solid black;
      
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    min-height: 500px;
    margin: auto;

    img {
        width: 19vw;
        height: 45vh;
        margin: auto;
    }

    div {
        display: flex;
        flex-direction: column; 
        width: 19vw;
        margin: auto;
    }
    span {
        font-size: 1rem;
        font-weight: bold;
        margin-top: -7rem;
        padding:5px;
        color: white;
        background-color: #231f1f;
    }
    p {
        font-size: 0.9rem;
        font-weight: bold;
        padding:0 5px 0 5px;
        color: white;
        background-color:#231f1f;
    }
`

export const Footer = styled.footer`
 
`

export const DivBotao = styled.div`
    width: 20%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: -13vh;
    padding: 10px;
    
`

export const DivDescarte = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
    color: green;
    border: 1px solid #ffa500;
    margin-right: 15px;

    :hover {
        color: white;
        background-color: red;

    }
`

export const DivMatch = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
    color: red;
    border: 1px solid #ffa500;

    :hover {
        color: white;
        background-color: green;
    }
`