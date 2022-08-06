import React, { useState } from 'react'
import { GlobalStayle } from './GlobalStayle';
import TelaInicial from './pages/TelaInicial/TelaInicial';
import TelaMatches from './pages/TelaMatches/TelaMatches'

function App() {

  const [page, setPage] = useState("telainicial")

  const changePage = (page) => {
    setPage(page)
  }

  const renderPage = () => {
    switch (page) {
      case "telainicial":
        return <TelaInicial
          changePage={changePage}

        />
      case "telamatches":
        return <TelaMatches
          changePage={changePage}
        />
      default:
        return <TelaInicial />
    }
  }

  return (
    <div>
      <GlobalStayle />
      {renderPage()}
    </div>
  );
}

export default App;
