import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
  return (
    <div className='MainContainer'>
      <Post
        nomeUsuario={'paulinha'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />

      <Post
        nomeUsuario={'pati'}
        fotoUsuario={'https://picsum.photos/200/200'}
        fotoPost={'https://picsum.photos/200/152'}
      />

      <Post
        nomeUsuario={'fabi'}
        fotoUsuario={'https://picsum.photos/20/20'}
        fotoPost={'https://picsum.photos/200/154'}
      />
    </div>
  )

}


export default App;
