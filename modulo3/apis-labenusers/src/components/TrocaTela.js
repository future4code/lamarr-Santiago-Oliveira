import React, { useState } from "react"
import Cadastro from './components/Cadastro'
import ListaUsuarios from './components/ListaUsuarios'

const TrocaTela = () => {

  const [trocaTela, setTrocaTela] = useState(false)

  const mostraLista = () => {
    setTrocaTela(!trocaTela)
  }

  if (trocaTela) {
    return <ListaUsuarios condTroca={mostraLista} />
  } else {
    return <Cadastro condTroca={mostraLista} />
  }
}

export default TrocaTela