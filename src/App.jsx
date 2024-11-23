import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa as ferramentas principais para roteamento
import Header from "./Components/Header/Header"; // Componente de cabeçalho
import Sobre from "./Components/Sobre/Sobre"; // Página "Sobre"
import Home from "./Components/Home/Home"; // Página inicial
import Novidades from "./Components/Novidades/Novidades"; // Página "Novidades"
import { GlobalStyle } from "./global"; // Estilos globais aplicados ao projeto
import { Main } from "../src/Main/style"; // Estilo principal para o conteúdo

export default function App() {
  return (
    <>
      {/* Estilos globais aplicados */}
      <GlobalStyle />

      {/* Configuração de rotas */}
      <BrowserRouter>
        {/* Cabeçalho fixo em todas as páginas */}
        <Header />

        {/* Container principal do conteúdo */}
        <Main>
          <Routes>
            {/* Rota para a página inicial */}
            <Route path="/" element={<Home />} />

            {/* Rota para a página de novidades */}
            <Route path="/novidades" element={<Novidades />} />

            {/* Rota para a página sobre */}
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
}
