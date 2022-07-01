import React from "react";
import styled from "styled-components";
import logo from "./img/logo-labenu.jpg"

const Header = styled.header`
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
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`
const AsideEsquerda = styled.aside`
  max-width: 40%;
  height: 85vh;
  background-color: orange;
`

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 60px;
`

const LabelRemetente = styled.label`
  margin: 0 5px 0 -200px;
`

const LabelMsg = styled.label`
  margin: 0 5px 0 -20px;
`

const Msg = styled.input`
  width: 25vw;
`

const AsideDireita = styled.aside`
  max-width: 40%;
  height: 85vh;
  background-color: orange;
  margin-left: 60%;
`

const Footer = styled.footer`
  background-color: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 0 5px;
  width: 100%;
`

function App() {
  return (
    <div>
      <Header>
        <img src={logo} alt={"Logo da Labenu"} />
        <h1>WhatsLab</h1>
      </Header>

      <Main>

        <AsideEsquerda></AsideEsquerda>

        <Content>
          <div>
            <LabelRemetente for="remetente">Remetente:</LabelRemetente>
            <input type="text" name="remetente" id="remetente" />
          </div>
          <div>
            <LabelMsg for="msg">Msg:</LabelMsg>
            <Msg type="text" name="msg" id="msg" />
          </div>
          <div>
            <button>Enviar Mensagem</button>
          </div>
        </Content>

        <AsideDireita></AsideDireita>
      </Main>

      <Footer>
        <p>Copyright &copy; 2022 Desenvolvedor: Santiago Cardoso de Oliveira. R. Roque Modesto dos Santos 754 A, Jd Ásturias, CEP 07915-000</p>
      </Footer>
    </div>
  );
}

export default App;
