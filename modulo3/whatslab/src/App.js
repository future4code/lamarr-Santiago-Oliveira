import React from 'react'
import { Botao } from './components/Button/Button';
import { Input } from './components/Input/Input'
import { Div, AsideEsquerda, Main, Sessao1, Sessao2, Sessao3, AsideDireita } from './components/style'


function App() {
  return (

    <Div>
      <AsideEsquerda/>
        
          <Main>
            <Sessao1>
              <Input placeholder="Usuário" />
            </Sessao1>
            <Sessao2>
              <Input placeholder="Mensagem" />
            </Sessao2>
            <Sessao3>
              <Botao />
            </Sessao3>
          </Main>
        
      <AsideDireita/>
    </Div>
  );
}

export default App;
