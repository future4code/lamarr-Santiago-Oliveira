import styled from "styled-components";



export const Body = styled.body`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
   
`

export const AsideEsquerda = styled.aside`
    height: 100vh;
`

export const Content = styled.div`
    min-width: 42vw;
    display: flex;
    /* flex-direction: column; */
   /*  justify-content: flex-start;
    align-items: flex-end;
    padding: 10px;
    gap: 1%; */
    flex: 1;
    overflow-y: auto;
    background-color: #E5DDD5;
    background-size:cover;
    background-position: center;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
`

export const MensagemLinha = styled.div`
    margin-bottom: 10px;
    display: flex;
    
`
export const MensagemItem = styled.div`
    
`
export const MensagemTexto = styled.div`
    
`

export const Parte1Conteudo = styled.div`
  display: flex;
`
   
export const Parte2Conteudo = styled.div`
 
   
`

export const Form = styled.form`
    min-width: 40vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 10px;
    gap: 1%;
    background-color: green;
`

export const Sessao1 = styled.section`
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
        width: 7vw;
        padding: 10px;
        border-radius: 7px;
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
        width: 23vw;
        padding: 10px;
        border-radius: 7px;
        border: none;
        :focus {
            box-shadow: 0 0 1em gold;
            outline: 0;
        }
    }
 
`

export const Sessao3 = styled.section`
    button {
    background-color: #e7e7e7;
    margin: 5px;
    padding: 20%;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    :hover {
        background-color: #615f5f;
        color: white;
    }
    }
`

export const AsideDireita = styled.aside`
    height: 100vh;
`
