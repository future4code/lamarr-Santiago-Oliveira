import React, { useState } from 'react'
import './style.css'

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
    <div className='PostContainer'>
      <div className='PostHeader'>
        <img className='UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </div>

      <img className='PostPhoto' src={props.fotoPost} alt={'Imagem do post'} />

      <div className='PostFooter'>
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
      </div>
      {componenteComentario}
    </div>
  )


}


export default Post

// 4.
/* O iconeCurtida é o icone que aparece onde será curtido o post,
   onde o usuário precisa clicar para marcar a curtida,
   onClinkCurtida vai realizar o click quando o usuário clicar para curtir,
   o state.numeroCurtidas vai marcar quantas curtidas já tiveram */

/* O iconeComentário é o icone que aparece onde será clicado para fazer o comentário,
   onClinkComentário vai realizar o click quando o usuário clicar para digitar o comentário,
   o numeroComentarios vai marcar quantas comentários já tiveram */

/* Vem das funções realizadas nesse componente e vai para os componentes
 IconeComContador e SecaoComentario */

  //5.
/* Sim, Representa o icone de coração com valor 0 */

//6.
/* Na primeira função */

//8.
/* Ela está sendo usada no iconImagem (imagem para curtir coração branco)
 quando o usuário clica no icone aparecerá curtiu */

//9.
/* Ela faz a ação de quando o usuário clicar e colocar seu comentário ela vai registrar */

//10.
/* Abre uma caixa de input de texto, porque foi feito o props com a secaoComentario onde foi
colocado a tag para input, dessa forma ao clicar é executado a função onClinkComentario que abre
 a caixa de texto com o botão para enviar*/

 //11.
/* Ela é usada no botão enviar.  */