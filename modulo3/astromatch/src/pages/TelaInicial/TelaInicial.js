import React, { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Card, Footer, DivBotao, DivDescarte, DivMatch } from './style';
import axios from 'axios';
import Header from '../../components/Header/Header'



const TelaInicial = () => {
  const [profiles, setProfiles] = useState([])

  const card = profiles.map((profile) => {
    return (
      <Card key={profile.id}>
        <img src={profile.photo} alt={profile.photo_alt} />
        <div>
          <span>{profile.name}, {profile.age} <p>{profile.bio}</p></span>
        </div>
      </Card>
    )
  })

  useEffect(() => {
    getProfileToChoose()
  }, [])

  //AXIOS

  //GET
  const getProfileToChoose = () => {

    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/santiago-oliveira/person`)
      .then((response) => {
        console.log(response);
        setProfiles([response.data.profile])
      }).catch((erro) => {
        console.log(erro.response);
      })
  }

  //POST
  /*  const headers = {
     headers: {
       "Content-Type": "application/json"
     }
   } */

  const choosePerson = (id, choice) => {
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/santiago-oliveira/choose-person`, /* headers, */ {
      "id": id,
      "choice": true
    })
      .then((response) => {
        getProfileToChoose()
        setProfiles([0].id)
        alert("Swipe!")
        console.log(response.data)
      }).catch((erro) => {
        console.log(erro.response.data)
        alert("Erro ao escolher!")
      })
  }

  return (
    <Container>
      <Header />
      {card}
      <Footer>
        <DivBotao>
          <DivDescarte>
            <CloseIcon onClick={() => choosePerson([0].id, false)} />
          </DivDescarte>
          <DivMatch>
            <FavoriteIcon onClick={() => choosePerson([0].id, true)} />
          </DivMatch>
        </DivBotao>
      </Footer>
    </Container>
  )
}

export default TelaInicial