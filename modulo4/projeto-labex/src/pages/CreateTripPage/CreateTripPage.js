import React from "react";
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from "../../constants/constants";
import axios from 'axios'
import { useForm } from "../../hooks/useForm";
import { goToBack, } from '../../Rotas/Coordinator'
import { Botoes, Div, Form } from "./style";

const CreateTripPage = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const createTrip = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}trips`, form)
            .then((response) => {
                alert("Viagem criada!")
                console.log(response);
            }).catch((erro) => {
                alert("Erro ao criar viagem!")
                console.log(erro.message);
            })

        clear()
    }

    return (
        <Div>
            <p>Criar nova viagem</p>
            <Form onSubmit={createTrip}>
                <label htmlFor="name">Nome</label>
                <input
                    name="name"
                    id="name"
                    type="nome"
                    placeholder="Nome"
                    value={form.name}
                    onChange={onChange}
                    required />
                <label htmlFor="planet">Planetas</label>
                <select
                    name="planet"
                    id="planet"
                    value={form.planet}
                    onChange={onChange}
                    required>
                    <option value="select" defaultValue="selected">Selecione uma viagem</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </select>
                <label htmlFor="date">Data</label>
                <input
                    name="date"
                    id="date"
                    type="data"
                    placeholder="xx/xx/xxxx"
                    value={form.date}
                    onChange={onChange}
                    required />
                <label htmlFor="description">Descrição</label>
                <input
                    name="description"
                    id="description"
                    type="text"
                    placeholder="Descrição"
                    value={form.description}
                    onChange={onChange}
                    required />
                <label htmlFor="durationInDays">Duração</label>
                <input
                    name="durationInDays"
                    id="durationInDays"
                    type="number"
                    placeholder="Duração"
                    value={form.durationInDays}
                    onChange={onChange}
                    required />
                <Botoes>
                    <button onClick={() => { goToBack(navigate) }}>Voltar</button>
                    <button type="submit">Criar</button>
                </Botoes>
            </Form>

        </Div>
    )
}

export default CreateTripPage