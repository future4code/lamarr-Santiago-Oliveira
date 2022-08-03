import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  

`



export const Header = styled.header`
 

  h1 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
    border-radius: 50%;
  }
`

export const Div = styled.div`
 border-bottom: 1px solid black;
  width: 20%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: aliceblue;
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;


  img {
    width: 20%;
    min-height: 60%;
    height: 400px;
    /* height: 400px; */
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
  margin-top: 10px;
`
export const Botoes = styled.button`
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
`