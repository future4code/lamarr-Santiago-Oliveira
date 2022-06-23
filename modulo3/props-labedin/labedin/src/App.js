import React from 'react';
import './App.css';
import foto from './img/foto.jpg'
import logo from './img/logo-labenu.jpg'
import logo2 from './img/logo-uninove.jpg'
import email from './img/email.jpg'
import localizacao from './img/localizacao.png'
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto} alt="Foto do perfil"
          nome="Santiago"
          descricao="Oi, eu sou o Santiago, tenho 30 anos. Sou estudante de desenvolvimento web na Labenu. Sou apaixonado por tecnologia e pela forma que ela impacta a vida das pessoas. "
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

        <CardPequeno
          imagem={email} alt="Icone de email"
          texto="Email: santiagoc.oliveira@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={localizacao} alt="Icone de localização"
          texto="Endereço: R. Pais Leme, 215,
          Conjunto 820
          Pinheiros
          CEP 05424-150"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logo}
          nome="Labenu"
          descricao="Cursando Desenvolvimento web Full Stack"
        />

        <CardGrande
          imagem={logo2}
          nome="UNINOVE"
          descricao="Cursando Análise e Desenvolvimento de Sistemas"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
