import foto from './img/foto.jpg';
import './App.css';

function App() {
  const mensagem = () => {
    alert("Boa noite!")
  }
  return (
    <div className="container">
      <h1>Seja bem vindo! Eu sou o dev Santiago</h1>
      <img src={foto} alt="Foto do Santiago" />
      <p>Esse é meu primeiro site com React</p>
      <button onClick={mensagem}>Clique aqui</button>
    </div>
  );
}

export default App;
