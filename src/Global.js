import { createGlobalStyle } from "styled-components";

// Estilo global aplicado em todo o projeto
export const GlobalStyle = createGlobalStyle`
  /* Reset básico de margens, paddings e box-sizing */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif; /* Fonte padrão para todo o projeto */
  }

  /* Estilo principal do corpo da página */
  body {
    display: flex;
    flex-direction: column; /* Organiza os elementos verticalmente */
    width: 100vw; /* Ocupa toda a largura da janela */
    min-height: 100vh; /* Garante que o corpo ocupe ao menos a altura total da tela */
    overflow-x: hidden; /* Evita rolagem horizontal */
    
    /* Permite rolagem vertical em telas menores */
    @media (max-width: 500px) {
      overflow-y: auto;
    }
  }

  /* Estilo base para botões */
  button {
    width: 200px;
    height: 50px;
    color: white; /* Cor do texto */
    background-color: #037143; /* Cor de fundo do botão */
    font-family: "Inter", serif; /* Fonte alternativa para botões */
    font-weight: 700; /* Texto em negrito */
    font-size: 16px;
    border: none; /* Remove bordas padrão */
    border-radius: 50px; /* Borda arredondada */
    align-self: flex-start; /* Alinha o botão no início do eixo principal */

    /* Ajustes para telas menores */
    @media (max-width: 980px) {
      font-size: 12px; /* Reduz o tamanho da fonte */
      width: 150px; /* Reduz a largura do botão */
      height: 40px; /* Reduz a altura do botão */
    }
  }

  /* Container principal para o React */
  #root {
    display: flex;
    flex-direction: column; /* Organiza os componentes verticalmente */
    width: 100%; /* Ocupa 100% da largura disponível */
    height: 100%; /* Ocupa 100% da altura disponível */
  }
`;
