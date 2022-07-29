import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ListaUsuarios from './ListaUsuarios'


const Cadastro = (props) => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [usuariosCadastrados, setUsuariosCadastrados] = useState([])

  const renderLista = usuariosCadastrados.map((item, index) => {
    return (
      <li key={index}>
        {item.name}
        <button>x</button>
      </li>
    )
  })

  const imprimiTela = () => {
    return (
      <ListaUsuarios />
    )
  }

  useEffect(() => {
    getUsuario()
  }, [])

  //Axios
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const headers = {
    headers: {
      Authorization: "santiago-cardoso-oliveira-lamarr"
    }
  }

  //POST
  const body = {
    "name": nome,
    "email": email
  }

  const postUsuario = (e) => {
    e.preventDefault()
    axios.post(url, body, headers)
      .then(() => {
        alert(`Usuário ${nome} cadastrado!`)
        getUsuario()
      }).catch((erro) => {
        alert("Erro ao se cadastrar")
      })
    setNome("")
    setEmail("")
  }

  //GET
  const getUsuario = () => {
    axios.get(url, headers)
      .then((response) => {
        console.log(response.data);
        setUsuariosCadastrados(response.data)
      }).catch((erro) => {
        console.log(erro.response);
      })
  }

  return (
    <form>

      <h1>Formulário para cadastrar usuários</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)} />

      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

      <button onClick={postUsuario}>Cadastrar</button>
      <button onClick={imprimiTela}>Lista de Usuarios</button>
      {/* {renderLista} */}

    </form>
  )
}

export default Cadastro;