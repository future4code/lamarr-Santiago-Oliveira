import React, { useState } from "react"
import { Div, Form, AsideEsquerda, Sessao1, Sessao2, Sessao3, AsideDireita } from '../style'


export function Input() {

    const [inputNome, setInputNome] = useState("")
    const [inputMsg, setInputMsg] = useState("")
    const [usuario, setUsuario] = useState([])

    const handleInputNome = (event) => {
        setInputNome(event.target.value)
    }

    const handleInputMsg = (event) => {
        setInputMsg(event.target.value)
    }

    const enviarMensagem = (event) => {
        event.preventDefault()

        const novaMensagem = {nome: inputNome, mensagem: inputMsg}
        const novaListaDeMensagem = [...usuario, novaMensagem]
        setUsuario(novaListaDeMensagem)
    }

      

    return (
        <Div>
             <AsideEsquerda />
            <Form> 
                 
                <Sessao1>
                    <label>Nome:</label>
                    <input
                        placeholder="Usuário"
                        value={inputNome}
                        onChange={handleInputNome}
                    />
                </Sessao1>
                <Sessao2>
                    <label>Mensagem:</label>
                    <input 
                        placeholder="Mensagem"
                        value={inputMsg}
                        onChange={handleInputMsg}
                         />
                </Sessao2>
                <Sessao3>
                    <button onClink={enviarMensagem}>Enviar</button>
                </Sessao3>
               
            </Form>
            <AsideDireita />
        </Div>
    )
}