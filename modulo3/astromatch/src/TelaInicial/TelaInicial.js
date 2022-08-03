import React from "react"
import lion from './lion.jpg'
import { Container, Div, Header, Main, Footer, DivBotao, Botoes } from './style'

const TelaInicial = () => {
  return (
    <Container>
      <Header>
        <Div>
          <h1>astromatch</h1>
          <button>M</button>
        </Div>
      </Header>
      <Main>
        <img src={lion} alt="" />
      </Main>
      <Footer>
        <DivBotao>
          <Botoes>X</Botoes>
          <Botoes>♥</Botoes>
        </DivBotao>
      </Footer>
    </Container>
  )
}

export default TelaInicial