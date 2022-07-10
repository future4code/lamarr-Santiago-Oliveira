import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    max-width: 60px;
  }

  h1 {
    font-size: 20px;
    display: flex;
    align-items: flex-end;
    margin-left: -10px;
  }
`

export const Body = styled.body`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 87vh;
    font-family: 'Montserrat', sans-serif;
`

export const AsideEsquerda = styled.aside`
    height: 100%;
    background-color: orange;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    overflow-y: auto;
    background-color: #E5DDD5;
    background-size:cover;
    background-position: center;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    padding: 10px 15px;

    div {
        display: flex;
    flex-direction: column;
    }
`

export const Parte1Conteudo = styled.div`
  display: flex; 
 
`

export const Footer = styled.div`
    display: flex;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
//CardMensagem

export const MensagemLinha = styled.div`
    margin-bottom: 10px;
    display: flex; 
`
export const MensagemItem = styled.div`
    max-width: 90%;
    background-color: #DCF8C6;
    border-radius: 10px;
    box-shadow: 0 1px 1px #CCC;
    display: flex;
    padding: 5px;
`

export const MensagemTexto = styled.div`
    display: flex;

    p{
    font-size: 14px;
    margin: 5px;
    }
`

//Input

export const Sessao1 = styled.section`
    margin: 5px;
    display: flex;

    label {
        //screen reader only
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    input {
        width: 5vw;
        padding: 10px;
        border-radius: 20px;
        border: none;
        :focus {
            box-shadow: 0 0 1em gold;
            outline: 0;
        }
    }
`

export const Sessao2 = styled.section`
    margin: 5px;

    label {
        //screen reader only
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    input {
        width: 19vw;
        padding: 10px;
        border-radius: 20px;
        border: none;
        :focus {
            box-shadow: 0 0 1em gold;
            outline: 0;
        }
    }
`

export const Sessao3 = styled.section`
    width: 40px;
    height: 40px;
    color: #919191;
    cursor: pointer;
    margin: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background-color: #FFF;
    border-radius: 50%;
    :hover {
        color: #DCF8C6;
        background-color: gray
    }
`

export const AsideDireita = styled.aside`
    height: 100%;
    background-color: orange;
`
