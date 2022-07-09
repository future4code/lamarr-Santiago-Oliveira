import React, {useState} from 'react';
import Post from './components/Post/Post';
import { Div, Form, Input, Sessao, DivPost} from './style'


function App() {

  //estados
  const [inputNome, setInputNome] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")
  const [posts, setPosts] = useState([

    { nomeUsuario: 'paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
    { nomeUsuario: 'pati', fotoUsuario: 'https://picsum.photos/200/200', fotoPost: 'https://picsum.photos/200/152' },
    { nomeUsuario: 'fabi', fotoUsuario: 'https://picsum.photos/20/20', fotoPost: 'https://picsum.photos/200/154' }
  ])

  //eventos
  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }
  const handleInputFotoUsuario = (e) => {
    setInputFotoUsuario(e.target.value)
  }
  const handleInputFotoPost = (e) => {
    setInputFotoPost(e.target.value)
  }

  //adicionar pessoas
const addPost = (e) => {
  e.preventDefault()

  const novoPost = {nomeUsuario: inputNome, fotoUsuario: inputFotoUsuario, fotoPost: inputFotoPost}
  const novaListaDePost = [...posts, novoPost]
  setPosts(novaListaDePost)
}

  let listaComponentes = posts.map((post, index) => {
    return (
      <Post key={post.index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    )
  })

  return (
    <Div>
      
      <Form>
        <Sessao>
        <label>Nome usuário:</label>
        <Input placeholder='Insira seu nome de usuário'
               value={posts.nomeUsuario}
               onChange={handleInputNome}/>
        </Sessao>

        <Sessao>
        <label>Foto do perfil:</label>
        <Input type='img'
               placeholder='Insira sua foto de perfil'
               value={posts.fotoUsuario}
               onChange={handleInputFotoUsuario}/>
         </Sessao>

         <Sessao>
        <label>Foto do post:</label>
        <Input type='img'
               placeholder='Insira seu post'
               value={posts.fotoPost}
               onChange={handleInputFotoPost}/>
        </Sessao>

        <Sessao>
        <button type='submit' onClick={addPost}>Postar</button>     
        </Sessao>  
      </Form>

      <DivPost>
      {listaComponentes}
      {console.log(posts)}
      </DivPost>
  
    </Div>
  )
}

export default App;
