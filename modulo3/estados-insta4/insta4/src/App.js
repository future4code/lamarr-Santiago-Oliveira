import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const listaPost = [

    { nomeUsuario: 'paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
    { nomeUsuario: 'pati', fotoUsuario: 'https://picsum.photos/200/200', fotoPost: 'https://picsum.photos/200/152' },
    { nomeUsuario: 'fabi', fotoUsuario: 'https://picsum.photos/20/20', fotoPost: 'https://picsum.photos/200/154' }
  ]

  let listaComponentes = listaPost.map((post, index) => {
    return (
      <Post key={post.index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    )
  })

  return (
    <div className='MainContainer'>
      {listaComponentes}
      {console.log(listaPost)}
    </div>
  )
}

export default App;
