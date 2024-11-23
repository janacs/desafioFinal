import styled from "styled-components";

// Fundo principal da seção Novidades
export const FundoDaNovidades = styled.section`
  display: flex;
  background-color: #1e3932; /* Cor de fundo para o fundo da seção */
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  /* Ajustes para dispositivos menores */
  @media (max-width: 780px) {
    flex-direction: column; /* Alinha os elementos verticalmente */
    overflow-y: auto; /* Permite rolagem vertical */
    justify-content: flex-start; /* Alinha os itens ao topo */
    gap: 30px; /* Espaço entre os itens */
  }

  /* Ajustes para telas de tamanho médio */
  @media (max-width: 1180px) {
    overflow-y: auto;

    h2 {
      font-size: 3rem; /* Ajusta o tamanho do título em telas médias */
    }
  }
`;

// Estilo para os textos da seção
export const TextoDaNovidades = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%; /* Largura do container de texto */
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;

  /* Ajustes para telas médias */
  @media (max-width: 1180px) {
    width: 60%; /* Aumenta a largura do texto em telas médias */
    margin-left: 50px; /* Adiciona margem à esquerda */
  }

  /* Ajustes para telas pequenas */
  @media (max-width: 780px) {
    width: 90%; /* Largura do texto em telas pequenas */
    height: auto;
    margin: 0;

    h3 {
      font-size: 0.8rem; /* Tamanho do subtítulo */
      margin-top: 100px; /* Margem superior */
      margin-left: 16px; /* Margem à esquerda */
    }

    h2 {
      font-size: 1.5rem; /* Tamanho do título */
      margin-top: 10px;
      margin-left: 16px;
    }

    p {
      width: 90%;
      font-size: 0.9rem; /* Tamanho da fonte */
      margin: 24px 0;
    }

    button {
      width: 90%;
      margin-bottom: 20px;
      margin-top: 20px;
      align-self: center; /* Centraliza o botão */
    }
  }

  h3 {
    align-self: flex-start;
    font-family: "Inter", serif;
    font-weight: 600;
    font-size: 1rem;
  }

  h2 {
    align-self: flex-start;
    font-weight: 400;
    font-size: 4rem;
  }

  p {
    margin-bottom: 20px;
    font-weight: 400;
  }
`;

// Caixa da imagem do café
export const ImagemDoCafe = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%; /* Largura da imagem */
  min-height: 100%;
  justify-content: center;
  align-items: center;

  /* Ajustes para telas médias */
  @media (max-width: 1180px) {
    width: 30%; /* Reduz a largura da caixa */
  }

  /* Ajustes para telas pequenas */
  @media (max-width: 780px) {
    width: 200px; /* Largura fixa */
    min-height: 180px; /* Altura mínima */
    justify-content: flex-start; /* Alinha a imagem ao topo */

    img {
      width: 100%; /* Faz a imagem ocupar toda a largura disponível */
      margin-top: 20px; /* Margem superior */
    }
  }

  img {
    width: 60%; /* Largura da imagem na tela padrão */
  }
`;
