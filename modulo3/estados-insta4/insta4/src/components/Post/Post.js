import React, { useState } from 'react'
import { Container, Sessao1, Sessao2, Img} from './style'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'



function Post(props) {

  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [inputComentario, setInputComentario] = useState("")

  const handleInputComentario = (event) => {
    setInputComentario(event.target.value)
  }

  const onClickCurtida = () => {
    setCurtido(!curtido)

    if (!curtido) {
      setNumeroCurtidas(numeroCurtidas + 1)
    } else {
      setNumeroCurtidas(numeroCurtidas - 1)
    }
    console.log("Curtiu");
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if (comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} valor={inputComentario} onChange={handleInputComentario} />
    }
    console.log("comentando");
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
  }



  return (
    <Container>
      <Sessao1>
        <Img src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </Sessao1>

      <Img src={props.fotoPost} alt={'Imagem do post'} />

      <Sessao2>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </Sessao2>
      {componenteComentario}
    </Container>
  )


}


export default Post

// 4.
/* O iconeCurtida ?? o icone que aparece onde ser?? curtido o post,
   onde o usu??rio precisa clicar para marcar a curtida,
   onClinkCurtida vai realizar o click quando o usu??rio clicar para curtir,
   o state.numeroCurtidas vai marcar quantas curtidas j?? tiveram */

/* O iconeComent??rio ?? o icone que aparece onde ser?? clicado para fazer o coment??rio,
   onClinkComent??rio vai realizar o click quando o usu??rio clicar para digitar o coment??rio,
   o numeroComentarios vai marcar quantas coment??rios j?? tiveram */

/* Vem das fun????es realizadas nesse componente e vai para os componentes
 IconeComContador e SecaoComentario */

  //5.
/* Sim, Representa o icone de cora????o com valor 0 */

//6.
/* Na primeira fun????o */

//8.
/* Ela est?? sendo usada no iconImagem (imagem para curtir cora????o branco)
 quando o usu??rio clica no icone aparecer?? curtiu */

//9.
/* Ela faz a a????o de quando o usu??rio clicar e colocar seu coment??rio ela vai registrar */

//10.
/* Abre uma caixa de input de texto, porque foi feito o props com a secaoComentario onde foi
colocado a tag para input, dessa forma ao clicar ?? executado a fun????o onClinkComentario que abre
 a caixa de texto com o bot??o para enviar*/

 //11.
/* Ela ?? usada no bot??o enviar.  */