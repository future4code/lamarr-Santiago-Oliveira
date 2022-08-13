import React, { useState, useEffect } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios'
import { Card, DivLimpaMatches, Voltar } from './style'

const TelaMatches = (props) => {
  const { changePage } = props

  const [matches, setMatches] = useState(["getmatches"])

  useEffect(() => {
    getMatches()
  }, [])


  //GET MATCHES
  const getMatches = () => {

    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/santiago-oliveira/matches`)
      .then((response) => {
        setMatches(response.data.matches)
      }).catch((erro) => {
        console.log(erro.response);
        alert("Erro")
      })
  }

  const match = matches.map((profiles) => {
    return (
      <Card key={profiles.id}>
        <img src={profiles.photo} alt={profiles.photo_alt} />
        <span>{profiles.name}</span>
      </Card>
    )
  })

  //Clear
  const headers = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const clear = () => {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/santiago-oliveira/clear`, headers)
      .then((response) => {
        setMatches(response.data.matches)
      }).catch((erro) => {
        console.log(erro.response);
      })
  }

  return (
    <>
      {match}
      <DivLimpaMatches>
        <DeleteForeverIcon onClick={() => clear()} />
      </DivLimpaMatches>
      <Voltar onClick={() => changePage("teleinicial")}>Voltar</Voltar>
    </>
  )
}

export default TelaMatches